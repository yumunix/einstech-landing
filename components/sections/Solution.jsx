import GlassPanel from "../ds/GlassPanel";
import SectionHeader from "../ds/SectionHeader";

function SolutionCard({ index, tagLabel, title, subtitle, description, footer }) {
  return (
    <GlassPanel
      hoverColor="acid"
      className="p-8 lg:p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500 hover:bg-surface-border/10 hover:border-acid/30"
    >
      <div className="flex justify-between items-start mb-10 relative">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[10px] text-muted tracking-widest uppercase group-hover:text-cyan transition-colors">
            MODULE_{index}
          </span>
          <span className="font-mono text-[10px] text-acid">{tagLabel}</span>
        </div>
        <div className="font-display text-7xl font-bold ds-text-outline opacity-10 pointer-events-none group-hover:text-acid group-hover:opacity-20 transition-all duration-500 absolute -top-4 -right-2">
          {index}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-display text-2xl font-bold text-white mb-2 ds-word-keep">{title}</h4>
        <div className="text-sm font-sans text-cyan ds-word-keep font-medium">{subtitle}</div>
      </div>

      <div className="font-sans text-muted-strong text-[15px] leading-relaxed mb-10 ds-word-keep flex-grow">
        {description}
      </div>

      <div className="pt-6 border-t border-surface-border/50">{footer}</div>
    </GlassPanel>
  );
}

function CategoryHeader({ index, name, summary }) {
  return (
    <div className="mb-6 flex items-baseline gap-4 flex-wrap">
      <span className="font-mono text-[10px] text-acid tracking-widest">
        CATEGORY_{index}
      </span>
      <h3 className="font-display text-2xl text-white font-bold">{name}</h3>
      <span className="font-mono text-[11px] text-muted">— {summary}</span>
    </div>
  );
}

