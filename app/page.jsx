import "./page.css";
import BodyClass from "@/components/landing/BodyClass";

export default function Home() {
  return (
    <div className="einstech-white w-full relative">
      <BodyClass />
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[60] glass-nav border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-4 group cursor-pointer">
            <div className="w-11 h-11 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <i className="ph-fill ph-shield-star text-navy text-2xl"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-navy tracking-tighter leading-none">
                EINSTECH
              </span>
              <span className="text-[9px] font-extrabold text-slate-400 tracking-[0.3em] mt-1">
                NON STOP · LOSSLESS
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-12">
            <div className="flex items-center gap-10 text-[15px] font-bold text-slate-600">
              <a
                href="/company"
                className="hover:text-navy transition-colors relative group py-2"
              >
                회사소개
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy transition-all group-hover:w-full"></span>
              </a>
              <a
                href="#solutions"
                className="hover:text-navy transition-colors relative group py-2"
              >
                솔루션
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy transition-all group-hover:w-full"></span>
              </a>
              <a
                href="/bcp"
                className="hover:text-navy transition-colors relative group py-2"
              >
                DR 솔루션
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy transition-all group-hover:w-full"></span>
              </a>
              <a
                href="/contact"
                className="hover:text-navy transition-colors relative group py-2"
              >
                문의하기
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy transition-all group-hover:w-full"></span>
              </a>
            </div>
            <a
              href="/contact"
              className="bg-white text-navy border border-navy px-8 py-3 rounded-full text-sm font-bold hover:bg-navy hover:text-white transition-all hover:-translate-y-0.5 active:scale-95"
            >
              무료 인프라 진단
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-48 pb-32 overflow-hidden min-h-screen flex items-center bg-white">
        <div className="hero-glow top-0 -left-1/4"></div>
        <div className="hero-glow bottom-0 -right-1/4"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-navy text-[13px] font-bold mb-10 shadow-sm">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald"></span>
              </span>
              EINSTECH INFRA DIAGNOSTICS · V.30
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black text-navy leading-[1.05] mb-10 tracking-tight">
              멈추지 않는 시스템,
              <br />
              <span className="gradient-text">사라지지 않는</span> 데이터
            </h1>

            <p className="text-xl text-slate-500 mb-14 leading-relaxed max-w-xl font-medium">
              위협은 예방이 아닌 회복으로 답합니다. 아인스테크는{" "}
              <span className="text-navy font-bold">HA Cluster</span>,{" "}
              <span className="text-navy font-bold">Storage + Backup</span>,{" "}
              <span className="text-navy font-bold">Data Security</span>를 단일
              파트너로 통합해 사이버 회복탄력성(Cyber Resilience)을 설계합니다.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="/contact"
                className="bg-navy text-white px-10 lg:px-12 py-5 lg:py-6 rounded-2xl font-bold text-lg flex items-center gap-3 hover:shadow-[0_20px_50px_rgba(10,61,98,0.25)] transition-all hover:-translate-y-1"
              >
                무료 인프라 진단
                <i className="ph-bold ph-arrow-right"></i>
              </a>
              <a
                href="/bcp"
                className="bg-white border border-slate-200 text-slate-600 px-10 lg:px-12 py-5 lg:py-6 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center gap-3"
              >
                <i className="ph-bold ph-play-circle text-2xl"></i>
                실제 구축 사례
              </a>
            </div>

            <div className="mt-16 lg:mt-20 flex items-center gap-12">
              <div>
                <div className="text-sm font-bold text-slate-400 mb-1">
                  엔지니어 30년 · 2014년 설립
                </div>
                <div className="flex items-center gap-2">
                  <i className="ph-fill ph-star text-yellow-400"></i>
                  <i className="ph-fill ph-star text-yellow-400"></i>
                  <i className="ph-fill ph-star text-yellow-400"></i>
                  <i className="ph-fill ph-star text-yellow-400"></i>
                  <i className="ph-fill ph-star text-yellow-400"></i>
                  <span className="ml-2 font-bold text-navy">
                    SEOUL.KR · MFG_NODE_01
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* LIVE LOSS DASHBOARD */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[560px] animate-float">
              <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl p-8 relative z-20">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-300"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                    <div className="w-3 h-3 rounded-full bg-green-300"></div>
                  </div>
                  <div className="text-[11px] font-bold text-slate-400 tracking-widest">
                    FACTORY_LOSS_CALC
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-end mb-3">
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                          LIVE · DOWNTIME LOSS
                        </div>
                        <div className="text-2xl font-black text-navy">
                          ₩ 2,800,000 / MIN
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-bold text-emerald uppercase">
                          UPTIME 100%
                        </div>
                        <div className="text-lg font-bold text-slate-400">
                          SIGNAL.STABLE
                        </div>
                      </div>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-navy w-[92%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                      <i className="ph-bold ph-lightning text-amber-500 text-xl mb-3"></i>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">
                        Failover
                      </div>
                      <div className="text-xl font-bold text-navy">30s</div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                      <i className="ph-bold ph-shield-check text-emerald text-xl mb-3"></i>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">
                        Backup
                      </div>
                      <div className="text-xl font-bold text-navy">
                        IMMUTABLE
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-emerald/5 border border-emerald/10 p-5 rounded-2xl">
                    <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center">
                      <i className="ph-bold ph-check-circle text-emerald text-xl"></i>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-emerald">
                        ONLINE [SECURE]
                      </div>
                      <div className="text-[10px] text-slate-400">
                        FREQ: 44.1kHz // RES: 24bit
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald/10 rounded-full blur-3xl z-10"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-navy/5 rounded-full blur-3xl z-10"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 hidden lg:flex">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-navy">
            Scroll to explore
          </span>
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* BRANDS MARQUEE */}
      <div className="py-20 bg-slate-50/60 border-y border-slate-100 relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center gap-32 px-16">
              {[
                "ROSE HA",
                "MANTECH MCCS",
                "HITACHI",
                "ACRONIS",
                "VERITAS NetBackup",
                "NETWRIX",
                "KASPERSKY",
                "HPE",
                "NVIDIA",
                "BROCADE",
              ].map((name) => (
                <span
                  key={name}
                  className="text-2xl font-black tracking-tighter text-slate-400"
                >
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* WHY SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="text-navy font-black text-sm tracking-[0.2em] uppercase mb-6 block">
                Why EINSTECH
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-navy leading-[1.1] mb-10">
                준비되지 않은 데이터는
                <br />
                자산이 아니라 리스크입니다
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed font-medium mb-12">
                기업이 직면한 가장 큰 위험은 외부 공격이 아닌 '복구 능력의
                부재'입니다. 아인스테크는 단순 저장을 넘어 비즈니스의 즉각적인
                재개를 보장합니다.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 text-navy group-hover:bg-navy group-hover:text-white transition-all">
                    <i className="ph-bold ph-shield-warning text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg">
                      ₩2.8M / MIN 손실
                    </h4>
                    <p className="text-sm text-slate-400 font-medium">
                      제조 라인 다운타임은 분당 수백만 원의 손실을 발생시킵니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 text-navy group-hover:bg-navy group-hover:text-white transition-all">
                    <i className="ph-bold ph-clock-countdown text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg">
                      30초 페일오버 임계점
                    </h4>
                    <p className="text-sm text-slate-400 font-medium">
                      Rose HA · MCCS로 서비스 중단 없이 자동 절체합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="card-premium p-8 lg:p-10 rounded-[32px] mt-12">
                <div className="text-4xl font-black text-navy mb-2">30y</div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Engineer
                </div>
                <div className="mt-8 text-slate-500 text-sm leading-relaxed">
                  엔지니어 30년 노하우가 집약된 통합 아키텍처.
                </div>
              </div>
              <div className="card-premium p-8 lg:p-10 rounded-[32px]">
                <div className="text-4xl font-black text-navy mb-2">2014</div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Established
                </div>
                <div className="mt-8 text-slate-500 text-sm leading-relaxed">
                  2014년 설립, 국내 인프라 통합 전문 기업.
                </div>
              </div>
              <div className="card-premium p-8 lg:p-10 rounded-[32px] mt-12">
                <div className="text-4xl font-black text-navy mb-2">100%</div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Immutable
                </div>
                <div className="mt-8 text-slate-500 text-sm leading-relaxed">
                  랜섬웨어에 훼손되지 않는 불변 백업 계층.
                </div>
              </div>
              <div className="card-premium p-8 lg:p-10 rounded-[32px]">
                <div className="text-4xl font-black text-navy mb-2">24/7</div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Support
                </div>
                <div className="mt-8 text-slate-500 text-sm leading-relaxed">
                  전문 엔지니어가 실시간 위협에 대응합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="solutions"
        className="py-32 bg-slate-50/60 relative overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10">
            <div className="max-w-2xl">
              <span className="text-emerald font-black text-sm tracking-[0.2em] uppercase mb-4 block">
                Integrated Solutions
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-navy mb-8">
                단일 파트너로 통합된
                <br />
                4대 인프라 라인업
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* HA CLUSTER */}
            <a
              href="/ha-cluster"
              className="card-premium p-10 rounded-[40px] bg-white group flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-navy/5 rounded-[20px] flex items-center justify-center mb-8 group-hover:bg-navy transition-colors">
                <i className="ph-fill ph-arrows-clockwise text-2xl text-navy group-hover:text-white transition-colors"></i>
              </div>
              <div className="text-[10px] font-black text-slate-400 tracking-widest mb-2">
                ROSE HA · MANTECH MCCS
              </div>
              <h3 className="text-xl font-black text-navy mb-4">HA CLUSTER</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow text-sm">
                Active-Standby 이중화, 30초 이내 자동 페일오버로 무중단 서비스를
                실현합니다.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
                  <i className="ph-bold ph-check-circle text-emerald"></i>{" "}
                  ACTIVE_STANDBY
                </li>
                <li className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
                  <i className="ph-bold ph-check-circle text-emerald"></i>{" "}
                  30S_FAILOVER
                </li>
              </ul>
              <span className="inline-flex items-center gap-2 font-black text-navy group-hover:gap-4 transition-all text-sm">
                VIEW <i className="ph-bold ph-arrow-right"></i>
              </span>
            </a>

            {/* STORAGE + BACKUP */}
            <a
              href="/storage-backup"
              className="card-premium p-10 rounded-[40px] bg-white group flex flex-col h-full relative"
            >
              <div className="absolute top-6 right-6 bg-navy text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                Core
              </div>
              <div className="w-14 h-14 bg-emerald/5 rounded-[20px] flex items-center justify-center mb-8 group-hover:bg-emerald transition-colors">
                <i className="ph-fill ph-database text-2xl text-emerald group-hover:text-white transition-colors"></i>
              </div>
              <div className="text-[10px] font-black text-slate-400 tracking-widest mb-2">
                HITACHI · ACRONIS
              </div>
              <h3 className="text-xl font-black text-navy mb-4">
                STORAGE + BACKUP
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow text-sm">
                NVMe All-Flash 스토리지 + 불변(Immutable) 백업으로 원본 데이터를
                완벽 보존합니다.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
                  <i className="ph-bold ph-check-circle text-emerald"></i>{" "}
                  NVME_ALL_FLASH
                </li>
                <li className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
                  <i className="ph-bold ph-check-circle text-emerald"></i>{" "}
                  IMMUTABLE_BACKUP
                </li>
                <li className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
                  <i className="ph-bold ph-check-circle text-emerald"></i>{" "}
                  ISOLATED_RECOVERY
                </li>
              </ul>
              <span className="inline-flex items-center gap-2 font-black text-navy group-hover:gap-4 transition-all text-sm">
                VIEW <i className="ph-bold ph-arrow-right"></i>
              </span>
            </a>

            {/* DATA SECURITY */}
            <a
              href="/dlp-antivirus"
              className="card-premium p-10 rounded-[40px] bg-white group flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-navy/5 rounded-[20px] flex items-center justify-center mb-8 group-hover:bg-navy transition-colors">
                <i className="ph-fill ph-shield-check text-2xl text-navy group-hover:text-white transition-colors"></i>
              </div>
              <div className="text-[10px] font-black text-slate-400 tracking-widest mb-2">
                NETWRIX · KASPERSKY
              </div>
              <h3 className="text-xl font-black text-navy mb-4">
                DATA SECURITY
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow text-sm">
                DLP · 백신 · Zero Trust 통합으로 내부자 위협까지 완벽
                차단합니다.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
                  <i className="ph-bold ph-check-circle text-emerald"></i>{" "}
                  DLP_ENDPOINT
                </li>
                <li className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
                  <i className="ph-bold ph-check-circle text-emerald"></i>{" "}
                  ZERO_TRUST
                </li>
                <li className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
                  <i className="ph-bold ph-check-circle text-emerald"></i>{" "}
                  INSIDER_THREAT
                </li>
              </ul>
              <span className="inline-flex items-center gap-2 font-black text-navy group-hover:gap-4 transition-all text-sm">
                VIEW <i className="ph-bold ph-arrow-right"></i>
              </span>
            </a>

            {/* BACKUP MODERNIZATION */}
            <a
              href="/backup-modernization"
              className="card-premium p-10 rounded-[40px] bg-white group flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-navy/5 rounded-[20px] flex items-center justify-center mb-8 group-hover:bg-navy transition-colors">
                <i className="ph-fill ph-arrow-fat-lines-up text-2xl text-navy group-hover:text-white transition-colors"></i>
              </div>
              <div className="text-[10px] font-black text-slate-400 tracking-widest mb-2">
                ACRONIS MIGRATION
              </div>
              <h3 className="text-xl font-black text-navy mb-4">
                BACKUP MODERNIZATION
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow text-sm">
                레거시 백업을 무중단으로 Acronis 통합 플랫폼으로 전환합니다.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
                  <i className="ph-bold ph-check-circle text-emerald"></i>{" "}
                  UNIFIED_PLATFORM
                </li>
                <li className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
                  <i className="ph-bold ph-check-circle text-emerald"></i>{" "}
                  ZERO_DOWNTIME
                </li>
                <li className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
                  <i className="ph-bold ph-check-circle text-emerald"></i>{" "}
                  LEGACY_ROLLOVER
                </li>
              </ul>
              <span className="inline-flex items-center gap-2 font-black text-navy group-hover:gap-4 transition-all text-sm">
                VIEW <i className="ph-bold ph-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* IMMUTABLE / INSTANT RESTORE */}
      <section className="py-40 bg-white relative overflow-hidden border-y border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-navy leading-tight mb-10">
                업무는 멈추지 않고,
                <br />
                데이터는 되살아납니다
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed mb-16 font-medium">
                HA Cluster가 서비스 중단을 막고, 이중 백업이 어떤 사고에도
                원본을 지킵니다. 아인스테크는 이 두 축을 하나의 아키텍처로 통합
                설계합니다.
              </p>

              <div className="space-y-10">
                <div className="flex gap-8">
                  <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-emerald/20">
                    <i className="ph-bold ph-arrows-clockwise text-emerald text-3xl"></i>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-navy mb-3">
                      HA Cluster · 자동 페일오버
                    </h4>
                    <p className="text-slate-500 leading-relaxed font-medium">
                      Rose HA · MCCS 이중화로 장애 감지 30초 이내 자동 절체. 사용자
                      알림도 없이 업무 시스템이 계속 흐릅니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-emerald/20">
                    <i className="ph-bold ph-shield-check text-emerald text-3xl"></i>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-navy mb-3">
                      불변 백업 + 즉시 복구
                    </h4>
                    <p className="text-slate-500 leading-relaxed font-medium">
                      Acronis · Hitachi 이중 백업 + 불변(Immutable) 스토리지로
                      랜섬웨어에도 원본이 남습니다. 필요 시 즉시 마운트해 RTO를
                      최소화합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-20 inline-flex items-center gap-12 bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
                <div>
                  <div className="text-5xl font-black text-navy">
                    30<span className="text-emerald text-2xl">s</span>
                  </div>
                  <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mt-2">
                    Auto Failover
                  </p>
                </div>
                <div className="w-px h-16 bg-slate-200"></div>
                <div>
                  <div className="text-5xl font-black text-navy">
                    100<span className="text-emerald text-2xl">%</span>
                  </div>
                  <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mt-2">
                    Immutable
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-slate-50 aspect-square rounded-[64px] border border-slate-100 p-16 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full border border-slate-200 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-emerald/20 rounded-full blur-[80px]"></div>
                  <div className="relative flex flex-col items-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8 border border-slate-200 shadow-sm animate-pulse">
                      <i className="ph-fill ph-fingerprint text-navy text-6xl"></i>
                    </div>
                    <span className="text-navy font-black tracking-[0.4em] text-[11px] uppercase">
                      Neural Infrastructure Active
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -left-10 bg-white p-8 lg:p-12 rounded-[48px] shadow-xl border border-slate-100 animate-float">
                <div className="text-5xl lg:text-6xl font-black text-navy mb-2">
                  24/7
                </div>
                <div className="text-emerald font-black text-lg uppercase tracking-tighter">
                  Expert Vigilance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-48 bg-white relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black text-navy mb-10 leading-[1.1]">
            보안은 지출이 아닌
            <br />
            지속 가능한 미래를 위한 투자입니다
          </h2>
          <p className="text-xl lg:text-2xl text-slate-500 mb-20 max-w-3xl mx-auto font-medium">
            현재 운영 중인 시스템의 잠재 위험을 무료로 진단받으세요. 30년 경력
            엔지니어가 최적의 로드맵을 제안합니다.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <a
              href="/contact"
              className="bg-navy text-white px-12 lg:px-16 py-6 lg:py-8 rounded-[32px] font-black text-xl lg:text-2xl hover:shadow-[0_30px_70px_rgba(10,61,98,0.25)] transition-all hover:-translate-y-2 active:scale-95"
            >
              무료 인프라 진단 신청
            </a>
            <div className="flex items-center gap-8 text-left">
              <div className="w-px h-16 bg-slate-200 hidden md:block"></div>
              <div>
                <div className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-1">
                  Headquarters
                </div>
                <div className="text-base lg:text-lg font-black text-navy leading-tight">
                  경기 용인시 수지구
                  <br />
                  수지하우비 409호
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white text-slate-700 pt-32 pb-20 border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
            <div className="md:col-span-4">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm">
                  <i className="ph-fill ph-shield-star text-navy text-xl"></i>
                </div>
                <span className="text-2xl font-black text-navy tracking-tighter">
                  EINSTECH
                </span>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed mb-10 max-w-sm">
                (주)아인스테크는 2014년 설립된 엔지니어 30년 경력 기반의 HA ·
                스토리지 · 백업 · 데이터 보안 통합 인프라 파트너입니다.
              </p>
              <div className="text-[10px] font-bold text-slate-400 tracking-widest">
                EINSTECH EST.2014 // ENG.30Y LEGACY
              </div>
            </div>

            <div className="md:col-span-2">
              <h5 className="font-black text-navy mb-10 uppercase tracking-widest text-xs">
                Solutions
              </h5>
              <ul className="space-y-6 text-sm font-bold text-slate-500">
                <li>
                  <a
                    href="/ha-cluster"
                    className="hover:text-navy transition-colors"
                  >
                    HA Cluster
                  </a>
                </li>
                <li>
                  <a
                    href="/storage-backup"
                    className="hover:text-navy transition-colors"
                  >
                    Storage + Backup
                  </a>
                </li>
                <li>
                  <a
                    href="/dlp-antivirus"
                    className="hover:text-navy transition-colors"
                  >
                    Data Security
                  </a>
                </li>
                <li>
                  <a
                    href="/backup-modernization"
                    className="hover:text-navy transition-colors"
                  >
                    Backup Modernization
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h5 className="font-black text-navy mb-10 uppercase tracking-widest text-xs">
                Resources
              </h5>
              <ul className="space-y-6 text-sm font-bold text-slate-500">
                <li>
                  <a href="/bcp" className="hover:text-navy transition-colors">
                    BCP · DR
                  </a>
                </li>
                <li>
                  <a
                    href="/infrastructure"
                    className="hover:text-navy transition-colors"
                  >
                    Infrastructure
                  </a>
                </li>
                <li>
                  <a
                    href="/company"
                    className="hover:text-navy transition-colors"
                  >
                    회사 소개
                  </a>
                </li>
                <li>
                  <a
                    href="/company#history"
                    className="hover:text-navy transition-colors"
                  >
                    회사 연혁
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h5 className="font-black text-navy mb-10 uppercase tracking-widest text-xs">
                Headquarters
              </h5>
              <div className="space-y-6 text-slate-500">
                <div className="flex items-start gap-4">
                  <i className="ph ph-map-pin text-emerald text-xl"></i>
                  <p className="text-sm font-medium">
                    경기도 용인시 수지구
                    <br />
                    문인로 54번길 2, 수지하우비 409호
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <i className="ph ph-envelope text-emerald text-xl"></i>
                  <a
                    href="/contact"
                    className="text-sm font-medium hover:text-navy transition-colors"
                  >
                    문의하기 →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                © 2024 EINSTECH Co., Ltd. All rights reserved.
              </p>
              <p className="text-[11px] text-slate-500 font-medium">
                사업자등록번호: 142-81-71526 &nbsp;|&nbsp; 대표이사: 염성일
              </p>
            </div>
            <div className="flex gap-10 text-[11px] font-black uppercase tracking-widest text-slate-500">
              <a href="#" className="hover:text-navy transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-navy transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
