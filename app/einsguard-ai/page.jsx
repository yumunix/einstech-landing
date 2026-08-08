import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/einsguard-ai",
  title: "EINSGUARD AI — 기업용 AI 사용·보안 거버넌스 | EINSTECH",
  description: "Claude, Codex 등 기업 내 AI 도구 사용을 온프레미스에서 모니터링하고 정책·승인·차단·위험 대응을 통합하는 AI 거버넌스 제품입니다. 15일 무료체험.",
  keywords: ["EINSGUARD AI", "아인스가드 AI", "AI 거버넌스", "Claude 모니터링", "Codex 보안", "Shadow AI", "온프레미스 AI 보안"],
});

const capabilities = [
  ["통합 AI 자산", "Linux·macOS 장비의 Claude, Codex, Gemini, Ollama 등 설치·실행 상태를 한 화면에서 확인합니다."],
  ["실시간 세션 제어", "위험 세션을 일시정지하고 관리자가 승인하면 재개하거나 거부하면 종료합니다."],
  ["정책과 승인", "사용자·장비·AI 도구별 허용 시간, 횟수, 차단 및 승인 정책을 적용합니다."],
  ["Shadow AI 탐지", "승인되지 않은 AI 도구 실행을 식별하고 조사·승인·해결 이력을 남깁니다."],
  ["사용량·비용 분석", "사용자·도구·모델별 실행, 토큰과 실제 비용 텔레메트리를 분석합니다."],
  ["온프레미스 운영", "감사 데이터와 정책을 고객 Linux 관리 서버의 PostgreSQL에 보관합니다."],
];

const plans = [
  { name:"15일 무료체험", agents:"관리 대상 5대", price:"무료", desc:"결제 없이 설치 후 체험", cta:"무료체험 다운로드", href:"/downloads/einsguard-ai", accent:true },
  { name:"Basic", agents:"관리 대상 10대", price:"월 49,000원", desc:"소규모 팀·사내 AI 도구 관리", cta:"도입 문의", href:"/contact?type=EINSGUARD%20AI&subject=EINSGUARD%20AI%20Basic%20구독%20문의" },
  { name:"Standard", agents:"관리 대상 50대", price:"월 129,000원", desc:"부서·중견기업 통합 운영", cta:"도입 문의", href:"/contact?type=EINSGUARD%20AI&subject=EINSGUARD%20AI%20Standard%20구독%20문의" },
  { name:"Business", agents:"관리 대상 100대", price:"월 229,000원", desc:"전사 AI 도구 통합 관리", cta:"도입 문의", href:"/contact?type=EINSGUARD%20AI&subject=EINSGUARD%20AI%20Business%20구독%20문의" },
  { name:"Enterprise", agents:"관리 대상 250대 이상", price:"별도 협의", desc:"대규모·다수 사업장 환경", cta:"구성 상담", href:"/contact?type=EINSGUARD%20AI&subject=EINSGUARD%20AI%20Enterprise%20구성%20상담" },
];

const faqs = [
  ["관리 대상 1대는 무엇인가요?", "EINSGUARD AI 에이전트가 등록된 물리 서버, VM 또는 개인 PC 한 대입니다. 한 장비에서 여러 AI 도구를 사용해도 장비 1대로 계산합니다."],
  ["무료체험이 끝나면 데이터가 삭제되나요?", "삭제되지 않습니다. 핵심 수집·분석·제어 기능은 잠기지만 기존 데이터 조회와 라이선스 갱신 화면은 유지됩니다."],
  ["현재 지원 운영체제는 무엇인가요?", "관리 서버는 Linux Docker/Podman 환경을 지원하며 수집 에이전트는 Linux와 macOS를 지원합니다. Windows 에이전트는 검증 후 추가할 예정입니다."],
  ["인터넷 연결이 항상 필요한가요?", "EINSGUARD AI의 수집과 분석은 온프레미스에서 동작합니다. 구독 라이선스 인증에는 주기적인 연결이 필요합니다."],
  ["설치 전에 무엇을 준비해야 하나요?", "Linux 시험 VM, Docker Compose 또는 Podman Compose, 4GB 이상 메모리와 10GB 이상의 여유 공간을 권장합니다."],
];

