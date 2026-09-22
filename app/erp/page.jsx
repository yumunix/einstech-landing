import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import GlassPanel from "@/components/ds/GlassPanel";
import SectionHeader from "@/components/ds/SectionHeader";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/erp",
  title: "소규모 회사를 위한 모듈 선택형 온프레미스 ERP | EINSTECH ERP",
  description:
    "직원 수가 적어 전담 IT팀 없이 대표·관리자가 직접 챙기는 소규모 회사를 위한 ERP. 아인스테크가 사내에서 직접 운영하며 다져온 시스템을 필요한 모듈만 골라 도입합니다.",
  keywords: ["ERP", "소규모 기업 ERP", "온프레미스 ERP", "모듈형 ERP", "중소기업 ERP", "맞춤형 ERP", "EINSTECH ERP"],
});

const shiftCards = [
  {
    index: "01",
    tag: "TOO_BIG_TO_FIT",
    title: "대기업 규격에 억지로 맞추기",
    desc: "대부분의 패키지 ERP는 인사·생산·물류까지 묶어 팝니다. 직원 몇 명 안 되는 회사가 실제로 쓰는 건 견적·거래처·재무 몇 개뿐인데, 나머지 기능의 라이선스와 러닝커브까지 같이 떠안습니다.",
  },
  {
    index: "02",
    tag: "NO_IT_TEAM",
    title: "전담 IT팀이 없다",
    desc: "구축만 하고 운영은 고객이 떠안는 구조에서는 대표나 관리자가 직접 시스템을 붙잡고 씨름하게 됩니다. 아인스테크는 전담 IT팀 없이 이 ERP로 매일 견적·거래처·재무를 직접 처리합니다.",
  },
  {
    index: "03",
    tag: "SI_LOCK_IN",
    title: "커스터마이징 = 별도 SI 프로젝트",
    desc: "소규모 회사에는 매번 견적서가 따라붙는 별도 SI 프로젝트를 벌일 여유가 없습니다. 구성이 표준 패키지와 조금만 달라도 커스터마이징 견적부터 다시 받아야 하는 구조는 맞지 않습니다.",
  },
];

const moduleGroups = [
  {
    tag: "SALES",
    color: "cyan",
    label: "영업/고객",
    modules: [
      ["고객/거래처", "사업자정보·담당자·연락처를 한 곳에서 관리"],
      ["프로젝트", "고객사별 프로젝트 단위로 견적·계산서·해외인보이스를 묶어 손익 집계"],
      ["견적·매출/매입", "견적서 작성부터 세금계산서 발행까지"],
      ["거래명세서", "거래 단위 명세서 발행·관리"],
    ],
  },
  {
    tag: "OPS",
    color: "acid",
    label: "기술/운영",
    modules: [
      ["점검/기술지원", "정기점검·수리·장애대응 작업기록"],
      ["자산/장비", "고객사에 설치한 장비의 모델·시리얼·보증기간 대장"],
      ["라이센스 관리", "고객사에 판매한 타사 제품(백업/백신 등) 라이선스 만료 추적·알림"],
      ["회사 차량 비용·정비", "법인 차량의 정비·비용 이력 관리"],
    ],
  },
  {
    tag: "FINANCE",
    color: "cyan",
    label: "재무/회계",
    modules: [
      ["유지보수 수금·지급", "연간 유지보수 계약의 수금/지급 현금흐름 관리"],
      ["법인카드", "법인카드 사용 내역 관리"],
      ["해외 인보이스", "해외 거래처 인보이스 관리"],
      ["세금·신고", "세금계산서·신고 관련 기록 관리"],
      ["손익 리포트", "매출·매입 데이터를 모아 손익 현황 리포트로 확인"],
    ],
  },
];

