import { timeline } from "@/data/content";

const typeStyles = {
  education: {
    dot: "bg-blue-400 shadow-blue-400/40",
    badge: "text-blue-400 border-blue-400/20 bg-blue-400/5",
    label: "Education",
  },
  project: {
    dot: "bg-violet-400 shadow-violet-400/40",
    badge: "text-violet-400 border-violet-400/20 bg-violet-400/5",
    label: "Projects",
  },
  milestone: {
    dot: "bg-cyan-400 shadow-cyan-400/40",
    badge: "text-cyan-400 border-cyan-400/20 bg-cyan-400/5",
    label: "Milestone",
  },
  upcoming: {
    dot: "bg-slate-600 shadow-slate-600/40",
    badge: "text-slate-500 border-slate-600/20 bg-slate-600/5",
    label: "Upcoming",
  },
} as const;

export default function Timeline() {
  return (
    <section id="timeline" className="py-28 relative">
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-indigo-800/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="section-label">sys/timeline</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Journey
          </h2>
          <p className="text-slate-500 mt-2 text-sm">
            My engineering path so far.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-2xl">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/30 via-white/[0.04] to-transparent" />

          <div className="space-y-6">
            {timeline.map((entry, i) => {
              const s = typeStyles[entry.type];
              return (
                <div key={i} className="relative flex gap-8">
                  {/* Dot */}
                  <div className="relative z-10 mt-5 flex-shrink-0">
                    <div
                      className={`w-[10px] h-[10px] rounded-full ${s.dot}`}
                      style={{ boxShadow: `0 0 10px 2px rgba(var(--shadow-color), 0.4)` }}
                    />
                  </div>

                  {/* Card */}
                  <div className="flex-1 glass glass-hover rounded-2xl px-6 py-5">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-lg font-bold text-slate-700">
                        {entry.year}
                      </span>
                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${s.badge}`}
                      >
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
