"use client";

import { useEffect, useRef, useState } from "react";
import { timeline } from "@/data/content";
import AnimateIn from "@/components/ui/AnimateIn";

const typeStyles = {
  education: {
    dot:      "bg-blue-400",
    ring:     "ring-2 ring-blue-400/60",
    glow:     "0 0 16px 5px rgba(96,165,250,0.70)",
    badge:    "bg-blue-500/30 border-blue-400/70 text-blue-200 dark:text-blue-200",
    year:     "text-blue-500 dark:text-blue-300",
    border:   "border-l-[3px] border-blue-500",
    label:    "study",
    tagChip:  "bg-blue-500/25 border-blue-400/60 text-blue-700 dark:text-blue-300",
    cardTint: "bg-gradient-to-r from-blue-500/[0.08] to-transparent",
  },
  project: {
    dot:      "bg-violet-400",
    ring:     "ring-2 ring-violet-400/60",
    glow:     "0 0 16px 5px rgba(167,139,250,0.70)",
    badge:    "bg-violet-500/30 border-violet-400/70 text-violet-200 dark:text-violet-200",
    year:     "text-violet-500 dark:text-violet-300",
    border:   "border-l-[3px] border-violet-500",
    label:    "project",
    tagChip:  "bg-violet-500/25 border-violet-400/60 text-violet-700 dark:text-violet-300",
    cardTint: "bg-gradient-to-r from-violet-500/[0.08] to-transparent",
  },
  milestone: {
    dot:      "bg-cyan-400",
    ring:     "ring-2 ring-cyan-400/60",
    glow:     "0 0 16px 5px rgba(34,211,238,0.70)",
    badge:    "bg-cyan-500/30 border-cyan-400/70 text-cyan-200 dark:text-cyan-200",
    year:     "text-cyan-500 dark:text-cyan-300",
    border:   "border-l-[3px] border-cyan-500",
    label:    "now",
    tagChip:  "bg-cyan-500/25 border-cyan-400/60 text-cyan-700 dark:text-cyan-300",
    cardTint: "bg-gradient-to-r from-cyan-500/[0.08] to-transparent",
  },
  upcoming: {
    dot:      "bg-amber-400",
    ring:     "ring-2 ring-amber-400/60",
    glow:     "0 0 16px 5px rgba(251,191,36,0.60)",
    badge:    "bg-amber-500/30 border-amber-400/70 text-amber-200 dark:text-amber-200",
    year:     "text-amber-500 dark:text-amber-300",
    border:   "border-l-[3px] border-amber-500",
    label:    "upcoming",
    tagChip:  "bg-amber-500/25 border-amber-400/60 text-amber-700 dark:text-amber-300",
    cardTint: "bg-gradient-to-r from-amber-500/[0.07] to-transparent",
  },
} as const;

export default function Timeline() {
  const lineRef   = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setLineVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-28 relative">
      <div className="relative max-w-6xl mx-auto px-6">

        <AnimateIn>
          <SectionLabel />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            The Story So Far
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-14">
            The steps that shaped who I am as a developer.
          </p>
        </AnimateIn>

        <div ref={sectionRef} className="relative max-w-xl">
          {/* Connector line — draws down when section enters view */}
          <div
            ref={lineRef}
            className="absolute left-[9px] top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/40 via-cyan-500/30 to-amber-500/20"
            style={{
              transformOrigin: "top",
              transform: lineVisible ? "scaleY(1)" : "scaleY(0)",
              transition: lineVisible ? "transform 1.6s cubic-bezier(0.23,1,0.32,1) 0.2s" : "none",
            }}
          />

          <div className="space-y-5">
            {timeline.map((entry, i) => {
              const s = typeStyles[entry.type];
              return (
                <AnimateIn key={i} delay={i * 120 + 200}>
                  <div className="relative flex gap-7">
                    <div
                      className={`relative z-10 mt-[21px] flex-shrink-0 w-[19px] h-[19px] rounded-full ${s.dot} ${s.ring}`}
                      style={{ boxShadow: s.glow }}
                    />
                    <div className={`flex-1 glass glass-hover rounded-2xl px-5 py-4 ${s.border} relative overflow-hidden`}>
                      <div className={`absolute inset-0 pointer-events-none rounded-2xl ${s.cardTint}`} />
                      <div className="relative flex flex-wrap items-center gap-2.5 mb-2">
                        <span className={`font-mono text-base font-bold ${s.year}`}>{entry.year}</span>
                        <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${s.badge}`}>{s.label}</span>
                      </div>
                      <h3 className="relative text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5">{entry.title}</h3>
                      <p className="relative text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{entry.description}</p>
                      {"tags" in entry && entry.tags && (
                        <div className="relative flex flex-wrap gap-1.5">
                          {(entry.tags as readonly string[]).map((tag) => (
                            <span
                              key={tag}
                              className={`font-mono text-[10px] px-2 py-0.5 rounded-md border ${s.tagChip}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel() {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className="font-mono text-[10px] text-blue-500">▸</span>
      <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 dark:text-slate-500 uppercase">
        04 · My Path
      </span>
    </div>
  );
}
