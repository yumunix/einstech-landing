"use client";

import { useEffect, useState } from "react";

const formatNumber = (n) =>
  Math.floor(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export default function LossCounter({ start = 2_800_000 }) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => v + Math.random() * 40_000 + 10_000);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{formatNumber(value)}</span>;
}
