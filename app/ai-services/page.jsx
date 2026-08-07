import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import GlassPanel from "@/components/ds/GlassPanel";
import SectionHeader from "@/components/ds/SectionHeader";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/ai-services",
  title: "Ai Services — 기업 AI 구축 서비스 | EINSTECH",
  description:
    "온프레미스 AI 구축부터 AI 업무 어시스턴트 도입까지. 아인스테크가 기업 맞춤형 AI 시스템을 설계·구축·운영합니다. 데이터는 외부로 나가지 않습니다.",
  keywords: ["AI 구축", "온프레미스 AI", "AI 업무 어시스턴트", "사내 AI", "LLM 구축", "RAG", "업무 자동화"],
});

const services = [
  {
    icon: "ph-bold ph-buildings",
    tag: "ONPREMISE_AI",
    title: "온프레미스 AI 구축",
    desc: "데이터가 외부로 나가지 않는 기업 전용 AI 시스템. 하드웨어 선정부터 LLM 설치, 사내 문서 연동까지 완성합니다.",
    href: "/onpremise-ai",
    items: ["하드웨어 선정·공급", "LLM 설치·최적화", "사내 문서 RAG 연동", "내부망 보안 설정"],
  },
  {
    icon: "ph-bold ph-user-gear",
    tag: "AI_ASSISTANT",
    title: "AI 업무 어시스턴트",
    desc: "반복 업무를 AI가 보조합니다. 보고서 작성, 고객 응대, 데이터 분석 등 직원들의 업무 효율을 높여드립니다.",
    href: "/ai-services#assistant",
    items: ["업무 프로세스 분석·설계", "보고서·문서 자동화", "고객 문의 1차 지원", "데이터 분석·요약"],
  },
  {
    icon: "ph-bold ph-shield-check",
    tag: "AI_SECURITY",
    title: "AI 보안 컨설팅",
    desc: "직원들이 외부 AI를 사용할 때 발생하는 보안 위협을 차단합니다. AI 사용 정책 수립부터 DLP 연동까지 지원합니다.",
    href: "/ai-services#security",
    items: ["AI 사용 보안 정책 수립", "외부 AI 접근 차단·모니터링", "DLP 연동", "임직원 보안 교육"],
  },
];

const assistants = [
  {
    icon: "ph-bold ph-file-text",
    name: "문서 작성 어시스턴트",
    desc: "점검보고서, 작업일지, 운영 브리핑 초안을 자동으로 생성합니다. 담당자가 검토·수정만 하면 됩니다.",
    tasks: ["정기 점검보고서 초안 생성", "작업일지 자동 정리", "월간 운영 브리핑 초안"],
  },
  {
    icon: "ph-bold ph-headset",
    name: "고객응대 어시스턴트",
    desc: "고객 문의를 분석하고 답변 초안을 제안합니다. 사내 기술자료를 기반으로 정확한 내용을 지원합니다.",
    tasks: ["고객 문의 분류·답변 초안", "기술 문의 관련 자료 검색", "이슈 이력 조회·요약"],
  },
  {
    icon: "ph-bold ph-chart-bar",
    name: "데이터 분석 어시스턴트",
    desc: "서버 로그, 백업 현황, 운영 데이터를 분석해 담당자가 빠르게 상황을 파악할 수 있도록 지원합니다.",
    tasks: ["서버·네트워크 로그 요약", "백업 현황 정리", "이상 징후 사전 알림"],
  },
  {
    icon: "ph-bold ph-file-arrow-up",
    name: "제안서 작성 어시스턴트",
    desc: "고객사 정보와 요구사항을 바탕으로 제안서 초안을 제안합니다. 기존 사례를 참고해 담당자 작업 시간을 줄여줍니다.",
    tasks: ["제안서·견적 초안 제안", "고객사 맞춤 구성 참고", "기존 사례 기반 내용 검색"],
  },
];

const steps = [
  { step: "01", title: "업무 분석", desc: "반복되는 업무와 AI로 대체 가능한 영역을 파악합니다." },
  { step: "02", title: "AI 어시스턴트 설계", desc: "각 업무에 맞는 AI 어시스턴트의 역할과 범위를 설계합니다." },
  { step: "03", title: "시스템 구축", desc: "온프레미스 AI 환경과 사내 문서를 연동합니다." },
  { step: "04", title: "학습·최적화", desc: "실제 업무 데이터로 AI를 최적화합니다." },
  { step: "05", title: "배포·운영", desc: "AI 어시스턴트를 배포하고 지속적으로 개선합니다." },
];

