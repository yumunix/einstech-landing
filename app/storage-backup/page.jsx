import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import GlassPanel from "@/components/ds/GlassPanel";
import SectionHeader from "@/components/ds/SectionHeader";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";

export const metadata = {
  title: "Storage + Backup — Hitachi · Acronis · Veritas | EINSTECH",
  description:
    "운영 스토리지부터 백업·복구까지 단일 파트너로. Hitachi NVMe All-Flash, Acronis Cyber Protect, Veritas NetBackup을 환경에 맞춰 통합 설계합니다. 3-2-1-1-0 백업 규칙과 이뮤터블 백업으로 사이버 회복탄력성을 확보합니다.",
};

const whyCards = [
  {
    index: "01",
    tag: "ONE_RESPONSIBILITY",
    title: "스토리지·백업 단일 책임",
    desc: "스토리지 따로, 백업 따로 도입하면 장애 시 책임 떠넘기기가 일어납니다. 아인스테크는 원본부터 마지막 사본까지 한 파트너가 통합 책임집니다.",
  },
  {
    index: "02",
    tag: "TIER_OPTIMIZED",
    title: "데이터 가치별 계층 설계",
    desc: "모든 데이터에 동일한 보호 등급을 줄 필요는 없습니다. Tier 0 핵심 DB부터 아카이브까지 가치·복구목표(RPO/RTO)에 맞춰 비용 효율을 극대화합니다.",
  },
  {
    index: "03",
    tag: "RANSOMWARE_PROOF",
    title: "랜섬웨어가 못 건드리는 백업",
    desc: "백업이 함께 암호화되면 복구가 불가능합니다. Immutable Vault·Object Lock·Air-Gap을 기본 적용해, 백업이 살아있어야 복구가 의미를 가집니다.",
  },
];

const lineup = [
  {
    badge: "PRIMARY_STORAGE",
    name: "Hitachi VSP",
    vendor: "Hitachi Vantara",
    color: "cyan",
    tag: "NVMe All-Flash · 99.999% 가동률",
    role: "운영 스토리지",
    strengths: [
      "NVMe All-Flash 기반 마이크로초 응답",
      "Active-Active 메트로 클러스터 무중단",
      "글로벌 액티브 디바이스 (GAD) 사이트 이중화",
      "Hitachi Data Reduction으로 용량 최적화",
    ],
    fitFor: [
      "Tier 0 핵심 DB · MES · ERP 운영 저장소",
      "사이트 단위 무중단 메트로 구성",
      "엔터프라이즈 SAN 표준화",
    ],
  },
  {
    badge: "UNIFIED_PROTECT",
    name: "Acronis Cyber Protect",
    vendor: "Acronis",
    color: "acid",
    tag: "백업 + 안티랜섬웨어 단일 플랫폼",
    role: "통합 사이버 보호",
    strengths: [
      "AI 기반 Active Protection — 랜섬웨어 실시간 차단",
      "Object Lock 기반 Immutable Backup 기본 제공",
      "이기종 즉시 복구 (Universal Restore)",
      "백업·보안·패치·재해복구 단일 콘솔",
    ],
    fitFor: [
      "백업과 보안을 하나로 통합하려는 환경",
      "레거시 백업(아크서브 등)에서 전환",
      "관리 콘솔 단순화·운영 인력 효율화",
    ],
    linkLabel: "→ Acronis 전환 서비스 보기",
    linkHref: "/backup-modernization",
  },
  {
    badge: "ENTERPRISE_BACKUP",
    name: "Veritas NetBackup",
    vendor: "Veritas Technologies",
    color: "cyan",
    tag: "엔터프라이즈 백업 글로벌 표준",
    role: "대규모 백업 표준",
    strengths: [
      "이기종 OS·DB·하이퍼바이저 완전 지원",
      "Scale-out 어플라이언스로 PB 규모 처리",
      "AIR(Auto Image Replication) 다중 사이트",
      "워크로드별 정교한 정책 관리",
    ],
    fitFor: [
      "수십~수백 TB 이상 대규모 백업",
      "다국적·다거점 통합 백업 정책",
      "공공·금융 엔터프라이즈 기간계",
    ],
  },
];

const rule = [
  {
    n: "3",
    label: "사본",
    desc: "데이터 사본 3개 — 원본 1 + 백업 2",
  },
  {
    n: "2",
    label: "매체",
    desc: "서로 다른 매체 2종 — 디스크 + 테이프/오브젝트",
  },
  {
    n: "1",
    label: "원격지",
    desc: "최소 1개 원격지 보관 — 사이트 단위 재해 대응",
  },
  {
    n: "1",
    label: "오프라인",
    desc: "1개 오프라인/이뮤터블 — 랜섬웨어 차단",
  },
  {
    n: "0",
    label: "오류",
    desc: "복구 검증 오류 0건 — Live Restore Drill로 실측",
  },
];

