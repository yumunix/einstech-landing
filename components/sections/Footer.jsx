export default function Footer() {
  return (
    <footer className="border-t border-surface-border">
      <div className="max-w-page mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-cyan rounded-full animate-pulse-fast" />
          <span className="font-display font-bold text-lg tracking-widest text-white">
            EINSTECH<span className="text-cyan text-xs align-top ml-1">®</span>
          </span>
          <span className="font-mono text-[10px] text-muted ml-3 hidden sm:inline">
            EST. 1994 · 30 YEARS
          </span>
        </div>

        <div className="font-mono text-[10px] text-muted text-center md:text-right">
          © {new Date().getFullYear()} EINSTECH. All systems online.
          <br className="md:hidden" />
          <span className="ml-0 md:ml-3">
            경기도 용인시 수지구 문인로54번길 2 · 070-4142-9990
          </span>
        </div>
      </div>
    </footer>
  );
}
