import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import { createPageMetadata } from "@/lib/seo";

const EVENT = {
  period: "2026년 11월 6일 ~ 2027년 6월 30일",
  minCopies: 10,
  agentLimit: 10,
};

export const metadata = createPageMetadata({
  path: "/events/acronis-einsguard",
  title: "Acronis 서버 10카피 구매 시 EINSGUARD AI 1년 무상 | EINSTECH 이벤트",
  description:
    "Acronis Cyber Protect 서버 라이선스 10카피 이상 구매 고객에게 기업용 AI 보안·관리 솔루션 EINSGUARD AI 1년 사용권을 무상으로 제공합니다.",
  keywords: ["Acronis 이벤트", "Acronis Cyber Protect", "아크로니스 프로모션", "EINSGUARD AI", "AI 보안", "백업 보안"],
});

const benefits = [
  { k: "백업·복구", t: "Acronis Cyber Protect", d: "서버 백업, 안티랜섬웨어, 이뮤터블 백업과 복구를 하나의 에이전트로 운영합니다." },
  { k: "AI 사용 보안", t: "EINSGUARD AI 1년 무상", d: "Claude Code·Codex·Gemini CLI 등 사내 AI 도구 사용 현황, 민감정보 유출 시도, 승인·차단 이력을 온프레미스로 관리합니다." },
  { k: "통합 지원", t: "아인스테크 기술지원", d: "Acronis 구축과 EINSGUARD AI 관리 서버 설치·초기 정책 설정을 한 번에 상담해 드립니다." },
];

const steps = [
  ["01", "상담 신청", "아래 버튼으로 이벤트 상담을 신청합니다."],
  ["02", "견적·구매", `Acronis 서버 라이선스 ${EVENT.minCopies}카피 이상을 아인스테크를 통해 구매합니다.`],
  ["03", "사용권 발급", "구매 확인 후 EINSGUARD AI 1년 사용권을 발급합니다."],
  ["04", "설치·운영", "관리 서버를 설치하고 Agent를 등록해 바로 사용합니다."],
];

const notes = [
  `Acronis Cyber Protect 서버(Server) 라이선스를 ${EVENT.minCopies}카피 이상 한 번에 신규 구매하는 고객에 한합니다.`,
  `EINSGUARD AI 사용권은 발급일로부터 1년, 관리 대상 장비 최대 ${EVENT.agentLimit}대입니다.`,
  "1년 사용 후에는 유상 연장 또는 사용 종료를 선택할 수 있으며, 자동으로 비용이 청구되지 않습니다.",
  "다른 프로모션과 중복 적용되지 않으며, 사용권은 현금으로 교환하거나 다른 회사에 양도할 수 없습니다.",
  "이벤트 내용은 당사 사정에 따라 변경되거나 조기 종료될 수 있습니다.",
];

export default function AcronisEinsguardEvent() {
  return (
    <>
      <Header />
      <main className="bg-slate-50 pt-16 text-slate-900">
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,.25),transparent_40%)]"></div>
          <div className="relative mx-auto max-w-page px-6 lg:px-12">
            <Badge color="acid">EVENT · {EVENT.period}</Badge>
            <h1 className="mt-6 font-display text-4xl font-black leading-tight md:text-6xl">
              Acronis 서버 {EVENT.minCopies}카피 구매하면
              <br />
              <span className="text-emerald-300">EINSGUARD AI 1년 무상</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70">
              백업과 랜섬웨어 대비는 Acronis로, 사내 AI 도구 사용 보안은 EINSGUARD AI로.
              Acronis Cyber Protect 서버 라이선스를 {EVENT.minCopies}카피 이상 구매하시면
              기업용 AI 보안·관리 솔루션 EINSGUARD AI를 1년간 무상으로 제공합니다.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="/contact?subject=Acronis%2010%EC%B9%B4%ED%94%BC%20%2B%20EINSGUARD%20AI%201%EB%85%84%20%EB%AC%B4%EC%83%81%20%EC%9D%B4%EB%B2%A4%ED%8A%B8" className="rounded-2xl bg-emerald px-8 py-4 font-black text-slate-950">이벤트 상담 신청</a>
              <a href="/einsguard-ai" className="rounded-2xl border border-white/20 px-8 py-4 font-black text-white">EINSGUARD AI 알아보기</a>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-page px-6 lg:px-12">
            <h2 className="font-display text-3xl font-black">이벤트 혜택</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {benefits.map((b) => (
                <article key={b.t} className="rounded-[24px] border border-slate-300 bg-white p-7 shadow-sm">
                  <div className="font-mono text-[11px] font-black tracking-widest text-blue-700">{b.k}</div>
                  <h3 className="mt-3 font-display text-2xl font-black">{b.t}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{b.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-page px-6 lg:px-12">
            <h2 className="font-display text-3xl font-black">참여 방법</h2>
            <ol className="mt-8 grid gap-6 md:grid-cols-4">
              {steps.map(([n, t, d]) => (
                <li key={n} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="font-mono text-sm font-black text-blue-700">{n}</div>
                  <div className="mt-2 text-lg font-black">{t}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-display text-3xl font-black">유의사항</h2>
            <dl className="mt-6 rounded-2xl border border-slate-300 bg-white p-6 text-sm">
              <div className="flex gap-4 border-b border-slate-200 pb-3"><dt className="w-24 shrink-0 font-black">이벤트 기간</dt><dd>{EVENT.period}</dd></div>
              <div className="flex gap-4 pt-3"><dt className="w-24 shrink-0 font-black">대상</dt><dd>Acronis Cyber Protect 서버 라이선스 {EVENT.minCopies}카피 이상 구매 고객</dd></div>
            </dl>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
              {notes.map((n) => <li key={n}>· {n}</li>)}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="/contact?subject=Acronis%2010%EC%B9%B4%ED%94%BC%20%2B%20EINSGUARD%20AI%201%EB%85%84%20%EB%AC%B4%EC%83%81%20%EC%9D%B4%EB%B2%A4%ED%8A%B8" className="rounded-xl bg-slate-950 px-6 py-4 text-center font-black text-white">이벤트 상담 신청</a>
              <a href="/backup-modernization" className="rounded-xl border border-slate-300 bg-white px-6 py-4 text-center font-black">Acronis 전환 서비스</a>
              <a href="/downloads/einsguard-ai" className="rounded-xl border border-slate-300 bg-white px-6 py-4 text-center font-black">EINSGUARD AI 체험판</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
