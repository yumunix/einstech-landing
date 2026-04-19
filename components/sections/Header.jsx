export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 border-b border-surface-border relative">
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 bg-cyan rounded-full animate-pulse-fast" />
        <div className="font-display font-bold text-2xl tracking-widest text-white">
          EINSTECH
          <span className="text-cyan text-sm align-top ml-1">®</span>
        </div>
      </div>

      <nav className="hidden md:flex gap-8 font-mono text-xs text-muted tracking-widest uppercase">
        <a href="#solution" className="hover:text-cyan transition-colors">
          HA Cluster
        </a>
        <a href="#solution" className="hover:text-cyan transition-colors">
          Storage
        </a>
        <a href="#solution" className="hover:text-cyan transition-colors">
          Backup
        </a>
        <a href="/company.html" className="hover:text-cyan transition-colors">
          Company
        </a>
      </nav>

      <div className="flex items-center gap-6">
        <div className="text-right hidden sm:block">
          <div className="font-mono text-[10px] text-acid">SYS_STATUS: OPTIMAL</div>
          <div className="font-mono text-[10px] text-muted">KRW / KO</div>
        </div>
        <button
          aria-label="Open menu"
          className="w-10 h-10 border border-surface-border flex items-center justify-center hover:border-cyan transition-colors group"
        >
          <div className="space-y-1 w-4">
            <div className="h-px bg-white group-hover:bg-cyan transition-colors" />
            <div className="h-px bg-white group-hover:bg-cyan transition-colors w-3/4" />
            <div className="h-px bg-white group-hover:bg-cyan transition-colors" />
          </div>
        </button>
      </div>
    </header>
  );
}
