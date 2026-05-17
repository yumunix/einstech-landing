import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import GlassPanel from "@/components/ds/GlassPanel";
import SectionHeader from "@/components/ds/SectionHeader";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";

export const metadata = {
  title: "BCP 솔루션 — EINSTECH | Business Continuity Planning",
  description:
    "해킹·서버 장애·화재·재난이 발생해도 생산은 멈추지 않습니다. 아인스테크는 제조 기업의 업무 연속성과 데이터 안전을 동시에 보장하는 BCP 체계를 설계·구축합니다.",
};

const purposes = [
  {
    index: "01",
    tag: "CONTINUITY",
    title: "생산 업무 연속성 유지",
    desc: "위기 상황에서도 핵심 생산·서비스가 멈추지 않도록 이중화·DR 체계로 가동률을 지킵니다.",
  },
  {
    index: "02",
    tag: "LOSS_PROTECT",
    title: "손실 최소화",
    desc: "유·무형 경제적 손실과 대외 신인도 하락을 막아 사고가 경영 리스크로 번지는 것을 차단합니다.",
  },
  {
    index: "03",
    tag: "FAST_RECOVER",
    title: "신속한 복구",
    desc: "검증된 Runbook과 정기 모의훈련으로 장애 발생 시 평균 복구 시간을 대폭 단축합니다.",
  },
];

