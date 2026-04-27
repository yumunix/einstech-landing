import HeroWebGL from "./HeroWebGL";
import LossCounter from "./LossCounter";
import GlassPanel from "../ds/GlassPanel";
import { PrimaryButton, SecondaryButton } from "../ds/Buttons";
import StatsBar from "../ds/StatsBar";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="ds-scanline-overlay" aria-hidden />
      <HeroWebGL />

      <div className="relative z-10 max-w-page mx-auto px-6 lg:px-12 w-full min-h-screen flex flex-col pt-16">
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 relative items-center py-12 lg:py-0">
          {/* Left column — copy */}
          <div className="lg:col-span-7 xl:col-span-6 z-10 flex flex-col justify-center h-full pt-10 pb-20">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="px-2 py-1 border border-cyan/30 bg-cyan/5 font-mono text-[10px] text-cyan uppercase tracking-widest flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 bg-cyan" />
                Est. 1994
              </div>
              <span className="font-mono text-xs text-muted uppercase tracking-widest">
                30 Years Infrastructure Expertise
              </span>
            </div>

            <h1 className="font-display leading-[0.85] flex flex-col gap-2 mb-8">
              <span className="text-[clamp(3rem,6vw,6rem)] font-bold tracking-tight ds-text-outline block">
                NON STOP
              </span>
              <span className="text-[clamp(3.5rem,7vw,7rem)] font-bold tracking-tight block">
                SYSTEM
              </span>
              <span className="text-[clamp(2.5rem,5vw,5rem)] font-light tracking-widest ds-text-glow-cyan text-cyan mt-4">
                LOSSLESS DATA
              </span>
            </h1>

            <p className="font-sans text-muted-strong text-base sm:text-lg max-w-xl leading-relaxed mb-10 border-l-2 border-cyan/30 pl-4 ds-word-keep">
              시스템 한 대가 다운되면 공장 라인은 분당{" "}
              <span className="text-white font-medium">280만 원</span>씩 손실을 봅니다.
              EINSTECH는 30년 기술력을 바탕으로 HA Cluster(Rose) · 스토리지(Hitachi) ·
              백업(Acronis · NetBackup)을 한 번에 설계해 그 손실 자체가 발생하지 않도록
              만듭니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <PrimaryButton href="#cta" className="flex-1">
                무료 인프라 진단 신청
              </PrimaryButton>
              <SecondaryButton href="#testimonials" className="flex-1">
                실 고객사 구축 사례 보기
              </SecondaryButton>
            </div>

            <StatsBar
              className="mt-12"
              items={[
                { label: "PROTOCOL", value: "HA_CLUSTER_V4.2" },
                { label: "ENCRYPTION", value: "AES-256-GCM" },
                { label: "LATENCY_TOLERANCE", value: "< 0.1ms", accent: true },
              ]}
            />
          </div>

          {/* Right column — floating panels */}
          <div className="lg:col-span-5 xl:col-span-6 z-10 h-full relative hidden lg:block">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none"
              aria-hidden
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-cyan/10 rounded-full pointer-events-none border-dashed"
              aria-hidden
            />

            <GlassPanel className="absolute top-[15%] right-[5%] w-64 p-5 transform hover:-translate-y-1 transition-transform duration-500">
              <div className="ds-data-label mb-2 flex justify-between">
                <span>Active Protection</span>
                <span className="text-acid">ON</span>
              </div>
              <div className="font-display text-xs text-muted mb-1">
                PREVENTED DOWNTIME LOSS (KRW)
              </div>
              <div className="font-mono text-2xl text-white font-bold flex items-center gap-2">
                <span>₩</span>
                <LossCounter />
              </div>
              <div className="mt-3 h-1 w-full bg-void rounded-full overflow-hidden">
                <div className="h-full bg-cyan w-full animate-pulse-fast" />
              </div>
              <div className="mt-2 font-mono text-[9px] text-muted text-right">
                CALC: MINUTE_RATE * UPTIME
              </div>
            </GlassPanel>

            <GlassPanel className="absolute bottom-[25%] left-[5%] w-72 p-5 transform hover:-translate-y-1 transition-transform duration-500">
              <div className="ds-data-label mb-4">HA Cluster Architecture</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-acid rounded-full" />
                    <span className="font-mono text-xs text-white">NODE_ALPHA [ACTIVE]</span>
                  </div>
                  <span className="font-mono text-[10px] text-cyan">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan rounded-full opacity-50" />
                    <span className="font-mono text-xs text-muted">NODE_BETA [STANDBY]</span>
                  </div>
                  <span className="font-mono text-[10px] text-muted">SYNCED</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan rounded-full opacity-50" />
                    <span className="font-mono text-xs text-muted">DATA_MIRROR</span>
                  </div>
                  <span className="font-mono text-[10px] text-muted">REALTIME</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center">
                <span className="font-mono text-[10px] text-muted">FAILOVER_READINESS</span>
                <span className="font-display text-sm text-acid">ARMED</span>
              </div>
            </GlassPanel>

            <GlassPanel className="absolute top-[60%] right-[-5%] w-48 p-4">
              <div className="ds-data-label mb-1">SYSTEM UPTIME</div>
              <div className="font-display text-4xl text-white font-bold tracking-tighter">
                99.999<span className="text-cyan text-xl">%</span>
              </div>
              <div className="mt-2 font-mono text-[9px] text-muted">ZERO_TOLERANCE_ZONE</div>
            </GlassPanel>
          </div>
        </main>

        <div className="h-12 border-t border-surface-border mt-auto hidden sm:flex justify-between items-center">
          <div className="font-mono text-[10px] text-muted flex gap-4">
            <span>SECURE_CONNECTION</span>
            <span>IP: 192.168.HA.01</span>
          </div>
          <div className="flex gap-1">
            <div className="w-8 h-1 bg-cyan/20" />
            <div className="w-8 h-1 bg-cyan/40" />
            <div className="w-8 h-1 bg-cyan" />
          </div>
        </div>
      </div>
    </section>
  );
}
