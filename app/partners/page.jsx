import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "파트너십 | EINSTECH",
  description: "아인스테크의 기술·솔루션 파트너를 소개합니다.",
};

const partners = [
  { name: "HPE", company: "Hewlett Packard Enterprise", area: "Enterprise Server · Compute", url: "https://www.hpe.com/kr/ko/home.html", tone: "text-[#01a982]" },
  { name: "Hitachi", company: "HS효성인포메이션시스템 · Hitachi Vantara", area: "Enterprise Storage · Data Infrastructure", url: "https://www.his21.co.kr/", logo: "/partners/hitachi.svg" },
  { name: "TP-Link", company: "TP-Link", area: "Network Switch · Omada SDN", url: "https://www.tp-link.com/kr/", logo: "/partners/tp-link.png" },
  { name: "Rose HA", company: "이에스케이솔루션", area: "High Availability · Replication · DR", url: "https://www.eskits.co.kr/", tone: "text-rose-600" },
  { name: "MCCS", company: "맨텍솔루션", area: "High Availability · Service Continuity", url: "https://www.mantech.co.kr/", logo: "/partners/mantech.png" },
  { name: "ESET", company: "ESET", area: "Endpoint Security · EDR", url: "https://www.eset.com/kr/", tone: "text-[#0096a1]" },
  { name: "Kaspersky", company: "Kaspersky", area: "Endpoint · Enterprise Security", url: "https://www.kaspersky.co.kr/", logo: "/partners/kaspersky.svg" },
  { name: "Acronis", company: "Acronis", area: "Cyber Protection · Backup · DR", url: "https://www.acronis.com/ko-kr/", tone: "text-[#00204d]" },
  { name: "Netwrix", company: "데이타시큐어 · Netwrix", area: "Data Security · DLP · Audit", url: "https://www.netwrix.com/", tone: "text-slate-900" },
  { name: "Sycros", company: "Sycros", area: "IT Infrastructure Monitoring", url: "/contact", tone: "text-indigo-700" },
  { name: "INNOTIUM", company: "이노티움", area: "Data Security · Ransomware Protection", url: "https://www.innotium.com/", logo: "/partners/innotium.png" },
  { name: "NEWCOM", company: "뉴컴", area: "Enterprise Software · IT Solutions", url: "/contact", tone: "text-sky-700" },
  { name: "Dell Technologies", company: "SCG솔루션즈 · Dell Technologies", area: "Server · Storage · Infrastructure", url: "https://scgs.co.kr/business/it", logo: "/partners/dell.svg" },
];

const customerReferences = [
  {
    customer: "이차전지 소재 제조기업",
    project: "통합물류시스템 이중화 구축",
    year: "2024",
    partner: "Rose HA",
    summary: "RoseMirrorHA 기반으로 물류 시스템과 연계 서버의 이중화 구성을 적용하고, 운영 매뉴얼과 기술지원까지 함께 수행했습니다.",
    diagram: "ha-replication",
  },
  {
    customer: "대학 연구센터",
    project: "스토리지 도입 및 사양 검토",
    year: "2026",
    partner: "Hitachi",
    summary: "스토리지 도입 건의 비교 자료와 공통 사양 산정 자료를 바탕으로 저장 인프라 도입을 지원했습니다.",
    diagram: "storage-review",
  },
  {
    customer: "치과의원",
    project: "백업 솔루션 구축",
    year: "2016-2018",
    partner: "Acronis",
    summary: "Acronis 기반 백업 환경을 구성하고, 서버별 백업 용량 산정과 운영 문서를 함께 정리했습니다.",
    diagram: "backup",
  },
  {
    customer: "에너지 공기업",
    project: "GNAS 데이터 이전",
    year: "2015",
    partner: "Commvault",
    summary: "GNAS 데이터 이전 계획과 백업·복구 현황을 기반으로 마이그레이션 작업을 지원했습니다.",
    diagram: "migration",
  },
  {
    customer: "정부출연연구기관",
    project: "SAN Switch 납품·검수",
    year: "2021",
    partner: "SAN Switch",
    summary: "SAN Switch 검수보고서와 납품 자료를 통해 스토리지 연계 인프라 구축을 마무리했습니다.",
    diagram: "san-switch",
  },
  {
    customer: "여론조사 전문기관",
    project: "QSAN NAS 납품",
    year: "2021",
    partner: "QSAN",
    summary: "NAS 납품 완료 보고서와 검수 자료를 기준으로 저장 장비 공급과 현장 확인을 진행했습니다.",
    diagram: "nas-delivery",
  },
  {
    customer: "AI 시스템 운영기업",
    project: "AI 시스템 보안·HA 운영",
    year: "2023-2024",
    partner: "MCCS · Kaspersky",
    summary: "AI 시스템 환경에 MCCS와 Kaspersky를 연동해 가용성과 보안을 함께 보완했습니다.",
    diagram: "ai-security-ha",
  },
];

