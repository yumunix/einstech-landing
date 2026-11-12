// 키 검증 (공개). 올바른 키면 받을 수 있는 설치파일 목록과 인가 토큰을 돌려준다.
import { promises as fs } from "node:fs";
import path from "node:path";
import { entitlementsForKey, FILES_DIR, packageBySlug } from "@/lib/downloads";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

async function readSha(slug) {
  const p = packageBySlug(slug);
  if (!p) return null;
  try {
    const txt = await fs.readFile(path.join(FILES_DIR, `${p.file}.sha256`), "utf8");
    return (txt.trim().split(/\s+/)[0] || "").toLowerCase() || null;
  } catch { return null; }
}

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const ent = entitlementsForKey(String(body.key || ""));
  if (!ent.ok) return Response.json({ error: ent.reason, expired: !!ent.expired }, { status: 400 });
  const files = await Promise.all(ent.files.map(async (f) => ({ ...f, sha: await readSha(f.slug) })));
  return Response.json({ ok: true, plan: ent.plan, expiresAt: ent.expiresAt, company: ent.company, files });
}
