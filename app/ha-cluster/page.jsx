import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import GlassPanel from "@/components/ds/GlassPanel";
import SectionHeader from "@/components/ds/SectionHeader";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";

export const metadata = {
  title: "HA Cluster — Rose HA · Mantech MCCS | EINSTECH",
  description:
    "단일 장애가 비즈니스를 멈추지 않게. 아인스테크는 글로벌 표준 Rose HA와 국내 1위 맨텍 MCCS를 환경에 맞춰 설계·구축합니다. Active-Standby부터 SANless·DR까지 한 파트너로.",
};

const whyCards = [
  {
    index: "01",
    tag: "ZERO_DOWNTIME",
    title: "단일 장애에 비즈니스가 멈추지 않게",
    desc: "서버·OS·애플리케이션·네트워크 어느 한 지점이 무너져도 클러스터가 자동으로 다른 노드로 서비스를 넘겨 운영을 이어갑니다. 사람이 깨어 있지 않아도 됩니다.",
  },
  {
    index: "02",
    tag: "SECONDS_FAILOVER",
    title: "초 단위 페일오버",
    desc: "기존 백업·복구는 시간(hour) 단위. HA Cluster는 초(second) 단위로 서비스를 인계합니다. RTO를 분 미만으로 끌어내려 매출 손실과 SLA 패널티를 막습니다.",
  },
  {
    index: "03",
    tag: "PROACTIVE_DETECT",
    title: "장애를 '감지'가 아닌 '예측'",
    desc: "서버 hang·리소스 임계·디스크 IO 이상까지 행위 기반으로 사전 감지해, 장애가 발생하기 전에 페일오버를 미리 실행합니다.",
  },
];

const lineup = [
  {
    badge: "GLOBAL_STANDARD",
    name: "Rose HA",
    vendor: "Rose Datasystems",
    color: "cyan",
    tag: "글로벌 표준",
    fit: "글로벌 거점·외산 인프라 표준화 환경",
    strengths: [
      "Windows·Linux·UNIX 전 영역 지원",
      "30년 이상 검증된 글로벌 레퍼런스",
      "Active-Standby · Active-Active · SANless 전 모드 지원",
      "다중 사이트 DR 통합 구성",
    ],
    fitFor: [
      "글로벌 다국적 기업의 표준 HA",
      "본사·해외 거점 동일 정책 적용",
      "Veritas/Symantec 대체 전환",
    ],
  },
  {
    badge: "DOMESTIC_NO1",
    name: "Mantech MCCS",
    vendor: "맨텍솔루션 · 국내 HA 1위",
    color: "acid",
    tag: "국내 1위 · 영구 라이선스",
    fit: "국내 제조·금융·공공기관 핵심 시스템",
    strengths: [
      "GS 인증 1등급 (한국산업기술시험원)",
      "영구 라이선스 — 구독료 부담 없음",
      "24×365 국내 전담 엔지니어 즉시 지원",
      "외부 스토리지 없이 SANless 이중화 가능",
    ],
    fitFor: [
      "국내 대형 PCB 제조사 핵심 생산 시스템",
      "구축·운영·장애 대응 모두 한국어 일원화",
      "Core 단위 외산 라이선스 비용 절감",
    ],
  },
];

const compareRows = [
  {
    crit: "라이선스 모델",
    rose: "글로벌 표준 라이선스 — 다국가 통합 계약",
    mccs: "영구 라이선스 — 장기 보유 비용 최소",
  },
  {
    crit: "지원 OS",
    rose: "Windows · Linux · UNIX(AIX/HP-UX/Solaris)",
    mccs: "Windows · Linux (물리·가상·하이브리드)",
  },
  {
    crit: "구성 모드",
    rose: "Active-Standby · Active-Active · N+1 · DR 통합",
    mccs: "Active-Standby · Workgroup(2노드) · Enterprise(다중노드)",
  },
  {
    crit: "스토리지 구성",
    rose: "공유 스토리지 · 복제 기반 SANless",
    mccs: "외부 스토리지 불필요 — Local Disk Replication 내장",
  },
  {
    crit: "장애 감지",
    rose: "서비스·리소스·네트워크 다층 감시",
    mccs: "Server Hang 감지 · Split-Brain 방지 내장",
  },
  {
    crit: "기술지원",
    rose: "글로벌 본사 + 아인스테크 국내 전담",
    mccs: "맨텍 + 아인스테크 — 국내 100% 즉시 대응",
  },
  {
    crit: "적합 환경",
    rose: "글로벌 거점·다국적 표준화·외산 인프라",
    mccs: "국내 핵심 시스템·비용 효율·즉시 지원 필요",
  },
];

