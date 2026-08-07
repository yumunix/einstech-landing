import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import GlassPanel from "@/components/ds/GlassPanel";
import SectionHeader from "@/components/ds/SectionHeader";
import Badge from "@/components/ds/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ds/Buttons";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/onpremise-ai",
  title: "온프레미스 AI 구축 | EINSTECH",
  description:
    "데이터가 외부로 나가지 않는 기업 전용 AI. 아인스테크는 하드웨어 선정부터 LLM 설치, 사내 문서 연동, 보안 설정까지 온프레미스 AI를 완성합니다.",
  keywords: ["온프레미스 AI", "사내 AI", "LLM 구축", "AI 보안", "Ollama", "Gemma", "RAG"],
});

const problems = [
  {
    index: "01",
    tag: "DATA_LEAK",
    title: "ChatGPT에 올린 내용, 어디로 갔을까요?",
    desc: "외부 AI 서비스에 입력한 고객 정보, 내부 문서, 기술 자료는 외부 서버에 전송됩니다. 클라우드 AI는 편리하지만 기업 기밀이 유출될 수 있습니다.",
  },
  {
    index: "02",
    tag: "COMPLIANCE",
    title: "의료·금융·제조는 데이터 외부 전송이 불가",
    desc: "개인정보보호법, 금융보안 규정, 산업 보안 요건상 민감 데이터를 외부 AI에 입력하는 것 자체가 위반이 될 수 있습니다.",
  },
  {
    index: "03",
    tag: "COST",
    title: "클라우드 AI 비용, 사용할수록 늘어납니다",
    desc: "토큰 기반 과금 구조는 사용량이 늘수록 비용이 급증합니다. 온프레미스 AI는 초기 구축 후 추가 비용 없이 무제한 사용이 가능합니다.",
  },
];

const services = [
  {
    icon: "ph-bold ph-cpu",
    tag: "HARDWARE",
    title: "하드웨어 선정·공급",
    desc: "사용 규모와 예산에 맞는 서버 또는 AI 전용 워크스테이션을 선정하고 공급합니다. HP 서버, Apple Mac Studio 등 검증된 장비를 기반으로 구성합니다.",
  },
  {
    icon: "ph-bold ph-brain",
    tag: "LLM_SETUP",
    title: "LLM 설치·최적화",
    desc: "Ollama 기반으로 한국어에 최적화된 LLM 모델을 설치하고 하드웨어에 맞게 튜닝합니다. Gemma, Qwen, Llama 등 목적에 맞는 모델을 선택합니다.",
  },
  {
    icon: "ph-bold ph-files",
    tag: "RAG",
    title: "사내 문서 연동 (RAG)",
    desc: "회사 기술자료, 고객 문서, 매뉴얼을 AI가 읽고 답변할 수 있도록 RAG(검색 증강 생성) 시스템을 구성합니다. 문서 기반 정확한 답변이 가능합니다.",
  },
  {
    icon: "ph-bold ph-shield-check",
    tag: "SECURITY",
    title: "보안 설정·내부망 격리",
    desc: "AI 서비스가 외부 인터넷과 완전히 차단된 내부망에서만 동작하도록 설정합니다. 계정 관리, 접근 제어, 로그 기록까지 보안 체계를 완성합니다.",
  },
  {
    icon: "ph-bold ph-monitor",
    tag: "UI",
    title: "사용자 인터페이스 구성",
    desc: "직원들이 ChatGPT처럼 편리하게 사용할 수 있는 웹 인터페이스를 구성합니다. 별도 설치 없이 브라우저에서 바로 사용 가능합니다.",
  },
  {
    icon: "ph-bold ph-wrench",
    tag: "MAINTENANCE",
    title: "유지보수·기술지원",
    desc: "구축 후 모델 업데이트, 문서 추가, 장애 대응까지 아인스테크가 지속적으로 지원합니다. 기존 인프라 유지보수와 통합 관리가 가능합니다.",
  },
];

const effects = [
  { value: "100%", label: "데이터 내부 보안", desc: "외부 서버 전송 없음" },
  { value: "24/7", label: "무중단 운영", desc: "HA 인프라 연동 가능" },
  { value: "∞", label: "무제한 사용", desc: "토큰 과금 없음" },
  { value: "30년", label: "엔지니어링 노하우", desc: "검증된 구축 경험" },
];

const steps = [
  { step: "01", title: "무료 상담", desc: "현재 인프라 환경과 AI 활용 목적을 파악합니다." },
  { step: "02", title: "구성 설계", desc: "하드웨어·모델·RAG 구성을 설계하고 견적을 제안합니다." },
  { step: "03", title: "구축·설치", desc: "하드웨어 공급부터 LLM 설치, 문서 연동까지 완성합니다." },
  { step: "04", title: "교육·인수", desc: "사용 방법 교육과 운영 인수인계를 진행합니다." },
  { step: "05", title: "유지보수", desc: "지속적인 모델 업데이트와 기술 지원을 제공합니다." },
];

