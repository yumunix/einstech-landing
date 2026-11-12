// EINSGUARD AI 라이선스 키 — Ed25519 서명 토큰.
// 형식은 ai-sentinel-license/issue-license.cjs 와 동일하다: base64url(payload).base64url(signature)
// 같은 개인키로 서명하므로, 여기서 발급한 키를 제품(관리 서버)이 그대로 검증할 수 있다.
//
//   payload = { license_id, tenant_code, installation_id, plan, expires_at, agent_limit, issued_at, ... }
//
// 개인키는 서버(발급 전용)에만 있으면 되고, 검증은 아래 공개키로 한다.
import crypto from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";

// license-private.pem 에서 뽑은 공개키(SPKI). 검증은 개인키 없이도 된다.
export const LICENSE_PUBLIC_KEY_PEM =
  process.env.LICENSE_PUBLIC_KEY_PEM ||
  "-----BEGIN PUBLIC KEY-----\nMCowBQYDK2VwAyEATRyokS4PGs+k9Irgd6UQVzzHpvHFmFO3zqT89Yc3f9I=\n-----END PUBLIC KEY-----\n";

export const LICENSE_PRIVATE_KEY_PATH =
  process.env.AI_SENTINEL_LICENSE_PRIVATE_KEY ||
  path.join(process.env.HOME || "/home/ai", ".config", "ai-sentinel", "license-private.pem");

export const PLANS = {
  trial: { label: "15일 체험", days: 15, plan: "trial" },
  "acronis-1y": { label: "Acronis 1년 무상", days: 365, plan: "acronis" },
  paid: { label: "유상 라이선스", days: 365, plan: "paid" },
};

function b64u(buf) { return Buffer.from(buf).toString("base64url"); }

let cachedPrivateKey = null;
async function loadPrivateKey() {
  if (cachedPrivateKey) return cachedPrivateKey;
  const pem = await fs.readFile(/*turbopackIgnore: true*/ LICENSE_PRIVATE_KEY_PATH);
  cachedPrivateKey = crypto.createPrivateKey(pem);
  return cachedPrivateKey;
}

export async function privateKeyAvailable() {
  try { await fs.access(LICENSE_PRIVATE_KEY_PATH); return true; } catch { return false; }
}

// 유효기간을 days 기준으로 계산해 서명 키 한 줄을 돌려준다.
export async function signLicense({ tenant_code, installation_id, plan = "trial", days, agent_limit = 5, email, company, extra = {} }) {
  const key = await loadPrivateKey();
  const now = Date.now();
  const expires = new Date(now + Math.max(1, Number(days) || 15) * 86400000);
  const payload = {
    license_id: crypto.randomUUID(),
    tenant_code: String(tenant_code || "trial"),
    installation_id: String(installation_id || ""),
    plan,
    expires_at: expires.toISOString(),
    agent_limit: Math.max(1, Number(agent_limit) || 5),
    issued_at: new Date(now).toISOString(),
    email: email || undefined,
    company: company || undefined,
    ...extra,
  };
  const bytes = Buffer.from(JSON.stringify(payload));
  const signature = crypto.sign(null, bytes, key);
  return { token: `${b64u(bytes)}.${b64u(signature)}`, payload };
}

// 키 문자열을 검증한다. { ok, payload, reason }
export function verifyLicense(token) {
  if (typeof token !== "string" || !token.includes(".")) return { ok: false, reason: "형식 오류" };
  const [p, s] = token.trim().split(".");
  if (!p || !s) return { ok: false, reason: "형식 오류" };
  let bytes, sig;
  try { bytes = Buffer.from(p, "base64url"); sig = Buffer.from(s, "base64url"); } catch { return { ok: false, reason: "형식 오류" }; }
  let valid = false;
  try { valid = crypto.verify(null, bytes, LICENSE_PUBLIC_KEY_PEM, sig); } catch { return { ok: false, reason: "서명 오류" }; }
  if (!valid) return { ok: false, reason: "서명이 올바르지 않은 키입니다." };
  let payload;
  try { payload = JSON.parse(bytes.toString("utf8")); } catch { return { ok: false, reason: "내용 오류" }; }
  const expMs = Date.parse(payload.expires_at || "");
  const expired = Number.isFinite(expMs) && expMs <= Date.now();
  return { ok: true, payload, expired };
}
