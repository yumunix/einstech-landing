// 다운로드 키 관리 (사내망 + 관리자 비밀번호). 신청 목록·집계 조회, 키 발급·연장·취소.
// 자료실과 같은 관리자 비밀번호(checkAdmin)를 쓴다.
import { checkDownloadsAdmin as checkAdmin, readRequests, writeRequests, summarize, isValidId, cleanText, signLicense, PLANS } from "@/lib/downloads";
import { privateKeyAvailable } from "@/lib/licensing";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const deny = (c) => Response.json({ error: c.error }, { status: c.status });

export async function GET(request) {
  const c = await checkAdmin(request);
  if (!c.ok) return deny(c);
  const items = await readRequests();
  items.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
  return Response.json({ items, summary: summarize(items), plans: PLANS, canIssue: await privateKeyAvailable() });
}

function tenantFromCompany(company, id) {
  const base = String(company || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 32);
  return base || `t-${id}`;
}

export async function POST(request) {
  const c = await checkAdmin(request);
  if (!c.ok) return deny(c);
  const body = await request.json().catch(() => ({}));
  const action = body.action;
  if (!isValidId(body.id)) return Response.json({ error: "잘못된 요청입니다." }, { status: 400 });
  const items = await readRequests();
  const it = items.find((i) => i.id === body.id);
  if (!it) return Response.json({ error: "신청을 찾을 수 없습니다." }, { status: 404 });

  if (action === "revoke") {
    it.status = "revoked";
    it.history.push({ at: new Date().toISOString(), action: "revoke" });
    await writeRequests(items);
    return Response.json({ ok: true, item: it });
  }

  if (action === "issue" || action === "extend") {
    if (!(await privateKeyAvailable())) return Response.json({ error: "서명 개인키가 서버에 없어 키를 발급할 수 없습니다." }, { status: 503 });
    const planKey = PLANS[body.plan] ? body.plan : it.plan;
    const preset = PLANS[planKey] || PLANS.trial;
    const days = Math.max(1, Math.min(3660, parseInt(body.days, 10) || preset.days));
    const agentLimit = Math.max(1, Math.min(100000, parseInt(body.agentLimit, 10) || it.hostCount || 5));
    if (body.installationId !== undefined) it.installationId = cleanText(body.installationId, 120);

    const { token, payload } = await signLicense({
      tenant_code: tenantFromCompany(it.company, it.id),
      installation_id: it.installationId || "",
      plan: preset.plan,
      days,
      agent_limit: agentLimit,
      email: it.email,
      company: it.company,
    });

    it.status = "issued";
    it.plan = planKey;
    it.keyId = payload.license_id;
    it.issuedAt = payload.issued_at;
    it.expiresAt = payload.expires_at;
    it.agentLimit = agentLimit;
    it.history.push({ at: payload.issued_at, action, plan: planKey, days, expiresAt: payload.expires_at, keyId: payload.license_id });
    await writeRequests(items);
    // 토큰은 이 응답으로만 돌려준다(기록에는 keyId 만 남긴다). 관리자가 고객에게 메일로 전달.
    return Response.json({ ok: true, item: it, token, expiresAt: payload.expires_at });
  }

  return Response.json({ error: "알 수 없는 동작입니다." }, { status: 400 });
}

export async function DELETE(request) {
  const c = await checkAdmin(request);
  if (!c.ok) return deny(c);
  const id = new URL(request.url).searchParams.get("id");
  if (!isValidId(id)) return Response.json({ error: "잘못된 요청입니다." }, { status: 400 });
  const items = await readRequests();
  if (!items.some((i) => i.id === id)) return Response.json({ error: "신청을 찾을 수 없습니다." }, { status: 404 });
  await writeRequests(items.filter((i) => i.id !== id));
  return Response.json({ ok: true });
}
