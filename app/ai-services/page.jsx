import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import GlassPanel from "@/components/ds/GlassPanel";
import SectionHeader from "@/components/ds/SectionHeader";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/ai-services",
  title: "Ai Services — 기업 AI 구축 서비스 | EINSTECH",
  description:
    "온프레미스 AI 구축부터 AI 직원 설계까지. 아인스테크가 기업 맞춤형 AI 시스템을 설계·구축·운영합니다. 데이터는 외부로 나가지 않습니다.",
  keywords: ["AI 구축", "온프레미스 AI", "AI 직원", "사내 AI", "LLM 구축", "RAG", "AI 서비스"],
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
    tag: "AI_EMPLOYEE",
    title: "AI 직원 설계",
    desc: "업무를 실제로 처리하는 AI 직원을 만들어드립니다. 보고서 작성, 고객 응대, 데이터 분석 등 반복 업무를 AI가 대신합니다.",
    href: "/ai-services#employee",
    items: ["업무 분석 및 AI 역할 설계", "보고서·문서 자동 작성", "고객 문의 1차 응대", "데이터 분석·요약"],
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

const employees = [
  {
    icon: "ph-bold ph-file-text",
    name: "보고서 담당 AI",
    desc: "점검보고서, 작업일지, 운영 브리핑을 자동으로 작성합니다. 기존 문서 형식을 학습해 일관된 품질로 생성합니다.",
    tasks: ["정기 점검보고서 자동 작성", "작업일지 정리", "월간 운영 브리핑 생성"],
  },
  {
    icon: "ph-bold ph-headset",
    name: "고객응대 담당 AI",
    desc: "고객 문의를 1차 분석하고 답변 초안을 작성합니다. 사내 기술자료를 기반으로 정확한 답변을 제공합니다.",
    tasks: ["고객 문의 1차 분류·답변", "기술 문의 자동 안내", "이슈 이력 조회·요약"],
  },
  {
    icon: "ph-bold ph-chart-bar",
    name: "데이터 분석 담당 AI",
    desc: "서버 로그, 백업 현황, 운영 데이터를 분석하고 인사이트를 도출합니다. 이상 징후를 사전에 파악합니다.",
    tasks: ["서버·네트워크 로그 분석", "백업 현황 요약", "이상 징후 사전 감지"],
  },
  {
    icon: "ph-bold ph-file-arrow-up",
    name: "제안서 담당 AI",
    desc: "고객사 정보와 요구사항을 바탕으로 제안서 초안을 작성합니다. 기존 납품 사례를 참고해 맞춤형 내용을 생성합니다.",
    tasks: ["제안서·견적 초안 생성", "고객사 맞춤 구성 제안", "기존 사례 기반 작성"],
  },
];

const steps = [
  { step: "01", title: "업무 분석", desc: "반복되는 업무와 AI로 대체 가능한 영역을 파악합니다." },
  { step: "02", title: "AI 역할 설계", desc: "각 업무에 맞는 AI 직원의 역할과 범위를 설계합니다." },
  { step: "03", title: "시스템 구축", desc: "온프레미스 AI 환경과 사내 문서를 연동합니다." },
  { step: "04", title: "학습·최적화", desc: "실제 업무 데이터로 AI를 최적화합니다." },
  { step: "05", title: "배포·운영", desc: "AI 직원을 배포하고 지속적으로 개선합니다." },
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
              AI 직원을<br />
              <span className="text-emerald">채용하세요</span>
            </h1>
            <p className="text-xl text-slate-300 mb-14 leading-relaxed max-w-2xl font-medium">
              온프레미스 AI 구축부터 업무를 실제로 처리하는 AI 직원 설계까지.<br />
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

      {/* AI EMPLOYEE */}
      <section id="employee" className="py-32 bg-navy relative overflow-hidden">
        <div className="max-w-page mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <span className="text-emerald font-black text-sm tracking-[0.2em] uppercase mb-4 block">AI Employee</span>
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              어떤 AI 직원이<br />필요하신가요?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {employees.map((e) => (
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

      {/* PROCESS */}
      <section className="py-32 bg-slate-50/60">
        <div className="max-w-page mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Process"
            title={<>AI 직원 구축 프로세스</>}
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
            우리 회사에 맞는<br />AI 직원, 지금 상담하세요
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
