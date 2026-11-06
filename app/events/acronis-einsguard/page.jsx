import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import { createPageMetadata } from "@/lib/seo";

const EVENT = {
  period: "2026년 11월 6일 ~ 2027년 6월 30일",
  serverUsers: 5,
};

const INQUIRY = "/contact?subject=" + encodeURIComponent("Acronis 구매 시 EINSGUARD AI 1년 무상 이벤트");

export const metadata = createPageMetadata({
  path: "/events/acronis-einsguard",
  title: "Acronis 구매 시 EINSGUARD AI 1년 무상 | EINSTECH 이벤트",
  description:
    "Acronis Cyber Protect Workstation 구매 시 같은 수량, Server 구매 시 서버 1대당 5 User의 EINSGUARD AI 1년 사용권을 무상으로 제공합니다.",
  keywords: ["Acronis 이벤트", "Acronis Cyber Protect", "아크로니스 프로모션", "EINSGUARD AI", "AI 보안", "백업 보안"],
});

const offers = [
  {
    k: "WORKSTATION",
    t: "Acronis Workstation 구매 시",
    big: "구매 수량만큼",
    d: "Acronis Cyber Protect Workstation을 구매하신 수량과 같은 수의 EINSGUARD AI Workstation 사용권을 1년간 무상 제공합니다.",
    ex: "예) Workstation 20카피 구매 → EINSGUARD AI 20 User 1년 무상",
  },
  {
    k: "SERVER",
    t: "Acronis Server 구매 시",
    big: `서버 1대당 ${EVENT.serverUsers} User`,
    d: `Acronis Cyber Protect Server 1카피당 EINSGUARD AI ${EVENT.serverUsers} User 사용권을 1년간 무상 제공합니다.`,
    ex: `예) Server 3카피 구매 → EINSGUARD AI ${EVENT.serverUsers * 3} User 1년 무상`,
  },
];

const steps = [
  ["01", "상담 신청", "아래 버튼으로 이벤트 상담을 신청합니다."],
  ["02", "견적·구매", "Acronis Workstation 또는 Server 라이선스를 아인스테크를 통해 구매합니다."],
  ["03", "사용권 발급", "구매 수량에 맞춰 EINSGUARD AI 1년 사용권을 발급합니다."],
  ["04", "설치·운영", "관리 서버 설치와 Agent 등록 후 바로 사용합니다. 설치·기술지원은 별도 견적입니다."],
];

const notes = [
  "Acronis Cyber Protect Workstation·Server 라이선스를 아인스테크를 통해 신규 구매하는 고객에 한합니다.",
  "EINSGUARD AI 무상 사용권은 발급일로부터 1년이며, 1 User는 Agent를 설치하는 PC·서버 1대를 기준으로 합니다.",
  "EINSGUARD AI 설치비와 기술지원료는 무상 제공 범위에 포함되지 않으며 별도로 청구됩니다.",
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
              Acronis 구매하면
              <br />
              <span className="text-emerald-300">EINSGUARD AI 1년 무상</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70">
              백업과 랜섬웨어 대비는 Acronis로, 사내 AI 도구 사용 보안은 EINSGUARD AI로.
              Acronis Workstation은 구매 수량만큼, Acronis Server는 서버 1대당 {EVENT.serverUsers} User의
              EINSGUARD AI 사용권을 1년간 무상으로 드립니다.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={INQUIRY} className="rounded-2xl bg-emerald px-8 py-4 font-black text-slate-950">이벤트 상담 신청</a>
              <a href="/einsguard-ai" className="rounded-2xl border border-white/20 px-8 py-4 font-black text-white">EINSGUARD AI 알아보기</a>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-page px-6 lg:px-12">
            <h2 className="font-display text-3xl font-black">이벤트 혜택</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {offers.map((o) => (
                <article key={o.k} className="rounded-[24px] border border-slate-300 bg-white p-8 shadow-sm">
                  <div className="font-mono text-[11px] font-black tracking-widest text-blue-700">{o.k}</div>
                  <h3 className="mt-3 font-display text-2xl font-black">{o.t}</h3>
                  <div className="mt-4 text-3xl font-black text-emerald-700">EINSGUARD AI {o.big}</div>
                  <div className="mt-1 text-sm font-bold text-slate-500">1년 무상 사용권</div>
                  <p className="mt-5 text-sm leading-7 text-slate-600">{o.d}</p>
                  <p className="mt-4 rounded-xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-700">{o.ex}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 rounded-xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm font-bold text-amber-900">
              EINSGUARD AI 설치비와 기술지원료는 별도입니다.
            </p>
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
              <div className="flex gap-4 border-b border-slate-200 py-3"><dt className="w-24 shrink-0 font-black">Workstation</dt><dd>구매 수량만큼 EINSGUARD AI 1년 무상</dd></div>
              <div className="flex gap-4 border-b border-slate-200 py-3"><dt className="w-24 shrink-0 font-black">Server</dt><dd>서버 1대당 EINSGUARD AI {EVENT.serverUsers} User 1년 무상</dd></div>
              <div className="flex gap-4 pt-3"><dt className="w-24 shrink-0 font-black">별도 비용</dt><dd>EINSGUARD AI 설치비, 기술지원료</dd></div>
            </dl>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
              {notes.map((n) => <li key={n}>· {n}</li>)}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={INQUIRY} className="rounded-xl bg-slate-950 px-6 py-4 text-center font-black text-white">이벤트 상담 신청</a>
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
