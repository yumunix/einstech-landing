// 설치파일 스트리밍 — 인가 토큰(t)이 있어야 받을 수 있다. 공개 URL 은 없다.
import { createReadStream, promises as fs } from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import { FILES_DIR, packageBySlug, verifyGrant, recordDownload } from "@/lib/downloads";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request, { params }) {
  const { slug } = await params;
  const url = new URL(request.url);
  const wantSha = url.searchParams.get("sha") === "1";
  const p = packageBySlug(slug);
  if (!p) return new Response("Not found", { status: 404 });

  const grant = verifyGrant(url.searchParams.get("t") || "", slug);
  if (!grant) return new Response("유효한 다운로드 키가 필요합니다.", { status: 403 });

  const target = wantSha ? `${p.file}.sha256` : p.file;
  const file = path.join(FILES_DIR, target);
  let stat;
  try { stat = await fs.stat(file); } catch { return new Response("파일을 준비 중입니다.", { status: 404 }); }

  if (!wantSha) recordDownload(grant.keyId, slug).catch(() => {});

  return new Response(Readable.toWeb(createReadStream(file)), {
    headers: {
      "Content-Type": wantSha ? "text/plain; charset=utf-8" : (p.type || "application/octet-stream"),
      "Content-Length": String(stat.size),
      "Content-Disposition": `attachment; filename="${target}"`,
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
