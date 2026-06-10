"use client";

import { activityEvents, statusItems } from "@/data/activity";
import type { ActivityEvent } from "@/data/activity";
import { formatRelativeTime } from "@/lib/utils";
import AnimateIn from "@/components/ui/AnimateIn";

const levelConfig: Record<ActivityEvent["level"], { label: string; classes: string }> = {
  success: {
    label:   "OK",
    classes: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 border border-emerald-500/35",
  },
  info: {
    label:   "INFO",
    classes: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/15 border border-cyan-500/35",
  },
  debug: {
    label:   "DEBUG",
    classes: "text-slate-500 dark:text-slate-400 bg-slate-400/12 border border-slate-400/28",
  },
  warn: {
    label:   "WARN",
    classes: "text-amber-600 dark:text-amber-400 bg-amber-500/15 border border-amber-500/35",
  },
};

function FeedEntry({ event, index }: { event: ActivityEvent; index: number }) {
  const lvl = levelConfig[event.level];
  return (
    <div
      className="flex items-start gap-3 py-2.5 border-b border-slate-100 dark:border-white/[0.05] last:border-0 group hover:bg-slate-50 dark:hover:bg-white/[0.02] px-3 -mx-3 rounded-lg transition-colors duration-150 animate-fade-up"
      style={{ animationDelay: `${index * 60}ms`, opacity: 0 }}
    >
      <span className={`shrink-0 font-mono text-[10px] px-1.5 py-0.5 rounded mt-0.5 ${lvl.classes}`}>
        {lvl.label}
      </span>
      <span className="flex-1 text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors leading-snug">
        {event.message}
      </span>
      <span className="shrink-0 font-mono text-[11px] text-slate-400 dark:text-slate-600 whitespace-nowrap">
        {formatRelativeTime(event.timestamp)}
      </span>
    </div>
  );
}

export default function Activity() {
  return (
    <section id="activity" className="py-16 md:py-28 relative">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left — header + status panel */}
          <div className="lg:col-span-1">
            <AnimateIn>
              <SectionLabel />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                What I&apos;m Working On
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                Preparing for my internship at BASF in 2026 — sharpening Python,
                data skills, and ML concepts while finishing my degree.
              </p>
            </AnimateIn>

            <AnimateIn delay={120}>
              <div className="glass rounded-2xl p-4">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-white/[0.06]">
                  <span className="font-mono text-[10px] tracking-widest text-slate-500 dark:text-slate-500 uppercase">
                    Current status
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                    </span>
                    <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">ACTIVE</span>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {statusItems.map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="font-mono text-[11px] text-slate-500 dark:text-slate-500">{label}</span>
                      <span className="font-mono text-[11px] text-slate-700 dark:text-slate-400">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Right — log feed */}
          <AnimateIn className="lg:col-span-2" delay={80}>
            <div className="glass rounded-2xl p-5 relative overflow-hidden">
              {/* Terminal scan line */}
              <div
                className="absolute inset-x-0 h-px pointer-events-none z-10"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(52,211,153,0.5) 30%, rgba(52,211,153,0.5) 70%, transparent 100%)",
                  animation: "scan-down 5s ease-in-out infinite",
                }}
              />

              {/* Feed header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-white/[0.06]">
                <span className="font-mono text-[10px] tracking-widest text-slate-500 dark:text-slate-500 uppercase">
                  Log stream
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">LIVE</span>
                </div>
              </div>

              {/* Entries */}
              <div>
                {activityEvents.map((event, i) => (
                  <FeedEntry key={event.id} event={event} index={i} />
                ))}
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}

function SectionLabel() {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className="font-mono text-[10px] text-emerald-500">▸</span>
      <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 dark:text-slate-500 uppercase">
        01 · Now
      </span>
    </div>
  );
}