const NAVY = "#0A3D62";
const EMERALD = "#10B981";
const SLATE = "#94A3B8";

function DiagramFrame({ children }) {
  return (
    <svg viewBox="0 0 220 110" className="w-full h-28" role="img" aria-hidden="true">
      {children}
    </svg>
  );
}

function Box({ x, y, w, h, label, accent }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="6" fill="#fff" stroke={accent ? EMERALD : NAVY} strokeWidth="2" />
      <text x={x + w / 2} y={y + h / 2 + 3} textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="monospace" fill={accent ? EMERALD : NAVY}>{label}</text>
    </g>
  );
}

function Cylinder({ x, y, w, h, label, accent }) {
  const rx = w / 2;
  const ry = 6;
  return (
    <g>
      <path d={`M${x} ${y + ry} a${rx} ${ry} 0 0 0 ${w} 0 v${h} a${rx} ${ry} 0 0 1 -${w} 0 z`} fill="#fff" stroke={accent ? EMERALD : NAVY} strokeWidth="2" />
      <ellipse cx={x + rx} cy={y + ry} rx={rx} ry={ry} fill="#fff" stroke={accent ? EMERALD : NAVY} strokeWidth="2" />
      <text x={x + rx} y={y + ry + h / 2 + 3} textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="monospace" fill={accent ? EMERALD : NAVY}>{label}</text>
    </g>
  );
}

