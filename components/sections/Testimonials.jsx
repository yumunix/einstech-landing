import GlassPanel from "../ds/GlassPanel";
import SectionHeader from "../ds/SectionHeader";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 relative">
      <div
        className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-cyan/10 to-transparent hidden lg:block -z-10"
        aria-hidden
      />

      <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          badgeText="SYS_FEEDBACK"
          badgeColor="cyan"
          sectionLabel="4. Testimonials — 실제 운영 중인 현장의 목소리"
        >
          <h3 className="font-display text-[clamp(2rem,3.5vw,4.5rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-5xl">
            <span className="text-muted font-serif opacity-40 -ml-2 lg:-ml-6 mr-1">"</span>
            사고 나기 전에는 비싸 보였고,
            <br />
            사고 안 나니까 <span className="ds-text-glow-cyan text-cyan">싸 보입니다</span>
            <span className="text-muted font-serif opacity-40 ml-2">"</span>
          </h3>
        </SectionHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:pl-12">
          {/* CASE 01 */}
          <GlassPanel className="p-8 lg:p-12 flex flex-col group hover:-translate-y-2 transition-all duration-500 hover:bg-surface-border/10">
            <div className="flex justify-between items-start mb-10 relative">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-muted tracking-widest uppercase group-hover:text-cyan transition-colors">
                  CASE_01
                </span>
                <span className="font-mono text-[10px] text-cyan">LOGISTICS_SYSTEM</span>
              </div>
              <div className="font-display text-7xl lg:text-8xl font-bold ds-text-outline opacity-5 pointer-events-none group-hover:text-cyan group-hover:opacity-20 transition-all duration-500 absolute -top-6 -right-2">
                01
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2 ds-word-keep">
                E 물류시스템
              </h4>
              <div className="font-mono text-[11px] text-muted tracking-wider uppercase flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                MES · ROSE_HA · ACRONIS
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-cyan/30 mb-10 flex-grow">
              <p className="font-sans text-muted-strong text-[16px] leading-relaxed ds-word-keep">
                "MES가 하루만 멈춰도 완성차 3사 라인에 페널티가 들어옵니다.
                <br />
                EINSTECH에서{" "}
                <span className="text-white font-medium">Rose HA + Acronis</span>로 재설계한 뒤
                <br />
                4년 동안 계획되지 않은 다운타임이 1분 미만이었어요.
                <br />
                <span className="text-cyan">
                  무엇보다 새벽에 전화 받을 일이 없어진 게 가장 큽니다.
                </span>
                "
              </p>
              <div className="mt-6 font-mono text-[11px] text-muted flex items-center gap-2">
                <span className="w-4 h-px bg-cyan/50 block" />
                E 물류시스템 S 수석
              </div>
            </div>

            <div className="pt-8 border-t border-surface-border/40 bg-void/50 -mx-8 -mb-8 p-8 lg:-mx-12 lg:-mb-12 lg:p-12">
              <div className="flex justify-between items-end mb-6">
                <div className="font-mono text-[10px] text-muted uppercase tracking-widest">
                  Unplanned Downtime
                </div>
                <div className="font-mono text-[10px] text-cyan bg-cyan/10 px-2 py-1 border border-cyan/20">
                  DURATION: 4Y
                </div>
              </div>

              <div className="flex items-center gap-6 mb-8">
                <div className="font-display text-6xl sm:text-7xl font-bold text-acid ds-text-glow-acid tracking-tighter leading-none">
                  &lt;1
                  <span className="text-2xl ml-1 font-mono tracking-normal text-acid/80">MIN</span>
                </div>
                <div className="flex-1 relative">
                  <div className="h-[2px] w-full bg-surface-border relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-acid via-cyan to-transparent w-[200%]"
                      style={{ animation: "scanlineX 3s linear infinite" }}
                    />
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-acid rounded-full animate-pulse-fast shadow-[0_0_12px_rgba(57,255,20,0.8)] border-2 border-void" />
                  <div className="absolute right-0 top-full mt-2 font-mono text-[9px] text-muted">
                    SYS_OPTIMAL
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1.5 bg-surface border border-surface-border/50 font-mono text-[10px] text-white flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan rounded-full" />
                  SOL: ROSE_HA
                </div>
                <div className="px-3 py-1.5 bg-surface border border-surface-border/50 font-mono text-[10px] text-white flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan rounded-full" />
                  BAK: ACRONIS
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* CASE 02 */}
          <GlassPanel
            hoverColor="acid"
            className="p-8 lg:p-12 flex flex-col group hover:-translate-y-2 transition-all duration-500 hover:bg-surface-border/10"
          >
            <div className="flex justify-between items-start mb-10 relative">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-muted tracking-widest uppercase group-hover:text-acid transition-colors">
                  CASE_02
                </span>
                <span className="font-mono text-[10px] text-acid">GENERAL_HOSPITAL</span>
              </div>
              <div className="font-display text-7xl lg:text-8xl font-bold ds-text-outline opacity-5 pointer-events-none group-hover:text-acid group-hover:opacity-20 transition-all duration-500 absolute -top-6 -right-2">
                02
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2 ds-word-keep">
                S 종합병원 (국내 1위 병원)
              </h4>
              <div className="font-mono text-[11px] text-muted tracking-wider uppercase flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                STORAGE 이중화 · 실시간 동기화
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-acid/30 mb-10 flex-grow">
              <p className="font-sans text-muted-strong text-[16px] leading-relaxed ds-word-keep">
                "파킨슨 영상 데이터가 매년 20TB씩 늘어나는데
                <br />
                기존 백업은 백업할 수도 없고 복구 검증도 할 수 없었습니다.
                <br />
                <span className="text-white font-medium">
                  EINSTECH의 Storage 이중화 솔루션 도입 후 백업은 실시간,
                </span>
                <br />
                복구 시간은 2시간에서 10분 이내로 줄었고, 매일 자동 실시간 동기화가
                돌아갑니다."
              </p>
              <div className="mt-6 font-mono text-[11px] text-muted flex items-center gap-2">
                <span className="w-4 h-px bg-acid/50 block" />
                파킨슨센터 운영담당자
              </div>
            </div>

            <div className="pt-8 border-t border-surface-border/40 bg-void/50 -mx-8 -mb-8 p-8 lg:-mx-12 lg:-mb-12 lg:p-12">
              <div className="flex justify-between items-end mb-6">
                <div className="font-mono text-[10px] text-muted uppercase tracking-widest">
                  Recovery Time
                </div>
                <div className="font-mono text-[10px] text-acid bg-acid/10 px-2 py-1 border border-acid/20">
                  DATA_GROWTH: 20TB/YR
                </div>
              </div>

              <div className="space-y-5 mb-8">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center font-mono text-[10px] text-muted">
                    <span className="uppercase">Before (Legacy)</span>
                    <span className="font-bold">2h 00m</span>
                  </div>
                  <div className="h-2 w-full bg-surface border border-surface-border/30 overflow-hidden">
                    <div className="h-full bg-muted/40 w-[95%]" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center font-mono text-[10px] text-acid">
                    <span className="uppercase flex items-center gap-1.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="square"
                          strokeLinejoin="miter"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      After (EINSTECH)
                    </span>
                    <span className="font-bold text-[12px] ds-text-glow-acid">&lt; 10m</span>
                  </div>
                  <div className="h-2 w-full bg-surface border border-acid/30 overflow-hidden">
                    <div className="h-full bg-acid w-[8%] relative">
                      <div className="absolute inset-0 bg-white/30 animate-pulse-fast" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
                <div className="flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 mt-0.5 text-acid" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-muted mb-0.5">SYNC</span>
                    <span className="font-mono text-[10px] text-white">DAILY_REALTIME</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 mt-0.5 text-acid" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-muted mb-0.5">COMPLIANCE</span>
                    <span className="font-mono text-[10px] text-white">MEDICAL_LAW_OK</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}
