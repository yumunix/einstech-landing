"use client";

import { useEffect, useState } from "react";

export default function UptimeCounter() {
  const [value, setValue] = useState("99.999%");

  useEffect(() => {
    const id = setInterval(() => {
      if (Math.random() > 0.9) {
        setValue("99.998%");
        setTimeout(() => setValue("99.999%"), 200);
      }
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return <span className="data-value">{value}</span>;
}
