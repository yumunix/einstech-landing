"use client";

import { useEffect, useRef, useState } from "react";

const productItems = [
  { label: "HP Server + NVIDIA GPU", desc: "기업용 서버 · AI/HPC 컴퓨팅", href: "/infrastructure" },
  { label: "Hitachi + Brocade SAN", desc: "VSP 스토리지 · Fibre Channel 패브릭", href: "/storage-backup" },
  { label: "TP-Link + EINSWALL", desc: "Network Switch · Firewall", href: "/einswall" },
];

const solutionItems = [
  { label: "HA Cluster", desc: "Rose HA · MCCS — 무중단 페일오버", href: "/ha-cluster" },
  { label: "Storage + Backup", desc: "Hitachi · Acronis · NetBackup", href: "/storage-backup" },
  { label: "Data Security", desc: "Netwrix · Kaspersky · Zero Trust", href: "/dlp-antivirus" },
  { label: "DR 솔루션", desc: "재해복구 · BCP 설계", href: "/bcp" },
];

const supportItems = [
  { label: "구축 및 마이그레이션", desc: "신규 구축 · 시스템 전환", href: "/contact" },
  { label: "유지보수", desc: "정기점검 · 예방정비", href: "/contact" },
  { label: "장애 대응", desc: "원인 분석 · 복구 지원", href: "/contact" },
  { label: "원격 기술지원", desc: "신속한 비대면 기술지원", href: "/contact" },
];

const companyItems = [
  { label: "회사 소개", desc: "EINSTECH 2014 설립 · 엔지니어 30년", href: "/company" },
  { label: "회사 연혁", desc: "Since 2014", href: "/company#history" },
];

function NavDropdown({ label, items, openId, setOpenId, id }) {
  const open = openId === id;
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    function onClick(e) {
      if (!ref.current?.contains(e.target)) setOpenId(null);
    }
    function onEsc(e) {
      if (e.key === "Escape") setOpenId(null);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open, setOpenId]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpenId(open ? null : id)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={`flex items-center gap-1.5 text-base font-bold transition-colors ${
          open ? "text-navy" : "text-slate-600 hover:text-navy"
        }`}
      >
        {label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path
            d="M1 3l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.4"
            fill="none"
          />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl"
        >
          <div className="px-4 py-2 border-b border-slate-100 font-mono text-[10px] text-slate-400 uppercase tracking-widest">
            {label.toUpperCase()}_MENU
          </div>
          <ul className="py-2">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-3 hover:bg-slate-50 group transition-colors"
                  onClick={() => setOpenId(null)}
                >
                  <div className="font-bold text-sm text-slate-900 group-hover:text-navy">
                    {item.label}
                  </div>
                  <div className="font-mono text-[10px] text-slate-400 mt-0.5">
                    {item.desc}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [openId, setOpenId] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-16">
      <div className="max-w-page mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
        <div className="flex items-center gap-14">
          <a href="/" className="flex items-center leading-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/einstech-logo.png"
              alt="EINSTECH"
              className="h-8 w-auto block"
            />
          </a>

          <div className="hidden md:flex items-center gap-6">
            <NavDropdown
              id="product"
              label="제품"
              items={productItems}
              openId={openId}
              setOpenId={setOpenId}
            />
            <NavDropdown
              id="solution"
              label="솔루션"
              items={solutionItems}
              openId={openId}
              setOpenId={setOpenId}
            />
            <NavDropdown
              id="support"
              label="기술지원"
              items={supportItems}
              openId={openId}
              setOpenId={setOpenId}
            />
            <NavDropdown
              id="company"
              label="회사소개"
              items={companyItems}
              openId={openId}
              setOpenId={setOpenId}
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="font-mono text-[10px] text-emerald">
              SYS_STATUS: OPTIMAL
            </div>
            <div className="font-mono text-[10px] text-slate-400">KRW / KO</div>
          </div>
          <a
            href="/contact"
            className="hidden sm:inline-flex px-5 py-2 bg-white border border-navy text-navy hover:bg-navy hover:text-white rounded-full font-bold text-sm transition-all duration-300"
          >
            도입 문의
          </a>
          <button
            type="button"
            className="md:hidden p-2 text-slate-600 hover:text-navy"
            aria-label="메뉴 열기"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
            >
              <path strokeWidth="1.6" d="M3 5h14M3 10h14M3 15h14" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-6 py-4 flex flex-col gap-1">
            <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest pt-2 pb-1">
              제품
            </div>
            {productItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm text-slate-700 hover:text-navy"
              >
                {item.label}
              </a>
            ))}
            <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest pt-2 pb-1">
              솔루션
            </div>
            {solutionItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm text-slate-700 hover:text-navy"
              >
                {item.label}
              </a>
            ))}
            <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest pt-3 pb-1 border-t border-slate-100">
              기술지원
            </div>
            {supportItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm text-slate-700 hover:text-navy"
              >
                {item.label}
              </a>
            ))}
            <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest pt-3 pb-1 border-t border-slate-100">
              회사소개
            </div>
            {companyItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm text-slate-700 hover:text-navy"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
