import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import GlassPanel from "@/components/ds/GlassPanel";
import SectionHeader from "@/components/ds/SectionHeader";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";

export const metadata = {
  title: "회사 소개 — EINSTECH | 2014 설립 · 엔지니어 30년 · 1,000+ 프로젝트",
  description:
    "EINSTECH는 2014년 설립된 인프라 전문 SI 기업입니다. 엔지니어 30년 경험으로 HA Cluster · Storage · Backup · Data Security를 통합 설계해 왔으며, 누적 1,000건 이상의 프로젝트와 말레이시아 해외 거점을 운영합니다.",
};

const identity = [
  { label: "설립", value: "2014.05.01", unit: "EST" },
  { label: "본사", value: "용인 · 수지", unit: "HQ" },
  { label: "해외 거점", value: "말레이시아", unit: "OVS" },
  { label: "엔지니어 경력", value: "30년", unit: "ENG" },
  { label: "누적 프로젝트", value: "1,000+", unit: "PRJ" },
  { label: "공식 파트너", value: "8+", unit: "PTR" },
];

const whyCards = [
  {
    index: "01",
    tag: "ENGINEER_FIRST",
    title: "영업이 아닌 엔지니어가 설계",
    desc: "30년 경력의 인프라 엔지니어가 제안·설계·구축·인계 전 단계를 직접 수행합니다. 영업 담당이 아닌 실제 운영 가능한 사람이 첫 회신부터 응답합니다.",
  },
  {
    index: "02",
    tag: "SINGLE_RESPONSIBILITY",
    title: "HA · 스토리지 · 백업 · 보안 단일 책임",
    desc: "솔루션별로 파트너를 나누지 않습니다. 운영 스토리지부터 백업·DLP·HA·DR까지 단일 책임으로 통합 설계해 장애 시 책임 떠넘기기를 구조적으로 제거합니다.",
  },
  {
    index: "03",
    tag: "VENDOR_NEUTRAL",
    title: "8개 글로벌 벤더 멀티 라인업",
    desc: "특정 벤더에 종속되지 않고 환경에 가장 맞는 조합을 설계합니다. Rose · MCCS · Hitachi · Acronis · Veritas · TINA · Netwrix · Kaspersky 전 영역 정식 파트너.",
  },
  {
    index: "04",
    tag: "GLOBAL_PROVEN",
    title: "글로벌 거점 구축 경험",
    desc: "헝가리·중국 시안·말레이시아 현장에 직접 구축·운영. 본사와 해외 거점을 동일 표준으로 통합하는 다국적 프로젝트 운영 역량을 보유합니다.",
  },
];

const businessAreas = [
  {
    cat: "HA_CLUSTER",
    title: "HA Cluster",
    desc: "Rose HA · 맨텍 MCCS 듀얼 라인업. Active-Standby부터 Active-Active·SANless·다중 사이트 DR까지.",
    href: "/ha-cluster",
  },
  {
    cat: "STORAGE_BACKUP",
    title: "Storage + Backup",
    desc: "Hitachi NVMe All-Flash + Acronis · Veritas · Atempo TINA. 운영부터 시점 복구까지 통합 보호.",
    href: "/storage-backup",
  },
  {
    cat: "DATA_SECURITY",
    title: "Data Security",
    desc: "Netwrix DLP + Kaspersky EDR. 내부자 위협·AI/LLM 유출까지 Zero Trust로 통제.",
    href: "/dlp-antivirus",
  },
  {
    cat: "BCP_DR",
    title: "BCP · DR",
    desc: "Isolated Recovery · Immutable Vault · Active-Active 이중화로 사이버 회복탄력성 설계.",
    href: "/bcp",
  },
];

const vendors = [
  { name: "HP / HPE", role: "Server · Networking" },
  { name: "Hitachi Vantara", role: "Enterprise Storage" },
  { name: "Mantech", role: "MCCS · HA Cluster" },
  { name: "Rose Datasystems", role: "Rose HA Cluster" },
  { name: "Acronis", role: "Cyber Protect" },
  { name: "Veritas", role: "NetBackup" },
  { name: "Atempo", role: "TINA Time Navigator" },
  { name: "Netwrix", role: "Endpoint DLP" },
  { name: "Kaspersky", role: "Endpoint EDR" },
  { name: "Brocade", role: "SAN Fabric" },
  { name: "NetApp", role: "NAS / Storage" },
  { name: "APC", role: "Power · UPS" },
];