const scenarios = [
  {
    index: "01",
    tag: "ACTIVE_STANDBY",
    title: "Active-Standby (정통 이중화)",
    desc: "운영 노드(Active)와 대기 노드(Standby)를 한 쌍으로 묶어, 장애 시 대기 노드가 즉시 인계. 가장 검증된 구조로 ERP·MES 같은 단일 인스턴스 기간계에 적합합니다.",
    rto: "≤ 30초",
  },
  {
    index: "02",
    tag: "ACTIVE_ACTIVE",
    title: "Active-Active (병렬 운영)",
    desc: "두 노드가 모두 운영 상태로 부하를 분산. 한쪽 장애 시에도 서비스 중단이 없으며, 평시에도 자원 활용률이 높아 Tier 0 핵심 생산 시스템에 적용합니다.",
    rto: "≤ 5초",
  },
  {
    index: "03",
    tag: "SANLESS_HA",
    title: "SANless HA (스토리지 없이)",
    desc: "고가의 공유 스토리지 없이 로컬 디스크 간 실시간 복제로 HA를 구성. 초기 도입 비용을 낮추면서도 동일한 가용성을 확보합니다. 중견 제조·지점 환경에 최적.",
    rto: "≤ 60초",
  },
  {
    index: "04",
    tag: "MULTI_SITE_DR",
    title: "Multi-Site DR (재해 복구 확장)",
    desc: "본사 HA에 원격지 DR 노드를 추가해 지진·정전·랜섬웨어 등 사이트 단위 재해까지 대응. Rose HA 다중 사이트 구성 또는 MCCS + MDRM 조합으로 구현.",
    rto: "≤ 5분",
  },
];

const process = [
  {
    step: "01",
    title: "현행 분석",
    desc: "보호 대상 시스템·OS·DB·애플리케이션을 식별하고 현재 RTO/RPO 실측치와 목표치 간 격차를 정량화합니다.",
  },
  {
    step: "02",
    title: "제품 선정 (Rose / MCCS)",
    desc: "OS·예산·운영 인력·글로벌 정책을 종합해 적합한 제품을 선정. 같은 회사 내에서도 시스템별로 혼용 설계 가능합니다.",
  },
  {
    step: "03",
    title: "아키텍처 설계",
    desc: "Active-Standby · Active-Active · SANless · DR 확장 중 비용·리스크 트레이드오프로 구성을 확정합니다.",
  },
  {
    step: "04",
    title: "무중단 구축·검증",
    desc: "운영 서비스를 멈추지 않고 클러스터를 구성. 강제 페일오버 시뮬레이션으로 RTO 실측 검증을 통과해야 인계합니다.",
  },
  {
    step: "05",
    title: "운영 인계 & 24/7 지원",
    desc: "운영 매뉴얼·장애 대응 절차를 코드화하고 24×365 모니터링·기술지원으로 인계합니다.",
  },
];

const references = [
  {
    industry: "반도체 PCB 제조",
    customer: "S PCB 제조사",
    solution: "Mantech MCCS",
    desc: "국내 대형 반도체 PCB 제조사가 핵심 생산 시스템 이중화에 MCCS를 운영 중. 외산 솔루션 대비 즉시 지원과 영구 라이선스의 안정성을 확보.",
    color: "acid",
  },
  {
    industry: "배터리 소재 국내 거점",
    customer: "E 배터리 소재 제조사",
    solution: "Rose HA · 포항 공장",
    desc: "포항 배터리 소재 생산 공장의 핵심 시스템에 Rose HA를 적용. 글로벌 표준 라이선스로 본사·해외 거점과 일관된 HA 정책 운영.",
    color: "cyan",
  },
  {
    industry: "배터리 소재 글로벌 거점",
    customer: "E 배터리 소재 제조사",
    solution: "Mantech MCCS · 헝가리 공장",
    desc: "헝가리 배터리 소재 생산 거점의 핵심 시스템 이중화에 MCCS를 적용. 국내 거점과 함께 Rose HA·MCCS 듀얼 라인업으로 환경별 최적화.",
    color: "acid",
  },
  {
    industry: "공공·금융 기간계",
    customer: "비공개 (NDA)",
    solution: "Active-Standby · DR 통합",
    desc: "기간계 ERP·코어뱅킹 시스템을 Active-Standby로 이중화하고 원격지 DR을 결합해 RTO 5분·RPO 0 달성.",
    color: "cyan",
  },
];

