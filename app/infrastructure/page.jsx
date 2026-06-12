import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import GlassPanel from "@/components/ds/GlassPanel";
import SectionHeader from "@/components/ds/SectionHeader";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";

export const metadata = {
  title: "Infrastructure — Server · SAN · GPU · Network | EINSTECH",
  description:
    "데이터센터 하드웨어를 한 파트너로. HP 서버·Brocade SAN 스위치·NVIDIA GPU/AI 컴퓨트를 설계·공급·구축. SMB 사무 환경 네트워크는 TP-Link 라인업으로 별도 대응.",
};

const whyCards = [
  {
    index: "01",
    tag: "SINGLE_RESPONSIBILITY",
    title: "서버·스토리지·네트워크·GPU 한 파트너",
    desc: "벤더가 갈리면 장애 시 책임 핑퐁이 시작됩니다. EINSTECH는 HP 서버부터 Brocade SAN, NVIDIA GPU까지 한 손으로 묶어 설계·공급·운영해 갈등을 없앱니다.",
  },
  {
    index: "02",
    tag: "STANDARDIZED_STACK",
    title: "검증된 글로벌 표준만 선별",
    desc: "엔지니어 30년 경험으로 환경별 최적 조합을 선정. 검증되지 않은 스펙시트로 모험하지 않고, 이미 국내·해외 거점에서 무사고로 돌아가는 구성을 제안합니다.",
  },
  {
    index: "03",
    tag: "GROWTH_READY",
    title: "AI/HPC까지 확장 가능한 설계",
    desc: "단순 IT 인프라를 넘어 NVIDIA GPU 기반 AI/HPC 워크로드까지 함께 설계. 초기 구성부터 향후 GPU 클러스터 확장을 고려한 전원·냉각·네트워크 토폴로지를 제공합니다.",
  },
];

const enterpriseLineup = [
  {
    badge: "ENTERPRISE_SERVER",
    name: "HP",
    vendor: "Hewlett Packard Enterprise · ProLiant · Synergy",
    color: "cyan",
    tag: "글로벌 표준 서버",
    fit: "기간계·가상화·HPC·DB 서버 전 영역",
    strengths: [
      "ProLiant DL/ML 시리즈 — 범용 엔터프라이즈",
      "Synergy — 컴포저블 인프라",
      "Apollo — HPC/AI 컴퓨트",
      "iLO 원격 관리 · 글로벌 부품 공급망",
    ],
    fitFor: [
      "가상화·DB·ERP 핵심 시스템",
      "Rose HA·MCCS 클러스터 노드 표준",
      "글로벌 거점 동일 SKU 통일",
    ],
  },
  {
    badge: "SAN_FABRIC",
    name: "Brocade",
    vendor: "Broadcom Brocade · Fibre Channel SAN",
    color: "acid",
    tag: "SAN 패브릭 1위",
    fit: "엔터프라이즈 스토리지 패브릭",
    strengths: [
      "Gen 6/7 FC — 32G·64G SAN 스위치",
      "Fabric OS 무중단 펌웨어 업그레이드",
      "Hitachi·Dell·NetApp 스토리지와 검증된 호환성",
      "ISL Trunking·QoS 등 미션크리티컬 기능",
    ],
    fitFor: [
      "Hitachi 스토리지 + Brocade SAN 표준 구성",
      "다중 사이트 SAN 확장·DR",
      "FC 기반 가상화 인프라",
    ],
  },
  {
    badge: "GPU_AI_COMPUTE",
    name: "NVIDIA",
    vendor: "NVIDIA · GPU · AI Compute",
    color: "cyan",
    tag: "AI/HPC 컴퓨트",
    fit: "AI 학습·추론·HPC·가상 워크스테이션",
    strengths: [
      "H100·H200·L40S — 학습/추론 GPU",
      "DGX·HGX — Turn-key AI 서버 플랫폼",
      "vGPU — VDI 그래픽 가상화",
      "InfiniBand·NVLink 고속 인터커넥트 설계",
    ],
    fitFor: [
      "기업 내부 AI/LLM 학습·추론 인프라",
      "엔지니어링·시뮬레이션 HPC",
      "그래픽 집약 VDI(설계·영상)",
    ],
  },
];

const smbLineup = {
  badge: "SMB_NETWORK",
  name: "TP-Link",
  vendor: "TP-Link · Omada · Jetstream",
  color: "cyan",
  tag: "사무 환경 네트워크",
  desc: "사무실·매장·소형 사옥 등 SMB 환경의 유무선 네트워크는 TP-Link Omada 컨트롤러 기반으로 통합 설계. 엔터프라이즈 데이터센터 라인업과 분리해 합리적인 예산으로 안정적인 네트워크를 구축합니다.",
  strengths: [
    "Omada SDN — 무선 AP·스위치·게이트웨이 통합 관리",
    "Jetstream L2/L3 매니지드 스위치",
    "PoE+ 카메라·전화·AP 통합 전원",
    "원격 클라우드 컨트롤러 운영 지원",
  ],
  fitFor: [
    "본사 데이터센터와 분리된 지사·매장 네트워크",
    "사무실 무선 인프라 표준화",
    "엔터프라이즈 라인업 대비 합리적 예산",
  ],
};

