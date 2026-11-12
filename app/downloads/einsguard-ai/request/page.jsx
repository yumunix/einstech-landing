import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import { createPageMetadata } from "@/lib/seo";
import RequestForm from "./RequestForm";

export const metadata = createPageMetadata({
  path: "/downloads/einsguard-ai/request",
  title: "EINSGUARD AI 다운로드 키 신청 | EINSTECH",
  description: "EINSGUARD AI 설치파일 다운로드 키를 신청합니다. 담당자 확인 후 라이선스 키를 이메일로 보내드립니다. 기본 15일 체험, Acronis 구매 고객은 1년 무상.",
});

export default function RequestPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50 pt-16 text-slate-900">
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-page px-6 lg:px-12">
            <Badge color="acid">DOWNLOAD KEY</Badge>
            <h1 className="mt-6 font-display text-4xl font-black md:text-5xl">다운로드 키 신청</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
              신청해 주시면 담당자가 확인한 뒤 <b>라이선스 키를 회신 이메일로</b> 보내드립니다.
              받으신 키를 다운로드 센터에 입력하면 설치파일을 내려받을 수 있습니다. 기본 <b>15일 체험</b>이며,
              Acronis를 유상 구매하신 고객은 <b>1년 무상</b> 사용권으로 발급됩니다.
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto grid max-w-page gap-10 px-6 lg:grid-cols-3 lg:px-12">
            <div className="rounded-[24px] border border-slate-300 bg-white p-7 shadow-sm md:p-10 lg:col-span-2">
              <RequestForm />
            </div>
            <aside className="space-y-5">
              <div className="rounded-[20px] border border-slate-300 bg-white p-6">
                <div className="font-black">처리 절차</div>
                <ol className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>1. 다운로드 키 신청서 전송</li>
                  <li>2. 담당자가 고객·구매 정보 확인</li>
                  <li>3. 사용 기간이 담긴 라이선스 키 발급</li>
                  <li>4. 회신 이메일로 키 전달</li>
                  <li>5. 다운로드 센터에 키 입력 → 설치파일 다운로드</li>
                </ol>
              </div>
              <div className="rounded-[20px] border border-emerald-300 bg-emerald-50 p-6">
                <div className="font-black text-emerald-900">Acronis 1년 무상</div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Acronis Cyber Protect를 유상 구매하신 고객은 1년 무상 사용권으로 발급됩니다. 신청 시 Acronis 주문·구매 정보를 적어주세요.
                  <a href="/events/acronis-einsguard" className="ml-1 font-bold underline">이벤트 안내 →</a>
                </p>
              </div>
              <div className="rounded-[20px] border border-amber-400 bg-amber-50 p-6">
                <div className="font-black">직접 문의</div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  <a className="font-bold underline" href="tel:+82-31-893-0015">031-893-0015</a> 또는
                  <a className="font-bold underline" href="mailto:sungil.yum@einstech.kr"> sungil.yum@einstech.kr</a>
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
