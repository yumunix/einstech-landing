import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import GlassPanel from "@/components/ds/GlassPanel";
import SectionHeader from "@/components/ds/SectionHeader";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";

export const metadata = {
  title: "백업 현대화 — Acronis 전환 서비스 | EINSTECH",
  description:
    "레거시 백업에서 사이버 보호 통합 백업으로. 아인스테크는 백업·안티랜섬웨어·복구를 하나로 묶은 단일 플랫폼 Acronis Cyber Protect로의 무중단 전환(Migration)을 설계·구축합니다. 백업과 보안을 하나로.",
};

const whyCards = [
  {
    index: "01",
    tag: "NATIVE_PROTECT",
    title: "통합 안티랜섬웨어",
    desc: "Acronis Active Protection이 단일 에이전트에 내장되어 AI 행위기반으로 미보고 변종까지 실시간 차단하고, 암호화된 파일을 자동 복구합니다. 별도 보안 제품을 끼워 넣을 필요가 없습니다.",
  },
  {
    index: "02",
    tag: "IMMUTABLE_WORM",
    title: "이뮤터블 백업 기본 제공",
    desc: "Object Lock 기반 WORM(쓰기 후 변경 불가) 저장으로 랜섬웨어가 백업본 자체를 암호화·삭제하지 못하게 막습니다. 보존 기간 동안 백업의 불변성을 보장합니다.",
  },
  {
    index: "03",
    tag: "RTO_SINGLE_PANE",
    title: "즉각 복구 · 단일 콘솔",
    desc: "이기종 하드웨어·하이퍼바이저로의 즉시 복구를 지원하고, 백업·보안·복구·패치를 한 화면에서 관리합니다. 관리 포인트가 줄어 운영 부담과 휴먼 에러가 함께 감소합니다.",
  },
];

const compareRows = [
  {
    crit: "랜섬웨어 보호 방식",
    legacy: "별도 보안 SW를 번들·연동하는 조합 구조",
    acronis: "단일 에이전트에 AI 보호 네이티브 통합",
  },
  {
    crit: "관리 콘솔",
    legacy: "백업·보안·Air-gap이 분리된 다중 콘솔",
    acronis: "단일 콘솔 (Single Pane of Glass)",
  },
  {
    crit: "감염 파일 자동 복구",
    legacy: "탐지·차단 중심, 자동 롤백은 제품·구성에 의존",
    acronis: "악성 프로세스 종료 후 암호화 파일 자동 복구 내장",
  },
  {
    crit: "이뮤터블 백업",
    legacy: "별도 어플라이언스·옵션 스토리지로 구현",
    acronis: "Object Lock / WORM 기본 제공",
  },
  {
    crit: "통합 패치 관리",
    legacy: "별도 솔루션 필요",
    acronis: "취약점 평가·패치 관리 동일 플랫폼 내 제공",
  },
  {
    crit: "라이선스·계약 구조",
    legacy: "백업 + 보안 이원화로 갱신·관리 복잡",
    acronis: "단일 라이선스로 통합",
  },
];

const process = [
  {
    step: "01",
    title: "현황 진단",
    desc: "기존 백업 정책·보존주기·RTO/RPO·라이선스 만료일을 분석해 전환 범위와 리스크를 정의합니다.",
  },
  {
    step: "02",
    title: "병행 운영",
    desc: "기존 백업을 유지한 상태에서 Acronis를 병렬 구성. 운영 중단 없이 신규 백업을 가동합니다.",
  },
  {
    step: "03",
    title: "데이터 검증",
    desc: "실제 복구 테스트(Live Restore Drill)로 데이터 정합성과 복구 시간을 실측 검증합니다.",
  },
  {
    step: "04",
    title: "전환 (Cutover)",
    desc: "검증 완료 후 운영 백업을 Acronis로 전환하고 이뮤터블·Air-gap 정책을 적용합니다.",
  },
  {
    step: "05",
    title: "안정화 · 정리",
    desc: "구 솔루션을 안전 회수하고 모니터링·정기 복구훈련 체계로 전환해 24/7 유지보수로 인계합니다.",
  },
];

const signals = [
  "기존 백업 라이선스 갱신·만료가 다가오고 있다",
  "백업과 보안 제품을 따로따로 관리하고 있다",
  "랜섬웨어 대비 이뮤터블·Air-gap이 적용돼 있지 않다",
  "실제 복구 테스트를 해본 지 오래됐거나 안 해봤다",
  "관리 콘솔이 많아 운영 부담이 크다",
];

const guarantees = [
  "운영 중단 없는 병행 전환 (Zero Downtime)",
  "전환 전 실복구 검증으로 데이터 정합성 확인",
  "이뮤터블 + 3-2-1-1-0 백업 규칙 적용 설계",
  "전환 후 24/7 모니터링·정기 복구훈련 인계",
  "30년 인프라 경험 엔지니어의 전 과정 직접 수행",
];