export default function AIServices() {
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
              AI SERVICES · ENTERPRISE AI
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black text-white leading-[1.05] mb-10 tracking-tight">
              AI 업무 어시스턴트를<br />
              <span className="text-emerald">도입하세요</span>
            </h1>
            <p className="text-xl text-slate-300 mb-14 leading-relaxed max-w-2xl font-medium">
              온프레미스 AI 구축부터 반복 업무를 보조하는 AI 어시스턴트 도입까지.<br />
              데이터는 외부로 나가지 않습니다.
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="/contact"
                className="bg-emerald text-navy px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:shadow-[0_20px_50px_rgba(22,199,154,0.35)] transition-all hover:-translate-y-1"
              >
                무료 상담 신청
                <i className="ph-bold ph-arrow-right"></i>
              </a>
              <a
                href="#services"
                className="bg-white/10 border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                서비스 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-page mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Ai Services"
            title={<>3가지 AI 서비스</>}
          />
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {services.map((s) => (
              <a key={s.tag} href={s.href} className="group bg-slate-50 p-10 rounded-[40px] border border-slate-100 flex flex-col h-full hover:border-navy/20 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-navy/5 rounded-[20px] flex items-center justify-center mb-8 group-hover:bg-navy transition-colors">
                  <i className={`${s.icon} text-2xl text-navy group-hover:text-white transition-colors`}></i>
                </div>
                <div className="text-[10px] font-black text-emerald tracking-widest mb-3">{s.tag}</div>
                <h3 className="text-xl font-black text-navy mb-4">{s.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm mb-8 flex-grow">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
                      <i className="ph-bold ph-check-circle text-emerald"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AI ASSISTANT */}
      <section id="assistant" className="py-32 bg-navy relative overflow-hidden">
        <div className="max-w-page mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <span className="text-emerald font-black text-sm tracking-[0.2em] uppercase mb-4 block">AI Assistant</span>
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              어떤 업무를 AI로<br />지원받고 싶으신가요?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {assistants.map((e) => (
              <div key={e.name} className="bg-white/5 border border-white/10 p-8 rounded-[32px]">
                <div className="w-12 h-12 bg-emerald/10 rounded-[16px] flex items-center justify-center mb-6">
                  <i className={`${e.icon} text-xl text-emerald`}></i>
                </div>
                <h3 className="font-black text-white mb-3">{e.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{e.desc}</p>
                <ul className="space-y-2">
                  {e.tasks.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-[12px] text-slate-300 font-medium">
                      <i className="ph-bold ph-check text-emerald mt-0.5"></i>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SECURITY */}
      <section id="security" className="py-32 bg-white">
        <div className="max-w-page mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-emerald font-black text-sm tracking-[0.2em] uppercase mb-6 block">AI Security</span>
              <h2 className="text-4xl lg:text-5xl font-black text-navy leading-[1.1] mb-8">
                직원들이 외부 AI를<br />사용하고 있나요?
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                ChatGPT, Claude, Gemini 등 외부 AI에 고객 정보, 내부 문서, 기술 자료를 입력하는 순간 데이터는 외부 서버로 전송됩니다. 아인스테크가 AI 사용 보안 체계를 설계합니다.
              </p>
              <ul className="space-y-5">
                {[
                  { icon: "ph-bold ph-prohibit", title: "외부 AI 접근 차단·모니터링", desc: "특정 외부 AI 서비스 접근을 차단하거나 사용 현황을 모니터링합니다." },
                  { icon: "ph-bold ph-file-lock", title: "DLP 연동", desc: "민감 데이터가 외부 AI에 입력되는 것을 자동으로 감지하고 차단합니다." },
                  { icon: "ph-bold ph-notepad", title: "AI 사용 보안 정책 수립", desc: "부서별·역할별 AI 사용 범위와 금지 항목을 정책으로 수립합니다." },
                  { icon: "ph-bold ph-chalkboard-teacher", title: "임직원 보안 교육", desc: "AI 사용 시 보안 위협과 올바른 사용법을 임직원에게 교육합니다." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-navy/5 rounded-[16px] flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-xl text-navy`}></i>
                    </div>
                    <div>
                      <h4 className="font-black text-navy mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy rounded-[40px] p-10">
              <div className="text-[10px] font-black text-emerald tracking-widest mb-8">AI SECURITY RISK</div>
              <div className="space-y-6">
                {[
                  { risk: "고객 개인정보 입력", result: "외부 서버 저장·학습 가능", level: "HIGH" },
                  { risk: "내부 기술자료 공유", result: "경쟁사 유출 위험", level: "HIGH" },
                  { risk: "계약서·견적서 첨부", result: "기밀 정보 노출", level: "HIGH" },
                  { risk: "무분별한 AI 사용", result: "보안 정책 위반", level: "MED" },
                ].map((item) => (
                  <div key={item.risk} className="flex items-center justify-between py-4 border-b border-white/10">
                    <div>
                      <div className="font-bold text-white text-sm">{item.risk}</div>
                      <div className="text-slate-400 text-xs mt-1">{item.result}</div>
                    </div>
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full ${item.level === 'HIGH' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
              <a href="/contact" className="mt-8 flex items-center justify-center gap-2 bg-emerald text-navy font-bold py-4 rounded-2xl hover:opacity-90 transition-opacity">
                보안 진단 신청
                <i className="ph-bold ph-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-32 bg-slate-50/60">
        <div className="max-w-page mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Process"
            title={<>AI 어시스턴트 도입 프로세스</>}
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
          <span className="text-emerald font-black text-sm tracking-[0.2em] uppercase mb-6 block">무료 상담</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
            우리 회사에 맞는<br />AI 업무 어시스턴트, 지금 상담하세요
          </h2>
          <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto">
            업무 분석부터 구축까지 맞춤 설계해드립니다.<br />상담 후 견적을 제공합니다.
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
