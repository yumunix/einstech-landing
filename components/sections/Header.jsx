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
              width="16"
              height="22"
              viewBox="0 0 16 24"
              className="block"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="hdr-halo" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FF1744" stopOpacity="0.55" />
                  <stop offset="60%" stopColor="#FF1744" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#FF1744" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="8" cy="4" r="10" fill="url(#hdr-halo)">
                <animate
                  attributeName="opacity"
                  values="0.3;1;0.3"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="8" cy="4" r="3.6" fill="#FF1744">
                <animate
                  attributeName="opacity"
                  values="1;1;0.15;1;1"
                  keyTimes="0;0.42;0.5;0.58;1"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
              </circle>
              <rect x="3.5" y="9" width="9" height="15" rx="1" fill="#FF1744" />
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
