export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-md border-b border-surface-border h-16">
      <div className="max-w-page mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a
            href="/"
            className="font-display font-bold text-xl tracking-widest text-white flex items-center gap-2"
          >
            <span className="w-3 h-3 bg-acid block animate-pulse-fast" />
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
            href="#contact"
            className="px-4 py-2 bg-cyan/10 border border-cyan text-cyan hover:bg-cyan hover:text-void font-sans text-sm font-medium transition-all duration-300"
          >
            도입 문의
          </a>
        </div>
      </div>
    </nav>
  );
}