export default function HAClusterPage() {
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
              <Badge color="cyan">HA_CLUSTER</Badge>
              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                Rose HA · Mantech MCCS · Dual Lineup
              </span>
            </div>

            <h1 className="font-display leading-[0.95] mb-10">
              <span className="block text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-slate-900">
                HA Cluster
              </span>
              <span className="block text-[clamp(2rem,4vw,4rem)] font-light tracking-widest ds-text-glow-cyan text-navy mt-3">
                NEVER STOP RUNNING
              </span>
            </h1>

            <p className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-slate-900 leading-tight ds-word-keep mb-8 max-w-4xl">
              단일 장애가
              <br />
              <span className="ds-text-glow-acid text-emerald">비즈니스를 멈추지 않게.</span>
            </p>

            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl border-l-2 border-navy/30 pl-5 ds-word-keep mb-12">
              아인스테크는 글로벌 표준 <span className="text-slate-900">Rose HA</span>와 국내 1위{" "}
              <span className="text-slate-900">맨텍 MCCS</span> 두 제품을 환경·예산·운영 인력에 맞춰
              선택·혼용 설계합니다. Active-Standby부터 Active-Active·SANless·다중 사이트 DR까지,
              초 단위 페일오버를 단일 파트너 책임으로 제공합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <PrimaryButton href="/contact" className="flex-1">
                HA Cluster 도입 문의
              </PrimaryButton>
              <SecondaryButton href="#lineup" className="flex-1">
                Rose vs MCCS 비교 보기
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
              badgeText="WHY_HA"
              badgeColor="cyan"
              sectionLabel="1. Why — 왜 HA Cluster인가"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                백업은 "복구"입니다.
                <br />
                <span className="text-navy">HA는 "멈추지 않음"입니다.</span>
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

        {/* DUAL LINEUP */}
        <section id="lineup" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-acid/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="DUAL_LINEUP"
              badgeColor="acid"
              sectionLabel="2. Lineup — Rose HA · Mantech MCCS"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                글로벌 표준과 국내 1위,
                <br />
                <span className="ds-text-glow-acid text-emerald">두 라인업을 동시에.</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:pl-12">
              {lineup.map((p) => {
                const accent = p.color === "acid" ? "text-emerald" : "text-navy";
                const bg = p.color === "acid" ? "bg-emerald" : "bg-navy";
                const border = p.color === "acid" ? "border-emerald/40" : "border-navy/40";
                const tint = p.color === "acid" ? "bg-emerald/5" : "bg-navy/5";
                return (
                  <GlassPanel
                    key={p.name}
                    className="p-8 lg:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className={`font-mono text-[10px] ${accent} uppercase tracking-widest mb-2`}>
                          {p.badge}
                        </div>
                        <div className="font-display text-3xl font-bold text-slate-900 mb-1">
                          {p.name}
                        </div>
                        <div className="font-mono text-[11px] text-slate-500">{p.vendor}</div>
                      </div>
                      <span className={`w-3 h-3 ${bg} animate-pulse-fast`} />
                    </div>

                    <div
                      className={`font-mono text-[11px] ${accent} border ${border} ${tint} px-3 py-2 tracking-widest uppercase mb-6 self-start`}
                    >
                      {p.tag}
                    </div>

                    <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-3">
                      핵심 강점
                    </div>
                    <ul className="space-y-3 mb-6">
                      {p.strengths.map((s) => (
                        <li key={s} className="flex items-start gap-3">
                          <span className={`mt-2 w-1.5 h-1.5 ${bg} flex-shrink-0`} />
                          <span className="font-sans text-slate-600 text-[14px] leading-relaxed ds-word-keep">
                            {s}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-3 pt-6 border-t border-slate-200/50">
                      적용 환경
                    </div>
                    <ul className="space-y-2">
                      {p.fitFor.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <span className="font-mono text-navy flex-shrink-0">→</span>
                          <span className="font-sans text-slate-600 text-[14px] leading-relaxed ds-word-keep">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </GlassPanel>
                );
              })}
            </div>
          </div>
        </section>

        {/* COMPARE */}
        <section id="compare" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="SIDE_BY_SIDE"
              badgeColor="cyan"
              sectionLabel="3. Comparison — 환경별 선택 가이드"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                Rose HA
                <br />
                <span className="text-navy">vs Mantech MCCS</span>
              </h2>
            </SectionHeader>

            <div className="lg:pl-12">
              <GlassPanel className="overflow-hidden">
                <div className="hidden md:grid grid-cols-[1fr_1fr_1fr] border-b border-slate-200/50">
                  <div className="p-5 font-mono text-[11px] text-slate-500 uppercase tracking-widest">
                    CRITERIA
                  </div>
                  <div className="p-5 font-mono text-[11px] text-navy uppercase tracking-widest border-l border-slate-200/40 bg-navy/5">
                    Rose HA (글로벌)
                  </div>
                  <div className="p-5 font-mono text-[11px] text-emerald uppercase tracking-widest border-l border-slate-200/40 bg-emerald/5">
                    Mantech MCCS (국내 1위)
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
                        {row.rose}
                      </span>
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
                        {row.mccs}
                      </span>
                    </div>
                  </div>
                ))}
              </GlassPanel>

              <p className="font-mono text-[10px] text-slate-500 leading-relaxed mt-4 ds-word-keep">
                ※ 비교 항목은 각 벤더 공식 제품 문서를 기준으로 작성되었으며, 에디션·구성에 따라 차이가 있을 수 있습니다.
                실제 환경에 맞는 최적 구성은 도입 진단 시 정밀 산출해 드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* SCENARIOS */}
        <section id="scenarios" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-acid/30 via-cyan/30 to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="ARCHITECTURE"
              badgeColor="acid"
              sectionLabel="4. Scenarios — 4가지 구축 시나리오"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                같은 HA여도,
                <br />
                <span className="ds-text-glow-acid text-emerald">설계가 다릅니다.</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:pl-12">
              {scenarios.map((s) => (
                <GlassPanel
                  key={s.index}
                  className="p-8 lg:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-8 relative">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase group-hover:text-navy transition-colors">
                        SCENARIO_{s.index}
                      </span>
                      <span className="font-mono text-[10px] text-emerald">{s.tag}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                        RTO_TARGET
                      </div>
                      <div className="font-display text-2xl font-bold text-navy">{s.rto}</div>
                    </div>
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-slate-900 mb-4 ds-word-keep">
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

        {/* REFERENCES */}
        <section id="references" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="REFERENCES"
              badgeColor="cyan"
              sectionLabel="5. References — 실제 운영 중인 현장"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                <span className="text-navy">반도체 · 글로벌 제조 · 공공</span>
                <br />
                현장에서 검증된 구성
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 lg:pl-12">
              {references.map((r) => {
                const accent = r.color === "acid" ? "text-emerald" : "text-navy";
                const bg = r.color === "acid" ? "bg-emerald" : "bg-navy";
                return (
                  <GlassPanel
                    key={r.industry}
                    className="p-7 lg:p-8 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className={`font-mono text-[10px] ${accent} uppercase tracking-widest`}>
                        {r.industry}
                      </span>
                      <span className={`w-2 h-2 ${bg} animate-pulse-fast`} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-2 ds-word-keep">
                      {r.customer}
                    </h3>
                    <div className="font-mono text-[11px] text-navy mb-5">{r.solution}</div>
                    <p className="font-sans text-slate-600 text-[14px] leading-relaxed ds-word-keep">
                      {r.desc}
                    </p>
                  </GlassPanel>
                );
              })}
            </div>

            <p className="font-mono text-[10px] text-slate-500 leading-relaxed mt-6 ds-word-keep lg:pl-12">
              ※ 일부 고객사는 보안·NDA 정책에 따라 비공개로 표기. 상세 레퍼런스는 도입 검토 단계에서 별도 공유합니다.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-acid/30 via-cyan/30 to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="PROCESS"
              badgeColor="cyan"
              sectionLabel="6. Process — 도입 5단계"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                분석 → 선정 → 설계 → 무중단 구축
                <br />
                <span className="text-navy">→ 인계까지 단일 책임</span>
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
                HA
              </div>

              <Badge color="acid" className="mb-6">
                CLUSTER_READY
              </Badge>

              <h3 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep mb-8 max-w-4xl relative z-10">
                Rose HA냐, MCCS냐가 아니라
                <br />
                <span className="ds-text-glow-acid-strong text-emerald">우리 환경에 무엇이 맞는가</span>
                입니다.
              </h3>

              <p className="font-sans text-slate-600 text-base md:text-xl leading-relaxed ds-word-keep max-w-2xl mx-auto mb-12 relative z-10">
                현재 운영 인프라·예산·운영 인력을 무료로 진단해
                <br className="hidden md:block" />
                최적의 HA 라인업과 구성안을 제안해 드립니다.
              </p>

              <div className="w-full max-w-2xl mx-auto relative z-10 flex flex-col items-center mb-8">
                <div className="ds-cta-btn-wrapper w-full">
                  <a
                    href="/contact"
                    className="w-full bg-emerald text-white font-display font-bold text-[clamp(1.1rem,2.5vw,2rem)] py-6 md:py-8 px-6 md:px-8 flex items-center justify-center gap-4 group hover:bg-white transition-colors duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 tracking-tight ds-word-keep">
                      HA Cluster 무료 진단 신청
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
                href="mailto:sungil.yum@einstech.kr?subject=HA%20Cluster%20%EB%AC%B8%EC%9D%98"
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
