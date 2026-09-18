import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import GlassPanel from "@/components/ds/GlassPanel";
import SectionHeader from "@/components/ds/SectionHeader";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/couchbase",
  title: "Couchbase — NoSQL · ERP 보조 계층 · AI/RAG 연동 | EINSTECH",
  description:
    "아인스테크는 Couchbase를 ERP 옆 보조 계층으로 직접 연동해본 경험이 있습니다. Oracle 등 기간계 DB의 부담을 덜어내는 고성능 분산 NoSQL, Vector Search로 AI/RAG까지 자연스럽게 확장합니다.",
  keywords: ["Couchbase", "NoSQL", "ERP 연동", "Vector Search", "RAG", "Oracle 대안", "분산 데이터베이스"],
});

const whyCards = [
  {
    index: "01",
    tag: "DISTRIBUTED_NOSQL",
    title: "관계형 DB의 한계를 넘어서",
    desc: "Couchbase는 JSON 문서 기반 분산 NoSQL 데이터베이스입니다. 메모리 우선 아키텍처와 수평 확장 구조로, 트래픽이 몰려도 밀리초 단위 응답을 유지합니다.",
  },
  {
    index: "02",
    tag: "ERP_OFFLOAD",
    title: "ERP의 무거운 조회를 덜어낸다",
    desc: "기간계 ERP(Oracle 등) 옆에 보조 계층으로 Couchbase를 두면, 실시간 조회·캐싱·세션 데이터를 분리해 ERP 부하를 줄이고 응답 속도를 높일 수 있습니다. 아인스테크가 실제로 구성해본 구조입니다.",
  },
  {
    index: "03",
    tag: "AI_READY",
    title: "AI/RAG 시대에 맞는 데이터 계층",
    desc: "Couchbase의 Vector Search와 유연한 JSON 스키마는 사내 문서·업무 데이터를 그대로 담아 RAG 파이프라인과 바로 연결할 수 있습니다.",
  },
];

const compareRows = [
  {
    crit: "데이터 모델",
    couchbase: "JSON 문서 기반 · 스키마리스 — 구조 변경에 유연",
    oracle: "고정 스키마 · 테이블·컬럼 기반 — 변경 시 영향 범위 큼",
  },
  {
    crit: "확장 방식",
    couchbase: "노드 추가만으로 수평 확장 (Scale-out)",
    oracle: "고사양 서버로 수직 확장 중심 — RAC 구성은 복잡·고비용",
  },
  {
    crit: "응답 속도",
    couchbase: "메모리 우선 아키텍처 — 밀리초 단위 응답",
    oracle: "디스크 I/O 의존 — 대량 조회 시 지연 발생 가능",
  },
  {
    crit: "라이선스 구조",
    couchbase: "코어/노드 기준 — 상대적으로 유연한 비용 구조",
    oracle: "코어당 고가 라이선스 + 옵션별 추가 과금",
  },
  {
    crit: "AI · Vector 검색",
    couchbase: "네이티브 Vector Search 내장 — RAG 바로 연동",
    oracle: "23ai부터 지원 — 별도 라이선스·구성 필요",
  },
  {
    crit: "적합한 역할",
    couchbase: "실시간 조회 · 캐싱 · 세션 · AI 데이터 계층",
    oracle: "트랜잭션 무결성이 중요한 기간계 원장(Ledger)",
  },
];

const caseHighlights = [
  "ERP(Oracle) 옆에 Couchbase 보조 계층 구성 — 실시간 조회 응답속도 개선",
  "관계형 DB 스키마 변경 없이 유연한 JSON 데이터 처리",
  "기간계 트랜잭션은 그대로 두고, 조회 트래픽만 분리 처리",
  "직접 구축·운영해본 경험으로 기술 검증까지 가능",
];

const services = [
  {
    icon: "ph-bold ph-flow-arrow",
    tag: "CONSULTING",
    title: "도입 컨설팅 · 아키텍처 설계",
    desc: "현재 ERP·DB 구조를 분석해 Couchbase를 어디에, 어떤 역할로 배치할지 설계합니다.",
  },
  {
    icon: "ph-bold ph-plugs-connected",
    tag: "ERP_INTEGRATION",
    title: "ERP 연동 설계",
    desc: "조회·캐싱·세션 계층을 기간계에서 분리해, 트랜잭션 무결성은 유지하면서 응답 속도를 높입니다.",
  },
  {
    icon: "ph-bold ph-flask",
    tag: "POC",
    title: "PoC 환경 구축 · 성능 검증",
    desc: "실제 데이터 패턴으로 테스트 서버에 Couchbase를 구성하고, 도입 전 성능·비용 효과를 수치로 확인합니다.",
  },
  {
    icon: "ph-bold ph-magnifying-glass",
    tag: "VECTOR_RAG",
    title: "Vector Search · RAG 연동",
    desc: "사내 문서·업무 데이터를 Couchbase에 담고, 온프레미스 AI(RAG)와 연결해 즉시 검색 가능한 지식 베이스로 만듭니다.",
  },
  {
    icon: "ph-bold ph-arrows-left-right",
    tag: "MIGRATION",
    title: "설치 · 마이그레이션",
    desc: "신규 구축부터 기존 데이터 이관까지, 서비스 영향을 최소화하며 단계적으로 전환합니다.",
  },
  {
    icon: "ph-bold ph-wrench",
    tag: "MAINTENANCE",
    title: "유지보수 · 기술지원",
    desc: "구축 이후 성능 튜닝, 장애 대응, 버전 업그레이드까지 아인스테크가 지속적으로 지원합니다.",
  },
];

