"use client";

import { useEffect } from "react";

export default function BodyClass({ className = "einstech-white-body" }) {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.classList.add(className);
    body.classList.add(className);
    return () => {
      html.classList.remove(className);
      body.classList.remove(className);
    };
  }, [className]);

  return null;
}
