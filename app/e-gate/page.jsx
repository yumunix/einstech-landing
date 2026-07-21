import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import GlassPanel from "@/components/ds/GlassPanel";
import SectionHeader from "@/components/ds/SectionHeader";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";

export const metadata = {
  title: "E-Gate — 방화벽 어플라이언스 | EINSTECH",
  description:
    "EINSTECH E-Gate. 팬리스 산업용 방화벽 어플라이언스에 통합 보안 게이트웨이를 사전 구성해 공급합니다. CPU·SFP+ 포트 구성별 8종 모델.",
};

const specs = [
  { label: "CPU", value: "Intel Pentium 8505 / Core i5-12450H / Core i7-13620H (모델 선택)" },
  { label: "폼팩터", value: "팬리스 알루미늄 방열판 인클로저 (무소음·무진동)" },
  { label: "메모리", value: "DDR5 SO-DIMM ×2 슬롯" },
  { label: "스토리지", value: "M.2 NVMe ×2 슬롯" },
  { label: "고정 LAN", value: "2.5G (Intel i226-V) ×4" },
  { label: "SFP+ 포트", value: "No SFP / 2×10G SFP+ / 4×10G SFP+ (모델 선택)" },
  { label: "확장 포트", value: "USB 3.0 ×2 · Type-C · SIM 슬롯 · Console(RJ45)" },
  { label: "전원", value: "DC 어댑터 입력" },
];

const models = [
  { name: "E-Gate 8505", cpu: "Pentium 8505", sfp: "No SFP" },
  { name: "E-Gate 8505-210G", cpu: "Pentium 8505", sfp: "2×10G SFP+" },
  { name: "E-Gate 8505-410G", cpu: "Pentium 8505", sfp: "4×10G SFP+" },
  { name: "E-Gate i5", cpu: "Core i5-12450H", sfp: "No SFP" },
  { name: "E-Gate i5-210G", cpu: "Core i5-12450H", sfp: "2×10G SFP+" },
  { name: "E-Gate i7", cpu: "Core i7-13620H", sfp: "No SFP" },
  { name: "E-Gate i7-210G", cpu: "Core i7-13620H", sfp: "2×10G SFP+" },
  { name: "E-Gate i7-410G", cpu: "Core i7-13620H", sfp: "4×10G SFP+" },
];

const gatewayFeatures = [
  {
    title: "상태 기반 방화벽",
    desc: "룰 기반 트래픽 제어와 상태 추적(Stateful Inspection)으로 인바운드·아웃바운드 트래픽을 세밀하게 통제합니다.",
  },
  {
    title: "IDS/IPS 침입 탐지·차단",
    desc: "시그니처 기반 엔진으로 실시간 트래픽을 검사해 알려진 공격 패턴을 탐지하고 자동 차단합니다.",
  },
  {
    title: "VPN 게이트웨이",
    desc: "IPsec · OpenVPN · WireGuard를 지원해 지사·재택 환경을 본사 네트워크와 안전하게 연결합니다.",
  },
  {
    title: "다중 WAN 이중화",
    desc: "복수 회선을 로드밸런싱하거나 장애 시 자동 페일오버해 인터넷 회선 단일 장애점을 제거합니다.",
  },
  {
    title: "트래픽 쉐이핑 · QoS",
    desc: "업무 애플리케이션에 대역폭을 우선 할당하고, 비업무 트래픽을 제한해 회선 품질을 관리합니다.",
  },
  {
    title: "웹·DNS 콘텐츠 필터링",
    desc: "카테고리 기반 웹 필터링과 DNS 차단으로 유해 사이트·피싱·악성 도메인 접근을 사전에 막습니다.",
  },
  {
    title: "고가용성(HA) 클러스터",
    desc: "이중화 구성으로 장비 장애 시 자동 절체, 게이트웨이 자체의 단일 장애점을 제거합니다.",
  },
  {
    title: "실시간 모니터링 대시보드",
    desc: "트래픽·세션·위협 현황을 대시보드로 실시간 확인하고, 이상 징후를 즉시 파악합니다.",
  },
];

