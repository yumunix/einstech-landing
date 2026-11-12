// EINSGUARD AI 다운로드 센터 — 설치파일은 홈페이지에서 직접 받을 수 없고, 관리자가 승인해
// 이메일로 보낸 "라이선스 키"가 있어야 받을 수 있다. 발급 기록(누가 몇 명 받아 갔는지)과
// 키 재발급·연장도 여기서 관리한다.
//
// 설치파일과 발급기록은 저장소(git) 밖에 둔다. 운영 서버: $HOME/einstech-downloads
//   files/            설치파일 바이너리 (공개 URL 없음, API 로만 스트리밍)
//   requests.json     신청·발급 기록
import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { signLicense, verifyLicense, PLANS } from "@/lib/licensing";

const HOME = process.env.HOME || "/home/ai";
export const DOWNLOADS_DIR = process.env.DOWNLOADS_DIR || path.join(HOME, "einstech-downloads");
export const FILES_DIR = path.join(DOWNLOADS_DIR, "files");
const MANIFEST = path.join(DOWNLOADS_DIR, "requests.json");

// 받을 수 있는 설치파일. plan 에 맞는 패키지만 노출한다.
// server/windows/linux/macos 는 trial·acronis·paid 모두 공통.
export const PACKAGES = [
  { slug: "server", title: "AI GUARD 관리 서버", platform: "LINUX SERVER · 0.5.0-TRIAL", file: "einsguard-ai-0.5.0-trial-linux.tar.gz", type: "application/gzip",
    items: ["Linux x86_64·arm64", "새 관리 콘솔 화면(흰색 메뉴·아이콘)", "Ollama·OpenAI 호환 내부 LLM", "라이선스 키로 사용 기간 적용"] },
  { slug: "windows", title: "Windows Agent", platform: "WINDOWS CLIENT · 1.4.0", file: "EINSGUARD-AI-Windows-Agent-1.4.0.exe", type: "application/vnd.microsoft.portable-executable",
    items: ["서버 주소만 입력 · 승인 등록", "클립보드·CLI·CLI 첨부 파일 DLP", "Claude·Codex 실행 정책", "난독화 빌드(역설계 방지)"] },
  { slug: "linux", title: "Linux Agent", platform: "LINUX CLIENT · 1.4.0", file: "einsguard-ai-agent-1.4.0-linux.tar.gz", type: "application/gzip",
    items: ["서버 주소만 입력 · 승인 등록", "CLI 첨부 텍스트 파일 검사", "로컬 사용자 추가·삭제 추적", "난독화 빌드(역설계 방지)"] },
  { slug: "macos", title: "macOS Agent", platform: "MACOS CLIENT · 1.4.0", file: "einsguard-ai-agent-1.4.0-macos.tar.gz", type: "application/gzip",
    items: ["macOS 13 이상", "서버 주소만 입력 · 승인 등록", "CLI 첨부 텍스트 파일 검사", "난독화 빌드(역설계 방지)"] },
];

export function packageBySlug(slug) { return PACKAGES.find((p) => p.slug === slug); }

// ---- 발급 기록 ----------------------------------------------------------
export async function readRequests() {
  try {
    const data = JSON.parse(await fs.readFile(MANIFEST, "utf8"));
    return Array.isArray(data.items) ? data.items : [];
  } catch (e) {
    if (e.code === "ENOENT") return [];
    throw e;
  }
}

export async function writeRequests(items) {
  await fs.mkdir(DOWNLOADS_DIR, { recursive: true });
  const tmp = `${MANIFEST}.${process.pid}.tmp`;
  await fs.writeFile(tmp, JSON.stringify({ items }, null, 2));
  await fs.rename(tmp, MANIFEST);
}

export function newId() { return `${Date.now().toString(36)}${crypto.randomBytes(4).toString("hex")}`; }
export function isValidId(id) { return typeof id === "string" && /^[a-z0-9]{8,40}$/.test(id); }
export function cleanText(v, max = 200) { return String(v ?? "").replace(/[\u0000-\u001f]/g, " ").trim().slice(0, max); }

// 신청 접수 (공개). 상태 pending 으로 기록만 한다.
export async function createRequest(data) {
  const planKey = PLANS[data.plan] ? data.plan : "trial";
  const item = {
    id: newId(),
    status: "pending", // pending | issued | revoked
    plan: planKey,
    company: cleanText(data.company, 120),
    name: cleanText(data.name, 80),
    email: cleanText(data.email, 160),
    phone: cleanText(data.phone, 40),
    hostCount: Math.max(0, Math.min(100000, parseInt(data.hostCount, 10) || 0)),
    acronisOrder: cleanText(data.acronisOrder, 120),
    note: cleanText(data.note, 1000),
    installationId: cleanText(data.installationId, 120),
    createdAt: new Date().toISOString(),
    issuedAt: null,
    expiresAt: null,
    keyId: null,
    downloads: 0,          // 설치파일 내려받은 횟수
    lastDownloadAt: null,
    history: [],           // 재발급·연장 기록
  };
  const items = await readRequests();
  items.push(item);
  await writeRequests(items);
  return item;
}

// 집계 — 몇 명이 신청/발급/실제 다운로드했는지
export function summarize(items) {
  const issued = items.filter((i) => i.status === "issued");
  return {
    total: items.length,
    pending: items.filter((i) => i.status === "pending").length,
    issued: issued.length,
    revoked: items.filter((i) => i.status === "revoked").length,
    downloaded: items.filter((i) => (i.downloads || 0) > 0).length,
    expired: issued.filter((i) => i.expiresAt && Date.parse(i.expiresAt) <= Date.now()).length,
    byPlan: Object.keys(PLANS).reduce((a, p) => ((a[p] = items.filter((i) => i.plan === p).length), a), {}),
  };
}

