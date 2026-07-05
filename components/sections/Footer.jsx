export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-page mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-baseline gap-3 leading-none">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="block self-center"
            aria-hidden="true"
          >
            <rect
              x="2.5"
              y="2.5"
              width="19"
              height="19"
              rx="3.5"
              fill="none"
              stroke="#0A3D62"
              strokeWidth="2"
            />
            <circle cx="7.5" cy="7.5" r="1.6" fill="#0A3D62" />
          </svg>
          <span className="font-display font-black text-xl tracking-normal text-navy">
            EINSTECH
          </span>
          <span className="font-mono text-[10px] text-slate-400 ml-3 hidden sm:inline self-center">
            EST. 2014 · ENG.30Y
          </span>
        </div>

        <div className="font-mono text-[10px] text-slate-500 text-center md:text-right leading-relaxed">
          © {new Date().getFullYear()} EINSTECH Co., Ltd. All rights reserved.
          <br />
          사업자등록번호: 142-81-71526 &nbsp;|&nbsp; 대표이사: 염성일
          <br />
          경기도 용인시 수지구 문인로 54번길 2, 수지하우비 409호
        </div>
      </div>
    </footer>
  );
}
