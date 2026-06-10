import { timeline } from "@/data/content";

const typeStyles = {
  education: {
    dot: "bg-blue-400",
    glow: "shadow-blue-400/50",
    badge: "text-blue-400 border-blue-400/20 bg-blue-400/5",
    label: "Education",
  },
  project: {
    dot: "bg-violet-400",
    glow: "shadow-violet-400/50",
    badge: "text-violet-400 border-violet-400/20 bg-violet-400/5",
    label: "Projects",
  },
  milestone: {
    dot: "bg-cyan-400",
    glow: "shadow-cyan-400/50",
    badge: "text-cyan-400 border-cyan-400/20 bg-cyan-400/5",
    label: "Milestone",
  },
  upcoming: {
    dot: "bg-slate-700",
    glow: "shadow-slate-700/50",
    badge: "text-slate-600 border-slate-700/20 bg-slate-700/5",
    label: "Upcoming",
  },
} as const;

export default function Timeline() {
  return (
    <section id="timeline" className="py-28 relative">
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionLabel index="03" text="My Path" />
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
          How I Got Here
        </h2>
        <p className="text-slate-500 text-sm mb-14">
          The steps that shaped who I am as a developer.
        </p>

        <div className="relative max-w-xl">
          {/* Line */}
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-violet-500/25 via-white/[0.03] to-transparent" />

          <div className="space-y-5">
            {timeline.map((entry, i) => {
              const s = typeStyles[entry.type];
              return (
                <div key={i} className="relative flex gap-7">
                  {/* Dot */}
                  <div className={`relative z-10 mt-[22px] flex-shrink-0 w-[15px] h-[15px] rounded-full ${s.dot} shadow-lg ${s.glow}`} />

                  {/* Card */}
                  <div className="flex-1 glass glass-hover rounded-2xl px-5 py-4">
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="font-mono text-base font-bold text-slate-700">
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

function SectionLabel({ index, text }: { index: string; text: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className="font-mono text-[10px] text-violet-500">▸</span>
      <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase">
        {index} · {text}
      </span>
    </div>
  );
}
