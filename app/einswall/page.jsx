import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import GlassPanel from "@/components/ds/GlassPanel";
import SectionHeader from "@/components/ds/SectionHeader";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";
import { TPLINK_STORE_URL } from "@/data/storeLinks";
import PricingConfigurator from "./PricingConfigurator";
import RackPricingConfigurator from "./RackPricingConfigurator";
import ProductFamilyLineup from "./ProductFamilyLineup";
import { einswallMetadata, einswallStructuredData } from "./seo";

export const metadata = einswallMetadata;

const specs = [
  { label: "CPU", value: "Intel Pentium 8505 / Core i5-12450H / Core i7-13620H (모델 선택)" },
  { label: "폼팩터", value: "팬리스 데스크톱형 / 19형 1U 랙마운트형 (모델 선택)" },
  { label: "메모리", value: "DDR5 SO-DIMM ×2 슬롯" },
  { label: "스토리지", value: "M.2 NVMe ×2 슬롯" },
  { label: "고정 LAN", value: "2.5G (Intel i226-V) ×4" },
  { label: "SFP+ 포트", value: "No SFP / 2×10G SFP+ / 4×10G SFP+ (모델 선택)" },
  { label: "확장 포트", value: "USB 3.0 ×2 · Type-C · SIM 슬롯 · Console(RJ45)" },
  { label: "전원", value: "DC 어댑터 입력" },
];

const models = [
  {
    name: "EINSWALL 1G",
    category: "MINI PC",
    level: "ESSENTIAL",
    network: "1G 회선 운용 · 4×2.5GbE RJ45",
    desc: "SFP+가 필요 없는 사무실·매장·소규모 사업장용 경제형",
    image: "/products/e-gate/einswall-mini-1g-v2.webp",
    imageAlt: "EINSWALL 1G 모델의 4개 2.5GbE 네트워크 포트",
  },
  {
    name: "EINSWALL RACK ENTRY",
    category: "RACK · 보급형",
    level: "RACK ESSENTIAL",
    network: "19형 1U · 6×1GbE + 4×2.5GbE + 4×SFP",
    desc: "통신실·서버실 표준 랙에 장착하는 Intel Atom C3758 기반 보급형",
    image: "/products/e-gate/rack-entry-c3758.webp",
    imageAlt: "EINSWALL RACK ENTRY 19형 1U 랙마운트 방화벽 서버",
  },
  {
    name: "EINSWALL RACK ADVANCED",
    category: "RACK · 고급형",
    level: "RACK PERFORMANCE",
    network: "19형 1U · 8×2.5GbE + 4×10G SFP+",
    desc: "Core i5-13400 기반으로 10G 트래픽·VPN·IDS/IPS를 처리하는 고급형",
    image: "/products/e-gate/rack-advanced-i5.webp",
    imageAlt: "EINSWALL RACK ADVANCED 19형 1U 고급형 방화벽 서버",
  },
  {
    name: "EINSWALL RACK FLAGSHIP",
    category: "RACK · 최고급형",
    level: "RACK FLAGSHIP",
    network: "19형 2U · 최대 16×RJ45 + 8×10G SFP+",
    desc: "LGA1700 CPU와 대규모 네트워크 확장을 지원하는 데이터센터급 최고급형",
    image: "/products/e-gate/rack-flagship-12g.webp",
    imageAlt: "EINSWALL RACK FLAGSHIP 19형 2U 최고급형 방화벽 서버",
  },
  {
    name: "EINSWALL 10G2",
    category: "MINI PC",
    level: "PRO",
    network: "4×2.5GbE RJ45 + 2×10G SFP+",
    desc: "10G 업링크, 다중 VPN과 IDS/IPS를 사용하는 기업용",
    image: "/products/e-gate/einswall-mini-10g2-v2.webp",
    imageAlt: "EINSWALL 10G2 모델의 4개 2.5GbE 및 2개 10G SFP+ 포트",
  },
  {
    name: "EINSWALL 10G4",
    category: "MINI PC",
    level: "ENTERPRISE",
    network: "4×2.5GbE RJ45 + 4×10G SFP+",
    desc: "다수의 10G 구간과 고부하 보안 정책을 위한 고급형",
    image: "/products/e-gate/einswall-mini-10g4-v2.webp",
    imageAlt: "EINSWALL 10G4 모델의 4개 2.5GbE 및 4개 10G SFP+ 포트",
  },
];

