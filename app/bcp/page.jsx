import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import GlassPanel from "@/components/ds/GlassPanel";
import SectionHeader from "@/components/ds/SectionHeader";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";

export const metadata = {
  title: "DR 솔루션 — EINSTECH | Disaster Recovery · Cyber Resilience",
  description:
    "랜섬웨어·서버 장애·재난이 발생해도 비즈니스는 멈추지 않습니다. 아인스테크는 Isolated Recovery, Immutable Vault, Active-Active 이중화를 통합해 사이버 회복탄력성(Cyber Resilience) 체계를 설계·구축합니다.",
};

const purposes = [
  {
    index: "01",
    tag: "ASSUME_BREACH",
    title: "예방이 아닌 회복",
    desc: "공격은 언젠가 성공합니다. 침해를 전제로 한 설계로 핵심 생산·서비스가 멈추지 않도록 합니다.",
  },
  {
    index: "02",
    tag: "RAPID_CONTAIN",
    title: "신속한 격리·복구",
    desc: "Isolated Recovery Environment(IRE)에서 깨끗한 데이터만 검증 후 운영망에 복귀시켜 재감염을 차단합니다.",
  },
  {
    index: "03",
    tag: "RECOVERY_IN_HOURS",
    title: "시간 단위 복구",
    desc: "Automated Runbook + Orchestration으로 일(day) 단위가 아닌 시간(hour) 단위로 복구 시간을 단축합니다.",
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
    tag: "RECOVERY_GAP",
    title: "복구 사각지대 (Recovery Gap)",
    points: [
      "백업은 있지만 Immutable·Air-gap 미적용",
      "Clean Room/IRE 부재 — 감염 데이터 그대로 복원",
      "RTO/RPO 실측 미검증 — 종이상의 약속만 존재",
    ],
  },
  {
    index: "03",
    tag: "BLIND_SITE",
    title: "글로벌 거점 가시성 부재",
    points: [
      "해외 공장 백업·DR 정책 표준 부재",
      "본사에서 거점 상태를 실시간 파악 불가",
      "장애 발생 시 보고 라인 지연",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "범위 정의 & 거버넌스 설계",
    desc: "DR 적용 대상 시스템·조직·시나리오를 정의하고 Resilience Governance 체계를 수립합니다.",
  },
  {
    step: "02",
    title: "Risk & Impact Analysis (BIA)",
    desc: "각 업무의 중요도·의존성을 평가하고 RTO·RPO 목표치를 시스템별로 확정합니다.",
  },
  {
    step: "03",
    title: "복구 아키텍처 설계",
    desc: "Active-Active · Hot Standby · Cold DR · Cloud DR을 비용·시간·리스크 트레이드오프로 선택합니다.",
  },
  {
    step: "04",
    title: "자동화 Runbook 작성",
    desc: "장애 유형별 절차를 SOAR/오케스트레이션으로 자동화하고 담당자·연락망을 코드화합니다.",
  },
  {
    step: "05",
    title: "정기 모의훈련 & 검증",
    desc: "분기별 실제 복구 시연(Live Restore Drill)으로 DR이 실제 작동하는 살아있는 체계로 운영합니다.",
  },
];

const tiers = [
  {
    tier: "Tier 0",
    priority: "최우선 — 생산 직결",
    color: "acid",
    systems: ["MES", "EICM", "QMS"],
    site: "Active-Active",
    rto: "≤ 5분",
    desc: "생산 라인이 직접 의존하는 시스템. 실시간 복제와 자동 페일오버가 필수이며 사실상 무중단 운영을 목표합니다.",
  },
  {
    tier: "Tier 1",
    priority: "우선 — 물류·구매",
    color: "cyan",
    systems: ["ERP", "SCM"],
    site: "Hot Standby",
    rto: "≤ 1시간",
    desc: "공급망과 거래에 직결되는 기간계 시스템. Isolated Recovery로 침해 시에도 1시간 내 클린 복구합니다.",
  },
  {
    tier: "Tier 2",
    priority: "지원 — 일반 행정",
    color: "muted",
    systems: ["그룹웨어", "메일", "회계"],
    site: "Cloud DR",
    rto: "≤ 8시간",
    desc: "직접적인 생산 영향은 없지만 업무 효율과 컴플라이언스를 위해 클라우드 DR로 보호합니다.",
  },
];

const securityItems = [
  {
    index: "01",
    title: "Immutable Vault (불변 백업)",
    desc: "WORM·S3 Object Lock 기반의 변경 불가 백업으로 랜섬웨어가 백업까지 암호화하지 못하게 합니다.",
  },
  {
    index: "02",
    title: "Air-Gap (논리·물리적 격리)",
    desc: "백업 저장소를 운영 네트워크와 차단해 측면 이동(lateral movement) 공격 경로를 끊습니다.",
  },
  {
    index: "03",
    title: "3-2-1-1-0 백업 규칙",
    desc: "데이터 3개 사본, 2가지 매체, 1개 원격지, 1개 오프라인(Immutable), 0개 검증 오류 — 2026년 새 표준.",
  },
  {
    index: "04",
    title: "Isolated Recovery Environment",
    desc: "Clean Room에서 백업을 격리 복원·스캔·검증 후에만 운영망에 반입해 재감염을 원천 차단합니다.",
  },
  {
    index: "05",
    title: "Zero Trust 데이터 회복탄력성",
    desc: "복구 작업자도 신원 검증 후에만 접근. 권한 분리(SoD)와 MFA로 내부 위협까지 통제합니다.",
  },
];

const roadmap = [
  {
    year: "Year 1",
    title: "본사 DR 시스템 구축",
    items: [
      "Q1 — 현행 분석 및 Risk/Impact Analysis 수행",
      "Q2 — IRE(Clean Room) + Immutable Vault 구축",
      "Q3 — Tier 0/1 Active-Active 페일오버 적용",
      "Q4 — 1차 실복구 모의훈련 (Live Restore Drill)",
    ],
  },
  {
    year: "Year 2",
    title: "해외 거점 확산",
    items: [
      "Q1 — 거점별 영향 평가 및 우선순위 확정",
      "Q2 — 거점 Immutable Backup 정책 표준화",
      "Q3 — 본사-거점 통합 가시성(Observability) 구축",
      "Q4 — 글로벌 합동 사이버 회복 훈련",
    ],
  },
  {
    year: "Year 3",
    title: "자동화 & 거버넌스 표준화",
    items: [
      "신규 시스템 구축 단계부터 DR-by-Design 적용",
      "SOAR 연계 자동화 Runbook 전사 표준화",
      "Resilience Governance 정착 및 KPI 관리",
      "ISO 27031 · ISO 22301 외부 인증",
    ],
  },
];

export default function DRPage() {
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
              <Badge color="cyan">DR_SOLUTION</Badge>
              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                ISO 27031 · Cyber Resilience · Assume Breach
              </span>
            </div>

            <h1 className="font-display leading-[0.95] mb-10">
              <span className="block text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-slate-900">
                DR 솔루션
              </span>
              <span className="block text-[clamp(2rem,4vw,4rem)] font-light tracking-widest ds-text-glow-cyan text-navy mt-3">
                DISASTER RECOVERY
              </span>
            </h1>

            <p className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-slate-900 leading-tight ds-word-keep mb-8 max-w-4xl">
              위협은 예방이 아닌
              <br />
              <span className="ds-text-glow-acid text-emerald">회복으로 답합니다.</span>
            </p>

            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl border-l-2 border-navy/30 pl-5 ds-word-keep mb-12">
              랜섬웨어·서버 장애·재난이 발생해도 비즈니스는 멈추지 않습니다.
              아인스테크는 <span className="text-slate-900">Isolated Recovery, Immutable Vault, Active-Active 이중화</span>를
              통합해 사이버 회복탄력성(Cyber Resilience) 체계를 설계·구축합니다.
              엔지니어의 30년 인프라 운영 경험과 검증된 글로벌 벤더 솔루션을 한 묶음으로 제공합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <PrimaryButton href="/contact" className="flex-1">
                DR 솔루션 도입 문의
              </PrimaryButton>
              <SecondaryButton href="#process" className="flex-1">
                5단계 프로세스 보기
              </SecondaryButton>
            </div>
          </div>
        </section>

        {/* DR란? */}
        <section id="what" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="DEFINITION"
              badgeColor="cyan"
              sectionLabel="1. DR — 사이버 회복탄력성의 설계도"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                현대 DR은 <span className="text-navy">Assume Breach</span>를
                <br />
                전제로 한 회복탄력성 체계입니다.
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
                      <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase group-hover:text-navy transition-colors">
                        GOAL_{p.index}
                      </span>
                      <span className="font-mono text-[10px] text-emerald">{p.tag}</span>
                    </div>
                    <div className="font-display text-7xl font-bold ds-text-outline opacity-10 pointer-events-none absolute -top-4 -right-2 group-hover:opacity-30 transition-opacity">
                      {p.index}
                    </div>
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-slate-900 mb-4 ds-word-keep">
                    {p.title}
                  </h3>
                  <p className="font-sans text-slate-600 text-[15px] leading-relaxed ds-word-keep flex-grow">
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
              sectionLabel="2. Diagnosis — 우리 기업의 Recovery Gap"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-5xl">
                <span className="text-slate-500 font-serif opacity-40 -ml-2 lg:-ml-6 mr-1">"</span>
                백업은 돌고 있는데,
                <br />
                <span className="ds-text-glow-acid text-emerald">막상 복구가 안 됩니다.</span>
                <span className="text-slate-500 font-serif opacity-40 ml-2">"</span>
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
                      <span className="font-mono text-[10px] text-navy tracking-widest uppercase">
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
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-slate-900 mb-6 ds-word-keep">
                    {r.title}
                  </h3>
                  <ul className="space-y-3 mb-2">
                    {r.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 bg-navy flex-shrink-0" />
                        <span className="font-sans text-slate-600 text-[14px] leading-relaxed ds-word-keep">
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
              sectionLabel="3. Process — DR 구축 5단계 타임라인"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                <span className="text-navy">기획 → 분석 → 설계 → 자동화 → 검증</span>
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
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                중요도에 따라 시스템을 분류하고
                <br />
                <span className="ds-text-glow-acid text-emerald">투자 효율을 극대화</span>합니다.
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 lg:pl-12">
              {tiers.map((t) => {
                const accent =
                  t.color === "acid"
                    ? "text-emerald"
                    : t.color === "cyan"
                      ? "text-navy"
                      : "text-slate-500";
                const bg =
                  t.color === "acid"
                    ? "bg-emerald"
                    : t.color === "cyan"
                      ? "bg-navy"
                      : "bg-slate-100";
                return (
                  <GlassPanel
                    key={t.tier}
                    className="p-8 lg:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex flex-col">
                        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                          PRIORITY_TIER
                        </span>
                        <span className={`font-display text-3xl font-bold ${accent}`}>
                          {t.tier}
                        </span>
                      </div>
                      <span className={`w-3 h-3 ${bg} animate-pulse-fast`} />
                    </div>

                    <div className="font-mono text-[11px] text-navy uppercase tracking-widest mb-4">
                      {t.priority}
                    </div>

                    <p className="font-sans text-slate-600 text-[14px] leading-relaxed ds-word-keep mb-6 flex-grow">
                      {t.desc}
                    </p>

                    <div className="space-y-3 pt-6 border-t border-slate-200/50">
                      <div className="flex justify-between font-mono text-[11px]">
                        <span className="text-slate-500 uppercase tracking-widest">SYSTEMS</span>
                        <span className="text-slate-900 text-right">{t.systems.join(" · ")}</span>
                      </div>
                      <div className="flex justify-between font-mono text-[11px]">
                        <span className="text-slate-500 uppercase tracking-widest">DR_MODE</span>
                        <span className={accent}>{t.site}</span>
                      </div>
                      <div className="flex justify-between font-mono text-[11px]">
                        <span className="text-slate-500 uppercase tracking-widest">RTO_TARGET</span>
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
              sectionLabel="5. Security — Cyber Resilience 핵심 구성"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                백업이 살아있어야
                <br />
                <span className="text-navy">복구가 의미가 있습니다.</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 lg:pl-12">
              {securityItems.map((s) => (
                <GlassPanel
                  key={s.index}
                  className="p-7 lg:p-8 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 border border-navy/40 bg-navy/5 flex items-center justify-center flex-shrink-0">
                      <span className="font-mono text-navy text-sm font-bold">{s.index}</span>
                    </div>
                    <h3 className="font-display text-lg lg:text-xl font-bold text-slate-900 ds-word-keep leading-snug">
                      {s.title}
                    </h3>
                  </div>
                  <p className="font-sans text-slate-600 text-[14px] leading-relaxed ds-word-keep">
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
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                본사 → 해외 거점 → 전사 표준
                <br />
                <span className="ds-text-glow-acid text-emerald">3년 로드맵</span>
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
                      <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1">
                        TIMELINE_{idx + 1}
                      </div>
                      <div className="font-display text-3xl font-bold text-navy">{r.year}</div>
                    </div>
                    <span className="font-mono text-[10px] text-emerald">
                      {idx === 0 ? "FOUNDATION" : idx === 1 ? "EXPANSION" : "OPTIMIZE"}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-6 ds-word-keep">
                    {r.title}
                  </h3>
                  <ul className="space-y-3">
                    {r.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
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
                        <span className="font-sans text-[14px] text-slate-600 leading-relaxed ds-word-keep">
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
              sectionLabel="7. Why — 단일 DR 파트너"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-5xl">
                <span className="text-navy">HP · Hitachi · Acronis · Brocade · Rose</span>
                <br />
                전 영역을 전문 컨설턴트가 설계합니다.
              </h2>
            </SectionHeader>

            <div className="lg:pl-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <GlassPanel className="p-8 lg:p-10 flex flex-col">
                <div className="font-mono text-[10px] text-emerald uppercase tracking-widest mb-3">
                  ALL_VENDOR_CAPABILITY
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-6 ds-word-keep">
                  전 영역 벤더 역량
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {["HP", "Hitachi", "Acronis", "Brocade", "Rose"].map((v) => (
                    <div
                      key={v}
                      className="bg-black/40 border border-slate-200 px-4 py-3 font-mono text-sm text-slate-900 text-center"
                    >
                      {v}
                    </div>
                  ))}
                </div>
              </GlassPanel>

              <GlassPanel className="p-8 lg:p-10 flex flex-col">
                <div className="font-mono text-[10px] text-navy uppercase tracking-widest mb-3">
                  END_TO_END_PARTNER
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-6 ds-word-keep">
                  End-to-End 단일 파트너
                </h3>
                <ol className="space-y-4">
                  {[
                    { label: "Risk & Impact Analysis", desc: "업무 영향도·의존성 평가" },
                    { label: "IRE + Immutable Vault", desc: "Clean Room 복구 환경 구축" },
                    { label: "Automated Runbook", desc: "SOAR 연계 절차 자동화" },
                    { label: "정기 Live Restore Drill", desc: "분기별 실복구 검증" },
                  ].map((step, idx) => (
                    <li key={step.label} className="flex items-start gap-4">
                      <span className="w-7 h-7 border border-navy/40 bg-navy/5 text-navy font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="font-display text-slate-900 font-bold">{step.label}</div>
                        <div className="font-sans text-slate-600 text-sm">{step.desc}</div>
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
                DR
              </div>

              <Badge color="acid" className="mb-6">
                DR_READY
              </Badge>

              <h3 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep mb-8 max-w-4xl relative z-10">
                지금이 DR 설계를
                <br />
                <span className="ds-text-glow-acid-strong text-emerald">시작할 때</span>입니다.
              </h3>

              <p className="font-sans text-slate-600 text-base md:text-xl leading-relaxed ds-word-keep max-w-2xl mx-auto mb-12 relative z-10">
                현재 운영 인프라를 점검하고, 우리 회사에 맞는
                <br className="hidden md:block" />
                DR 도입 시나리오를 무료로 컨설팅해 드립니다.
              </p>

              <div className="w-full max-w-2xl mx-auto relative z-10 flex flex-col items-center mb-8">
                <div className="ds-cta-btn-wrapper w-full">
                  <a
                    href="/contact"
                    className="w-full bg-emerald text-void font-display font-bold text-[clamp(1.1rem,2.5vw,2rem)] py-6 md:py-8 px-6 md:px-8 flex items-center justify-center gap-4 group hover:bg-white transition-colors duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 tracking-tight ds-word-keep">
                      DR 솔루션 도입 및 컨설팅 문의
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
                href="mailto:sungil.yum@einstech.kr?subject=DR%20%EC%86%94%EB%A3%A8%EC%85%98%20%EB%AC%B8%EC%9D%98"
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