const process = [
  { step: "01", title: "현황 분석", desc: "현재 ERP·DB 구조와 병목 구간(느린 조회, 세션 부하 등)을 파악합니다." },
  { step: "02", title: "PoC 설계", desc: "실제 데이터 패턴을 기반으로 성능 검증 시나리오를 설계합니다." },
  { step: "03", title: "PoC 구축·검증", desc: "테스트 서버에 Couchbase를 직접 설치해 성능·비용 효과를 실측합니다." },
  { step: "04", title: "아키텍처·이관 설계", desc: "ERP 연동 구조와 데이터 동기화 방식을 확정합니다." },
  { step: "05", title: "구축·안정화", desc: "실환경에 적용하고 모니터링·튜닝으로 안정화까지 지원합니다." },
];

export default function CouchbasePage() {
  return (
    <>
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
              <Badge color="cyan">COUCHBASE</Badge>
              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                NoSQL · ERP 보조 계층 · AI/RAG Ready
              </span>
            </div>

            <h1 className="font-display leading-[0.95] mb-10">
              <span className="block text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-slate-900">
                Couchbase
              </span>
              <span className="block text-[clamp(2rem,4vw,4rem)] font-light tracking-widest ds-text-glow-cyan text-navy mt-3">
                ERP 옆에서, 더 빠르게
              </span>
            </h1>

            <p className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-slate-900 leading-tight ds-word-keep mb-8 max-w-4xl">
              기간계는 그대로,
              <br />
              <span className="ds-text-glow-acid text-emerald">조회와 AI 데이터만 분리합니다.</span>
            </p>

            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl border-l-2 border-navy/30 pl-5 ds-word-keep mb-12">
              아인스테크는 이미 Couchbase를 <span className="text-slate-900">ERP 옆 보조 계층</span>으로
              직접 연동해본 경험이 있습니다. Oracle 같은 관계형 DB의 부담을 덜어내는 고성능 분산 NoSQL을,
              이제 <span className="text-slate-900">Vector Search 기반 AI/RAG</span> 데이터 계층으로 함께
              제안합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <PrimaryButton href="/contact" className="flex-1">
                Couchbase 도입 문의
              </PrimaryButton>
              <SecondaryButton href="#compare" className="flex-1">
                Couchbase vs Oracle 비교 보기
              </SecondaryButton>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="WHY_COUCHBASE"
              badgeColor="cyan"
              sectionLabel="1. Why — 왜 Couchbase인가"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                Oracle을 대체하는 게 아니라,
                <br />
                <span className="text-navy">옆에서 보완합니다.</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 lg:pl-12">
              {whyCards.map((c) => (
                <GlassPanel
                  key={c.index}
                  className="p-8 lg:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-10 relative">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase group-hover:text-navy transition-colors">
                        REASON_{c.index}
                      </span>
                      <span className="font-mono text-[10px] text-emerald">{c.tag}</span>
                    </div>
                    <div className="font-display text-7xl font-bold ds-text-outline opacity-10 pointer-events-none absolute -top-4 -right-2 group-hover:opacity-30 transition-opacity">
                      {c.index}
                    </div>
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-slate-900 mb-4 ds-word-keep">
                    {c.title}
                  </h3>
                  <p className="font-sans text-slate-600 text-[15px] leading-relaxed ds-word-keep flex-grow">
                    {c.desc}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARE */}
        <section id="compare" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-acid/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="SIDE_BY_SIDE"
              badgeColor="acid"
              sectionLabel="2. Comparison — Couchbase vs Oracle RDBMS"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                Couchbase
                <br />
                <span className="ds-text-glow-acid text-emerald">vs Oracle RDBMS</span>
              </h2>
            </SectionHeader>

            <div className="lg:pl-12">
              <GlassPanel className="overflow-hidden">
                <div className="hidden md:grid grid-cols-[1fr_1fr_1fr] border-b border-slate-200/50">
                  <div className="p-5 font-mono text-[11px] text-slate-500 uppercase tracking-widest">
                    CRITERIA
                  </div>
                  <div className="p-5 font-mono text-[11px] text-emerald uppercase tracking-widest border-l border-slate-200/40 bg-emerald/5">
                    Couchbase (NoSQL)
                  </div>
                  <div className="p-5 font-mono text-[11px] text-navy uppercase tracking-widest border-l border-slate-200/40 bg-navy/5">
                    Oracle RDBMS (기간계)
                  </div>
                </div>

                {compareRows.map((row) => (
                  <div
                    key={row.crit}
                    className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] border-b border-slate-200/30 last:border-b-0"
                  >
                    <div className="p-5 font-mono text-[13px] text-slate-900 bg-black/20 md:bg-transparent">
                      {row.crit}
                    </div>
                    <div className="p-5 flex items-start gap-3 border-l border-slate-200/40 bg-emerald/[0.04]">
                      <svg
                        className="w-4 h-4 text-emerald flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="square"
                          strokeLinejoin="miter"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="font-sans text-[14px] text-slate-900 leading-relaxed ds-word-keep">
                        {row.couchbase}
                      </span>
                    </div>
                    <div className="p-5 flex items-start gap-3 border-l border-slate-200/40 bg-navy/[0.04]">
                      <svg
                        className="w-4 h-4 text-navy flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="square"
                          strokeLinejoin="miter"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="font-sans text-[14px] text-slate-900 leading-relaxed ds-word-keep">
                        {row.oracle}
                      </span>
                    </div>
                  </div>
                ))}
              </GlassPanel>

              <p className="font-mono text-[10px] text-slate-500 leading-relaxed mt-4 ds-word-keep">
                ※ Couchbase는 Oracle을 대체하는 것이 아니라 옆에서 보완하는 구조로 제안드립니다. 기간계
                트랜잭션은 Oracle이, 실시간 조회·AI 데이터는 Couchbase가 맡는 역할 분담입니다. 비교 항목은
                각 벤더 공식 제품 문서를 기준으로 작성되었으며, 에디션·구성에 따라 차이가 있을 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* CASE */}
        <section id="case" className="py-24 lg:py-32 relative bg-navy">
          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <div>
                <span className="font-mono text-[11px] text-emerald uppercase tracking-widest mb-6 block">
                  EINSTECH 구축 경험
                </span>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-[1.1] mb-8 ds-word-keep">
                  몇 년 전, 저희가
                  <br />
                  먼저 연동해봤습니다.
                </h2>
                <p className="font-sans text-slate-300 text-base lg:text-lg leading-relaxed mb-10 ds-word-keep">
                  Couchbase를 ERP 옆 보조 계층으로 직접 구성해본 경험이 있습니다. 말로만 아는 기술이 아니라,
                  실제로 설치하고 연동하고 튜닝해본 기술이라 고객 앞에서도 구체적으로 설명할 수 있습니다.
                </p>
                <ul className="space-y-4">
                  {caseHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300 font-medium ds-word-keep">
                      <i className="ph-bold ph-check-circle text-emerald text-xl mt-0.5 flex-shrink-0"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[40px] p-10">
                <div className="font-mono text-[10px] text-emerald tracking-widest mb-6">
                  제안 아키텍처
                </div>
                <div className="space-y-4">
                  {[
                    { label: "기간계", value: "ERP (Oracle 등) — 트랜잭션 원장" },
                    { label: "보조 계층", value: "Couchbase — 실시간 조회·캐싱·세션" },
                    { label: "데이터 동기화", value: "이벤트/배치 기반 연동" },
                    { label: "AI 확장", value: "Couchbase Vector Search + RAG" },
                    { label: "테스트 환경", value: "PoC 전용 서버로 사전 검증" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between items-center py-3 border-b border-white/10 gap-4"
                    >
                      <span className="text-slate-400 text-sm font-bold flex-shrink-0">{item.label}</span>
                      <span className="text-white font-bold text-sm text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI/RAG */}
        <section id="ai-rag" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />
          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="AI_RAG"
              badgeColor="cyan"
              sectionLabel="3. AI/RAG — 검증된 온프레미스 AI 위에 Couchbase를"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                저희가 이미 운영 중인 AI에,
                <br />
                <span className="text-navy">Couchbase를 데이터 계층으로.</span>
              </h2>
            </SectionHeader>

            <div className="lg:pl-12">
              <GlassPanel className="p-8 lg:p-12">
                <p className="font-sans text-slate-600 text-[15px] lg:text-base leading-relaxed ds-word-keep mb-6">
                  아인스테크는 이미{" "}
                  <a href="/onpremise-ai" className="text-navy font-bold underline underline-offset-4">
                    자체 온프레미스 AI
                  </a>
                  를 운영하며 사내 문서를 RAG로 연동해 실무에 활용하고 있습니다. Couchbase의 네이티브 Vector
                  Search를 이 위에 데이터 계층으로 얹으면, 대용량 문서·업무 데이터를 스키마 걱정 없이
                  저장하면서 AI가 실시간으로 검색·활용할 수 있는 구조를 만들 수 있습니다.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["JSON 문서 그대로 저장", "네이티브 Vector Search", "RAG 파이프라인 직결", "실시간 업데이트 반영"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] text-emerald border border-emerald/30 bg-emerald/5 px-3 py-2 tracking-widest uppercase"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </GlassPanel>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-acid/30 via-cyan/30 to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="SERVICES"
              badgeColor="acid"
              sectionLabel="4. Services — 아인스테크가 제공하는 것"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                컨설팅부터 PoC,
                <br />
                <span className="ds-text-glow-acid text-emerald">유지보수까지 한 곳에서.</span>
              </h2>
            </SectionHeader>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 lg:pl-12">
              {services.map((s) => (
                <GlassPanel
                  key={s.tag}
                  className="p-8 lg:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-navy/5 rounded-[20px] flex items-center justify-center mb-8">
                    <i className={`${s.icon} text-2xl text-navy`}></i>
                  </div>
                  <div className="font-mono text-[10px] text-emerald tracking-widest mb-3">{s.tag}</div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-4 ds-word-keep">
                    {s.title}
                  </h3>
                  <p className="font-sans text-slate-600 text-[15px] leading-relaxed ds-word-keep flex-grow">
                    {s.desc}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="PROCESS"
              badgeColor="cyan"
              sectionLabel="5. Process — PoC부터 안정화까지"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                도입 전, 성능부터
                <br />
                <span className="text-navy">직접 눈으로 확인하세요.</span>
              </h2>
            </SectionHeader>

            <div className="lg:pl-12 space-y-4">
              {process.map((p, idx) => (
                <GlassPanel
                  key={p.step}
                  className="p-6 lg:p-8 flex flex-col md:flex-row gap-6 md:items-center group hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="flex items-center gap-4 md:w-72 flex-shrink-0">
                    <div className="font-display text-5xl md:text-6xl font-bold ds-text-outline opacity-30 group-hover:text-navy group-hover:opacity-100 transition-all duration-500">
                      {p.step}
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                        STEP_{p.step}
                      </span>
                      {idx < process.length - 1 && (
                        <span className="font-mono text-[10px] text-navy">→ NEXT</span>
                      )}
                    </div>
                  </div>
                  <div className="flex-1 border-l border-slate-200/40 md:pl-6">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-2 ds-word-keep">
                      {p.title}
                    </h3>
                    <p className="font-sans text-slate-600 text-[15px] leading-relaxed ds-word-keep">
                      {p.desc}
                    </p>
                  </div>
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
              className="w-full lg:ml-12 p-8 md:p-16 lg:p-20 flex flex-col items-center text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div
                className="font-display text-[8rem] md:text-[12rem] font-bold ds-text-outline opacity-5 pointer-events-none absolute -top-10 md:-top-16 -right-4 md:-right-8 select-none"
                aria-hidden
              >
                CB
              </div>

              <Badge color="acid" className="mb-6">
                POC_READY
              </Badge>

              <h3 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep mb-8 max-w-4xl relative z-10">
                도입 결정 전에,
                <br />
                <span className="ds-text-glow-acid-strong text-emerald">PoC로 먼저 확인해보세요.</span>
              </h3>

              <p className="font-sans text-slate-600 text-base md:text-xl leading-relaxed ds-word-keep max-w-2xl mx-auto mb-12 relative z-10">
                현재 ERP·DB 구조를 무료로 진단하고, 테스트 서버에서 실제 성능 효과를 검증해 드립니다.
              </p>

              <div className="w-full max-w-2xl mx-auto relative z-10 flex flex-col items-center mb-8">
                <div className="ds-cta-btn-wrapper w-full">
                  <a
                    href="/contact"
                    className="w-full bg-emerald text-white font-display font-bold text-[clamp(1.1rem,2.5vw,2rem)] py-6 md:py-8 px-6 md:px-8 flex items-center justify-center gap-4 group hover:bg-white hover:text-navy transition-colors duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 tracking-tight ds-word-keep">
                      Couchbase PoC 문의
                    </span>
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

              <a
                href="mailto:sungil.yum@einstech.kr?subject=Couchbase%20%EB%AC%B8%EC%9D%98"
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
