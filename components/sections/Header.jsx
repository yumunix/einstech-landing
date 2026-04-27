export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-md border-b border-surface-border h-16">
      <div className="max-w-page mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a
            href="/"
            className="font-display font-bold text-xl tracking-widest text-white flex items-baseline gap-2 leading-none"
          >
            <svg
              width="14"
              height="20"
              viewBox="0 0 14 22"
              className="block"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="hdr-halo" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FF1744" stopOpacity="0.9" />
                  <stop offset="45%" stopColor="#FF1744" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#FF1744" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle
                cx="7"
                cy="4"
                r="9"
                fill="url(#hdr-halo)"
                className="animate-pulse-fast"
              />
              <circle
                cx="7"
                cy="4"
                r="3.2"
                fill="#FF1744"
                style={{ filter: "drop-shadow(0 0 6px #FF5252)" }}
              />
              <rect
                x="4"
                y="9"
                width="6"
                height="13"
                rx="0.8"
                fill="#FF1744"
                style={{ filter: "drop-shadow(0 0 4px #FF5252)" }}
              />
            </svg>
            EINSTECH
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#solution"
              className="text-sm font-sans text-white/70 hover:text-cyan transition-colors"
            >
              HA Cluster
            </a>
            <a
              href="#solution"
              className="text-sm font-sans text-white/70 hover:text-cyan transition-colors"
            >
              Storage
            </a>
            <a
              href="#solution"
              className="text-sm font-sans text-white/70 hover:text-cyan transition-colors"
            >
              Backup
            </a>
            <a
              href="/company.html"
              className="text-sm font-sans text-white/70 hover:text-cyan transition-colors"
            >
              Company
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="font-mono text-[10px] text-acid">SYS_STATUS: OPTIMAL</div>
            <div className="font-mono text-[10px] text-muted">KRW / KO</div>
          </div>
          <a
            href="mailto:sungil.yum@einstech.kr?subject=%EB%8F%84%EC%9E%85%20%EB%AC%B8%EC%9D%98"
            className="px-4 py-2 bg-cyan/10 border border-cyan text-cyan hover:bg-cyan hover:text-void font-sans text-sm font-medium transition-all duration-300"
          >
            도입 문의
          </a>
        </div>
      </div>
    </nav>
  );
}