const architecture = [
  {
    index: "01",
    tag: "PRIMARY_TIER",
    title: "운영 계층 (Hitachi VSP)",
    desc: "MES·ERP·DB 등 핵심 시스템 운영. NVMe All-Flash + Active-Active 메트로 클러스터로 사실상 무중단을 구현합니다.",
  },
  {
    index: "02",
    tag: "BACKUP_TIER",
    title: "백업 계층 (Acronis / Veritas)",
    desc: "워크로드 특성에 맞춰 통합 보호(Acronis)와 대규모 표준 백업(Veritas)을 선택해 단일 정책으로 통합 관리합니다.",
  },
  {
    index: "03",
    tag: "IMMUTABLE_VAULT",
    title: "이뮤터블 볼트 (Object Lock / WORM)",
    desc: "백업 자체를 변경 불가 상태로 보관. 관리자 계정이 탈취돼도 보존 기간 동안 삭제·암호화가 불가합니다.",
  },
  {
    index: "04",
    tag: "ISOLATED_RECOVERY",
    title: "격리 복구 환경 (IRE / Clean Room)",
    desc: "감염 의심 백업을 격리 환경에서 복원·검증한 뒤에만 운영망에 반입. 재감염 경로를 원천 차단합니다.",
  },
];

const references = [
  {
    industry: "반도체 / 제조",
    customer: "S PCB 제조사",
    solution: "Hitachi + 백업 통합",
    desc: "PCB 생산 핵심 시스템의 운영 스토리지와 백업을 통합 운영. 생산 라인 정지 없는 데이터 보호 체계 확보.",
    color: "cyan",
  },
  {
    industry: "엔터프라이즈 통합",
    customer: "다수 (NDA)",
    solution: "Acronis · Veritas 혼합 구성",
    desc: "워크로드별 적정 솔루션을 혼합 설계. 레거시 백업에서 통합 사이버 보호로의 전환 프로젝트 다수 수행.",
    color: "cyan",
  },
];

const process = [
  {
    step: "01",
    title: "데이터 자산 인벤토리",
    desc: "보호 대상 시스템·데이터 분류·증가율·법적 보존 기간을 식별해 우선순위와 보호 등급을 정의합니다.",
  },
  {
    step: "02",
    title: "Tier별 RPO/RTO 정의",
    desc: "Tier 0 핵심 DB부터 아카이브까지 복구목표를 시스템별로 명문화. 투자 효율 기준을 확정합니다.",
  },
  {
    step: "03",
    title: "스토리지·백업 통합 설계",
    desc: "Hitachi 운영 스토리지 + Acronis/Veritas 중 적합 조합을 설계. 3-2-1-1-0 규칙을 적용합니다.",
  },
  {
    step: "04",
    title: "무중단 구축·실복구 검증",
    desc: "운영 멈춤 없이 구축하고 Live Restore Drill로 RPO/RTO 실측 검증. 종이상 약속을 실데이터로 증명합니다.",
  },
  {
    step: "05",
    title: "운영 인계 & 정기 훈련",
    desc: "분기별 복구 모의훈련과 24/7 모니터링·기술지원으로 인계. 살아있는 백업 체계를 유지합니다.",
  },
];

