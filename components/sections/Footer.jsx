export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-page mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/einstech-logo.png" alt="EINSTECH" className="h-8 w-auto block" />
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
