// 다운로드 키 신청 접수 (공개). 기록만 남기고, 관리자가 승인·발송한다.
import { createRequest } from "@/lib/downloads";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  if (body?._gotcha) return Response.json({ ok: true }); // 봇 트랩
  const email = String(body.email || "").trim();
  if (!body.company || !body.name || !/.+@.+\..+/.test(email)) {
    return Response.json({ error: "회사명·담당자·올바른 이메일을 입력해 주세요." }, { status: 400 });
  }
  if (!body.privacy_consent) return Response.json({ error: "개인정보 수집·이용 동의가 필요합니다." }, { status: 400 });
  const item = await createRequest(body);
  return Response.json({ ok: true, id: item.id });
}