const history = [
  {
    year: "2014",
    title: "Founded",
    items: [
      "EINSTECH 법인 설립 (2014.05.01)",
      "효성인포메이션(Hitachi)·맨텍(MCCS)·HP·Acronis·Cycros 공식 파트너 체결",
      "개인정보보호솔루션 · E-CIM · NAS 업그레이드 프로젝트 착수",
    ],
  },
  {
    year: "2015",
    title: "Infrastructure Expansion",
    items: [
      "Hitachi Storage 마이그레이션 · VTL 백업솔루션 · Acronis 도입 확대",
      "중국 시안 NAS 복제솔루션 공급",
      "TINA · NetApp · Virbak Abio 신규 파트너 추가",
    ],
  },
  {
    year: "2016",
    title: "Security Hardening",
    items: [
      "랜섬웨어 보호솔루션 · NetApp NAS · HP 서버 도입",
      "NAS · 백업 · 스토리지 17개 프로젝트 수행",
    ],
  },
  {
    year: "2017",
    title: "System Integration",
    items: [
      "문서 중앙화 고도화 · ERP 고도화 프로젝트",
      "Acronis 솔루션 공급 확대",
    ],
  },
  {
    year: "2018",
    title: "Partnership",
    items: [
      "MES DR 시스템 구축 · Email Archiving 도입",
      "중국 MCCS 이중화 구축",
      "Veritas 솔루션 파트너 계약",
    ],
  },
  {
    year: "2019",
    title: "Advancement",
    items: [
      "MES 고도화 · 서버 이전",
      "Veritas · Acronis 갱신 프로젝트 11건",
    ],
  },
  {
    year: "2020",
    title: "Growth",
    items: [
      "DB 접근제어 · 침입탐지솔루션 공급",
      "피앤피시큐어 파트너 계약",
    ],
  },
  {
    year: "2021",
    title: "Global",
    items: [
      "말레이시아 법인 EINSTECHMT SDN. BHD. 설립",
      "AI 서버 · 인프라 네트웍 컨설팅 공급",
      "HP · Acronis · APC 말레이시아 파트너 체결",
    ],
  },
  {
    year: "2022",
    title: "Expansion",
    items: [
      "말레이시아 AFVI 시스템 · AnLap ESP 솔루션 공급",
      "DELL Malaysia · Cisco · Samsung Display 파트너 확장",
      "글로벌 프로젝트 16건 수행",
    ],
  },
  {
    year: "2023",
    title: "Diffusion",
    items: [
      "AI 시스템 백신 · MCCS HA Cluster · Kaspersky Security 공급",
      "헝가리 MCCS Cluster 구축",
    ],
  },
  {
    year: "2024",
    title: "Innovation",
    items: [
      "Hitachi F400 NVMe SSD 증설",
      "Netwrix DLP 1,500 copy 납품",
      "AI 시스템 Kaspersky Security 다수 공급",
    ],
  },
  {
    year: "2025",
    title: "Leap",
    items: [
      "Veritas NetBackup · Navy 시스템 납품",
      "Acronis Cyber Protect 공급 본격화",
    ],
  },
  {
    year: "2026",
    title: "Present",
    items: [
      "Acronis Cyber Protect · Brocade G720 · Netwrix Endpoint DLP 공급",
      "Backup Modernization (Acronis 전환 캠페인) 본격화",
    ],
  },
];

