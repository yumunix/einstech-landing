import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import GlassPanel from "@/components/ds/GlassPanel";
import SectionHeader from "@/components/ds/SectionHeader";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";

export const metadata = {
  title: "Data Security — Netwrix DLP · Kaspersky Endpoint | EINSTECH",
  description:
    "외부 침입만이 아닌 내부 유출까지. 아인스테크는 Netwrix Endpoint Protector(DLP)와 Kaspersky Endpoint Security(EDR)를 통합 설계해 데이터·엔드포인트·내부자 위협을 한 체계로 통제합니다. Zero Trust 기반 데이터 보호 아키텍처.",
};

const shiftCards = [
  {
    index: "01",
    tag: "INSIDER_THREAT",
    title: "외부보다 무서운 내부 유출",
    desc: "퇴사 직전 직원의 USB 반출, 협력사 PC를 통한 자료 유출 — 외부 해킹보다 내부에서 빠져나가는 데이터가 훨씬 많습니다. 방화벽은 이걸 막지 못합니다.",
  },
  {
    index: "02",
    tag: "AI_DATA_LEAK",
    title: "AI 시대의 신규 유출 경로",
    desc: "직원이 영업비밀·고객정보를 ChatGPT에 붙여넣는 순간 데이터는 회사 밖으로 나갑니다. 2026년 가장 빠르게 늘어나는 유출 채널이며, 기존 보안은 이걸 보지 못합니다.",
  },
  {
    index: "03",
    tag: "ZERO_TRUST",
    title: "Zero Trust — '내부도 신뢰하지 않는다'",
    desc: "경계 보안의 시대는 끝났습니다. 사용자·디바이스·데이터 모든 접근을 검증·기록·통제하는 Zero Trust가 새 표준입니다.",
  },
];

const lineup = [
  {
    badge: "DLP_NO1",
    name: "Netwrix Endpoint Protector",
    vendor: "Netwrix",
    color: "cyan",
    tag: "엔드포인트 DLP · Insider Threat",
    role: "데이터 유출 방지",
    strengths: [
      "USB · Bluetooth · 프린터 등 40종 이상 디바이스 통제",
      "AI/LLM 입력 차단 — ChatGPT 등 생성형 AI 유출 방지",
      "데이터 분류 + 정책 기반 실시간 차단",
      "Human Risk Explorer — 사용자별 위험 행위 시각화",
      "Windows · macOS · Linux 통합 정책",
    ],
    fitFor: [
      "영업비밀·설계도면·고객정보 보유 기업",
      "내부 컴플라이언스·감사 대응 (개인정보보호법)",
      "AI 도구 사용 환경의 데이터 보호",
    ],
  },
  {
    badge: "EDR_GLOBAL",
    name: "Kaspersky Endpoint Security",
    vendor: "Kaspersky",
    color: "acid",
    tag: "EDR · 멀웨어 차단 · Threat Intelligence",
    role: "엔드포인트 위협 차단",
    strengths: [
      "다층 머신러닝 기반 멀웨어·랜섬웨어 차단",
      "EDR — 침해 탐지·조사·자동 대응",
      "글로벌 Threat Intelligence Network 실시간 연동",
      "취약점 평가·패치 관리 통합",
      "관리 콘솔 단일화 (Security Center)",
    ],
    fitFor: [
      "랜섬웨어·APT 공격 대응 강화 필요 환경",
      "분산된 다지점·해외 거점 통합 관리",
      "엔드포인트 EDR/XDR 표준화",
    ],
  },
];