const process = [
  {
    step: "01",
    title: "모듈 구성 상담",
    desc: "현재 쓰는 엑셀·수기 프로세스와 필요한 업무 범위를 파악해 어떤 모듈이 필요한지 함께 정합니다. 모듈 간 의존 관계(예: 프로젝트 모듈은 고객/거래처 모듈이 같이 필요)는 저희가 검토해 안내합니다.",
  },
  {
    step: "02",
    title: "온프레미스 인스턴스 구성",
    desc: "고객사 전용 인스턴스를 준비하고, 선택한 모듈의 스키마만 설치합니다. 다른 고객사와 데이터베이스를 공유하지 않습니다.",
  },
  {
    step: "03",
    title: "라이선스 설정",
    desc: "구매한 모듈 목록을 인스턴스 설정에 반영합니다. 화면·메뉴는 구매한 모듈만 노출되고, 계약 조건이 바뀌면 모듈을 다시 조정할 수 있습니다.",
  },
  {
    step: "04",
    title: "검증 후 운영 인계",
    desc: "실제 로그인 화면까지 확인한 뒤 운영팀에 인계합니다. 이후 모듈 추가·변경도 같은 절차로 진행합니다.",
  },
];

const guarantees = [
  "전담 IT팀 없는 소규모 회사도 직접 운영할 수 있는 수준의 복잡도로 설계",
  "사내에서 매일 직접 쓰며 다져온 시스템 — 도입 후 발견되는 게 아니라 이미 검증된 흐름",
  "고객사마다 완전히 분리된 온프레미스 인스턴스 — 데이터는 고객 환경에만 보관",
  "구매한 모듈만 화면에 노출 — 안 쓰는 기능에 대한 비용·러닝커브 없음",
  "모듈 조합을 바꿔도 데이터 구조가 깨지지 않도록 설치 단계에서 의존 관계를 자동 검증",
];

const faqs = [
  ["직원 수가 적은 회사도 도입할 수 있나요?", "오히려 그런 회사를 위해 만들었습니다. 대기업용 풀 패키지가 아니라, 소규모 회사가 실제로 쓰는 몇 개 모듈만 골라 가볍게 시작할 수 있습니다."],
  ["모듈은 나중에 추가할 수 있나요?", "가능합니다. 처음엔 꼭 필요한 모듈만 도입하고, 이후 필요해지면 추가로 설치할 수 있습니다."],
  ["기존에 쓰던 엑셀 데이터를 옮길 수 있나요?", "가능합니다. 다만 데이터 형태가 고객사마다 달라 이행 방법은 상담 시 별도로 확인합니다."],
  ["여러 회사(계열사 등)를 하나의 ERP로 같이 쓸 수 있나요?", "고객사마다 완전히 분리된 인스턴스로 운영하는 것을 기본으로 합니다. 계열사 구조 등 특수한 요구가 있으면 상담 시 알려주세요."],
  ["가격은 어떻게 정해지나요?", "선택한 모듈 구성과 도입 규모에 따라 달라집니다. 정확한 견적은 상담을 통해 안내드립니다."],
];

