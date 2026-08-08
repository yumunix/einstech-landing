"use client";

import { useEffect, useRef, useState } from "react";
import { productItems } from "./productItems";
import { SMARTSTORE_URL } from "@/data/storeLinks";

const aiItems = [
  { label: "EINSGUARD AI", desc: "기업용 AI 코딩 도구 보안·관리", href: "/einsguard-ai" },
  { label: "Ai Services", desc: "기업 AI 구축 서비스 전체 보기", href: "/ai-services" },
  { label: "온프레미스 AI 구축", desc: "사내 전용 AI 시스템 구축", href: "/onpremise-ai" },
  { label: "AI 업무 어시스턴트", desc: "업무를 보조하는 AI 어시스턴트", href: "/ai-services#assistant" },
  { label: "AI 보안 컨설팅", desc: "AI 사용 보안 정책·DLP 연동", href: "/ai-services#security" },
];

const solutionItems = [
  { label: "HA Cluster", desc: "Rose HA · MCCS — 무중단 페일오버", href: "/ha-cluster" },
  { label: "Backup", desc: "Acronis · NetBackup · Immutable Backup", href: "/storage-backup" },
  { label: "Data Security", desc: "Netwrix · Kaspersky · ESET", href: "/dlp-antivirus" },
  { label: "DR 솔루션", desc: "재해복구 · BCP 설계", href: "/bcp" },
];

const supportItems = [
  { label: "구축 및 마이그레이션", desc: "신규 구축 · 시스템 전환", href: "/support/implementation-migration" },
  { label: "유지보수", desc: "정기점검 · 예방정비", href: "/support/maintenance" },
  { label: "장애 대응", desc: "원인 분석 · 복구 지원", href: "/support/incident-response" },
  { label: "원격 기술지원", desc: "신속한 비대면 기술지원", href: "/support/remote-support" },
];

const companyItems = [
  { label: "회사 소개", desc: "EINSTECH 2014 설립 · 엔지니어 30년", href: "/company" },
  { label: "회사 연혁", desc: "Since 2014", href: "/company#history" },
  { label: "파트너십", desc: "Technology · Solution · Channel Partners", href: "/partners" },
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
        className={`flex items-center gap-1.5 whitespace-nowrap text-sm font-bold transition-colors ${
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
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center leading-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/einstech-logo.png"
              alt="EINSTECH"
              className="h-8 w-auto block"
            />
          </a>

          <div className="hidden lg:flex items-center gap-4">
            <NavDropdown
              id="ai"
              label="Ai Services"
              items={aiItems}
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
              id="product"
              label="제품"
              items={productItems}
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

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="font-mono text-[10px] text-emerald">
              SYS_STATUS: OPTIMAL
            </div>
            <div className="font-mono text-[10px] text-slate-400">KRW / KO</div>
          </div>
          <a
            href={SMARTSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap lg:inline-flex px-4 py-2 bg-navy text-white border border-navy hover:bg-white hover:text-navy rounded-full font-bold text-sm transition-all duration-300"
          >
            제품 구매
          </a>
          <a
            href="/contact"
            className="hidden whitespace-nowrap sm:inline-flex px-4 py-2 bg-white border border-navy text-navy hover:bg-navy hover:text-white rounded-full font-bold text-sm transition-all duration-300"
          >
            도입 문의
          </a>
          <button
            type="button"
            className="lg:hidden p-2 text-slate-600 hover:text-navy"
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
        <div className="lg:hidden bg-white border-b border-slate-100">
          <div className="px-6 py-4 flex flex-col gap-1">
            <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest pt-2 pb-1">
              Ai Services</div>
            {aiItems.map((item) => (
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
            <a
              href={SMARTSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-sm font-bold text-navy"
            >
              네이버 스마트스토어에서 제품 구매 ↗
            </a>
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
