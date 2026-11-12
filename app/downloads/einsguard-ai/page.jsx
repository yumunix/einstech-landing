import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import { createPageMetadata } from "@/lib/seo";
import DownloadUnlock from "./DownloadUnlock";

export const metadata = createPageMetadata({
  path: "/downloads/einsguard-ai",
  title: "EINSGUARD AI 0.5.0 다운로드 | EINSTECH",
  description: "EINSGUARD AI 설치파일은 담당자가 이메일로 보내드린 라이선스 키가 있어야 받을 수 있습니다. 15일 체험과 Acronis 구매 고객 1년 무상 사용권을 제공합니다.",
});

export default function DownloadPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50 pt-16 text-slate-900">
        <section className="bg-slate-950 py-24 text-white">
          <div className="mx-auto max-w-page px-6 lg:px-12">
            <Badge color="acid">DOWNLOAD CENTER</Badge>
            <h1 className="mt-6 font-display text-5xl font-black">EINSGUARD AI 0.5.0-trial</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
              보안을 위해 설치파일은 홈페이지에서 바로 받을 수 없습니다. 아래에서 다운로드 키를 신청하시면
              담당자가 확인 후 <b>라이선스 키를 이메일로</b> 보내드립니다. 받으신 키를 입력하면 설치파일을 내려받을 수 있습니다.
              키에는 사용 기간이 들어 있어 <b>기본 15일 체험</b>, <b>Acronis 구매 고객은 1년 무상</b>으로 적용됩니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/downloads/einsguard-ai/request" className="rounded-2xl bg-emerald px-7 py-4 font-black text-slate-950">다운로드 키 신청 (15일 체험)</a>
              <a href="/downloads/einsguard-ai/request?plan=acronis-1y" className="rounded-2xl border border-white/25 px-7 py-4 font-black text-white">Acronis 구매 고객 · 1년 무상 신청</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-page px-6 lg:px-12">
            <DownloadUnlock />

            <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
              <a href="/docs/einsguard-ai/admin" className="rounded-[20px] bg-slate-800 p-7 text-white">
                <div className="text-xs font-bold text-slate-300">ADMIN OPERATIONS</div>
                <div className="mt-2 text-2xl font-black">관리자 운영 매뉴얼 →</div>
              </a>
              <a href="/docs/einsguard-ai/install" className="rounded-[20px] bg-blue-800 p-7 text-white">
                <div className="text-xs font-bold text-blue-200">WINDOWS · LINUX · MACOS</div>
                <div className="mt-2 text-2xl font-black">설치·설정 매뉴얼 →</div>
              </a>
              <div className="rounded-[20px] border border-amber-400 bg-amber-50 p-7">
                <div className="font-black">원문 기본 미저장</div>
                <p className="mt-2 text-sm leading-6 text-slate-700">내용은 내부 LLM 판정 중에만 일시 사용하며 기본 정책에서는 데이터베이스에 저장하지 않습니다.</p>
              </div>
              <a href="/downloads/einsguard-ai/removal-request" className="rounded-[20px] border border-amber-400 bg-amber-50 p-7 transition hover:bg-amber-100">
                <div className="font-black">에이전트 제거 요청 →</div>
                <p className="mt-2 text-sm leading-6 text-slate-700">제거 도구는 홈페이지에서 받을 수 없습니다. 요청을 보내면 담당자가 관리자 승인이 반영된 전용 제거 도구를 이메일로 전달합니다.</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