export default function ErpPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": "https://www.einstech.kr/erp#software",
      name: "EINSTECH ERP",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Enterprise Resource Planning",
      operatingSystem: "Linux (온프레미스)",
      url: "https://www.einstech.kr/erp",
      publisher: { "@id": "https://www.einstech.kr/#organization" },
      description: "필요한 모듈만 선택해서 도입하는 온프레미스 ERP",
      offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceSpecification: { "@type": "PriceSpecification", price: "0", priceCurrency: "KRW", description: "모듈 구성에 따라 별도 견적" } },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="ds-scanline-overlay" aria-hidden />
          <div
            className="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-transparent pointer-events-none"
            aria-hidden
          />

          <div className="relative z-10 max-w-page mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Badge color="cyan">FOR_SMALL_BUSINESS</Badge>
              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                Module-based · On-Premise · Per-Customer Instance
              </span>
            </div>

            <h1 className="font-display leading-[0.95] mb-10">
              <span className="block text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-slate-900">
                EINSTECH ERP
              </span>
              <span className="block text-[clamp(2rem,4vw,4rem)] font-light tracking-widest ds-text-glow-cyan text-navy mt-3">
                BUILT FOR SMALL TEAMS
              </span>
            </h1>

            <p className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-slate-900 leading-tight ds-word-keep mb-8 max-w-4xl">
              전담 IT팀 없는 소규모 회사가,
              <br />
              <span className="ds-text-glow-acid text-emerald">필요한 모듈만 고르는 ERP.</span>
            </p>

            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl border-l-2 border-navy/30 pl-5 ds-word-keep mb-12">
              아인스테크도 전담 IT팀 없이 고객/거래처, 견적, 자산, 기술지원, 재무를 사내에서
              이 ERP로 직접 처리하는 소규모 회사입니다. 판매 상품도 같은 코드베이스이며,
              직원 수가 적은 고객사에 맞춰 필요한 모듈만 골라 온프레미스 전용 인스턴스로
              도입합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <PrimaryButton
                href="/contact?type=ERP&subject=EINSTECH%20ERP%20%EB%8F%84%EC%9E%85%20%EB%AC%B8%EC%9D%98"
                className="flex-1"
              >
                도입 문의
              </PrimaryButton>
              <SecondaryButton href="#modules" className="flex-1">
                모듈 구성 보기
              </SecondaryButton>
            </div>
          </div>
        </section>

        {/* PROBLEM / SHIFT */}
        <section id="shift" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader badgeText="THE_PROBLEM" badgeColor="cyan" sectionLabel="1. Problem — 패키지 ERP의 흔한 문제">
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                안 쓰는 기능까지 사고,
                <br />
                <span className="text-navy">바꾸려면 또 견적을 받습니다.</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 lg:pl-12">
              {shiftCards.map((c) => (
                <GlassPanel key={c.index} className="p-8 lg:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500">
                  <div className="flex justify-between items-start mb-10 relative">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase group-hover:text-navy transition-colors">
                        SHIFT_{c.index}
                      </span>
                      <span className="font-mono text-[10px] text-emerald">{c.tag}</span>
                    </div>
                    <div className="font-display text-7xl font-bold ds-text-outline opacity-10 pointer-events-none absolute -top-4 -right-2 group-hover:opacity-30 transition-opacity">
                      {c.index}
                    </div>
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-slate-900 mb-4 ds-word-keep">{c.title}</h3>
                  <p className="font-sans text-slate-600 text-[15px] leading-relaxed ds-word-keep flex-grow">{c.desc}</p>
                </GlassPanel>
              ))}
            </div>
          </div>
        </section>

        {/* MODULE LINEUP */}
        <section id="modules" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-acid/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader badgeText="MODULES" badgeColor="acid" sectionLabel="2. Modules — 13개 옵션 모듈 중 필요한 것만">
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                대시보드와 로그인은 항상 기본,
                <br />
                <span className="ds-text-glow-acid text-emerald">나머지는 고르는 대로.</span>
              </h2>
            </SectionHeader>

            <div className="space-y-10 lg:pl-12">
              {moduleGroups.map((g) => {
                const accent = g.color === "acid" ? "text-emerald" : "text-navy";
                const bg = g.color === "acid" ? "bg-emerald" : "bg-navy";
                return (
                  <div key={g.label}>
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`w-2 h-2 ${bg} animate-pulse-fast flex-shrink-0`} />
                      <span className={`font-mono text-[11px] ${accent} uppercase tracking-widest`}>{g.tag}</span>
                      <span className="font-display text-lg font-bold text-slate-900">{g.label}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {g.modules.map(([name, desc]) => (
                        <GlassPanel key={name} className="p-6 flex flex-col group hover:-translate-y-1 transition-all duration-500">
                          <h3 className="font-display text-base font-bold text-slate-900 mb-2 ds-word-keep">{name}</h3>
                          <p className="font-sans text-slate-600 text-[13px] leading-relaxed ds-word-keep">{desc}</p>
                        </GlassPanel>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-10 lg:pl-12 font-mono text-xs text-slate-500">
              모듈 간에는 실제 데이터 의존 관계가 있습니다(예: 프로젝트 모듈은 고객/거래처 모듈이 같이 있어야 정상 동작). 상담 시 구성안과 함께 안내합니다.
            </p>
          </div>
        </section>

        {/* PROCESS + GUARANTEES */}
        <section id="process" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-acid/30 to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader badgeText="PROCESS" badgeColor="cyan" sectionLabel="3. Process — 도입 4단계">
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                모듈 상담 → 설치
                <br />
                <span className="text-navy">→ 라이선스 설정 → 운영 인계</span>
              </h2>
            </SectionHeader>

            <div className="lg:pl-12 space-y-4 mb-12">
              {process.map((p, idx) => (
                <GlassPanel key={p.step} className="p-6 lg:p-8 flex flex-col md:flex-row gap-6 md:items-center group hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-center gap-4 md:w-72 flex-shrink-0">
                    <div className="font-display text-5xl md:text-6xl font-bold ds-text-outline opacity-30 group-hover:text-navy group-hover:opacity-100 transition-all duration-500">
                      {p.step}
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">STEP_{p.step}</span>
                      {idx < process.length - 1 && <span className="font-mono text-[10px] text-navy">→ NEXT</span>}
                    </div>
                  </div>
                  <div className="flex-1 border-l border-slate-200/40 md:pl-6">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-2 ds-word-keep">{p.title}</h3>
                    <p className="font-sans text-slate-600 text-[15px] leading-relaxed ds-word-keep">{p.desc}</p>
                  </div>
                </GlassPanel>
              ))}
            </div>

            <div className="lg:pl-12">
              <GlassPanel className="p-8 lg:p-10 flex flex-col">
                <div className="font-mono text-[10px] text-navy uppercase tracking-widest mb-5">EINSTECH ERP 특징</div>
                <ul className="space-y-3">
                  {guarantees.map((g) => (
                    <li key={g} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-sans text-slate-600 text-[14px] leading-relaxed ds-word-keep">{g}</span>
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6">
            <Badge>FAQ</Badge>
            <h2 className="mt-5 font-display text-4xl font-black">자주 묻는 질문</h2>
            <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map(([q, a]) => (
                <details key={q} className="group py-6">
                  <summary className="cursor-pointer list-none pr-8 font-display text-lg font-black">
                    {q}
                    <span className="float-right text-emerald group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="py-24 lg:py-32 relative">
          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <GlassPanel
              ctaFrame
              className="w-full lg:ml-12 p-8 md:p-16 lg:p-20 flex flex-col items-center text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div
                className="font-display text-[8rem] md:text-[12rem] font-bold ds-text-outline opacity-5 pointer-events-none absolute -top-10 md:-top-16 -right-4 md:-right-8 select-none"
                aria-hidden
              >
                ERP
              </div>

              <Badge color="acid" className="mb-6">READY_TO_TALK</Badge>

              <h3 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep mb-8 max-w-4xl relative z-10">
                지금 쓰는 엑셀이
                <br />
                <span className="ds-text-glow-acid-strong text-emerald">감당 안 되기 시작했다면.</span>
              </h3>

              <p className="font-sans text-slate-600 text-base md:text-xl leading-relaxed ds-word-keep max-w-2xl mx-auto mb-12 relative z-10">
                현재 업무 흐름을 듣고 필요한 모듈 구성과 예상 견적을
                <br className="hidden md:block" />
                안내해 드립니다.
              </p>

              <div className="w-full max-w-2xl mx-auto relative z-10 flex flex-col items-center mb-8">
                <div className="ds-cta-btn-wrapper w-full">
                  <a
                    href="/contact?type=ERP&subject=EINSTECH%20ERP%20%EB%8F%84%EC%9E%85%20%EB%AC%B8%EC%9D%98"
                    className="w-full bg-emerald text-white font-display font-bold text-[clamp(1.1rem,2.5vw,2rem)] py-6 md:py-8 px-6 md:px-8 flex items-center justify-center gap-4 group hover:bg-white hover:text-navy transition-colors duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 tracking-tight ds-word-keep">ERP 도입 상담 신청</span>
                    <svg className="w-6 h-6 md:w-10 md:h-10 transform group-hover:translate-x-2 transition-transform relative z-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              <a
                href="mailto:sungil.yum@einstech.kr?subject=EINSTECH%20ERP%20%EB%AC%B8%EC%9D%98"
                className="font-mono text-sm text-navy hover:text-slate-900 transition-colors"
              >
                또는 sungil.yum@einstech.kr 로 직접 메일
              </a>
            </GlassPanel>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
