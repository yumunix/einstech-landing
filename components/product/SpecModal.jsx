"use client";

import { useEffect, useState } from "react";

export default function SpecModal({ model, sections, officialUrl }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!sections || sections.length === 0) {
    return (
      <a
        href={officialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-center text-xs font-bold text-navy hover:border-navy"
      >
        TP-Link 공식 사양 →
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-center text-xs font-bold text-navy hover:border-navy"
      >
        상세 사양 보기
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-7 py-6">
              <div>
                <div className="font-mono text-[10px] font-bold tracking-widest text-emerald">
                  PRODUCT SPECIFICATIONS
                </div>
                <h3 className="mt-1 font-display text-2xl font-black text-slate-900">{model}</h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="닫기"
                className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-navy hover:text-navy"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto px-7 py-6">
              <div className="space-y-7">
                {sections.map((section) => (
                  <div key={section.title}>
                    <h4 className="font-mono text-[10px] font-bold tracking-widest text-navy">
                      {section.title}
                    </h4>
                    <div className="mt-3 overflow-hidden rounded-xl border border-slate-200">
                      <table className="w-full border-collapse text-left text-[13px]">
                        <tbody>
                          {section.rows.map(([label, value], i) => (
                            <tr key={label + i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                              <th className="w-[38%] whitespace-pre-line border-b border-slate-100 px-4 py-2.5 align-top font-bold text-slate-700 last:border-b-0">
                                {label}
                              </th>
                              <td className="whitespace-pre-line border-b border-slate-100 px-4 py-2.5 align-top text-slate-600 last:border-b-0">
                                {value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-slate-100 px-7 py-5">
              <p className="text-[11px] text-slate-400">TP-Link 공식 제품 사양 기준입니다.</p>
              <a
                href={officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-navy hover:text-emerald"
              >
                TP-Link 공식 홈페이지에서 보기 ↗
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