export default function Solution() {
  return (
    <section id="solution" className="py-24 lg:py-32 relative">
      <div
        className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-acid/30 to-transparent hidden lg:block -z-10"
        aria-hidden
      />

      <div className="w-full max-w-page mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          badgeText="SYS_SOLUTION"
          badgeColor="acid"
          sectionLabel="3. Service — 엔지니어 30년 경험으로 다듬은 3가지 카테고리"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-end">
            <h3 className="font-display text-[clamp(2.5rem,4vw,4rem)] font-bold tracking-tight text-white leading-[1.1] ds-word-keep max-w-3xl flex-1">
              <span className="ds-text-glow-acid text-acid">엔지니어 30년 경험</span>으로 다듬은
              <br />
              따로 사면 여러 벤더,
              <br className="hidden lg:block" />
              <span className="text-white"> 함께 사면 1개 파트너</span>
            </h3>
            <p className="font-sans text-muted-strong text-[17px] leading-relaxed ds-word-keep max-w-xl border-l-2 border-acid/30 pl-5 mb-2 lg:flex-1">
              EINSTECH 엔지니어가 직접 제안하는
              <br />
              인프라 · 보안 · 연속성 솔루션을
              <br />
              <span className="text-white font-medium">한 번에 설계하고 구축합니다.</span>
            </p>
          </div>
        </SectionHeader>

        <div className="space-y-16 lg:pl-12">
          <div id="cat-infra" className="scroll-mt-24">
            <CategoryHeader index="01" name="Infrastructure" summary="고가용성 · 스토리지 · 백업" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SolutionCard
                index="01"
                tagLabel="ACTIVE_STANDBY"
                title="HA Cluster — Rose"
                subtitle="단일 장애점을 제거합니다"
                description={
                  <>
                    서버 장애 시 평균 <span className="text-white">30초</span> 안에 자동 페일오버.
                    경쟁 클러스터 대비 라이선스 비용 최대 60% 절감.
                    <br />
                    <br />
                    <span className="text-acid">
                      연간 계획되지 않은 다운타임 평균 92% 감소
                    </span>
                    <br />
                    <br />
                    <a
                      href="/rose-ha.html"
                      className="inline-flex items-center gap-1.5 text-cyan hover:text-acid transition-colors font-mono text-[11px] tracking-widest uppercase border-b border-cyan/30 hover:border-acid pb-0.5"
                    >
                      Rose HA 자세히 보기 →
                    </a>
                  </>
                }
                footer={
                  <div className="bg-black/40 rounded border border-white/5 p-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-acid/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex flex-col gap-1 items-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-acid shadow-[0_0_10px_rgba(57,255,20,0.6)] animate-pulse-fast" />
                        <span className="font-mono text-[10px] text-white">NODE_A</span>
                      </div>

                      <div className="flex-1 px-4 flex items-center justify-center relative">
                        <div className="h-px w-full bg-surface-border relative overflow-hidden">
                          <div
                            className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-acid via-cyan to-transparent"
                            style={{ animation: "scanlineX 2s linear infinite" }}
                          />
                        </div>
                        <svg
                          className="w-4 h-4 text-cyan absolute bg-black/40 rounded-full"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                          />
                        </svg>
                      </div>

                      <div className="flex flex-col gap-1 items-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan/40" />
                        <span className="font-mono text-[10px] text-muted">NODE_B</span>
                      </div>
                    </div>
                    <div className="flex justify-between mt-3 pt-3 border-t border-white/5 font-mono text-[9px]">
                      <span className="text-acid">STATUS: ACTIVE</span>
                      <span className="text-muted">STATUS: STANDBY</span>
                    </div>
                  </div>
                }
              />

              <SolutionCard
                index="02"
                tagLabel="TIER_ARCHITECTURE"
                title="Storage + Backup"
                subtitle="사라지지 않는 데이터"
                description={
                  <>
                    Acronis · NetBackup · Hitachi Storage를 묶어 3-2-1 백업 정책으로 설계.
                    랜섬웨어 감염 시 평균 <span className="text-white">1시간</span> 안에 깨끗한
                    시점으로 복구.
                    <br />
                    <br />
                    <span className="text-acid">RTO 4시간 → 1시간 · RPO 24시간 → 30분</span>
                    <br />
                    <br />
                    <a
                      href="/storage-backup.html"
                      className="inline-flex items-center gap-1.5 text-cyan hover:text-acid transition-colors font-mono text-[11px] tracking-widest uppercase border-b border-cyan/30 hover:border-acid pb-0.5"
                    >
                      Storage & Backup 자세히 보기 →
                    </a>
                  </>
                }
                footer={
                  <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between font-mono text-[10px] uppercase">
                        <span className="text-white flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-acid block" /> NVMe All-Flash
                        </span>
                        <span className="text-acid tracking-widest">MAX_IOPS</span>
                      </div>
                      <div className="h-1.5 w-full bg-void border border-surface-border overflow-hidden">
                        <div className="h-full bg-acid w-[90%] relative">
                          <div className="absolute inset-0 bg-white/20" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between font-mono text-[10px] uppercase">
                        <span className="text-muted flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-cyan/50 block" /> Hybrid SAS/SATA
                        </span>
                        <span className="text-cyan tracking-widest">CAPACITY</span>
                      </div>
                      <div className="h-1.5 w-full bg-void border border-surface-border/50 overflow-hidden">
                        <div className="h-full bg-cyan/60 w-[60%]" />
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </div>

          <div id="cat-security" className="scroll-mt-24">
            <CategoryHeader index="02" name="Security" summary="DLP · 백신 · 감사 대응" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SolutionCard
                index="03"
                tagLabel="VERIFIED_PROCESS"
                title="DLP + 백신"
                subtitle="빠져나가지 않는 정보"
                description={
                  <>
                    Netwrix Endpoint DLP + Kaspersky/ESET로 USB·메일·클라우드 업로드·인쇄까지
                    단일 정책으로 통제. ISMS-P · 전자금융감독규정 감사 리포트 자동 생성.
                    <br />
                    <br />
                    <span className="text-acid">감사 대응 준비시간 평균 3주 → 2일</span>
                    <br />
                    <br />
                    <a
                      href="/dlp-antivirus.html"
                      className="inline-flex items-center gap-1.5 text-cyan hover:text-acid transition-colors font-mono text-[11px] tracking-widest uppercase border-b border-cyan/30 hover:border-acid pb-0.5"
                    >
                      DLP & 백신 자세히 보기 →
                    </a>
                  </>
                }
                footer={
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-surface-border/5 p-3 border border-white/5">
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-4 h-4 text-cyan"
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
                        <span className="font-mono text-xs text-muted-strong">SCHEDULE_CONFIG</span>
                      </div>
                      <span className="font-mono text-[10px] text-cyan">DONE</span>
                    </div>
                    <div className="flex items-center justify-between bg-acid/5 p-3 border border-acid/20 relative overflow-hidden group-hover:bg-acid/10 transition-colors">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-acid" />
                      <div className="flex items-center gap-3 pl-2">
                        <svg
                          className="w-4 h-4 text-acid"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="square"
                            strokeLinejoin="miter"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="font-mono text-xs text-white font-bold">RESTORE_DRILL</span>
                      </div>
                      <span className="font-mono text-[10px] text-acid animate-pulse-fast bg-acid/10 px-2 py-1 rounded">
                        VERIFIED_100%
                      </span>
                    </div>
                  </div>
                }
              />
            </div>
          </div>

          <div id="cat-continuity" className="scroll-mt-24">
            <CategoryHeader index="03" name="Continuity" summary="BCP · DRP · 정기 훈련" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SolutionCard
                index="04"
                tagLabel="CONTINUITY_FRAMEWORK"
                title="BCP"
                subtitle="비즈니스 연속성 계획"
                description={
                  <>
                    해킹·서버 장애·재난이 발생해도 핵심 생산이 멈추지 않도록
                    BIA · 복구 전략 · Runbook · 정기 모의훈련까지 BCP 체계를 설계·구축.
                    <br />
                    <br />
                    <span className="text-acid">Tier 0 시스템 평균 복구 시간 분 단위로 단축</span>
                    <br />
                    <br />
                    <a
                      href="/bcp"
                      className="inline-flex items-center gap-1.5 text-cyan hover:text-acid transition-colors font-mono text-[11px] tracking-widest uppercase border-b border-cyan/30 hover:border-acid pb-0.5"
                    >
                      BCP 자세히 보기 →
                    </a>
                  </>
                }
                footer={
                  <div className="bg-black/40 rounded border border-white/5 p-4 relative overflow-hidden">
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase">
                      <span className="text-cyan tracking-widest">BCP_TIER</span>
                      <span className="text-acid">0 · 1 · 2</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[9px]">
                      <span className="text-muted">DRILL_CYCLE</span>
                      <span className="text-white">QUARTERLY</span>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