const risks = [
  {
    index: "01",
    tag: "EOSL_RISK",
    title: "인프라 노후화",
    points: [
      "EOSL 도래 서버를 그대로 운영",
      "최신 보안 패치 적용 누락",
      "해외 지사 시스템 연동 장애 빈번",
    ],
  },
  {
    index: "02",
    tag: "DR_GAP",
    title: "백업·DR 사각지대",
    points: [
      "백업 솔루션 버전 미업그레이드",
      "신규 워크로드 에이전트 미배포",
      "콜드 DR만 존재 — 실복구 시간 미검증",
    ],
  },
  {
    index: "03",
    tag: "BLIND_SITE",
    title: "글로벌 거점 가시성 부재",
    points: [
      "해외 공장 백업 정책 취약",
      "본사에서 거점 상태를 실시간 파악 불가",
      "장애 발생 시 보고 라인 지연",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "프로젝트 범위 설정 및 기획",
    desc: "BCP 적용 대상 시스템·조직·시나리오를 정의하고 거버넌스 체계를 수립합니다.",
  },
  {
    step: "02",
    title: "사업영향분석 (BIA)",
    desc: "각 업무의 중요도를 평가하고 RTO·RPO 목표치를 시스템별로 확정합니다.",
  },
  {
    step: "03",
    title: "복구 전략 수립",
    desc: "Hot / Warm / Cold DR 센터를 지정하고 비용·시간·리스크 트레이드오프를 설계합니다.",
  },
  {
    step: "04",
    title: "복구 계획 작성",
    desc: "장애 유형별 Runbook을 작성하고 담당자·연락망·복구 순서를 문서화합니다.",
  },
  {
    step: "05",
    title: "유지보수 및 테스트",
    desc: "정기 모의훈련과 변경 관리로 BCP가 실제 작동하는 살아있는 체계로 운영됩니다.",
  },
];

const tiers = [
  {
    tier: "Tier 0",
    priority: "최우선 — 생산 직결",
    color: "acid",
    systems: ["MES", "EICM", "QMS"],
    site: "Hot Site",
    rto: "≤ 30분",
    desc: "생산 라인이 직접 의존하는 시스템. 무중단 실시간 복제와 자동 페일오버가 필수입니다.",
  },
  {
    tier: "Tier 1",
    priority: "우선 — 물류·구매",
    color: "cyan",
    systems: ["ERP", "SCM"],
    site: "Warm Site",
    rto: "≤ 2시간",
    desc: "공급망과 거래에 직결되는 기간계 시스템. 수 시간 내 복구가 필요합니다.",
  },
  {
    tier: "Tier 2",
    priority: "지원 — 일반 행정",
    color: "muted",
    systems: ["그룹웨어", "메일", "회계"],
    site: "Cold Site / Cloud",
    rto: "≤ 24시간",
    desc: "직접적인 생산 영향은 없지만 업무 효율과 컴플라이언스를 위해 보호합니다.",
  },
];

const securityItems = [
  {
    index: "01",
    title: "에어갭 (Air-Gap) 구성",
    desc: "WORM(Write Once Read Many) 스토리지에 백업을 보관해 랜섬웨어 감염 경로를 물리적으로 차단합니다.",
  },
  {
    index: "02",
    title: "3-2-1 백업 법칙",
    desc: "데이터 3개 사본, 2가지 매체, 1개 원격지(30km 이상)에 보관해 단일 사고에 모든 사본을 잃지 않도록 합니다.",
  },
  {
    index: "03",
    title: "데이터 + 이미지 백업 병행",
    desc: "15분~1시간 단위 스냅샷과 풀 이미지 백업을 결합해 RPO와 복구 단순성을 동시에 확보합니다.",
  },
  {
    index: "04",
    title: "가상화 즉시 복구",
    desc: "DR 사이트에 가상 머신을 상시 대기시켜 장애 발생 시 RTO를 분 단위로 단축합니다.",
  },
  {
    index: "05",
    title: "네트워크 세그먼트 분리",
    desc: "생산망·사무망·관리망을 분리하고 측면 이동(lateral movement)을 차단해 장애 확산을 막습니다.",
  },
];

const roadmap = [
  {
    year: "Year 1",
    title: "본사 DR 시스템 구축",
    items: [
      "Q1 — 현행 분석 및 BIA 수행",
      "Q2 — DR 사이트 구축 및 회선 이중화",
      "Q3 — Tier 0/1 시스템 복제 적용",
      "Q4 — 1차 모의훈련 및 운영 매뉴얼 확정",
    ],
  },
  {
    year: "Year 2",
    title: "해외 기존 공장 확산",
    items: [
      "Q1 — 거점별 영향 평가 및 우선순위 확정",
      "Q2 — 거점 백업·복구 정책 표준화",
      "Q3 — 본사-거점 통합 모니터링 구축",
      "Q4 — 글로벌 합동 모의훈련",
    ],
  },
  {
    year: "Year 3",
    title: "신규 공장 그린필드 & 전사 최적화",
    items: [
      "신규 공장 구축 단계부터 BCP 표준 적용",
      "Runbook 자동화 및 SOAR 연계",
      "전사 BCP 거버넌스 정착",
      "정기 외부 감사 및 인증 (ISO 22301 등)",
    ],
  },
];

export default function BCPPage() {
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
              <Badge color="cyan">BCP_SOLUTION</Badge>
              <span className="font-mono text-xs text-muted uppercase tracking-widest">
                ISO 22301 · Business Continuity Planning
              </span>
            </div>

            <h1 className="font-display leading-[0.95] mb-10">
              <span className="block text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-white">
                BCP 솔루션
              </span>
              <span className="block text-[clamp(2rem,4vw,4rem)] font-light tracking-widest ds-text-glow-cyan text-cyan mt-3">
                BUSINESS CONTINUITY PLANNING
              </span>
            </h1>

            <p className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-white leading-tight ds-word-keep mb-8 max-w-4xl">
              해킹, 서버 장애, 화재, 재난이 발생해도
              <br />
              <span className="ds-text-glow-acid text-acid">생산은 멈추지 않습니다.</span>
            </p>

            <p className="font-sans text-muted-strong text-base sm:text-lg leading-relaxed max-w-3xl border-l-2 border-cyan/30 pl-5 ds-word-keep mb-12">
              아인스테크는 제조 기업의 업무 연속성과 데이터 안전을 동시에 보장하는
              <span className="text-white"> BCP 체계를 설계·구축</span>합니다.
              30년 인프라 운영 경험과 검증된 글로벌 벤더 솔루션을 한 묶음으로 제공합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <PrimaryButton href="/contact" className="flex-1">
                BCP 도입 문의하기
              </PrimaryButton>
              <SecondaryButton href="#process" className="flex-1">
                5단계 프로세스 보기
              </SecondaryButton>
            </div>
          </div>
        </section>

        {/* BCP란? */}
        <section id="what" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="DEFINITION"
              badgeColor="cyan"
              sectionLabel="1. BCP — 멈추지 않는 비즈니스의 설계도"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                BCP는 <span className="text-cyan">국제 표준 ISO 22301</span> 기반의
                <br />
                업무 연속성 관리 체계입니다.
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 lg:pl-12">
              {purposes.map((p) => (
                <GlassPanel
                  key={p.index}
                  className="p-8 lg:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-10 relative">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-muted tracking-widest uppercase group-hover:text-cyan transition-colors">
                        GOAL_{p.index}
                      </span>
                      <span className="font-mono text-[10px] text-acid">{p.tag}</span>
                    </div>
                    <div className="font-display text-7xl font-bold ds-text-outline opacity-10 pointer-events-none absolute -top-4 -right-2 group-hover:opacity-30 transition-opacity">
                      {p.index}
                    </div>
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-4 ds-word-keep">
                    {p.title}
                  </h3>
                  <p className="font-sans text-muted-strong text-[15px] leading-relaxed ds-word-keep flex-grow">
                    {p.desc}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </div>
        </section>

        {/* 위험 진단 */}
        <section id="risk" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-acid/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="RISK_DIAG"
              badgeColor="acid"
              sectionLabel="2. Diagnosis — 지금 우리 기업은 괜찮은가?"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-5xl">
                <span className="text-muted font-serif opacity-40 -ml-2 lg:-ml-6 mr-1">"</span>
                백업은 돌고 있는데,
                <br />
                <span className="ds-text-glow-acid text-acid">막상 복구가 안 됩니다.</span>
                <span className="text-muted font-serif opacity-40 ml-2">"</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 lg:pl-12">
              {risks.map((r) => (
                <GlassPanel
                  key={r.index}
                  className="p-8 lg:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-10 relative">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-cyan tracking-widest uppercase">
                        RISK_{r.index}
                      </span>
                      <span className="font-mono text-[10px] text-alert animate-pulse-fast">
                        {r.tag}
                      </span>
                    </div>
                    <div className="font-display text-7xl font-bold ds-text-outline opacity-10 pointer-events-none absolute -top-4 -right-2 group-hover:opacity-30 transition-opacity">
                      {r.index}
                    </div>
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-6 ds-word-keep">
                    {r.title}
                  </h3>
                  <ul className="space-y-3 mb-2">
                    {r.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 bg-cyan flex-shrink-0" />
                        <span className="font-sans text-muted-strong text-[14px] leading-relaxed ds-word-keep">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </GlassPanel>
              ))}
            </div>
          </div>
        </section>

        {/* 5단계 프로세스 */}
        <section id="process" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-acid/30 to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="PROCESS"
              badgeColor="cyan"
              sectionLabel="3. Process — BCP 구축 5단계 타임라인"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                <span className="text-cyan">기획 → 분석 → 전략 → 계획 → 운영</span>
                <br />
                단계별 정형화된 실행 모델
              </h2>
            </SectionHeader>

            <div className="lg:pl-12 space-y-4">
              {process.map((p, idx) => (
                <GlassPanel
                  key={p.step}
                  className="p-6 lg:p-8 flex flex-col md:flex-row gap-6 md:items-center group hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="flex items-center gap-4 md:w-72 flex-shrink-0">
                    <div className="font-display text-5xl md:text-6xl font-bold ds-text-outline opacity-30 group-hover:text-cyan group-hover:opacity-100 transition-all duration-500">
                      {p.step}
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-muted uppercase tracking-widest">
                        STEP_{p.step}
                      </span>
                      {idx < process.length - 1 && (
                        <span className="font-mono text-[10px] text-cyan">→ NEXT</span>
                      )}
                    </div>
                  </div>
                  <div className="flex-1 border-l border-surface-border/40 md:pl-6">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2 ds-word-keep">
                      {p.title}
                    </h3>
                    <p className="font-sans text-muted-strong text-[15px] leading-relaxed ds-word-keep">
                      {p.desc}
                    </p>
                  </div>
                </GlassPanel>
              ))}
            </div>
          </div>
        </section>

        {/* 3-Tier 계층 모델 */}
        <section id="tier" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-acid/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="TIER_MODEL"
              badgeColor="acid"
              sectionLabel="4. Architecture — 3-Tier 계층 복구 모델"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                중요도에 따라 시스템을 분류하고
                <br />
                <span className="ds-text-glow-acid text-acid">투자 효율을 극대화</span>합니다.
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 lg:pl-12">
              {tiers.map((t) => {
                const accent =
                  t.color === "acid"
                    ? "text-acid"
                    : t.color === "cyan"
                      ? "text-cyan"
                      : "text-muted";
                const bg =
                  t.color === "acid"
                    ? "bg-acid"
                    : t.color === "cyan"
                      ? "bg-cyan"
                      : "bg-muted";
                return (
                  <GlassPanel
                    key={t.tier}
                    className="p-8 lg:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex flex-col">
                        <span className="font-mono text-[10px] text-muted uppercase tracking-widest">
                          PRIORITY_TIER
                        </span>
                        <span className={`font-display text-3xl font-bold ${accent}`}>
                          {t.tier}
                        </span>
                      </div>
                      <span className={`w-3 h-3 ${bg} animate-pulse-fast`} />
                    </div>

                    <div className="font-mono text-[11px] text-cyan uppercase tracking-widest mb-4">
                      {t.priority}
                    </div>

                    <p className="font-sans text-muted-strong text-[14px] leading-relaxed ds-word-keep mb-6 flex-grow">
                      {t.desc}
                    </p>

                    <div className="space-y-3 pt-6 border-t border-surface-border/50">
                      <div className="flex justify-between font-mono text-[11px]">
                        <span className="text-muted uppercase tracking-widest">SYSTEMS</span>
                        <span className="text-white text-right">{t.systems.join(" · ")}</span>
                      </div>
                      <div className="flex justify-between font-mono text-[11px]">
                        <span className="text-muted uppercase tracking-widest">DR_SITE</span>
                        <span className={accent}>{t.site}</span>
                      </div>
                      <div className="flex justify-between font-mono text-[11px]">
                        <span className="text-muted uppercase tracking-widest">RTO_TARGET</span>
                        <span className={accent}>{t.rto}</span>
                      </div>
                    </div>
                  </GlassPanel>
                );
              })}
            </div>
          </div>
        </section>

        {/* 보안 강화 구성 */}
        <section id="security" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="SEC_HARDENING"
              badgeColor="cyan"
              sectionLabel="5. Security — 검증된 보안 강화 구성"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                백업이 살아있어야
                <br />
                <span className="text-cyan">복구가 의미가 있습니다.</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 lg:pl-12">
              {securityItems.map((s) => (
                <GlassPanel
                  key={s.index}
                  className="p-7 lg:p-8 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 border border-cyan/40 bg-cyan/5 flex items-center justify-center flex-shrink-0">
                      <span className="font-mono text-cyan text-sm font-bold">{s.index}</span>
                    </div>
                    <h3 className="font-display text-lg lg:text-xl font-bold text-white ds-word-keep leading-snug">
                      {s.title}
                    </h3>
                  </div>
                  <p className="font-sans text-muted-strong text-[14px] leading-relaxed ds-word-keep">
                    {s.desc}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </div>
        </section>

        {/* 구축 로드맵 */}
        <section id="roadmap" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-acid/30 via-cyan/30 to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="ROADMAP"
              badgeColor="acid"
              sectionLabel="6. Roadmap — 3년 단계별 확산 계획"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                본사 → 해외 거점 → 전사 표준
                <br />
                <span className="ds-text-glow-acid text-acid">3년 로드맵</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 lg:pl-12">
              {roadmap.map((r, idx) => (
                <GlassPanel
                  key={r.year}
                  className="p-8 lg:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-1">
                        TIMELINE_{idx + 1}
                      </div>
                      <div className="font-display text-3xl font-bold text-cyan">{r.year}</div>
                    </div>
                    <span className="font-mono text-[10px] text-acid">
                      {idx === 0 ? "FOUNDATION" : idx === 1 ? "EXPANSION" : "OPTIMIZE"}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-6 ds-word-keep">
                    {r.title}
                  </h3>
                  <ul className="space-y-3">
                    {r.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5"
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
                        <span className="font-sans text-[14px] text-muted-strong leading-relaxed ds-word-keep">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </GlassPanel>
              ))}
            </div>
          </div>
        </section>

        {/* 왜 아인스테크인가 */}
        <section id="why" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="WHY_EINSTECH"
              badgeColor="cyan"
              sectionLabel="7. Why — 단일 벤더 BCP 책임자"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-5xl">
                <span className="text-cyan">DLP · Veritas · Acronis · Hitachi · Dell · HP</span>
                <br />
                전 영역을 한 책임자가 설계합니다.
              </h2>
            </SectionHeader>

            <div className="lg:pl-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <GlassPanel className="p-8 lg:p-10 flex flex-col">
                <div className="font-mono text-[10px] text-acid uppercase tracking-widest mb-3">
                  ALL_VENDOR_CAPABILITY
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-6 ds-word-keep">
                  전 영역 벤더 역량
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {["DLP", "Veritas", "Acronis", "Hitachi", "Dell", "HP"].map((v) => (
                    <div
                      key={v}
                      className="bg-black/40 border border-surface-border px-4 py-3 font-mono text-sm text-white text-center"
                    >
                      {v}
                    </div>
                  ))}
                </div>
              </GlassPanel>

              <GlassPanel className="p-8 lg:p-10 flex flex-col">
                <div className="font-mono text-[10px] text-cyan uppercase tracking-widest mb-3">
                  END_TO_END_OWNERSHIP
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-6 ds-word-keep">
                  End-to-End 단일 책임
                </h3>
                <ol className="space-y-4">
                  {[
                    { label: "BIA 분석", desc: "업무 영향도 평가부터 시작" },
                    { label: "DR 센터 구축", desc: "Hot/Warm/Cold 사이트 설계" },
                    { label: "운영 매뉴얼", desc: "장애 유형별 Runbook 작성" },
                    { label: "정기 모의훈련", desc: "연 1회 이상 실복구 검증" },
                  ].map((step, idx) => (
                    <li key={step.label} className="flex items-start gap-4">
                      <span className="w-7 h-7 border border-cyan/40 bg-cyan/5 text-cyan font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="font-display text-white font-bold">{step.label}</div>
                        <div className="font-sans text-muted-strong text-sm">{step.desc}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </GlassPanel>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="py-24 lg:py-32 relative">
          <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            <GlassPanel
              ctaFrame
              className="w-full lg:ml-12 p-8 md:p-16 lg:p-20 flex flex-col items-center text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div
                className="font-display text-[8rem] md:text-[12rem] font-bold ds-text-outline opacity-5 pointer-events-none absolute -top-10 md:-top-16 -right-4 md:-right-8 select-none"
                aria-hidden
              >
                BCP
              </div>

              <Badge color="acid" className="mb-6">
                BCP_READY
              </Badge>

              <h3 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep mb-8 max-w-4xl relative z-10">
                지금이 BCP 설계를
                <br />
                <span className="ds-text-glow-acid-strong text-acid">시작할 때</span>입니다.
              </h3>

              <p className="font-sans text-muted-strong text-base md:text-xl leading-relaxed ds-word-keep max-w-2xl mx-auto mb-12 relative z-10">
                현재 운영 인프라를 점검하고, 우리 회사에 맞는
                <br className="hidden md:block" />
                BCP 도입 시나리오를 무료로 컨설팅해 드립니다.
              </p>

              <div className="w-full max-w-2xl mx-auto relative z-10 flex flex-col items-center mb-8">
                <div className="ds-cta-btn-wrapper w-full">
                  <a
                    href="/contact"
                    className="w-full bg-acid text-void font-display font-bold text-[clamp(1.1rem,2.5vw,2rem)] py-6 md:py-8 px-6 md:px-8 flex items-center justify-center gap-4 group hover:bg-white transition-colors duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 tracking-tight ds-word-keep">
                      BCP 도입 및 컨설팅 문의하기
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
                href="mailto:sungil.yum@einstech.kr?subject=BCP%20%EB%8F%84%EC%9E%85%20%EB%AC%B8%EC%9D%98"
                className="font-mono text-sm text-cyan hover:text-white transition-colors"
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
