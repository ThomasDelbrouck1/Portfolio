"use client";

import { useState, useEffect } from "react";
import { personal } from "@/data/content";

const links = [
  { label: "Work",    href: "#projects" },
  { label: "Stack",   href: "#stack" },
  { label: "Path",    href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#030307]/80 backdrop-blur-2xl border-b border-white/[0.07] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#home"
            className="font-mono text-sm font-semibold tracking-widest gradient-text"
          >
            td/
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-xs tracking-wide text-slate-500 hover:text-violet-400 transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-4 py-2 rounded-lg border border-violet-500/25 bg-violet-500/10 text-violet-400 hover:bg-violet-500/20 hover:border-violet-500/40 transition-all duration-200"
            >
              GitHub ↗
            </a>
          </div>

          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-px bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </nav>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-[#030307]/90 backdrop-blur-2xl border-t border-white/[0.06] px-6 py-5 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-xs text-slate-400 hover:text-violet-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-violet-400"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </header>

      {/* Gradient fade — blurs out content approaching the navbar from below */}
      <div
        className="fixed left-0 right-0 pointer-events-none"
        style={{
          top: "56px",
          height: "64px",
          zIndex: 49,
          background: "linear-gradient(to bottom, rgba(3,3,7,0.85), transparent)",
        }}
      />
    </>
  );
}