export default function CompanyPage() {
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
              <Badge color="cyan">COMPANY</Badge>
              <span className="font-mono text-xs text-muted uppercase tracking-widest">
                EINSTECH · EST. 2014 · ENG.30Y · 1,000+ PROJECTS
              </span>
            </div>

            <h1 className="font-display leading-[0.95] mb-10">
              <span className="block text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-white">
                안 멈추는 시스템을
              </span>
              <span className="block text-[clamp(2rem,4vw,4rem)] font-light tracking-widest ds-text-glow-cyan text-cyan mt-3">
                설계해 온 12년
              </span>
            </h1>

            <p className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-white leading-tight ds-word-keep mb-8 max-w-4xl">
              우리는 솔루션을 파는 회사가 아니라,
              <br />
              <span className="ds-text-glow-acid text-acid">멈추지 않는 시스템을 설계하는 회사</span>
              입니다.
            </p>

            <p className="font-sans text-muted-strong text-base sm:text-lg leading-relaxed max-w-3xl border-l-2 border-cyan/30 pl-5 ds-word-keep mb-12">
              EINSTECH는 2014년 5월 1일 설립된 인프라 전문 SI 기업입니다.{" "}
              <span className="text-white">엔지니어 30년 경험</span>으로 HA Cluster · 스토리지 ·
              백업 · 데이터 보안을 단일 책임으로 통합 설계해 왔으며,{" "}
              <span className="text-white">누적 1,000건 이상의 프로젝트</span>와 헝가리·시안·말레이시아 등 글로벌 거점 구축 경험을 보유합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <PrimaryButton href="/contact" className="flex-1">
                인프라 무료 진단 신청
              </PrimaryButton>
              <SecondaryButton href="#history" className="flex-1">
                12년의 기록 보기
              </SecondaryButton>
            </div>
          </div>
        </section>

        {/* IDENTITY METRICS */}
        <section id="identity" className="py-20 lg:py-24 relative">
          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 lg:pl-12">
              {identity.map((m) => (
                <GlassPanel
                  key={m.label}
                  className="p-5 lg:p-6 flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="font-mono text-[10px] text-cyan tracking-widest uppercase mb-2">
                    {m.unit}
                  </div>
                  <div className="font-display text-2xl lg:text-3xl font-bold text-white mb-2 ds-word-keep">
                    {m.value}
                  </div>
                  <div className="font-mono text-[10px] text-muted uppercase tracking-widest">
                    {m.label}
                  </div>
                </GlassPanel>
              ))}
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
              badgeText="WHY_EINSTECH"
              badgeColor="cyan"
              sectionLabel="1. Why — 다른 SI와 무엇이 다른가"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                영업이 아닌
                <br />
                <span className="text-cyan">엔지니어가 책임지는 SI</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:pl-12">
              {whyCards.map((c) => (
                <GlassPanel
                  key={c.index}
                  className="p-8 lg:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-10 relative">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-muted tracking-widest uppercase group-hover:text-cyan transition-colors">
                        WHY_{c.index}
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

        {/* BUSINESS AREAS */}
        <section id="business" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-acid/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="BUSINESS_AREAS"
              badgeColor="acid"
              sectionLabel="2. Business — 사업 영역"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                4개 카테고리,
                <br />
                <span className="ds-text-glow-acid text-acid">한 파트너의 단일 책임.</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:pl-12">
              {businessAreas.map((b) => (
                <a
                  key={b.title}
                  href={b.href}
                  className="block group"
                >
                  <GlassPanel className="p-8 lg:p-10 flex flex-col h-full hover:-translate-y-2 transition-all duration-500">
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-[10px] text-cyan tracking-widest uppercase">
                        {b.cat}
                      </span>
                      <span className="font-mono text-cyan group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                    <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-4 ds-word-keep">
                      {b.title}
                    </h3>
                    <p className="font-sans text-muted-strong text-[15px] leading-relaxed ds-word-keep">
                      {b.desc}
                    </p>
                  </GlassPanel>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* VENDOR PARTNERS */}
        <section id="partners" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="VENDOR_PARTNERS"
              badgeColor="cyan"
              sectionLabel="3. Partners — 공식 파트너 벤더"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                <span className="text-cyan">8개 글로벌 벤더</span>
                <br />
                전 영역 정식 파트너십
              </h2>
            </SectionHeader>

            <div className="lg:pl-12">
              <GlassPanel className="p-8 lg:p-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-surface-border/40">
                  {vendors.map((v) => (
                    <div
                      key={v.name}
                      className="bg-void/60 p-5 flex flex-col gap-1 hover:bg-cyan/5 transition-colors"
                    >
                      <div className="font-display text-base font-bold text-white ds-word-keep">
                        {v.name}
                      </div>
                      <div className="font-mono text-[10px] text-muted uppercase tracking-widest">
                        {v.role}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassPanel>

              <p className="font-mono text-[10px] text-muted leading-relaxed mt-4 ds-word-keep">
                ※ 위 외에도 Cycros · Brocade · Cisco · DELL · APC · 피앤피시큐어 등과 프로젝트 단위 파트너십을 운영합니다.
              </p>
            </div>
          </div>
        </section>

        {/* HISTORY TIMELINE */}
        <section id="history" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-acid/30 via-cyan/30 to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="HISTORY"
              badgeColor="acid"
              sectionLabel="4. History — 12년의 기록 (2014 — 2026)"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                국내에서 시작해
                <br />
                <span className="ds-text-glow-acid text-acid">글로벌로 확장한 12년</span>
              </h2>
            </SectionHeader>

            <div className="lg:pl-12 space-y-4">
              {history.map((h, idx) => (
                <GlassPanel
                  key={h.year}
                  className="p-6 lg:p-8 flex flex-col md:flex-row gap-6 group hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="flex items-start gap-4 md:w-64 flex-shrink-0">
                    <div className="font-display text-4xl md:text-5xl font-bold ds-text-outline opacity-30 group-hover:text-cyan group-hover:opacity-100 transition-all duration-500">
                      {h.year}
                    </div>
                    <div className="flex flex-col gap-1 pt-2">
                      <span className="font-mono text-[10px] text-muted uppercase tracking-widest">
                        Y_{String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[10px] text-cyan uppercase tracking-widest">
                        {h.title}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 border-l border-surface-border/40 md:pl-6">
                    <ul className="space-y-2">
                      {h.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 bg-cyan flex-shrink-0" />
                          <span className="font-sans text-muted-strong text-[14px] leading-relaxed ds-word-keep">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassPanel>
              ))}
            </div>

            <p className="font-mono text-[10px] text-muted leading-relaxed mt-6 ds-word-keep lg:pl-12">
              ※ 일부 고객사·프로젝트는 NDA 정책에 따라 익명·약어로 표기. 상세 레퍼런스는 도입 검토 단계에서 별도 공유합니다.
            </p>
          </div>
        </section>

        {/* CONTACT INFO */}
        <section id="contact-info" className="py-24 lg:py-32 relative">
          <div
            className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-transparent to-transparent hidden lg:block -z-10"
            aria-hidden
          />

          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
            <SectionHeader
              badgeText="CONTACT"
              badgeColor="cyan"
              sectionLabel="5. Contact — 연락처"
            >
              <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-4xl">
                현직 엔지니어가
                <br />
                <span className="text-cyan">직접 회신합니다.</span>
              </h2>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:pl-12">
              <GlassPanel className="p-8 lg:p-10 flex flex-col">
                <div className="font-mono text-[10px] text-cyan uppercase tracking-widest mb-5">
                  HEADQUARTERS · 본사
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-1">
                      ADDRESS
                    </div>
                    <div className="font-sans text-white text-[15px] leading-relaxed ds-word-keep">
                      경기도 용인시 수지구 문인로54번길 2
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-1">
                      PHONE
                    </div>
                    <a
                      href="tel:070-4142-9990"
                      className="font-display text-2xl font-bold text-cyan hover:text-white transition-colors"
                    >
                      070-4142-9990
                    </a>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-1">
                      E-MAIL
                    </div>
                    <a
                      href="mailto:sungil.yum@einstech.kr"
                      className="font-mono text-base text-cyan hover:text-white transition-colors"
                    >
                      sungil.yum@einstech.kr
                    </a>
                  </div>
                </div>
              </GlassPanel>

              <GlassPanel className="p-8 lg:p-10 flex flex-col">
                <div className="font-mono text-[10px] text-acid uppercase tracking-widest mb-5">
                  OVERSEAS · 해외 거점
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-1">
                      ENTITY
                    </div>
                    <div className="font-display text-xl font-bold text-white ds-word-keep">
                      EINSTECHMT SDN. BHD.
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-1">
                      LOCATION
                    </div>
                    <div className="font-sans text-white text-[15px] leading-relaxed ds-word-keep">
                      Malaysia · 2021년 설립
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-1">
                      PARTNERS
                    </div>
                    <div className="font-mono text-[12px] text-muted-strong leading-relaxed">
                      HP · Acronis · APC · DELL Malaysia · Cisco · Samsung Display
                    </div>
                  </div>
                </div>
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
                EST.
              </div>

              <Badge color="acid" className="mb-6">
                READY_TO_TALK
              </Badge>

              <h3 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep mb-8 max-w-4xl relative z-10">
                인프라 진단부터
                <br />
                <span className="ds-text-glow-acid-strong text-acid">엔지니어가 직접</span>.
              </h3>

              <p className="font-sans text-muted-strong text-base md:text-xl leading-relaxed ds-word-keep max-w-2xl mx-auto mb-12 relative z-10">
                12년의 운영 경험과 30년의 엔지니어링 노하우로
                <br className="hidden md:block" />
                우리 회사에 맞는 안 멈추는 시스템을 설계해 드립니다.
              </p>

              <div className="w-full max-w-2xl mx-auto relative z-10 flex flex-col items-center mb-8">
                <div className="ds-cta-btn-wrapper w-full">
                  <a
                    href="/contact"
                    className="w-full bg-acid text-void font-display font-bold text-[clamp(1.1rem,2.5vw,2rem)] py-6 md:py-8 px-6 md:px-8 flex items-center justify-center gap-4 group hover:bg-white transition-colors duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 tracking-tight ds-word-keep">
                      인프라 무료 진단 신청
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
                href="mailto:sungil.yum@einstech.kr?subject=EINSTECH%20%EB%AC%B8%EC%9D%98"
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