const gatewayFeatures = [
  {
    title: "TP-Link VLAN 네트워크 분할",
    desc: "TP-Link 관리형 스위치와 VLAN Trunk로 연동해 업무망·서버망·게스트망·CCTV망을 논리적으로 분리하고, 망 간 접근은 EINSWALL 보안 정책으로 통제합니다.",
  },
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

export default function EinswallPage() {
  return (
    <>
      <Header />

      <main className="pt-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(einswallStructuredData) }} />
        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="relative z-10 max-w-page mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <Badge color="cyan">EINSWALL FIREWALL</Badge>
                  <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                    Enterprise Firewall
                  </span>
                </div>

                <h1 className="font-display leading-[0.95] mb-10">
                  <span className="block text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-slate-900">
                    EINSWALL
                  </span>
                  <span className="block text-[clamp(1.5rem,3vw,2.5rem)] font-light tracking-widest text-navy mt-3">
                    Enterprise Firewall
                  </span>
                </h1>

                <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl border-l-2 border-navy/30 pl-5 mb-12">
                  EINSWALL Firewall은 업무망·서버망·게스트망·CCTV망 사이의 접근 정책과 인터넷 경계를 통합 보호합니다. 경제적인 경제적인 1G 운용형부터 10G SFP+
                  고급형까지 필요한 사양을 선택할 수 있으며, 현장 네트워크 및 방화벽
                  정책 설정은 별도 견적입니다.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
                  <PrimaryButton href={TPLINK_STORE_URL} className="flex-1">
                    TP-Link 구매
                  </PrimaryButton>
                  <SecondaryButton href="#models" className="flex-1">
                    EINSWALL 모델 보기
                  </SecondaryButton>
                  <SecondaryButton href="/contact" className="flex-1">
                    구축 문의
                  </SecondaryButton>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-3 rounded-[40px] border border-slate-100 bg-slate-50 p-4 sm:p-6">
                  {models.map((model, index) => (
                    <figure
                      key={model.name}
                      className={`overflow-hidden rounded-2xl border border-slate-100 bg-white ${
                        index === 0 ? "col-span-2 sm:col-span-1" : ""
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={model.image}
                        alt={model.imageAlt}
                        className="aspect-square w-full object-cover"
                      />
                      <figcaption className="px-3 py-2 text-center font-mono text-[10px] font-bold text-navy">
                        {model.name}
                      </figcaption>
                    </figure>
                  ))}
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

          </div>
        </section>

        {/* MODELS */}
        <section id="models" className="py-24 lg:py-32 relative">
          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="MODEL_LINEUP"
              badgeColor="acid"
              sectionLabel="2. Models — 미니PC · 랙 보급형 · 랙 고급형 · 랙 최고급형"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] max-w-4xl">
                트래픽 규모에 맞는
                <br />
                <span className="text-emerald">폼팩터와 등급을 선택하세요.</span>
              </h2>
            </SectionHeader>

            <ProductFamilyLineup />
          </div>
        </section>

        {/* PRICE CONFIGURATOR */}
        <section id="pricing" className="py-24 lg:py-32 relative">
          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="CONFIGURE_PRICE"
              badgeColor="cyan"
              sectionLabel="3. Configure — 사양별 예상 공급가"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] max-w-4xl">
                필요한 사양을 선택하고
                <br />
                <span className="text-navy">예상 가격을 확인하세요.</span>
              </h2>
            </SectionHeader>


            <div className="mb-8 lg:ml-12"><div className="font-mono text-[10px] font-bold tracking-[0.2em] text-navy">EINSWALL MINI PC LINE</div><h3 className="mt-2 font-display text-3xl font-black text-slate-900">미니PC 방화벽 제품군</h3></div>
            <div id="pricing-mini" className="scroll-mt-24"><PricingConfigurator /></div>

            <div className="mt-16"><RackPricingConfigurator familyId="entry" /></div>
            <div className="mt-16"><RackPricingConfigurator familyId="advanced" /></div>
            <div className="mt-16"><RackPricingConfigurator familyId="flagship" /></div>
          </div>
        </section>

        {/* GATEWAY FEATURES */}
        <section id="features" className="py-24 lg:py-32 relative">
          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="GATEWAY_FEATURES"
              badgeColor="cyan"
              sectionLabel="4. Features — 게이트웨이 기능"
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
                    <span className="relative z-10 tracking-tight">EINSWALL 견적 문의</span>
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
