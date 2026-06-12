import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import GlassPanel from "@/components/ds/GlassPanel";
import Badge from "@/components/ds/Badge";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "문의하기 — EINSTECH",
  description:
    "BCP · HA Cluster · 스토리지 · 백업 · DLP 도입 문의를 보내주세요. 30년 경력의 인프라 엔지니어가 직접 응답합니다.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="pt-16">
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="ds-scanline-overlay" aria-hidden />
          <div
            className="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-transparent pointer-events-none"
            aria-hidden
          />

          <div className="relative z-10 max-w-page mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge color="cyan">CONTACT</Badge>
              <span className="font-mono text-xs text-muted uppercase tracking-widest">
                Direct line to engineer
              </span>
            </div>

            <h1 className="font-display leading-[0.95] mb-6">
              <span className="block text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-white">
                도입 문의
              </span>
              <span className="block text-[clamp(1.5rem,3vw,3rem)] font-light tracking-widest ds-text-glow-cyan text-cyan mt-2">
                CONTACT EINSTECH
              </span>
            </h1>

            <p className="font-sans text-muted-strong text-base sm:text-lg leading-relaxed max-w-2xl border-l-2 border-cyan/30 pl-5 ds-word-keep">
              영업 담당이 아닌 <span className="text-white">현직 엔지니어가 직접 회신</span>합니다.
              현재 환경과 도입 목적을 알려주시면, 첫 회신부터 구체적인 다음 단계를 안내해 드립니다.
            </p>
          </div>
        </section>

        <section className="pb-24 lg:pb-32 relative">
          <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form */}
            <div className="lg:col-span-8">
              <GlassPanel className="p-6 md:p-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="font-mono text-[10px] text-cyan uppercase tracking-widest mb-1">
                      INQUIRY_FORM
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white ds-word-keep">
                      문의 양식
                    </h2>
                  </div>
                  <div className="font-mono text-[10px] text-acid hidden sm:flex items-center gap-2">
                    <span className="w-2 h-2 bg-acid animate-pulse-fast" />
                    SECURE_CHANNEL
                  </div>
                </div>

                <ContactForm />
              </GlassPanel>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-4 space-y-6">
              <GlassPanel className="p-6 md:p-8">
                <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-2">
                  DIRECT_CHANNEL
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-6 ds-word-keep">
                  바로 연락
                </h3>

                <a
                  href="tel:+82-31-893-0015"
                  className="flex items-start gap-4 group py-3 border-t border-surface-border/60"
                >
                  <div className="w-9 h-9 border border-surface-border bg-void flex items-center justify-center group-hover:border-acid transition-colors flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-muted group-hover:text-acid transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        strokeWidth="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-muted uppercase tracking-widest mb-0.5">
                      TEL
                    </span>
                    <span className="font-mono text-base text-white group-hover:text-acid transition-colors">
                      +82-31-893-0015
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:sungil.yum@einstech.kr"
                  className="flex items-start gap-4 group py-3 border-t border-surface-border/60"
                >
                  <div className="w-9 h-9 border border-surface-border bg-void flex items-center justify-center group-hover:border-cyan transition-colors flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-muted group-hover:text-cyan transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-muted uppercase tracking-widest mb-0.5">
                      MAIL
                    </span>
                    <span className="font-mono text-sm text-white group-hover:text-cyan transition-colors break-all">
                      sungil.yum@einstech.kr
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 py-3 border-t border-surface-border/60">
                  <div className="w-9 h-9 border border-surface-border bg-void flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-muted"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        strokeWidth="1.5"
                        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        strokeWidth="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-muted uppercase tracking-widest mb-0.5">
                      OFFICE
                    </span>
                    <span className="font-sans text-sm text-white leading-relaxed">
                      경기도 용인시 수지구
                      <br />
                      문인로54번길 2
                    </span>
                  </div>
                </div>
              </GlassPanel>

              <GlassPanel className="p-6 md:p-8">
                <div className="font-mono text-[10px] text-acid uppercase tracking-widest mb-3">
                  RESPONSE_SLA
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4 ds-word-keep">
                  응답 기준
                </h3>
                <ul className="space-y-3 font-sans text-sm text-muted-strong">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-cyan flex-shrink-0" />
                    평일 영업시간 내 — 평균 30분 이내
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-cyan flex-shrink-0" />
                    평일 영업시간 외 — 익일 오전 회신
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-cyan flex-shrink-0" />
                    긴급 장애 — 전화로 즉시 연결
                  </li>
                </ul>
              </GlassPanel>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
