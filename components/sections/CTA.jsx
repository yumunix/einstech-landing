import GlassPanel from "../ds/GlassPanel";
import Badge from "../ds/Badge";

const features = [
  {
    label: "EXPERIENCE_LVL",
    text: "엔지니어 30년 경험으로 1,000여 건 이상의 인프라 설계",
  },
  {
    label: "VERIFIED_VENDOR",
    text: "Hitachi · HPE · Netwrix 공식 파트너",
  },
  {
    label: "SLA_GUARANTEE",
    text: "24x7 한국어 기술지원, 평균 응답시간 30분 이내",
  },
];

export default function CTA() {
  return (
    <section id="cta" className="py-24 lg:py-32 relative">
      <div
        className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-acid/30 to-transparent hidden lg:block -z-10"
        aria-hidden
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-12 pl-0 lg:pl-12 relative flex justify-center lg:justify-start">
          <div className="absolute left-0 top-3 w-8 h-px bg-acid/40 hidden lg:block" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-center lg:text-left">
            <Badge color="acid" className="mx-auto lg:mx-0 shadow-[0_0_15px_rgba(57,255,20,0.2)]">
              SYS_ACTION
            </Badge>
            <h2 className="font-mono text-sm md:text-base text-muted tracking-widest ds-word-keep">
              5. CTA — 마지막 행동 유도
            </h2>
          </div>
        </div>

        <GlassPanel
          ctaFrame
          className="w-full lg:ml-12 p-8 md:p-16 lg:p-20 flex flex-col items-center text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          <div
            className="font-display text-[8rem] md:text-[12rem] font-bold ds-text-outline opacity-5 pointer-events-none absolute -top-10 md:-top-16 -right-4 md:-right-8 select-none"
            aria-hidden
          >
            05
          </div>

          <h3 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep mb-12 max-w-4xl relative z-10">
            견적서 받기 전에,
            <br />
            <span className="ds-text-glow-acid-strong text-acid block mt-2">
              우리는 시스템부터 봐드립니다
            </span>
          </h3>

          <div className="font-sans text-muted-strong text-base md:text-xl leading-relaxed ds-word-keep max-w-3xl mx-auto space-y-6 mb-16 relative z-10">
            <p>
              대부분의 IT 견적은 "무엇을 팔지" 정해놓고 시작합니다.
              <br />
              <span className="text-white font-medium">EINSTECH는 반대로 시작합니다.</span>
            </p>

            <div className="bg-black/30 border border-surface-border/50 p-6 md:p-8 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 to-transparent pointer-events-none" />
              <p className="text-white leading-loose relative z-10">
                엔지니어가 직접 1일간 현장에 방문해
                <br className="hidden md:block" />
                지금 운영 중인 서버·스토리지·백업·엔드포인트를 점검하고,
                <br className="hidden md:block" />
                바꿀 것과 그대로 둘 것을 구분해 드립니다.
              </p>
            </div>

            <p>
              진단 자체는{" "}
              <span className="text-white font-medium border-b border-acid/50 pb-1">무료</span>
              이고, 결과 리포트만 받고 끝내셔도 됩니다.
              <br />
              실제 도입을 결정하시면{" "}
              <span className="text-cyan font-mono text-sm md:text-base bg-cyan/10 px-2 py-0.5">
                Rose HA 무료 체험
              </span>
              ,{" "}
              <span className="text-cyan font-mono text-sm md:text-base bg-cyan/10 px-2 py-0.5">
                백신 30일 무료
              </span>
              ,{" "}
              <span className="text-cyan font-mono text-sm md:text-base bg-cyan/10 px-2 py-0.5">
                Hitachi Storage 15일 PoC
              </span>
              를 그대로 이어서 진행해 드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 w-full max-w-5xl mx-auto mb-16 relative z-10">
            {features.map((f) => (
              <div
                key={f.label}
                className="bg-void border border-surface-border p-5 text-left flex items-start gap-4"
              >
                <svg
                  className="w-5 h-5 text-cyan flex-shrink-0 mt-1"
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
                <div>
                  <div className="font-mono text-[10px] text-muted uppercase tracking-wider mb-1">
                    {f.label}
                  </div>
                  <div className="font-sans text-sm text-white ds-word-keep leading-relaxed">
                    {f.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full max-w-3xl mx-auto relative z-10 flex flex-col items-center">
            <div className="font-mono text-xs text-acid mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-acid animate-pulse-fast" />
              SYSTEM_READY_FOR_DIAGNOSIS
            </div>

            <div className="ds-cta-btn-wrapper w-full">
              <a
                href="mailto:sungil.yum@einstech.kr?subject=무료%20인프라%20진단%20신청"
                className="w-full bg-acid text-void font-display font-bold text-[clamp(1.25rem,3vw,2.5rem)] py-6 md:py-8 px-6 md:px-8 flex items-center justify-center gap-4 group hover:bg-white transition-colors duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 tracking-tight ds-word-keep">
                  무료 인프라 진단 신청하기
                </span>
                <svg
                  className="w-7 h-7 md:w-12 md:h-12 transform group-hover:translate-x-2 transition-transform relative z-10 flex-shrink-0"
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

          <div className="mt-16 pt-8 border-t border-surface-border w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 relative z-10">
            <a href="tel:+82-31-893-0015" className="flex items-center gap-4 group">
              <div className="w-10 h-10 border border-surface-border bg-void flex items-center justify-center group-hover:border-acid transition-colors">
                <svg
                  className="w-5 h-5 text-muted group-hover:text-acid transition-colors"
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
              <div className="flex flex-col text-left">
                <span className="font-mono text-[10px] text-muted uppercase tracking-widest mb-0.5">
                  DIRECT_LINE
                </span>
                <span className="font-mono text-base md:text-lg text-white group-hover:text-acid transition-colors">
                  +82-31-893-0015
                </span>
              </div>
            </a>

            <div className="hidden md:block w-px h-10 bg-surface-border" />

            <a
              href="mailto:sungil.yum@einstech.kr"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 border border-surface-border bg-void flex items-center justify-center group-hover:border-cyan transition-colors">
                <svg
                  className="w-5 h-5 text-muted group-hover:text-cyan transition-colors"
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
              <div className="flex flex-col text-left">
                <span className="font-mono text-[10px] text-muted uppercase tracking-widest mb-0.5">
                  ENGINEER_MAIL
                </span>
                <span className="font-mono text-base md:text-lg text-white group-hover:text-cyan transition-colors break-all">
                  sungil.yum@einstech.kr
                </span>
              </div>
            </a>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