export default function BackupModernizationPage() {
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
              <Badge color="cyan">BACKUP_MODERNIZATION</Badge>
              <span className="font-mono text-xs text-muted uppercase tracking-widest">
                Acronis Migration · Unified Platform · Immutable
              </span>
            </div>

            <h1 className="font-display leading-[0.95] mb-10">
              <span className="block text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-white">
                백업 현대화
              </span>
              <span className="block text-[clamp(2rem,4vw,4rem)] font-light tracking-widest ds-text-glow-cyan text-cyan mt-3">
                ACRONIS MIGRATION
              </span>
            </h1>

            <p className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-white leading-tight ds-word-keep mb-8 max-w-4xl">
              백업과 보안이 따로 노는 시대는 끝났습니다.
              <br />
              <span className="ds-text-glow-acid text-acid">하나로 합치세요.</span>
            </p>

            <p className="font-sans text-muted-strong text-base sm:text-lg leading-relaxed max-w-3xl border-l-2 border-cyan/30 pl-5 ds-word-keep mb-12">
              백업 따로, 보안 따로. 콘솔도 둘, 라이선스도 둘. 그렇게 운영하던 레거시 백업을{" "}
              <span className="text-white">단일 플랫폼 Acronis Cyber Protect</span>로 전환합니다.
              AI 랜섬웨어 차단·즉각 복구·이뮤터블 백업을 하나의 에이전트에 통합해
              운영 중단 없이 옮겨 드립니다. 엔지니어의 30년 인프라 운영 경험으로 전 과정을 책임집니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <PrimaryButton href="/contact" className="flex-1">
                전환 무료 진단 신청
              </PrimaryButton>
              <SecondaryButton href="#compare" className="flex-1">
                레거시 백업과 비교 보기
              </SecondaryButton>
            </div>
          </div>
        </section>

        {/* From → To 전환 스트립 */}
        <section id="shift" className="py-20 lg:py-24 relative">
          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-stretch lg:pl-12">
              <GlassPanel className="p-8 lg:p-10 flex flex-col">
                <span className="font-mono text-[10px] text-alert tracking-widest uppercase mb-4 animate-pulse-fast">
                  LEGACY_STACK
                </span>
                <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-3 ds-word-keep">
                  백업 + 별도 보안 SW
                </h3>
                <p className="font-sans text-muted-strong text-[15px] leading-relaxed ds-word-keep">
                  백업 엔진과 랜섬웨어 보호가 분리된 두 시스템. 콘솔·라이선스·관리 포인트가 이중화됩니다.
                </p>
              </GlassPanel>

              <div className="flex items-center justify-center">
                <span className="font-mono text-3xl text-acid rotate-90 md:rotate-0">→</span>
              </div>

              <GlassPanel className="p-8 lg:p-10 flex flex-col">
                <span className="font-mono text-[10px] text-cyan tracking-widest uppercase mb-4">
                  ACRONIS_UNIFIED
                </span>
                <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-3 ds-word-keep">
                  단일 사이버 보호 플랫폼
                </h3>
                <p className="font-sans text-muted-strong text-[15px] leading-relaxed ds-word-keep">
                  백업·안티랜섬웨어·복구를 하나의 에이전트, 하나의 콘솔에서. 관리 단순화와 보호 강화를 동시에 달성합니다.
                </p>
              </GlassPanel>
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
              badgeText="WHY_MIGRATE"
              badgeColor="cyan"
              sectionLabel="1. Why — 레거시 백업의 한계"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                레거시 백업의 한계,
                <br />
                <span className="text-cyan">통합 플랫폼이 메웁니다.</span>
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
                      <span className="font-mono text-[10px] text-muted tracking-widest uppercase group-hover:text-cyan transition-colors">
                        CAP_{c.index}
                      </span>
                      <span className="font-mono text-[10px] text-acid">{c.tag}</span>
                    </div>
                    <div className="font-display text-7xl font-bold ds-text-outline opacity-10 pointer-events-none absolute -top-4 -right-2 group-hover:opacity-30 transition-opacity">
                      {c.index}
                    </div>
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-4 ds-word-keep">
                    {c.title}
                  </h3>
                  <p className="font-sans text-muted-strong text-[15px] leading-relaxed ds-word-keep flex-grow">
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
              badgeText="COMPARISON"
              badgeColor="acid"
              sectionLabel="2. Comparison — 사실 기반 비교"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                레거시 백업
                <br />
                <span className="ds-text-glow-acid text-acid">vs Acronis Cyber Protect</span>
              </h2>
            </SectionHeader>

            <div className="lg:pl-12">
              <GlassPanel className="overflow-hidden">
                {/* 헤더 행 */}
                <div className="hidden md:grid grid-cols-[1.3fr_1fr_1fr] border-b border-surface-border/50">
                  <div className="p-5 font-mono text-[11px] text-muted uppercase tracking-widest">
                    CRITERIA
                  </div>
                  <div className="p-5 font-mono text-[11px] text-alert uppercase tracking-widest border-l border-surface-border/40 bg-alert/5">
                    레거시 백업 (백업 + 별도 보안)
                  </div>
                  <div className="p-5 font-mono text-[11px] text-cyan uppercase tracking-widest border-l border-surface-border/40 bg-cyan/5">
                    Acronis Cyber Protect
                  </div>
                </div>

                {compareRows.map((row) => (
                  <div
                    key={row.crit}
                    className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] border-b border-surface-border/30 last:border-b-0"
                  >
                    <div className="p-5 font-mono text-[13px] text-white bg-black/20 md:bg-transparent">
                      {row.crit}
                    </div>
                    <div className="p-5 flex items-start gap-3 border-l border-surface-border/40 bg-alert/[0.03]">
                      <svg
                        className="w-4 h-4 text-alert flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="square"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="font-sans text-[14px] text-muted-strong leading-relaxed ds-word-keep">
                        {row.legacy}
                      </span>
                    </div>
                    <div className="p-5 flex items-start gap-3 border-l border-surface-border/40 bg-cyan/[0.04]">
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
                      <span className="font-sans text-[14px] text-white leading-relaxed ds-word-keep">
                        {row.acronis}
                      </span>
                    </div>
                  </div>
                ))}
              </GlassPanel>

              <p className="font-mono text-[10px] text-muted leading-relaxed mt-4 ds-word-keep">
                ※ 비교 항목은 각 벤더의 공식 제품 문서 기준으로 작성되었으며, 실제 구성·에디션에 따라 차이가 있을 수 있습니다.
                최신 사양은 도입 진단 시 정밀 확인해 드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-acid/30 to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="PROCESS"
              badgeColor="cyan"
              sectionLabel="3. Process — 무중단 전환 5단계"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                무중단 전환,
                <br />
                <span className="text-cyan">5단계로 안전하게.</span>
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

            {/* Zero-downtime 강조 배너 */}
            <div className="lg:pl-12 mt-8">
              <GlassPanel className="p-6 lg:p-8 flex flex-col md:flex-row md:items-center gap-5">
                <span className="font-mono text-[11px] text-cyan border border-cyan/40 bg-cyan/5 px-3 py-2 tracking-widest uppercase flex-shrink-0 self-start">
                  ● ZERO_DOWNTIME
                </span>
                <p className="font-sans text-muted-strong text-[15px] leading-relaxed ds-word-keep">
                  <span className="text-white font-bold">핵심은 "병행 운영 후 전환"</span>입니다.
                  기존 백업을 먼저 끄고 옮기는 게 아니라, 새 백업이 검증될 때까지 양쪽을 함께 돌립니다.
                  전환 실패 리스크를 구조적으로 제거합니다.
                </p>
              </GlassPanel>
            </div>
          </div>
        </section>

        {/* TARGET */}
        <section id="target" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-acid/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="WHO_SHOULD_MIGRATE"
              badgeColor="acid"
              sectionLabel="4. Target — 지금이 전환 타이밍"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                하나라도 해당된다면,
                <br />
                <span className="ds-text-glow-acid text-acid">지금이 전환 타이밍</span>입니다.
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:pl-12">
              <GlassPanel className="p-8 lg:p-10 flex flex-col">
                <div className="font-mono text-[10px] text-acid uppercase tracking-widest mb-5">
                  전환을 검토할 신호
                </div>
                <ul className="space-y-3">
                  {signals.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <span className="font-mono text-cyan flex-shrink-0">→</span>
                      <span className="font-sans text-muted-strong text-[14px] leading-relaxed ds-word-keep">
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </GlassPanel>

              <GlassPanel className="p-8 lg:p-10 flex flex-col">
                <div className="font-mono text-[10px] text-cyan uppercase tracking-widest mb-5">
                  EINSTECH 전환 보장
                </div>
                <ul className="space-y-3">
                  {guarantees.map((g) => (
                    <li key={g} className="flex items-start gap-3">
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
                      <span className="font-sans text-muted-strong text-[14px] leading-relaxed ds-word-keep">
                        {g}
                      </span>
                    </li>
                  ))}
                </ul>
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
                ACR
              </div>

              <Badge color="acid" className="mb-6">
                MIGRATION_READY
              </Badge>

              <h3 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep mb-8 max-w-4xl relative z-10">
                레거시 백업,
                <br />
                <span className="ds-text-glow-acid-strong text-acid">더 미루지 마세요.</span>
              </h3>

              <p className="font-sans text-muted-strong text-base md:text-xl leading-relaxed ds-word-keep max-w-2xl mx-auto mb-12 relative z-10">
                현재 백업 구성을 점검하고, 우리 회사에 맞는
                <br className="hidden md:block" />
                Acronis 전환 시나리오와 예상 일정을 무료로 진단해 드립니다.
              </p>

              <div className="w-full max-w-2xl mx-auto relative z-10 flex flex-col items-center mb-8">
                <div className="ds-cta-btn-wrapper w-full">
                  <a
                    href="/contact"
                    className="w-full bg-acid text-void font-display font-bold text-[clamp(1.1rem,2.5vw,2rem)] py-6 md:py-8 px-6 md:px-8 flex items-center justify-center gap-4 group hover:bg-white transition-colors duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 tracking-tight ds-word-keep">
                      전환 무료 진단 신청
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
                href="mailto:sungil.yum@einstech.kr?subject=Acronis%20%EC%A0%84%ED%99%98%20%EB%AC%B8%EC%9D%98"
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

