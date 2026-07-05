import GlassPanel from "../ds/GlassPanel";
import SectionHeader from "../ds/SectionHeader";

function ProblemCard({ index, statusLabel, statusColor, title, children, footer }) {
  return (
    <GlassPanel className="p-8 lg:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500 hover:bg-slate-50-border/10">
      <div className="flex justify-between items-start mb-12 relative">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[10px] text-navy tracking-widest uppercase">
            ISSUE_{index}
          </span>
          <span
            className={`font-mono text-[10px] animate-pulse-fast ${
              statusColor === "acid" ? "text-emerald" : "text-alert"
            }`}
          >
            {statusLabel}
          </span>
        </div>
        <div className="font-display text-7xl font-bold ds-text-outline opacity-10 pointer-events-none group-hover:text-navy group-hover:opacity-30 transition-all duration-500 absolute -top-4 -right-2">
          {index}
        </div>
      </div>

      <h4 className="font-display text-xl lg:text-2xl font-bold text-slate-900 mb-6 leading-snug ds-word-keep">
        {title}
      </h4>

      <div className="font-sans text-slate-600 text-[15px] leading-relaxed mb-10 ds-word-keep flex-grow">
        {children}
      </div>

      <div className="pt-6 border-t border-slate-200/50">{footer}</div>
    </GlassPanel>
  );
}

export default function Problem() {
  return (
    <section id="problem" className="py-24 lg:py-32 relative">
      <div
        className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-transparent to-transparent hidden lg:block -z-10"
        aria-hidden
      />

      <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          badgeText="SYS_ANALYSIS"
          badgeColor="cyan"
          sectionLabel="2. Problem — 지금 이 순간에도 일어나고 있는 3가지 문제"
        >
          <h3 className="font-display text-[clamp(2rem,4.5vw,4.5rem)] font-bold tracking-tight text-slate-900 leading-[1.1] ds-word-keep max-w-5xl">
            <span className="text-slate-500 font-serif opacity-40 -ml-2 lg:-ml-6 mr-1">"</span>
            백업은 돌고 있는데,
            <br />
            <span className="ds-text-glow-cyan text-navy">막상 복구가 안 됩니다</span>
            <span className="text-slate-500 font-serif opacity-40 ml-2">"</span>
          </h3>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:pl-12">
          <ProblemCard
            index="01"
            statusLabel="CRITICAL_LOSS"
            statusColor="alert"
            title={
              <>
                장애 1시간 ={" "}
                <br />
                평균 매출 <span className="text-navy">1.2억</span> 손실
              </>
            }
            footer={
              <>
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mb-3 uppercase tracking-wider">
                  <span>Single Server Risk Level</span>
                  <span className="text-navy">47.00%</span>
                </div>
                <div className="w-full h-1.5 bg-white border border-slate-200 overflow-hidden">
                  <div className="h-full bg-navy w-[47%] relative">
                    <div className="absolute inset-0 bg-white/30 animate-pulse-fast" />
                  </div>
                </div>
              </>
            }
          >
            국내 중견 제조사 기준, 기간계 시스템(ERP·MES) 1시간 정지 시
            <br />
            평균 <span className="text-slate-900 font-medium">1.2억 원</span>의 직접 손실이
            발생합니다.
            <br />
            <br />
            그런데 단일 서버로만 운영 중인 기업이 아직도{" "}
            <span className="text-navy font-mono font-bold text-lg">47%</span>입니다.
          </ProblemCard>

          <ProblemCard
            index="02"
            statusLabel="RESTORE_FAIL"
            statusColor="acid"
            title={
              <>
                백업의 <span className="text-emerald">73%</span>는
                <br />
                "복구 시점에" 실패합니다
              </>
            }
            footer={
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    Backup Config
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-navy rounded-full" />
                    <span className="text-xs font-mono text-navy">ACTIVE [OK]</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 border-l border-slate-200/30 pl-4">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    Restore Test
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 border border-alert rounded-full bg-alert/20" />
                    <span className="text-xs font-mono text-alert">FAILED_73%</span>
                  </div>
                </div>
              </div>
            }
          >
            한국정보보호산업협회 조사 결과, 랜섬웨어 피해 기업의{" "}
            <span className="text-emerald font-mono font-bold text-lg">73%</span>가
            <br />
            "백업은 있었지만 복구하지 못했다"고 답했습니다.
            <br />
            <br />
            <span className="text-slate-900 border-b border-navy/30 pb-0.5">
              백업 설정과 복구 검증은 완전히 다른 일입니다.
            </span>
          </ProblemCard>

          <ProblemCard
            index="03"
            statusLabel="DATA_BREACH"
            statusColor="alert"
            title={
              <>
                내부 정보 유출의 <span className="text-navy">81%</span>는
                <br />
                USB·메일·클라우드에서 일어납니다
              </>
            }
            footer={
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-1">
                  <svg
                    className="w-4 h-4 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth="1.5"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span className="text-[9px] font-mono text-slate-500">BYPASS</span>
                </div>

                <div className="flex-1 relative h-[2px] bg-slate-50-border overflow-hidden">
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-navy shadow-[0_0_8px_rgba(0,229,255,0.8)]"
                    style={{ animation: "slideRight 3s linear infinite" }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-navy" />
                    <span className="font-mono text-[10px] text-slate-900">USB/EXT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-navy" />
                    <span className="font-mono text-[10px] text-slate-900">MAIL/WEB</span>
                  </div>
                </div>
              </div>
            }
          >
            방화벽은 외부 공격을 막지만, 직원 PC에서 빠져나가는 파일은
            <br />
            방화벽을 거치지 않습니다.
            <br />
            <br />
            <span className="font-mono text-navy bg-navy/10 px-1 py-0.5 rounded text-sm">
              DLP
            </span>{" "}
            없이 컴플라이언스 감사를 통과할 수 있는 시대는 끝났습니다.
          </ProblemCard>
        </div>
      </div>
    </section>
  );
}