const layers = [
  {
    index: "01",
    tag: "DISCOVER",
    title: "Discover — 데이터 식별·분류",
    desc: "어디에 무엇이 있는지 모르면 보호할 수 없습니다. PII·금융정보·설계도면·소스코드를 자동 식별·분류해 보호 우선순위를 정합니다.",
  },
  {
    index: "02",
    tag: "PROTECT",
    title: "Protect — 정책 기반 실시간 차단",
    desc: "분류된 데이터를 USB·이메일·웹·AI 도구 등 모든 유출 경로에서 정책 기반으로 실시간 차단. 정상 업무는 막지 않습니다.",
  },
  {
    index: "03",
    tag: "DETECT",
    title: "Detect — 위협·이상행위 탐지",
    desc: "Kaspersky EDR이 멀웨어·랜섬웨어·APT를 차단하고, Netwrix가 비정상 데이터 접근·반출 패턴을 행위 기반으로 탐지합니다.",
  },
  {
    index: "04",
    tag: "RESPOND",
    title: "Respond — 격리·차단·증빙",
    desc: "위협 발생 시 자동 격리·차단하고 감사 로그를 보존해 컴플라이언스·법적 증빙으로 활용합니다.",
  },
];

const useCases = [
  {
    title: "퇴사자 USB 반출 차단",
    desc: "퇴사 14일 전 자동 모니터링 강화 → USB 차단·웹 업로드 제한·로그 보존.",
    color: "acid",
  },
  {
    title: "ChatGPT 영업비밀 유출 방지",
    desc: "민감 키워드 포함 텍스트의 AI 입력을 실시간 감지·차단. 입력 내용 감사 기록 보존.",
    color: "cyan",
  },
  {
    title: "협력사 PC 데이터 통제",
    desc: "외부 협력사 PC에서 회사 데이터 접근 시 디바이스 검증 + 다운로드 제한.",
    color: "cyan",
  },
  {
    title: "랜섬웨어 사전 차단",
    desc: "Kaspersky 머신러닝 모델이 알려지지 않은 변종까지 행위 기반으로 차단·자동 격리.",
    color: "acid",
  },
  {
    title: "감사·컴플라이언스 대응",
    desc: "개인정보보호법·ISMS-P 요구 통제 항목을 정책 그대로 매핑. 감사 시 증빙 자동 산출.",
    color: "cyan",
  },
  {
    title: "AI 도구 사용 가시화",
    desc: "조직 내 생성형 AI 사용 현황을 사용자별로 시각화. 정책 위반 임직원 식별·교육.",
    color: "acid",
  },
];

const process = [
  {
    step: "01",
    title: "데이터 자산 분류",
    desc: "보호 대상 데이터(PII·기밀·지적재산)를 식별·분류하고 현재 유출 위험 경로를 점검합니다.",
  },
  {
    step: "02",
    title: "위협 시나리오 정의",
    desc: "내부자 위협·외부 침입·AI 유출 시나리오를 정의하고 각 시나리오별 대응 정책을 수립합니다.",
  },
  {
    step: "03",
    title: "DLP + EDR 통합 설계",
    desc: "Netwrix DLP와 Kaspersky EDR을 단일 정책 체계로 통합 설계. 정상 업무 영향은 최소화합니다.",
  },
  {
    step: "04",
    title: "단계적 적용·튜닝",
    desc: "감사 모드 → 경고 모드 → 차단 모드로 단계적 적용해 오탐을 줄이고 운영 안정성을 확보합니다.",
  },
  {
    step: "05",
    title: "운영 인계 & 정기 점검",
    desc: "Human Risk 리포트·EDR 알림을 운영팀에 인계하고 분기별 정책 튜닝으로 위협 환경 변화에 대응합니다.",
  },
];

const guarantees = [
  "정상 업무 영향 최소화 — 단계적 적용으로 오탐 최소화",
  "AI/LLM 유출까지 대응하는 최신 정책 설계",
  "개인정보보호법 · ISMS-P 컴플라이언스 매핑",
  "내부자 위협·외부 침입·랜섬웨어 단일 체계 대응",
  "30년 인프라 경험 엔지니어의 전 과정 직접 수행",
];

