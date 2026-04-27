export default function Footer() {
  return (
    <footer className="border-t border-surface-border">
      <div className="max-w-page mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-baseline gap-2 leading-none">
          <svg
            width="16"
            height="22"
            viewBox="0 0 16 24"
            className="block"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="ftr-halo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FF1744" stopOpacity="0.55" />
                <stop offset="60%" stopColor="#FF1744" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#FF1744" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="8" cy="4" r="10" fill="url(#ftr-halo)">
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
          <span className="font-display font-bold text-xl tracking-normal text-white">
            EINSTECH
          </span>
          <span className="font-mono text-[10px] text-muted ml-3 hidden sm:inline self-center">
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
