"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      setPct((window.scrollY / (h.scrollHeight - h.clientHeight)) * 100);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-500"
        style={{ width: `${pct}%`, transition: "width 0.08s linear" }}
      />
    </div>
  );
}
