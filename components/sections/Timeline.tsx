import { timeline } from "@/data/content";

const typeStyles = {
  education: {
    dot:      "bg-blue-400",
    ring:     "ring-2 ring-blue-400/30",
    glow:     "0 0 12px 3px rgba(96,165,250,0.45)",
    badge:    "text-blue-400 border-blue-400/30 bg-blue-400/8",
    year:     "text-blue-400/70",
    border:   "border-l-2 border-blue-500/30",
    label:    "Education",
  },
  project: {
    dot:      "bg-violet-400",
    ring:     "ring-2 ring-violet-400/30",
    glow:     "0 0 12px 3px rgba(167,139,250,0.45)",
    badge:    "text-violet-400 border-violet-400/30 bg-violet-400/8",
    year:     "text-violet-400/70",
    border:   "border-l-2 border-violet-500/30",
    label:    "Projects",
  },
  milestone: {
    dot:      "bg-cyan-400",
    ring:     "ring-2 ring-cyan-400/30",
    glow:     "0 0 12px 3px rgba(34,211,238,0.45)",
    badge:    "text-cyan-400 border-cyan-400/30 bg-cyan-400/8",
    year:     "text-cyan-400/70",
    border:   "border-l-2 border-cyan-500/30",
    label:    "Milestone",
  },
  upcoming: {
    dot:      "bg-slate-600",
    ring:     "ring-2 ring-slate-600/30",
    glow:     "0 0 8px 2px rgba(100,116,139,0.3)",
    badge:    "text-slate-500 border-slate-600/30 bg-slate-600/8",
    year:     "text-slate-600",
    border:   "border-l-2 border-slate-600/20",
    label:    "Upcoming",
  },
} as const;

export default function Timeline() {
  return (
    <section id="timeline" className="py-28 relative">
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionLabel />
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
          How I Got Here
        </h2>
        <p className="text-slate-500 text-sm mb-14">
          The steps that shaped who I am as a developer.
        </p>

        <div className="relative max-w-xl">
          {/* Connector line */}
          <div className="absolute left-[9px] top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/30 via-violet-500/20 via-cyan-500/15 to-transparent" />

          <div className="space-y-5">
            {timeline.map((entry, i) => {
              const s = typeStyles[entry.type];
              return (
                <div key={i} className="relative flex gap-7">
                  {/* Dot with glow */}
                  <div
                    className={`relative z-10 mt-[21px] flex-shrink-0 w-[19px] h-[19px] rounded-full ${s.dot} ${s.ring}`}
                    style={{ boxShadow: s.glow }}
                  />

                  {/* Card */}
                  <div className={`flex-1 glass glass-hover rounded-2xl px-5 py-4 ${s.border}`}>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className={`font-mono text-base font-bold ${s.year}`}>
                        {entry.year}
                      </span>
                      <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${s.badge}`}>
                        {s.label}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-200 mb-1.5">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                </div>
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
      <span className="font-mono text-[10px] text-blue-400">▸</span>
      <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase">
        03 · My Path
      </span>
    </div>
  );
}