export default function AiSentinelPage(){
  const structuredData={"@context":"https://schema.org","@type":"SoftwareApplication",name:"EINSGUARD AI",applicationCategory:"SecurityApplication",operatingSystem:"Linux, macOS",description:"기업 내 AI 도구 사용과 위험을 통합 관리하는 온프레미스 AI 거버넌스 솔루션",offers:[{"@type":"Offer",name:"15일 무료체험",price:"0",priceCurrency:"KRW"},{"@type":"Offer",name:"Basic",price:"49000",priceCurrency:"KRW"},{"@type":"Offer",name:"Standard",price:"129000",priceCurrency:"KRW"},{"@type":"Offer",name:"Business",price:"229000",priceCurrency:"KRW"}]};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/><Header/><main className="pt-16 bg-white text-slate-900">
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(16,185,129,.24),transparent_34%)]" />
      <div className="relative mx-auto max-w-page px-6 lg:px-12">
        <Badge color="acid">EINSTECH AI GOVERNANCE</Badge>
        <div className="mt-6 font-mono text-sm font-black tracking-[.22em] text-white/60">EINSGUARD AI</div>
        <h1 className="mt-8 max-w-5xl font-display text-[clamp(3rem,7vw,6.5rem)] font-black leading-[.92] tracking-tight">AI를 막는 대신,<br/><span className="text-emerald-300">보이게 하고 통제합니다.</span></h1>
        <p className="mt-5 font-display text-2xl font-black text-emerald-300">모든 AI를 한눈에. 모든 위험을 하나의 정책으로.</p>
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">EINSGUARD AI는 기업 내 AI CLI와 로컬 AI 도구의 사용 현황, 위험 행동, 승인 정책과 감사 이력을 하나의 온프레미스 관리 화면으로 통합합니다.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row"><PrimaryButton href="/downloads/einsguard-ai">15일 무료체험</PrimaryButton><SecondaryButton href="/docs/einsguard-ai/install">설치 안내</SecondaryButton><SecondaryButton href="/contact?type=EINSGUARD%20AI">도입 문의</SecondaryButton></div>
        <div className="mt-14 grid gap-3 sm:grid-cols-3"><div className="rounded-xl border border-white/10 bg-white/5 p-5"><b className="text-2xl text-emerald-300">15일</b><p className="mt-1 text-xs text-white/50">무료체험</p></div><div className="rounded-xl border border-white/10 bg-white/5 p-5"><b className="text-2xl text-emerald-300">5대</b><p className="mt-1 text-xs text-white/50">체험판 관리 대상</p></div><div className="rounded-xl border border-white/10 bg-white/5 p-5"><b className="text-2xl text-emerald-300">On-Prem</b><p className="mt-1 text-xs text-white/50">고객 환경 데이터 보관</p></div></div>
      </div>
    </section>
    <section className="py-20 lg:py-28"><div className="mx-auto max-w-page px-6 lg:px-12"><div className="max-w-3xl"><Badge>CORE CAPABILITIES</Badge><h2 className="mt-5 font-display text-4xl font-black lg:text-5xl">기업의 AI 사용을 운영 가능한 자산으로</h2></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{capabilities.map(([title,desc],i)=><article key={title} className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm"><div className="font-mono text-[10px] font-bold tracking-widest text-emerald">0{i+1}</div><h3 className="mt-3 font-display text-xl font-black">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{desc}</p></article>)}</div></div></section>
    <section id="pricing" className="bg-slate-50 py-20 lg:py-28"><div className="mx-auto max-w-page px-6 lg:px-12"><Badge color="acid">SUBSCRIPTION</Badge><h2 className="mt-5 font-display text-4xl font-black">15일 체험 후 월 구독</h2><p className="mt-4 text-sm text-slate-500">관리 서버 1대의 키로 요금제 한도 내 장비를 통합 관리합니다. 연간 결제 시 2개월 요금이 할인되며 표시 가격은 VAT 별도입니다.</p><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">{plans.map(p=><article key={p.name} className={`rounded-[24px] border p-7 ${p.accent?'border-emerald bg-slate-950 text-white':'border-slate-200 bg-white'}`}><div className={`font-mono text-[10px] font-bold tracking-widest ${p.accent?'text-emerald-300':'text-emerald'}`}>{p.name}</div><div className="mt-4 font-display text-2xl font-black">{p.price}</div><div className="mt-2 text-sm font-bold">{p.agents}</div><p className={`mt-3 min-h-12 text-sm leading-6 ${p.accent?'text-white/60':'text-slate-500'}`}>{p.desc}</p><a href={p.href} className={`mt-7 block rounded-xl px-4 py-3 text-center text-xs font-black ${p.accent?'bg-emerald text-slate-950':'bg-navy text-white'}`}>{p.cta}</a></article>)}</div></div></section>
    <section id="faq" className="py-20 lg:py-28"><div className="mx-auto max-w-4xl px-6"><Badge>FAQ</Badge><h2 className="mt-5 font-display text-4xl font-black">자주 묻는 질문</h2><div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">{faqs.map(([q,a])=><details key={q} className="group py-6"><summary className="cursor-pointer list-none pr-8 font-display text-lg font-black">{q}<span className="float-right text-emerald group-open:rotate-45">＋</span></summary><p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{a}</p></details>)}</div></div></section>
  </main><Footer/></>;
}
