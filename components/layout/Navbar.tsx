"use client";

import { useState, useEffect } from "react";
import { personal } from "@/data/content";
import ThemeToggle from "@/components/ui/ThemeToggle";
import ScrollProgress from "@/components/ui/ScrollProgress";

const links = [
  { label: "Now",     href: "#activity",  section: "activity" },
  { label: "Work",    href: "#projects",  section: "projects" },
  { label: "Stack",   href: "#stack",     section: "stack" },
  { label: "Path",    href: "#timeline",  section: "timeline" },
  { label: "Contact", href: "#contact",   section: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -80% 0px", threshold: 0 }
    );
    links.forEach(({ section }) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-[#030307]/80 backdrop-blur-2xl border-b border-black/[0.06] dark:border-white/[0.07] py-3"
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

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative pb-1 font-mono text-xs tracking-wide transition-colors duration-200 ${
                  activeSection === l.section
                    ? "text-violet-600 dark:text-violet-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400"
                }`}
              >
                {l.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-500 transition-all duration-300 ${
                  activeSection === l.section ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`} />
              </a>
            ))}
            <ThemeToggle />
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-4 py-2 rounded-lg border border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-400 hover:bg-violet-500/20 hover:border-violet-500/40 transition-all duration-200"
            >
              GitHub ↗
            </a>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`block h-px bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block h-px bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-white/92 dark:bg-[#030307]/92 backdrop-blur-2xl border-t border-black/[0.06] dark:border-white/[0.06] px-6 py-5 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`font-mono text-xs transition-colors ${
                  activeSection === l.section
                    ? "text-violet-600 dark:text-violet-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-violet-700 dark:text-violet-400"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </header>

      {/* Gradient fade below navbar */}
      <div
        className="fixed left-0 right-0 pointer-events-none"
        style={{
          top: "56px",
          height: "64px",
          zIndex: 49,
          background: `linear-gradient(to bottom, rgba(var(--page-bg-rgb),0.9), transparent)`,
        }}
      />
    </>
  );
}