// ---- 다운로드 인가 토큰 (키 검증 통과 후 짧게 유효) ----------------------
// 설치파일 라우트는 이 토큰이 있어야 스트리밍한다. HMAC 이라 서버 상태가 필요 없다.
function grantSecret() {
  return process.env.DOWNLOADS_GRANT_SECRET || process.env.RESOURCES_ADMIN_KEY || "einsguard-downloads-grant";
}
export function makeGrant(slug, keyId, ttlMs = 30 * 60 * 1000) {
  const exp = Date.now() + ttlMs;
  const body = `${slug}:${keyId || "-"}:${exp}`;
  const mac = crypto.createHmac("sha256", grantSecret()).update(body).digest("base64url");
  return `${Buffer.from(body).toString("base64url")}.${mac}`;
}
export function verifyGrant(token, slug) {
  if (typeof token !== "string" || !token.includes(".")) return null;
  const [b, mac] = token.split(".");
  let body;
  try { body = Buffer.from(b, "base64url").toString("utf8"); } catch { return null; }
  const expect = crypto.createHmac("sha256", grantSecret()).update(body).digest("base64url");
  const a = Buffer.from(mac || ""), e = Buffer.from(expect);
  if (a.length !== e.length || !crypto.timingSafeEqual(a, e)) return null;
  const [gslug, keyId, exp] = body.split(":");
  if (gslug !== slug) return null;
  if (!(Number(exp) > Date.now())) return null;
  return { slug: gslug, keyId };
}

// 키를 검증하고, 받을 수 있는 패키지 목록과 인가 토큰을 돌려준다.
export function entitlementsForKey(token) {
  const v = verifyLicense(token);
  if (!v.ok) return { ok: false, reason: v.reason };
  if (v.expired) return { ok: false, reason: "사용 기간이 만료된 키입니다. 담당자에게 연장을 요청하세요.", payload: v.payload, expired: true };
  const keyId = v.payload.license_id || "-";
  const files = PACKAGES.map((p) => ({
    slug: p.slug, title: p.title, platform: p.platform, file: p.file, items: p.items,
    url: `/api/downloads/file/${p.slug}?t=${encodeURIComponent(makeGrant(p.slug, keyId))}`,
  }));
  return { ok: true, plan: v.payload.plan, expiresAt: v.payload.expires_at, company: v.payload.company || null, files };
}

export async function recordDownload(keyId, slug) {
  if (!keyId || keyId === "-") return;
  const items = await readRequests();
  const it = items.find((i) => i.keyId === keyId);
  if (!it) return;
  it.downloads = (it.downloads || 0) + 1;
  it.lastDownloadAt = new Date().toISOString();
  it.lastDownloadSlug = slug;
  await writeRequests(items);
}

// ---- 관리자 인증 (사내망 + 관리자 비밀번호) --------------------------------
// 자료실(/api/resources)과 같은 관리자 비밀번호를 쓴다: env RESOURCES_ADMIN_KEY,
// 또는 UI에서 바꾼 비밀번호(einstech-resources/admin.json 의 scrypt 해시).
// 의존성을 줄이려 여기서 자체 구현한다.
const RESOURCES_DIR = process.env.RESOURCES_DIR || path.join(HOME, "einstech-resources");
const ADMIN_FILE = path.join(RESOURCES_DIR, "admin.json");

function isPrivateIp(ip) {
  if (!ip) return false;
  const v = ip.replace(/^::ffff:/, "");
  return /^10\./.test(v) || /^192\.168\./.test(v) || /^172\.(1[6-9]|2\d|3[01])\./.test(v) || /^f[cd][0-9a-f]{2}:/i.test(v);
}
function safeEqual(a, b) {
  const x = Buffer.from(a), y = Buffer.from(b);
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}
async function readAdminHash() {
  try { return JSON.parse(await fs.readFile(/*turbopackIgnore: true*/ ADMIN_FILE, "utf8")); } catch { return null; }
}
async function verifyPassword(pw) {
  const stored = await readAdminHash();
  if (stored?.hash && stored?.salt) return safeEqual(crypto.scryptSync(pw, stored.salt, 64).toString("hex"), stored.hash);
  const key = process.env.RESOURCES_ADMIN_KEY || process.env.DOWNLOADS_ADMIN_KEY || "";
  return !!key && safeEqual(pw, key);
}

export async function checkDownloadsAdmin(request) {
  const realIp = request.headers.get("x-real-ip");
  const isDev = process.env.NODE_ENV !== "production";
  const cfIp = request.headers.get("cf-connecting-ip");
  const allowIps = (process.env.RESOURCES_ADMIN_ALLOW_IPS || "").split(",").map((s) => s.trim()).filter(Boolean);
  const viaOffice = !!cfIp && allowIps.includes(cfIp);
  if (cfIp && !viaOffice) return { ok: false, status: 403, error: "사무실 네트워크에서만 사용할 수 있습니다." };
  if (!isDev && !viaOffice && !isPrivateIp(realIp)) return { ok: false, status: 403, error: "사무실 네트워크에서만 사용할 수 있습니다." };
  if (!process.env.RESOURCES_ADMIN_KEY && !process.env.DOWNLOADS_ADMIN_KEY && !(await readAdminHash()))
    return { ok: false, status: 503, error: "관리자 비밀번호가 서버에 설정되지 않았습니다." };
  if (!(await verifyPassword(request.headers.get("x-admin-key") || ""))) {
    await new Promise((r) => setTimeout(r, 700));
    return { ok: false, status: 401, error: "관리자 비밀번호가 맞지 않습니다." };
  }
  return { ok: true };
}

export { signLicense, verifyLicense, PLANS };
