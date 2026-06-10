import { projects } from "@/data/content";

const statusStyles: Record<string, string> = {
  Shipped: "text-emerald-400 bg-emerald-400/8 border-emerald-400/20",
  Live:    "text-cyan-400 bg-cyan-400/8 border-cyan-400/20",
  Completed: "text-blue-400 bg-blue-400/8 border-blue-400/20",
};

const accentStyles: Record<string, string> = {
  violet:  "bg-violet-500/40",
  blue:    "bg-blue-500/40",
  cyan:    "bg-cyan-500/40",
  emerald: "bg-emerald-500/40",
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionLabel index="01" text="Selected Work" />
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
          Things I&apos;ve Built
        </h2>
        <p className="text-slate-500 text-sm mb-14">
          A mix of coursework and personal experiments — each one taught me something new.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="glass glass-hover rounded-2xl p-6 group flex flex-col relative overflow-hidden"
            >
              {/* Category-coloured left accent strip */}
              <div
                className={`absolute left-0 top-6 bottom-6 w-[2px] rounded-full ${accentStyles[project.accent] ?? "bg-violet-500/40"}`}
              />

              <div className="flex items-start justify-between mb-5">
                <span className="font-mono text-[10px] tracking-widest text-slate-600 uppercase pl-3">
                  {project.category}
                </span>
                <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${statusStyles[project.status] ?? "text-slate-400 bg-slate-400/8 border-slate-400/20"}`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-base font-semibold text-slate-100 mb-3 pl-3 group-hover:text-violet-300 transition-colors duration-200">
                {project.name}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5 pl-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pl-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-slate-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
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
