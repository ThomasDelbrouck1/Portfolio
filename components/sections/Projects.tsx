import { projects } from "@/data/content";

const statusStyles: Record<string, string> = {
  Shipped:   "text-emerald-400 bg-emerald-400/8 border-emerald-400/25",
  Live:      "text-cyan-400 bg-cyan-400/8 border-cyan-400/25",
  Completed: "text-blue-400 bg-blue-400/8 border-blue-400/25",
};

const accentMap: Record<string, { strip: string; label: string; tag: string }> = {
  violet:  {
    strip: "bg-violet-500/50",
    label: "text-violet-500/60",
    tag:   "bg-violet-500/6 border-violet-500/15 text-violet-400/55",
  },
  blue:    {
    strip: "bg-blue-500/50",
    label: "text-blue-500/60",
    tag:   "bg-blue-500/6 border-blue-500/15 text-blue-400/55",
  },
  cyan:    {
    strip: "bg-cyan-500/50",
    label: "text-cyan-500/60",
    tag:   "bg-cyan-500/6 border-cyan-500/15 text-cyan-400/55",
  },
  emerald: {
    strip: "bg-emerald-500/50",
    label: "text-emerald-500/60",
    tag:   "bg-emerald-500/6 border-emerald-500/15 text-emerald-400/55",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionLabel />
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
          Things I&apos;ve Built
        </h2>
        <p className="text-slate-500 text-sm mb-14">
          A mix of coursework and personal experiments — each one taught me something new.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => {
            const a = accentMap[project.accent] ?? accentMap.violet;
            return (
              <div
                key={project.name}
                className="glass glass-hover rounded-2xl p-6 group flex flex-col relative overflow-hidden"
              >
                {/* Left accent strip */}
                <div className={`absolute left-0 top-5 bottom-5 w-[3px] rounded-full ${a.strip}`} />

                <div className="flex items-start justify-between mb-4 pl-4">
                  <span className={`font-mono text-[10px] tracking-widest uppercase ${a.label}`}>
                    {project.category}
                  </span>
                  <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${statusStyles[project.status] ?? "text-slate-400 bg-slate-400/8 border-slate-400/20"}`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-slate-100 mb-3 pl-4 group-hover:text-violet-300 transition-colors duration-200">
                  {project.name}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5 pl-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pl-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`font-mono text-[10px] px-2 py-1 rounded-md border ${a.tag}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionLabel() {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className="font-mono text-[10px] text-violet-500">▸</span>
      <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase">
        01 · Selected Work
      </span>
    </div>
  );
}
