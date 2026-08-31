import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import { createPageMetadata } from "@/lib/seo";
import RemovalRequestForm from "./RemovalRequestForm";

export const metadata = createPageMetadata({
  path: "/downloads/einsguard-ai/removal-request",
  title: "EINSGUARD AI 에이전트 제거 요청 | EINSTECH",
  description: "설치된 EINSGUARD AI 에이전트 제거를 요청합니다. 담당자가 관리자 승인이 반영된 전용 제거 도구를 이메일로 전달합니다.",
});

export default function RemovalRequestPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50 pt-16 text-slate-900">
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-page px-6 lg:px-12">
            <Badge color="acid">AGENT REMOVAL</Badge>
            <h1 className="mt-6 font-display text-4xl font-black md:text-5xl">에이전트 제거 요청</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
              보안을 위해 EINSGUARD AI 에이전트는 홈페이지에서 직접 제거 도구를 받을 수 없습니다.
              아래 양식을 보내주시면 담당자가 장비 등록 상태를 확인하고, <b>관리자 승인이 반영된 전용 제거 도구와
              실행 방법</b>을 회신 이메일로 전달합니다. 전달받은 도구를 관리자 권한으로 실행하면 에이전트가 제거됩니다.
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto grid max-w-page gap-10 px-6 lg:grid-cols-3 lg:px-12">
            <div className="lg:col-span-2 rounded-[24px] border border-slate-300 bg-white p-7 shadow-sm md:p-10">
              <RemovalRequestForm />
            </div>
            <aside className="space-y-5">
              <div className="rounded-[20px] border border-slate-300 bg-white p-6">
                <div className="font-black">처리 절차</div>
                <ol className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>1. 제거 요청 양식 전송</li>
                  <li>2. 담당자가 장비·계약 상태 확인</li>
                  <li>3. 관리 서버에서 제거 승인 및 전용 도구 발급</li>
                  <li>4. 회신 이메일로 제거 도구·실행 방법 전달</li>
                  <li>5. 고객사에서 관리자 권한으로 실행 → 제거 완료</li>
                </ol>
              </div>
              <div className="rounded-[20px] border border-amber-400 bg-amber-50 p-6">
                <div className="font-black">직접 문의</div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  긴급하거나 대량 제거가 필요하면 <a className="font-bold underline" href="tel:+82-31-893-0015">031-893-0015</a> 또는
                  <a className="font-bold underline" href="mailto:sungil.yum@einstech.kr"> sungil.yum@einstech.kr</a>로 연락해 주세요.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