export default function StorageBackupPage() {
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
              <Badge color="cyan">STORAGE_BACKUP</Badge>
              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                Hitachi · Acronis · Veritas
              </span>
            </div>

            <h1 className="font-display leading-[0.95] mb-10">
              <span className="block text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-slate-900">
                Storage + Backup
              </span>
              <span className="block text-[clamp(2rem,4vw,4rem)] font-light tracking-widest ds-text-glow-cyan text-navy mt-3">
                FROM SOURCE TO LAST COPY
              </span>
            </h1>

            <p className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-slate-900 leading-tight ds-word-keep mb-8 max-w-4xl">
              원본의 첫 쓰기부터
              <br />
              <span className="ds-text-glow-acid text-emerald">마지막 사본까지 한 책임으로.</span>
            </p>

            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl border-l-2 border-navy/30 pl-5 ds-word-keep mb-12">
              운영 스토리지(<span className="text-slate-900">Hitachi</span>)부터 통합 사이버 보호(
              <span className="text-slate-900">Acronis</span>), 엔터프라이즈 표준 백업(
              <span className="text-slate-900">Veritas</span>)까지 — 데이터의 전 수명주기를 단일
              파트너가 통합 책임집니다. 3-2-1-1-0 규칙과 이뮤터블 볼트로 랜섬웨어 시대의
              회복탄력성을 확보합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <PrimaryButton href="/contact" className="flex-1">
                통합 진단 신청
              </PrimaryButton>
              <SecondaryButton href="#lineup" className="flex-1">
                제품 라인업 보기
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
              badgeText="WHY_INTEGRATED"
              badgeColor="cyan"
              sectionLabel="1. Why — 통합 설계가 필요한 이유"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                스토리지와 백업이
                <br />
                <span className="text-navy">따로 설계되면 안 됩니다.</span>
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
                        WHY_{c.index}
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
              sectionLabel="2. Lineup — 4가지 제품, 1개 책임"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                운영 → 백업 → 보호 → 시점 복구
                <br />
                <span className="ds-text-glow-acid text-emerald">전 영역을 단일 파트너로.</span>
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
                      className={`font-mono text-[11px] ${accent} border ${border} ${tint} px-3 py-2 tracking-widest uppercase mb-2 self-start`}
                    >
                      {p.tag}
                    </div>
                    <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-6">
                      ROLE · {p.role}
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
                    <ul className="space-y-2 mb-2">
                      {p.fitFor.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <span className="font-mono text-navy flex-shrink-0">→</span>
                          <span className="font-sans text-slate-600 text-[14px] leading-relaxed ds-word-keep">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {p.linkHref && (
                      <a
                        href={p.linkHref}
                        className={`mt-4 font-mono text-[11px] ${accent} hover:text-slate-900 transition-colors tracking-widest uppercase`}
                      >
                        {p.linkLabel}
                      </a>
                    )}
                  </GlassPanel>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3-2-1-1-0 Rule */}
        <section id="rule" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="BACKUP_RULE"
              badgeColor="cyan"
              sectionLabel="3. Standard — 3-2-1-1-0 백업 규칙"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                <span className="text-navy">3-2-1-1-0</span>
                <br />
                2026년 백업의 새 표준
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 lg:pl-12">
              {rule.map((r) => (
                <GlassPanel
                  key={r.label}
                  className="p-6 lg:p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="font-display text-6xl md:text-7xl font-bold text-navy ds-text-glow-cyan mb-3 group-hover:text-emerald group-hover:ds-text-glow-acid transition-all">
                    {r.n}
                  </div>
                  <div className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-3">
                    {r.label}
                  </div>
                  <p className="font-sans text-slate-600 text-[13px] leading-relaxed ds-word-keep">
                    {r.desc}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section id="architecture" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-acid/30 via-cyan/30 to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="ARCHITECTURE"
              badgeColor="acid"
              sectionLabel="4. Architecture — 4계층 통합 아키텍처"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                운영 · 백업 · 이뮤터블 · 격리복구
                <br />
                <span className="ds-text-glow-acid text-emerald">4계층 통합 구조</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:pl-12">
              {architecture.map((a) => (
                <GlassPanel
                  key={a.index}
                  className="p-8 lg:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-8 relative">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase group-hover:text-navy transition-colors">
                        LAYER_{a.index}
                      </span>
                      <span className="font-mono text-[10px] text-emerald">{a.tag}</span>
                    </div>
                    <div className="font-display text-7xl font-bold ds-text-outline opacity-10 pointer-events-none absolute -top-4 -right-2 group-hover:opacity-30 transition-opacity">
                      {a.index}
                    </div>
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-slate-900 mb-4 ds-word-keep">
                    {a.title}
                  </h3>
                  <p className="font-sans text-slate-600 text-[15px] leading-relaxed ds-word-keep flex-grow">
                    {a.desc}
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
              sectionLabel="5. References — 운영 중인 현장"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-4xl">
                <span className="text-navy">의료 · 반도체 · 엔터프라이즈</span>
                <br />
                현장에서 운영 중인 구성
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
                자산 분석 → Tier 정의 → 통합 설계
                <br />
                <span className="text-navy">→ 검증 → 운영 인계</span>
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
                S+B
              </div>

              <Badge color="acid" className="mb-6">
                STORAGE_READY
              </Badge>

              <h3 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep mb-8 max-w-4xl relative z-10">
                백업이 살아있어야
                <br />
                <span className="ds-text-glow-acid-strong text-emerald">복구가 의미가 있습니다.</span>
              </h3>

              <p className="font-sans text-slate-600 text-base md:text-xl leading-relaxed ds-word-keep max-w-2xl mx-auto mb-12 relative z-10">
                현재 운영 스토리지·백업 구성을 무료로 진단해
                <br className="hidden md:block" />
                최적의 통합 설계안과 RPO/RTO 실측 목표를 제시해 드립니다.
              </p>

              <div className="w-full max-w-2xl mx-auto relative z-10 flex flex-col items-center mb-8">
                <div className="ds-cta-btn-wrapper w-full">
                  <a
                    href="/contact"
                    className="w-full bg-emerald text-white font-display font-bold text-[clamp(1.1rem,2.5vw,2rem)] py-6 md:py-8 px-6 md:px-8 flex items-center justify-center gap-4 group hover:bg-white transition-colors duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 tracking-tight ds-word-keep">
                      통합 무료 진단 신청
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
                href="mailto:sungil.yum@einstech.kr?subject=Storage%20%2B%20Backup%20%EB%AC%B8%EC%9D%98"
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