const useCases = [
  {
    industry: "엔터프라이즈 서버 + SAN",
    stack: "HP ProLiant + Brocade FC + Hitachi",
    desc: "기간계 DB·ERP를 HP 서버 + Brocade SAN + Hitachi 스토리지 표준 구성으로 통합. Rose HA·MCCS 클러스터와 결합해 무중단 운영.",
    color: "cyan",
  },
  {
    industry: "AI 학습·추론",
    stack: "NVIDIA H100/H200 + InfiniBand",
    desc: "기업 내부 LLM 학습·추론 인프라를 NVIDIA GPU 서버와 고속 인터커넥트로 설계. 전원·냉각·네트워크 토폴로지까지 단일 설계.",
    color: "acid",
  },
  {
    industry: "SMB 사무 네트워크",
    stack: "TP-Link Omada SDN",
    desc: "지사·매장 등 SMB 환경의 무선 AP·스위치·게이트웨이를 Omada 컨트롤러로 통합 관리. 엔터프라이즈 라인업과 분리 운영.",
    color: "cyan",
  },
];

export default function InfrastructurePage() {
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
              <Badge color="cyan">INFRASTRUCTURE</Badge>
              <span className="font-mono text-xs text-muted uppercase tracking-widest">
                HP · Brocade · NVIDIA · TP-Link
              </span>
            </div>

            <h1 className="font-display leading-[0.95] mb-10">
              <span className="block text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-white">
                Infrastructure
              </span>
              <span className="block text-[clamp(2rem,4vw,4rem)] font-light tracking-widest ds-text-glow-cyan text-cyan mt-3">
                ONE PARTNER · FULL STACK
              </span>
            </h1>

            <p className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-white leading-tight ds-word-keep mb-8 max-w-4xl">
              서버 · SAN · GPU · 네트워크,
              <br />
              <span className="ds-text-glow-acid text-acid">한 손으로 묶어 설계합니다.</span>
            </p>

            <p className="font-sans text-muted-strong text-base sm:text-lg leading-relaxed max-w-3xl border-l-2 border-cyan/30 pl-5 ds-word-keep mb-12">
              아인스테크는 데이터센터 하드웨어를 <span className="text-white">HP 서버</span> ·{" "}
              <span className="text-white">Brocade SAN</span> ·{" "}
              <span className="text-white">NVIDIA GPU</span> 표준 조합으로 설계·공급합니다. 사무 환경
              네트워크는 <span className="text-white">TP-Link Omada</span> 라인업으로 분리해, 환경별로
              과·소투자 없이 균형 잡힌 인프라를 구축합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <PrimaryButton href="/contact" className="flex-1">
                인프라 구성 문의
              </PrimaryButton>
              <SecondaryButton href="#lineup" className="flex-1">
                브랜드 라인업 보기
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
              badgeText="WHY_ONE_PARTNER"
              badgeColor="cyan"
              sectionLabel="1. Why — 왜 한 파트너로 묶어야 하는가"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                벤더가 갈리면
                <br />
                <span className="text-cyan">장애 시 책임이 갈립니다.</span>
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
                        REASON_{c.index}
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

        {/* ENTERPRISE LINEUP */}
        <section id="lineup" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-acid/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="ENTERPRISE_TIER"
              badgeColor="acid"
              sectionLabel="2. Lineup — 엔터프라이즈 데이터센터 표준"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                Server · SAN · GPU
                <br />
                <span className="text-acid">검증된 글로벌 표준</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 lg:pl-12">
              {enterpriseLineup.map((p) => {
                const accent = p.color === "acid" ? "text-acid" : "text-cyan";
                const accentBorder = p.color === "acid" ? "border-acid/40" : "border-cyan/40";
                return (
                  <GlassPanel
                    key={p.name}
                    className={`p-8 lg:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500 border ${accentBorder}`}
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex flex-col gap-1">
                        <span className={`font-mono text-[10px] ${accent} tracking-widest`}>
                          {p.badge}
                        </span>
                        <span className="font-mono text-[10px] text-muted uppercase">{p.tag}</span>
                      </div>
                    </div>

                    <h3 className="font-display text-3xl font-bold text-white mb-1 ds-word-keep">
                      {p.name}
                    </h3>
                    <div className={`font-mono text-[11px] ${accent} mb-6 tracking-wide`}>
                      {p.vendor}
                    </div>

                    <p className="font-sans text-muted-strong text-[13px] uppercase tracking-widest mb-4 border-l-2 border-surface-border pl-3">
                      FIT — {p.fit}
                    </p>

                    <ul className="space-y-2.5 mb-6 flex-grow">
                      {p.strengths.map((s) => (
                        <li
                          key={s}
                          className="font-sans text-[14px] text-muted-strong ds-word-keep flex gap-2"
                        >
                          <span className={`${accent} flex-shrink-0`}>▸</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-5 border-t border-surface-border/50">
                      <div className="font-mono text-[10px] text-muted tracking-widest uppercase mb-3">
                        USE_CASES
                      </div>
                      <ul className="space-y-1.5">
                        {p.fitFor.map((f) => (
                          <li
                            key={f}
                            className="font-sans text-[13px] text-white/80 ds-word-keep flex gap-2"
                          >
                            <span className="text-muted">·</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassPanel>
                );
              })}
            </div>
          </div>
        </section>

        {/* SMB NETWORK */}
        <section id="smb" className="py-24 lg:py-32 relative">
          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="SMB_TIER"
              badgeColor="cyan"
              sectionLabel="3. SMB Network — 사무 환경 네트워크는 분리해서 합리적으로"
            >
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                지사·매장·사무실 네트워크는
                <br />
                <span className="text-cyan">엔터프라이즈와 분리해서 구축합니다.</span>
              </h2>
            </SectionHeader>

            <div className="lg:pl-12">
              <GlassPanel className="p-8 lg:p-12 border border-cyan/20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono text-[10px] text-cyan tracking-widest">
                        {smbLineup.badge}
                      </span>
                      <span className="font-mono text-[10px] text-muted uppercase">
                        {smbLineup.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl font-bold text-white mb-2 ds-word-keep">
                      {smbLineup.name}
                    </h3>
                    <div className="font-mono text-[11px] text-cyan mb-6 tracking-wide">
                      {smbLineup.vendor}
                    </div>
                    <p className="font-sans text-muted-strong text-[15px] leading-relaxed ds-word-keep">
                      {smbLineup.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="font-mono text-[10px] text-muted tracking-widest uppercase mb-4">
                      STRENGTHS
                    </div>
                    <ul className="space-y-2.5">
                      {smbLineup.strengths.map((s) => (
                        <li
                          key={s}
                          className="font-sans text-[14px] text-muted-strong ds-word-keep flex gap-2"
                        >
                          <span className="text-cyan flex-shrink-0">▸</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="font-mono text-[10px] text-muted tracking-widest uppercase mb-4">
                      USE_CASES
                    </div>
                    <ul className="space-y-2.5">
                      {smbLineup.fitFor.map((f) => (
                        <li
                          key={f}
                          className="font-sans text-[14px] text-white/80 ds-word-keep flex gap-2"
                        >
                          <span className="text-muted">·</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassPanel>

              <p className="font-mono text-[11px] text-muted tracking-wide uppercase mt-6 ds-word-keep">
                ※ TP-Link는 SMB·사무 환경 전용 라인업입니다. 엔터프라이즈 데이터센터 코어 네트워크는
                별도 표준 제품군으로 설계합니다.
              </p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section id="use-cases" className="py-24 lg:py-32 relative">
          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="USE_CASES"
              badgeColor="cyan"
              sectionLabel="4. Use Cases — 실제 적용 시나리오"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                환경별 최적 조합을
                <br />
                <span className="text-cyan">한 번에 설계합니다.</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 lg:pl-12">
              {useCases.map((u) => {
                const accent = u.color === "acid" ? "text-acid" : "text-cyan";
                const bg = u.color === "acid" ? "bg-acid" : "bg-cyan";
                return (
                  <GlassPanel
                    key={u.industry}
                    className="p-8 lg:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className={`w-10 h-1 ${bg} mb-6`} />
                    <div className="font-mono text-[10px] text-muted tracking-widest uppercase mb-2">
                      INDUSTRY
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-4 ds-word-keep">
                      {u.industry}
                    </h3>
                    <div className={`font-mono text-[12px] ${accent} mb-4 tracking-wide`}>
                      {u.stack}
                    </div>
                    <p className="font-sans text-muted-strong text-[14px] leading-relaxed ds-word-keep flex-grow">
                      {u.desc}
                    </p>
                  </GlassPanel>
                );
              })}
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
                HW
              </div>

              <Badge color="acid" className="mb-6">
                INFRA_READY
              </Badge>

              <h3 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep mb-8 max-w-4xl relative z-10">
                벤더 선택부터 통합 설계까지
                <br />
                <span className="ds-text-glow-acid-strong text-acid">단일 파트너로</span>
              </h3>

              <p className="font-sans text-muted-strong text-base md:text-xl leading-relaxed ds-word-keep max-w-2xl mx-auto mb-12 relative z-10">
                서버·SAN·GPU·네트워크 구성을 한 번에 상담받고
                <br className="hidden md:block" />
                환경에 맞는 최적 조합을 제안받으세요.
              </p>

              <div className="w-full max-w-2xl mx-auto relative z-10 flex flex-col items-center mb-8">
                <div className="ds-cta-btn-wrapper w-full">
                  <a
                    href="/contact"
                    className="w-full bg-acid text-void font-display font-bold text-[clamp(1.1rem,2.5vw,2rem)] py-6 md:py-8 px-6 md:px-8 flex items-center justify-center gap-4 group hover:bg-white transition-colors duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 tracking-tight ds-word-keep">
                      인프라 구성 무료 상담
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
                href="mailto:sungil.yum@einstech.kr?subject=Infrastructure%20%EB%AC%B8%EC%9D%98"
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
