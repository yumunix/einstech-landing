"use client";

import { useEffect, useState } from "react";

const fmt = (n) =>
  Math.floor(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export default function LossCounter({ ratePerMin = 2_800_000 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const ratePerMs = ratePerMin / 60_000;
    let raf;
    const tick = () => {
      setValue((performance.now() - start) * ratePerMs);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ratePerMin]);

  return <span suppressHydrationWarning>₩{fmt(value)}</span>;
}
