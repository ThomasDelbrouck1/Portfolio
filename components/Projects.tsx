import { projects } from "@/data/content";

const statusStyles: Record<string, string> = {
  Shipped:
    "text-emerald-400 bg-emerald-400/8 border-emerald-400/20",
  Live: "text-cyan-400 bg-cyan-400/8 border-cyan-400/20",
  Completed: "text-blue-400 bg-blue-400/8 border-blue-400/20",
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      {/* Faint orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-700/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="section-label">sys/projects</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Shipped Projects
          </h2>
          <p className="text-slate-500 mt-2 text-sm">
            Things I&apos;ve built and learned from.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="glass glass-hover rounded-2xl p-6 group flex flex-col"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <span className="font-mono text-[10px] tracking-widest text-slate-600 uppercase">
                  {project.category}
                </span>
                <span
                  className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${
                    statusStyles[project.status] ??
                    "text-slate-400 bg-slate-400/8 border-slate-400/20"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-base font-semibold text-slate-100 mb-3 group-hover:text-violet-300 transition-colors duration-200">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2 py-1 rounded-md bg-violet-500/5 border border-violet-500/12 text-violet-400/60"
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