export default function OnpremiseAI() {
  return (
    <div className="einstech-white w-full relative">
      <Header />

      {/* HERO */}
      <section className="relative pt-48 pb-32 overflow-hidden min-h-screen flex items-center bg-navy">
        <div className="hero-glow top-0 -left-1/4 opacity-30"></div>
        <div className="hero-glow bottom-0 -right-1/4 opacity-30"></div>
        <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-emerald text-[13px] font-bold mb-10">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald"></span>
              </span>
              ONPREMISE AI · ZERO DATA LEAK
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black text-white leading-[1.05] mb-10 tracking-tight">
              자사 AI 시스템<br />
              <span className="text-emerald">구축을 원하시나요?</span>
            </h1>
            <p className="text-xl text-slate-300 mb-14 leading-relaxed max-w-2xl font-medium">
              데이터가 외부로 나가지 않는 기업 전용 AI.<br />
              아인스테크가 하드웨어부터 사내 문서 연동까지 완성합니다.
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="/contact"
                className="bg-emerald text-navy px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:shadow-[0_20px_50px_rgba(22,199,154,0.35)] transition-all hover:-translate-y-1"
              >
                무료 상담 신청
                <i className="ph-bold ph-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-32 bg-white">
        <div className="max-w-page mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Why Onpremise AI"
            title={<>클라우드 AI의<br />3가지 위험</>}
          />
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {problems.map((p) => (
              <GlassPanel key={p.index} className="p-10 rounded-[40px]">
                <div className="text-[10px] font-black text-emerald tracking-widest mb-4">{p.tag}</div>
                <div className="text-4xl font-black text-navy mb-4">{p.index}</div>
                <h3 className="text-xl font-black text-navy mb-4">{p.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{p.desc}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* EINSTECH 구축 사례 */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="max-w-page mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-emerald font-black text-sm tracking-[0.2em] uppercase mb-6 block">
                EINSTECH 자체 운영 사례
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-8">
                저희가 먼저<br />직접 구축했습니다
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-10">
                아인스테크는 Mac Studio M4 Max 기반으로 자체 온프레미스 AI를 운영 중입니다. 사내 기술자료, 고객 문서, 점검보고서를 AI가 직접 분석하며 실제 업무에 활용하고 있습니다.
              </p>
              <ul className="space-y-4">
                {[
                  "사내 문서 RAG 연동 — 고객사 점검보고서 즉시 분석",
                  "완전 내부망 운영 — 외부 전송 없음",
                  "Gemma4 26B 모델 — 한국어 고품질 응답",
                  "NAS 연동 — 49TB 문서 실시간 검색",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300 font-medium">
                    <i className="ph-bold ph-check-circle text-emerald text-xl mt-0.5"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[40px] p-10">
              <div className="text-[10px] font-black text-emerald tracking-widest mb-6">EINSTECH AI STACK</div>
              <div className="space-y-4">
                {[
                  { label: "하드웨어", value: "Apple Mac Studio M4 Max 64GB" },
                  { label: "LLM 엔진", value: "Ollama + Gemma4 26B" },
                  { label: "문서 연동", value: "RAG + nomic-embed-text" },
                  { label: "스토리지", value: "NAS 49TB 직접 연동" },
                  { label: "보안", value: "완전 내부망, 외부 차단" },
                  { label: "인터페이스", value: "Open WebUI (브라우저 접속)" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-slate-400 text-sm font-bold">{item.label}</span>
                    <span className="text-white font-bold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 bg-slate-50/60">
        <div className="max-w-page mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Services"
            title={<>아인스테크가<br />제공하는 것</>}
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
            {services.map((s) => (
              <div key={s.tag} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
                <div className="w-14 h-14 bg-navy/5 rounded-[20px] flex items-center justify-center mb-8">
                  <i className={`${s.icon} text-2xl text-navy`}></i>
                </div>
                <div className="text-[10px] font-black text-emerald tracking-widest mb-3">{s.tag}</div>
                <h3 className="text-xl font-black text-navy mb-4">{s.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EFFECTS */}
      <section className="py-32 bg-white">
        <div className="max-w-page mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Effects"
            title={<>도입 효과</>}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {effects.map((e) => (
              <div key={e.label} className="text-center p-10 bg-slate-50 rounded-[32px]">
                <div className="text-5xl font-black text-navy mb-3">{e.value}</div>
                <div className="font-black text-navy mb-2">{e.label}</div>
                <div className="text-sm text-slate-400 font-medium">{e.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-32 bg-slate-50/60">
        <div className="max-w-page mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Process"
            title={<>구축 프로세스</>}
          />
          <div className="grid md:grid-cols-5 gap-6 mt-20">
            {steps.map((s, i) => (
              <div key={s.step} className="relative">
                <div className="bg-white p-8 rounded-[32px] border border-slate-100 text-center h-full">
                  <div className="text-3xl font-black text-emerald mb-4">{s.step}</div>
                  <h4 className="font-black text-navy mb-3">{s.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 z-10 w-6 h-6 bg-emerald rounded-full items-center justify-center">
                    <i className="ph-bold ph-arrow-right text-white text-xs"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="max-w-page mx-auto px-6 lg:px-12 text-center relative z-10">
          <span className="text-emerald font-black text-sm tracking-[0.2em] uppercase mb-6 block">
            무료 상담
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
            우리 회사에 맞는 AI,<br />지금 상담해보세요
          </h2>
          <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto">
            규모와 예산에 맞는 최적의 구성을 제안드립니다.<br />상담 후 맞춤 견적을 제공합니다.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-emerald text-navy px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-[0_20px_50px_rgba(22,199,154,0.35)] transition-all hover:-translate-y-1"
          >
            무료 상담 신청
            <i className="ph-bold ph-arrow-right"></i>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