export default function EGatePage() {
  return (
    <>
      <Header />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="relative z-10 max-w-page mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <Badge color="cyan">E-GATE</Badge>
                  <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                    Security Gateway Appliance
                  </span>
                </div>

                <h1 className="font-display leading-[0.95] mb-10">
                  <span className="block text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-slate-900">
                    E-Gate
                  </span>
                  <span className="block text-[clamp(1.5rem,3vw,2.5rem)] font-light tracking-widest text-navy mt-3">
                    통합 보안 게이트웨이 어플라이언스
                  </span>
                </h1>

                <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl border-l-2 border-navy/30 pl-5 mb-12">
                  EINSTECH가 하드웨어 선정부터 게이트웨이 설치·구성까지 책임지는
                  방화벽 어플라이언스입니다. CPU·포트 구성에 따라 8종 모델 중
                  환경에 맞는 사양을 선택할 수 있습니다.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                  <PrimaryButton href="/contact" className="flex-1">
                    도입 문의
                  </PrimaryButton>
                  <SecondaryButton href="#models" className="flex-1">
                    모델 라인업 보기
                  </SecondaryButton>
                </div>
              </div>

              <div className="relative">
                <div className="bg-slate-50 rounded-[40px] border border-slate-100 p-10 lg:p-14">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/products/e-gate/e-gate-6.jpg"
                    alt="EINSTECH E-Gate 방화벽 어플라이언스"
                    className="w-full h-auto rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPECS */}
        <section id="specs" className="py-24 lg:py-32 relative">
          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="HARDWARE_SPEC"
              badgeColor="cyan"
              sectionLabel="1. Specification — 하드웨어 사양"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] max-w-4xl">
                팬리스 설계의
                <br />
                <span className="text-navy">산업용 게이트웨이 하드웨어</span>
              </h2>
            </SectionHeader>

            <GlassPanel className="lg:ml-12 overflow-hidden">
              <dl className="divide-y divide-slate-200/60">
                {specs.map((s) => (
                  <div
                    key={s.label}
                    className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 px-6 sm:px-10 py-5"
                  >
                    <dt className="font-mono text-xs text-slate-500 uppercase tracking-widest self-center">
                      {s.label}
                    </dt>
                    <dd className="font-sans text-[15px] text-slate-900">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </GlassPanel>

            <div className="mt-10 lg:ml-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/products/e-gate/e-gate-5.jpg"
                alt="E-Gate 포트 구성 (USB · Type-C · SIM · Console)"
                className="w-full max-w-md rounded-3xl border border-slate-100"
              />
            </div>
          </div>
        </section>

        {/* MODELS */}
        <section id="models" className="py-24 lg:py-32 relative">
          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="MODEL_LINEUP"
              badgeColor="acid"
              sectionLabel="2. Models — CPU·포트 구성별 8종"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] max-w-4xl">
                트래픽 규모에 맞는
                <br />
                <span className="text-emerald">모델을 선택하세요.</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:pl-12">
              {models.map((m) => (
                <GlassPanel key={m.name} className="p-6 flex flex-col gap-2">
                  <div className="font-display text-lg font-bold text-slate-900">{m.name}</div>
                  <div className="font-mono text-[11px] text-navy">{m.cpu}</div>
                  <div className="font-mono text-[11px] text-slate-500">{m.sfp}</div>
                </GlassPanel>
              ))}
            </div>

            <p className="font-mono text-[11px] text-slate-500 tracking-wide uppercase mt-8 lg:ml-12">
              ※ 메모리·스토리지 용량은 환경에 맞춰 구성해 공급합니다.
            </p>
          </div>
        </section>

        {/* GATEWAY FEATURES */}
        <section id="features" className="py-24 lg:py-32 relative">
          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="GATEWAY_FEATURES"
              badgeColor="cyan"
              sectionLabel="3. Features — 게이트웨이 기능"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] max-w-4xl">
                방화벽 그 이상의
                <br />
                <span className="text-navy">통합 보안 게이트웨이</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:pl-12">
              {gatewayFeatures.map((f) => (
                <GlassPanel
                  key={f.title}
                  className="p-8 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                >
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-3">
                    {f.title}
                  </h3>
                  <p className="font-sans text-slate-600 text-[14px] leading-relaxed flex-grow">
                    {f.desc}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="py-24 lg:py-32 relative">
          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <GlassPanel
              ctaFrame
              className="w-full lg:ml-12 p-8 md:p-16 lg:p-20 flex flex-col items-center text-center relative overflow-hidden"
            >
              <Badge color="acid" className="mb-6">
                가격 문의
              </Badge>

              <h3 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] mb-8 max-w-4xl relative z-10">
                모델·구성에 따라
                <br />
                <span className="text-emerald">견적이 달라집니다.</span>
              </h3>

              <p className="font-sans text-slate-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 relative z-10">
                CPU·SFP+ 포트·메모리·스토리지 구성과 설치 환경에 따라 가격이
                책정됩니다. 문의 주시면 모델별 견적을 안내해 드립니다.
              </p>

              <div className="w-full max-w-2xl mx-auto relative z-10 flex flex-col items-center mb-8">
                <div className="ds-cta-btn-wrapper w-full">
                  <a
                    href="/contact"
                    className="w-full bg-emerald text-white font-display font-bold text-[clamp(1.1rem,2.5vw,2rem)] py-6 md:py-8 px-6 md:px-8 flex items-center justify-center gap-4 group hover:bg-white transition-colors duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 tracking-tight">E-Gate 견적 문의</span>
                    <svg
                      className="w-6 h-6 md:w-10 md:h-10 transform group-hover:translate-x-2 transition-transform relative z-10 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </GlassPanel>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
