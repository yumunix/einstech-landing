"use client";

import { useEffect, useState } from "react";

const SLIDES = [
  {
    id: "acronis-einsguard",
    badge: "EVENT ~ 2027.06.30",
    title: "Acronis 유상 구매 시 EINSGUARD AI 1년 무상",
    desc: "Workstation은 구매 수량만큼 · Server는 1대당 5 User · 설치비·기술지원료 별도",
    href: "/events/acronis-einsguard",
    cta: "이벤트 자세히 보기",
    background: "linear-gradient(90deg,#047857,#0f766e)",
    accent: "#047857",
  },
  {
    id: "einswall",
    badge: "EINSWALL 방화벽",
    title: "업무망·서버망 경계 통합 방화벽 EINSWALL",
    desc: "일시불 1,220,000원부터 · 40% 선납 구독형 월 24,000원부터 (VAT 별도)",
    href: "/einswall",
    cta: "가격·구성 보기",
    background: "linear-gradient(90deg,#1e3a8a,#1d4ed8)",
    accent: "#1e3a8a",
  },
];

const INTERVAL_MS = 6000;

export default function EventBannerRotator() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused]);

  const slide = SLIDES[index];

  return (
    <section
      className="relative overflow-hidden pb-8 pt-24 lg:pt-28"
      style={{ background: slide.background, color: "#ffffff", transition: "background .6s ease" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="이벤트·프로모션 배너"
    >
      <div
        key={slide.id}
        className="relative mx-auto flex w-full max-w-page flex-col items-center justify-between gap-5 px-6 lg:flex-row lg:px-12"
        style={{ animation: "einsBannerFade .5s ease" }}
        aria-live="polite"
      >
        <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:items-center lg:text-left">
          <span
            className="inline-flex items-center rounded-full px-4 py-1.5 font-mono text-[11px] font-black tracking-widest"
            style={{ background: "#ffffff", color: slide.accent }}
          >
            {slide.badge}
          </span>
          <div>
            <p className="text-lg font-black lg:text-xl" style={{ color: "#ffffff" }}>{slide.title}</p>
            <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,.88)" }}>{slide.desc}</p>
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center gap-4">
          <a
            href={slide.href}
            className="rounded-xl px-6 py-3 text-sm font-black transition-all hover:shadow-[0_10px_30px_rgba(0,0,0,.2)]"
            style={{ background: "#ffffff", color: slide.accent }}
          >
            {slide.cta}
          </a>
          <div className="flex items-center gap-2" role="tablist" aria-label="배너 선택">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`${i + 1}번째 배너: ${s.title}`}
                onClick={() => setIndex(i)}
                className="rounded-full transition-all"
                style={{ width: i === index ? 22 : 10, height: 10, minHeight: 0, minWidth: 0, padding: 0, border: 0, display: "block", background: i === index ? "#ffffff" : "rgba(255,255,255,.45)" }}
              />
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes einsBannerFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}
