"use client";

import { useEffect, useRef, useState } from "react";

const solutionItems = [
  { label: "HA Cluster", desc: "Rose HA — 무중단 페일오버", href: "/rose-ha.html" },
  { label: "Storage + Backup", desc: "Hitachi · Acronis · NetBackup", href: "/storage-backup.html" },
  { label: "Data Security", desc: "Netwrix · Kaspersky · Zero Trust", href: "/dlp-antivirus.html" },
];

const companyItems = [
  { label: "회사 소개", desc: "EINSTECH 30년의 기록", href: "/company.html" },
  { label: "회사 연혁", desc: "Since 1994", href: "/company.html#history" },
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
        className={`flex items-center gap-1.5 text-sm font-sans transition-colors ${
          open ? "text-cyan" : "text-white/70 hover:text-cyan"
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
          <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-72 bg-void/95 backdrop-blur-md border border-surface-border shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        >
          <div className="px-4 py-2 border-b border-surface-border/60 font-mono text-[10px] text-muted uppercase tracking-widest">
            {label.toUpperCase()}_MENU
          </div>
          <ul className="py-2">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-3 hover:bg-cyan/5 group transition-colors"
                  onClick={() => setOpenId(null)}
                >
                  <div className="font-sans text-sm text-white group-hover:text-cyan">
                    {item.label}
                  </div>
                  <div className="font-mono text-[10px] text-muted mt-0.5">{item.desc}</div>
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-md border-b border-surface-border h-16">
      <div className="max-w-page mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a
            href="/"
            className="font-display font-bold text-xl tracking-normal text-white flex items-baseline gap-2 leading-none"
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
            <NavDropdown
              id="solution"
              label="솔루션"
              items={solutionItems}
              openId={openId}
              setOpenId={setOpenId}
            />
            <a
              href="/bcp"
              className="text-sm font-sans text-white/70 hover:text-cyan transition-colors"
            >
              DR 솔루션
            </a>
            <a
              href="/contact"
              className="text-sm font-sans text-white/70 hover:text-cyan transition-colors"
            >
              문의하기
            </a>
            <NavDropdown
              id="company"
              label="Company"
              items={companyItems}
              openId={openId}
              setOpenId={setOpenId}
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="font-mono text-[10px] text-acid">SYS_STATUS: OPTIMAL</div>
            <div className="font-mono text-[10px] text-muted">KRW / KO</div>
          </div>
          <a
            href="/contact"
            className="hidden sm:inline-flex px-4 py-2 bg-cyan/10 border border-cyan text-cyan hover:bg-cyan hover:text-void font-sans text-sm font-medium transition-all duration-300"
          >
            도입 문의
          </a>
          <button
            type="button"
            className="md:hidden p-2 text-white/80 hover:text-cyan"
            aria-label="메뉴 열기"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path strokeWidth="1.6" d="M3 5h14M3 10h14M3 15h14" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-void/95 backdrop-blur-md border-b border-surface-border">
          <div className="px-6 py-4 flex flex-col gap-1">
            <div className="font-mono text-[10px] text-muted uppercase tracking-widest pt-2 pb-1">
              솔루션
            </div>
            {solutionItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm text-white/80 hover:text-cyan"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/bcp"
              className="block py-3 mt-2 text-sm text-white/80 hover:text-cyan border-t border-surface-border/60"
            >
              DR 솔루션
            </a>
            <a
              href="/contact"
              className="block py-3 text-sm text-white/80 hover:text-cyan border-t border-surface-border/60"
            >
              문의하기
            </a>
            <div className="font-mono text-[10px] text-muted uppercase tracking-widest pt-3 pb-1 border-t border-surface-border/60">
              Company
            </div>
            {companyItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm text-white/80 hover:text-cyan"
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