const diagrams = {
  "ha-replication": () => (
    <DiagramFrame>
      <Box x="16" y="30" w="70" h="50" label="ACTIVE" />
      <Box x="134" y="30" w="70" h="50" label="STANDBY" accent />
      <path d="M88 45 H132" stroke={EMERALD} strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
      <path d="M132 65 H88" stroke={EMERALD} strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
      <text x="110" y="95" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={SLATE} letterSpacing="1">SYNC · FAILOVER</text>
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill={EMERALD} /></marker>
      </defs>
    </DiagramFrame>
  ),
  "storage-review": () => (
    <DiagramFrame>
      <Cylinder x="16" y="24" w="56" h="42" label="PLAN A" />
      <Cylinder x="148" y="24" w="56" h="42" label="PLAN B" accent />
      <rect x="90" y="34" width="40" height="30" rx="4" fill="#fff" stroke={NAVY} strokeWidth="2" strokeDasharray="3 3" />
      <path d="M100 42 H120 M100 49 H120 M100 56 H112" stroke={SLATE} strokeWidth="2" strokeLinecap="round" />
      <text x="110" y="95" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={SLATE} letterSpacing="1">SPEC COMPARISON</text>
    </DiagramFrame>
  ),
  backup: () => (
    <DiagramFrame>
      <Box x="16" y="30" w="60" h="50" label="SERVER" />
      <path d="M82 55 H144" stroke={EMERALD} strokeWidth="2" fill="none" markerEnd="url(#arrow2)" />
      <Cylinder x="150" y="24" w="54" h="42" label="BACKUP" accent />
      <circle cx="113" cy="40" r="9" fill="#fff" stroke={SLATE} strokeWidth="1.5" />
      <path d="M113 35 V40 L117 43" stroke={SLATE} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <text x="110" y="95" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={SLATE} letterSpacing="1">SCHEDULED BACKUP</text>
      <defs>
        <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill={EMERALD} /></marker>
      </defs>
    </DiagramFrame>
  ),
  migration: () => (
    <DiagramFrame>
      <Cylinder x="16" y="30" w="54" h="40" label="OLD" />
      <path d="M78 50 Q110 25 142 50" stroke={EMERALD} strokeWidth="2" fill="none" strokeDasharray="4 3" markerEnd="url(#arrow3)" />
      <Cylinder x="150" y="30" w="54" h="40" label="NEW" accent />
      <text x="110" y="95" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={SLATE} letterSpacing="1">DATA MIGRATION</text>
      <defs>
        <marker id="arrow3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill={EMERALD} /></marker>
      </defs>
    </DiagramFrame>
  ),
  "san-switch": () => (
    <DiagramFrame>
      <rect x="60" y="16" width="100" height="22" rx="4" fill="#fff" stroke={EMERALD} strokeWidth="2" />
      <text x="110" y="31" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="monospace" fill={EMERALD}>SAN SWITCH</text>
      {[76, 92, 108, 124, 140].map((cx) => (<rect key={cx} x={cx} y="34" width="4" height="4" fill={EMERALD} />))}
      <path d="M80 38 V60" stroke={NAVY} strokeWidth="2" fill="none" />
      <path d="M140 38 V60" stroke={NAVY} strokeWidth="2" fill="none" />
      <Box x="40" y="62" w="70" h="34" label="STORAGE" />
      <Box x="110" y="62" w="70" h="34" label="SERVERS" />
    </DiagramFrame>
  ),
  "nas-delivery": () => (
    <DiagramFrame>
      <Box x="76" y="34" w="68" h="42" label="NAS" accent />
      {[[20, 20], [200, 20], [20, 90], [200, 90]].map(([cx, cy], i) => (
        <g key={i}>
          <path d={`M${cx} ${cy} L${cx < 110 ? 76 : 144} ${55}`} stroke={SLATE} strokeWidth="1.5" fill="none" />
          <circle cx={cx} cy={cy} r="7" fill="#fff" stroke={NAVY} strokeWidth="1.5" />
        </g>
      ))}
      <text x="110" y="104" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={SLATE} letterSpacing="1">CLIENT ACCESS</text>
    </DiagramFrame>
  ),
  "ai-security-ha": () => (
    <DiagramFrame>
      <Box x="16" y="28" w="70" h="48" label="AI SYSTEM" />
      <path d="M62 24 L74 12 L86 24 Z" fill={EMERALD} />
      <Box x="134" y="20" w="34" h="30" label="A" accent />
      <Box x="134" y="58" w="34" h="30" label="B" accent />
      <path d="M168 35 H180 V63 H168" stroke={EMERALD} strokeWidth="2" fill="none" />
      <text x="110" y="98" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={SLATE} letterSpacing="1">SECURITY + HA CLUSTER</text>
    </DiagramFrame>
  ),
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      <section className="relative overflow-hidden bg-navy pt-40 pb-24 text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#38bdf8_0,transparent_28%),radial-gradient(circle_at_80%_60%,#10b981_0,transparent_28%)]" />
        <div className="relative max-w-page mx-auto px-6 lg:px-12">
          <p className="font-mono text-xs tracking-[0.28em] text-emerald mb-6">PARTNERSHIP ECOSYSTEM</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8">함께 만드는 기술 생태계</h1>
          <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-white/70">아인스테크는 검증된 하드웨어·고가용성·백업·보안·모니터링 솔루션을 연결해 고객 환경에 맞는 통합 인프라를 설계하고 구축합니다.</p>
        </div>
      </section>
      <section className="py-24 lg:py-32">
        <div className="max-w-page mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div><p className="font-mono text-xs tracking-[0.22em] text-emerald mb-4">TECHNOLOGY & SOLUTION PARTNERS</p><h2 className="text-3xl md:text-5xl font-black text-navy">신뢰할 수 있는 파트너</h2></div>
            <p className="max-w-xl text-slate-500 leading-relaxed">제품 공급부터 설계, 구축, 마이그레이션과 기술지원까지 파트너 생태계를 바탕으로 하나의 책임 체계로 제공합니다.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {partners.map((partner) => {
              const external = partner.url.startsWith("http");
              return (
                <a key={`${partner.company}-${partner.name}`} href={partner.url} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="group min-h-[230px] rounded-[28px] border border-slate-200 bg-white p-7 flex flex-col hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_18px_45px_rgba(10,61,98,0.10)] transition-all">
                  <div className="h-20 flex items-center mb-7">{partner.logo ? <img src={partner.logo} alt={`${partner.name} 로고`} className="max-h-16 max-w-[190px] object-contain object-left" /> : <span className={`text-2xl font-black tracking-tight ${partner.tone || "text-navy"}`}>{partner.name}</span>}</div>
                  <div className="mt-auto"><h3 className="font-bold text-slate-900 mb-2">{partner.company}</h3><p className="text-sm text-slate-500 leading-relaxed">{partner.area}</p><span className="inline-flex items-center gap-1 mt-4 font-mono text-[10px] tracking-wider text-navy opacity-0 group-hover:opacity-100 transition-opacity">PARTNER WEBSITE <span>↗</span></span></div>
                </a>
              );
            })}
          </div>
          <div className="mt-16 rounded-[32px] border border-slate-200 bg-slate-50/80 px-6 py-8 md:px-8 md:py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-mono text-xs text-emerald tracking-[0.18em] mb-3">CUSTOMER REFERENCES</p>
                <h3 className="text-2xl md:text-3xl font-black text-navy mb-2">검증된 구축 사례</h3>
                <p className="max-w-2xl text-slate-500">고객사 비밀유지 정책에 따라 실제 기업명은 표기하지 않고 업종·구축 내용 중심으로 정리했습니다.</p>
              </div>
              <a href="/contact" className="inline-flex justify-center rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white hover:bg-emerald transition-colors">구축 상담 요청</a>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {customerReferences.map((reference) => {
                const Diagram = diagrams[reference.diagram];
                return (
                  <article key={`${reference.customer}-${reference.project}`} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    {Diagram && <div className="mb-5 rounded-xl bg-slate-50 border border-slate-100 px-2 pt-2"><Diagram /></div>}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-mono tracking-[0.18em] text-emerald">{reference.year}</p>
                        <h4 className="mt-2 text-lg font-black text-navy leading-tight">{reference.customer}</h4>
                      </div>
                      <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600">{reference.partner}</span>
                    </div>
                    <p className="mt-4 text-sm font-bold text-slate-900">{reference.project}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-500">{reference.summary}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
