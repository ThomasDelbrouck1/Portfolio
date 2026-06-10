import { projects } from "@/data/content";
import AnimateTiltCard from "@/components/ui/AnimateTiltCard";
import AnimateIn from "@/components/ui/AnimateIn";

const statusStyles: Record<string, string> = {
  Production: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/8 border-emerald-500/20",
  Shipped:    "text-emerald-600 dark:text-emerald-400 bg-emerald-500/8 border-emerald-500/20",
  Live:       "text-cyan-600 dark:text-cyan-400 bg-cyan-500/8 border-cyan-500/20",
  Completed:  "text-blue-600 dark:text-blue-400 bg-blue-500/8 border-blue-500/20",
};

const accentMap: Record<string, { strip: string; label: string; tag: string; tint: string }> = {
  violet:  {
    strip: "bg-violet-500/70",
    label: "text-violet-600 dark:text-violet-400",
    tag:   "bg-violet-500/[0.12] border-violet-500/35 text-violet-700 dark:text-violet-300",
    tint:  "bg-gradient-to-br from-violet-500/[0.07] via-transparent to-transparent",
  },
  indigo:  {
    strip: "bg-indigo-500/70",
    label: "text-indigo-600 dark:text-indigo-400",
    tag:   "bg-indigo-500/[0.12] border-indigo-500/35 text-indigo-700 dark:text-indigo-300",
    tint:  "bg-gradient-to-br from-indigo-500/[0.07] via-transparent to-transparent",
  },
  blue:    {
    strip: "bg-blue-500/70",
    label: "text-blue-600 dark:text-blue-400",
    tag:   "bg-blue-500/[0.12] border-blue-500/35 text-blue-700 dark:text-blue-300",
    tint:  "bg-gradient-to-br from-blue-500/[0.07] via-transparent to-transparent",
  },
  cyan:    {
    strip: "bg-cyan-500/70",
    label: "text-cyan-600 dark:text-cyan-400",
    tag:   "bg-cyan-500/[0.12] border-cyan-500/35 text-cyan-700 dark:text-cyan-300",
    tint:  "bg-gradient-to-br from-cyan-500/[0.07] via-transparent to-transparent",
  },
  emerald: {
    strip: "bg-emerald-500/70",
    label: "text-emerald-600 dark:text-emerald-400",
    tag:   "bg-emerald-500/[0.12] border-emerald-500/35 text-emerald-700 dark:text-emerald-300",
    tint:  "bg-gradient-to-br from-emerald-500/[0.07] via-transparent to-transparent",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="relative max-w-6xl mx-auto px-6">

        <AnimateIn>
          <SectionLabel />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            Things I&apos;ve Built
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-14">
            A mix of coursework and personal experiments — each one taught me something new.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const a = accentMap[project.accent] ?? accentMap.violet;
            const isFeatured = i === 0;
            return (
              <AnimateTiltCard
                key={project.name}
                delay={i * 80}
                className={`glass glass-hover rounded-2xl p-6 group flex flex-col relative overflow-hidden ${
                  isFeatured ? "animate-glow-ring" : ""
                }`}
              >
                {/* Subtle color tint */}
                <div className={`absolute inset-0 pointer-events-none rounded-2xl ${a.tint}`} />

                {/* Left accent strip */}
                <div className={`absolute left-0 top-5 bottom-5 w-[3px] rounded-full ${a.strip}`} />

                {/* Header */}
                <div className="flex items-start justify-between mb-4 pl-4">
                  <span className={`font-mono text-[10px] tracking-widest uppercase ${a.label}`}>
                    {project.category}
                  </span>
                  <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${statusStyles[project.status] ?? "text-slate-500 dark:text-slate-400 bg-slate-400/8 border-slate-400/20"}`}>
                    {project.status.toUpperCase()}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-3 pl-4 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors duration-200">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 pl-4">
                  {project.description}
                </p>

                {/* Tech tags + repo link */}
                <div className="flex items-end justify-between pl-4 mt-auto gap-3">
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`font-mono text-[10px] px-2 py-1 rounded-md border ${a.tag}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} repository`}
                      className="shrink-0 p-1.5 rounded-lg text-slate-400 dark:text-slate-600 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-500/8 transition-all duration-200"
                    >
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </AnimateTiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function SectionLabel() {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className="font-mono text-[10px] text-violet-500">▸</span>
      <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 dark:text-slate-500 uppercase">
        02 · Selected Work
      </span>
    </div>
  );
}
