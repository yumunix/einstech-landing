import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import SectionHeader from "@/components/ds/SectionHeader";
import { PrimaryButton } from "@/components/ds/Buttons";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/omada-cloud",
  title: "TP-Link Omada 클라우드 구독",
  description:
    "TP-Link Omada Cloud Controller 라이선스. 장치·카메라 1/3/5년 구독으로 중앙 관리 기능을 제공하며 아인스테크가 공급·설정합니다.",
  keywords: [
    "Omada 클라우드",
    "OCC 라이선스",
    "Omada Cloud Controller",
    "TP-Link 구독",
    "네트워크 중앙관리",
  ],
});

const plans = [
  {
    id: "device",
    name: "Omada 장치 라이선스",
    desc: "스위치·게이트웨이·AP 등 네트워크 장치 클라우드 관리",
    model: "OCC-LIC-1DEV",
    tiers: [
      { period: "1년", msrp: 19000 },
      { period: "3년", msrp: 49000 },
      { period: "5년", msrp: 79000 },
    ],
    tplink: "https://www.tp-link.com/kr/business-networking/omada-sdn-controller/occ-lic-1dev/",
  },
  {
    id: "camera",
    name: "VIGI 카메라 라이선스",
    desc: "VIGI IP 카메라 클라우드 중앙 관리 및 영상 스트리밍",
    model: "OCC-LIC-1CAM",
    tiers: [
      { period: "1년", msrp: 19000 },
      { period: "3년", msrp: 49000 },
      { period: "5년", msrp: 79000 },
    ],
    tplink: "https://www.tp-link.com/kr/business-networking/omada-sdn-controller/occ-lic-1cam/",
  },
];

export default function OmadaCloudPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="mx-auto w-full max-w-page items-center px-6 lg:px-12">
            <div className="max-w-2xl">
              <Badge color="cyan">CLOUD SUBSCRIPTION</Badge>
              <h1 className="mt-7 font-display text-[clamp(2.7rem,5vw,5rem)] font-black leading-[0.98] text-slate-900">
                Omada
                <span className="mt-2 block text-navy">클라우드 구독</span>
              </h1>
              <p className="mt-8 max-w-xl border-l-2 border-navy/30 pl-5 text-base leading-8 text-slate-600">
                Omada Cloud Controller 라이선스로 네트워크 장치와 VIGI 카메라를
                클라우드에서 중앙 관리하세요. 장치당 1/3/5년 구독으로 유연하게
                확장할 수 있으며 아인스테크가 구매·설정을 지원합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-24 lg:py-32">
          <div className="mx-auto w-full max-w-page px-6 lg:px-12">
            <SectionHeader
              badgeText="TP-LINK_OMADA"
              badgeColor="cyan"
              sectionLabel="Products — 클라우드 구독"
            >
              <h2 className="max-w-3xl font-display text-[clamp(2rem,4vw,4rem)] font-bold leading-[1.1] text-slate-900">
                장치당 구독으로
                <br />
                <span className="text-navy">유연하게 관리하세요.</span>
              </h2>
            </SectionHeader>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {plans.map((plan) => (
                <article key={plan.id} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="font-mono text-[10px] font-bold tracking-widest text-emerald">{plan.model}</div>
                  <h3 className="mt-3 font-display text-2xl font-black text-slate-900">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">{plan.desc}</p>
                  <div className="mt-6 space-y-3">
                    {plan.tiers.map((tier) => (
                      <div key={tier.period} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                        <span className="text-sm font-bold text-slate-700">{tier.period} 구독</span>
                        <div className="flex items-baseline gap-1">
                          <span className="font-display text-lg font-black text-emerald">
                            {tier.msrp.toLocaleString("ko-KR")}원
                          </span>
                          <span className="text-[10px] text-slate-400">/ 장치</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col gap-2">
                    <a
                      href={plan.tplink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-center text-xs font-bold text-navy hover:border-navy"
                    >
                      TP-Link 공식 안내 →
                    </a>
                    <a
                      href={`/contact?subject=${encodeURIComponent(`Omada 클라우드 구독 (${plan.model}) 아인스테크 구매 문의`)}`}
                      className="block rounded-xl bg-navy px-4 py-3 text-center text-xs font-bold text-white hover:bg-emerald"
                    >
                      아인스테크 구매 문의
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-[28px] border border-slate-200 bg-white p-8">
              <h3 className="font-display text-xl font-black text-slate-900">클라우드 구독 특징</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "장치·카메라 수만큼 라이선스 구매, 유연한 확장",
                  "Omada 앱·웹에서 언제 어디서나 원격 관리",
                  "별도 컨트롤러 하드웨어 불필요",
                  "VAT 포함 권장소비자가 기준 (2026 Q3)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5 text-emerald">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-[10px] leading-5 text-slate-400">
              권장소비자가는 2026년 Q3 TP-Link 공식 가격표 기준이며 VAT가 포함된 금액입니다.
              실제 공급가는 수량·프로젝트 조건에 따라 달라질 수 있습니다.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