export default function DLPPage() {
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
              <Badge color="cyan">DATA_SECURITY</Badge>
              <span className="font-mono text-xs text-muted uppercase tracking-widest">
                Netwrix DLP · Kaspersky EDR · Zero Trust
              </span>
            </div>

            <h1 className="font-display leading-[0.95] mb-10">
              <span className="block text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-white">
                Data Security
              </span>
              <span className="block text-[clamp(2rem,4vw,4rem)] font-light tracking-widest ds-text-glow-cyan text-cyan mt-3">
                FROM PERIMETER TO DATA
              </span>
            </h1>

            <p className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-white leading-tight ds-word-keep mb-8 max-w-4xl">
              방화벽이 막지 못하는
              <br />
              <span className="ds-text-glow-acid text-acid">내부 유출을 막습니다.</span>
            </p>

            <p className="font-sans text-muted-strong text-base sm:text-lg leading-relaxed max-w-3xl border-l-2 border-cyan/30 pl-5 ds-word-keep mb-12">
              데이터는 점점 더 안쪽에서 빠져나갑니다. 퇴사자의 USB, 협력사 PC, 그리고 직원이
              ChatGPT에 붙여넣는 한 줄. 아인스테크는{" "}
              <span className="text-white">Netwrix Endpoint Protector(DLP)</span>와{" "}
              <span className="text-white">Kaspersky Endpoint Security(EDR)</span>를 Zero Trust
              원칙 위에 통합 설계해 데이터·엔드포인트·내부자 위협을 한 체계로 통제합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <PrimaryButton href="/contact" className="flex-1">
                데이터 보안 진단 신청
              </PrimaryButton>
              <SecondaryButton href="#lineup" className="flex-1">
                제품 라인업 보기
              </SecondaryButton>
            </div>
          </div>
        </section>

        {/* PARADIGM SHIFT */}
        <section id="shift" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="PARADIGM_SHIFT"
              badgeColor="cyan"
              sectionLabel="1. Shift — 보안 패러다임의 변화"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                위협은 더 이상
                <br />
                <span className="text-cyan">바깥에서만 오지 않습니다.</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 lg:pl-12">
              {shiftCards.map((c) => (
                <GlassPanel
                  key={c.index}
                  className="p-8 lg:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-10 relative">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-muted tracking-widest uppercase group-hover:text-cyan transition-colors">
                        SHIFT_{c.index}
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

        {/* LINEUP */}
        <section id="lineup" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-acid/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="LINEUP"
              badgeColor="acid"
              sectionLabel="2. Lineup — DLP + EDR 통합"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                데이터 유출 방지와 엔드포인트 보호,
                <br />
                <span className="ds-text-glow-acid text-acid">하나의 정책으로.</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:pl-12">
              {lineup.map((p) => {
                const accent = p.color === "acid" ? "text-acid" : "text-cyan";
                const bg = p.color === "acid" ? "bg-acid" : "bg-cyan";
                const border = p.color === "acid" ? "border-acid/40" : "border-cyan/40";
                const tint = p.color === "acid" ? "bg-acid/5" : "bg-cyan/5";
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
                        <div className="font-display text-2xl lg:text-3xl font-bold text-white mb-1">
                          {p.name}
                        </div>
                        <div className="font-mono text-[11px] text-muted">{p.vendor}</div>
                      </div>
                      <span className={`w-3 h-3 ${bg} animate-pulse-fast`} />
                    </div>

                    <div
                      className={`font-mono text-[11px] ${accent} border ${border} ${tint} px-3 py-2 tracking-widest uppercase mb-2 self-start`}
                    >
                      {p.tag}
                    </div>
                    <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-6">
                      ROLE · {p.role}
                    </div>

                    <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-3">
                      핵심 기능
                    </div>
                    <ul className="space-y-3 mb-6">
                      {p.strengths.map((s) => (
                        <li key={s} className="flex items-start gap-3">
                          <span className={`mt-2 w-1.5 h-1.5 ${bg} flex-shrink-0`} />
                          <span className="font-sans text-muted-strong text-[14px] leading-relaxed ds-word-keep">
                            {s}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-3 pt-6 border-t border-surface-border/50">
                      적용 환경
                    </div>
                    <ul className="space-y-2">
                      {p.fitFor.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <span className="font-mono text-cyan flex-shrink-0">→</span>
                          <span className="font-sans text-muted-strong text-[14px] leading-relaxed ds-word-keep">
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

        {/* 4-LAYER ZERO TRUST */}
        <section id="layers" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-acid/30 to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="ZERO_TRUST_LAYERS"
              badgeColor="cyan"
              sectionLabel="3. Architecture — 4계층 Zero Trust 모델"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                Discover → Protect → Detect → Respond
                <br />
                <span className="text-cyan">4계층 통합 데이터 보호</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:pl-12">
              {layers.map((l) => (
                <GlassPanel
                  key={l.index}
                  className="p-8 lg:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-8 relative">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-muted tracking-widest uppercase group-hover:text-cyan transition-colors">
                        LAYER_{l.index}
                      </span>
                      <span className="font-mono text-[10px] text-acid">{l.tag}</span>
                    </div>
                    <div className="font-display text-7xl font-bold ds-text-outline opacity-10 pointer-events-none absolute -top-4 -right-2 group-hover:opacity-30 transition-opacity">
                      {l.index}
                    </div>
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-4 ds-word-keep">
                    {l.title}
                  </h3>
                  <p className="font-sans text-muted-strong text-[15px] leading-relaxed ds-word-keep flex-grow">
                    {l.desc}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section id="usecases" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-acid/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="USE_CASES"
              badgeColor="acid"
              sectionLabel="4. Use Cases — 실제 운영 시나리오"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                실제 운영에서
                <br />
                <span className="ds-text-glow-acid text-acid">이런 위협을 막습니다.</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 lg:pl-12">
              {useCases.map((u) => {
                const accent = u.color === "acid" ? "text-acid" : "text-cyan";
                const bg = u.color === "acid" ? "bg-acid" : "bg-cyan";
                return (
                  <GlassPanel
                    key={u.title}
                    className="p-7 lg:p-8 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`w-2 h-2 ${bg} animate-pulse-fast flex-shrink-0`} />
                      <span className={`font-mono text-[10px] ${accent} uppercase tracking-widest`}>
                        SCENARIO
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mb-3 ds-word-keep leading-snug">
                      {u.title}
                    </h3>
                    <p className="font-sans text-muted-strong text-[14px] leading-relaxed ds-word-keep">
                      {u.desc}
                    </p>
                  </GlassPanel>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS + GUARANTEES */}
        <section id="process" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-acid/30 to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="PROCESS"
              badgeColor="cyan"
              sectionLabel="5. Process — 도입 5단계"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                분류 → 시나리오 → 설계
                <br />
                <span className="text-cyan">→ 단계적 적용 → 운영 인계</span>
              </h2>
            </SectionHeader>

            <div className="lg:pl-12 space-y-4 mb-12">
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

            <div className="lg:pl-12">
              <GlassPanel className="p-8 lg:p-10 flex flex-col">
                <div className="font-mono text-[10px] text-cyan uppercase tracking-widest mb-5">
                  EINSTECH 보안 보장
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
                DLP
              </div>

              <Badge color="acid" className="mb-6">
                SECURITY_READY
              </Badge>

              <h3 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep mb-8 max-w-4xl relative z-10">
                데이터는 이미
                <br />
                <span className="ds-text-glow-acid-strong text-acid">밖으로 새고 있습니다.</span>
              </h3>

              <p className="font-sans text-muted-strong text-base md:text-xl leading-relaxed ds-word-keep max-w-2xl mx-auto mb-12 relative z-10">
                현재 데이터 유출 경로와 엔드포인트 보안 상태를 무료로 진단해
                <br className="hidden md:block" />
                Zero Trust 기반 통합 보안 설계안을 제시해 드립니다.
              </p>

              <div className="w-full max-w-2xl mx-auto relative z-10 flex flex-col items-center mb-8">
                <div className="ds-cta-btn-wrapper w-full">
                  <a
                    href="/contact"
                    className="w-full bg-acid text-void font-display font-bold text-[clamp(1.1rem,2.5vw,2rem)] py-6 md:py-8 px-6 md:px-8 flex items-center justify-center gap-4 group hover:bg-white transition-colors duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 tracking-tight ds-word-keep">
                      데이터 보안 무료 진단 신청
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
                href="mailto:sungil.yum@einstech.kr?subject=Data%20Security%20%EB%AC%B8%EC%9D%98"
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
