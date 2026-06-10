import { personal, nowBuilding } from "@/data/content";
import CountUp from "@/components/ui/CountUp";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dot-grid overlay */}
      <div className="absolute inset-0 pointer-events-none bg-dot-grid" />

      {/* Depth gradient into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--page-bg), transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 w-full">

        {/* Status pill — gently bobs */}
        <div className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-2 mb-10 animate-float">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
          <span className="font-mono text-[11px] text-slate-600 dark:text-slate-300">
            {personal.status}
          </span>
          <span className="text-slate-400 dark:text-slate-700 text-xs">·</span>
          <span className="font-mono text-[11px] text-slate-500 dark:text-slate-500">
            {personal.school} · {personal.location}
          </span>
        </div>

        {/* Name with shimmer gradient */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.04] tracking-tight mb-8">
          <span className="shimmer-text">{personal.name}</span>
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-12">
          {personal.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-violet-600/10 border border-violet-500/25 text-violet-700 dark:text-violet-300 font-mono text-sm hover:bg-violet-600/20 hover:border-violet-500/45 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-200"
          >
            <GitHubIcon />
            GitHub
            <span className="text-violet-500/60 text-xs">↗</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl glass glass-hover text-slate-700 dark:text-slate-300 font-mono text-sm"
          >
            <MailIcon />
            Say hello
          </a>
        </div>

        {/* Currently building */}
        <div className="mt-10 flex flex-wrap items-center gap-2.5">
          <span className="font-mono text-[10px] tracking-[0.18em] text-slate-400 dark:text-slate-600 uppercase">
            Now building
          </span>
          {nowBuilding.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono text-[11px] text-slate-600 dark:text-slate-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot shrink-0" />
              {item.label}
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-slate-400 dark:text-slate-500">{item.tech}</span>
            </span>
          ))}
        </div>

        {/* Animated stats */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-white/[0.06] flex flex-wrap gap-6 sm:gap-10">
          {[
            { to: 5,  suffix: "",   label: "projects shipped" },
            { to: 20, suffix: "+",  label: "technologies" },
            { to: 2,  suffix: "nd", label: "year of studies" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold gradient-text">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="font-mono text-[10px] text-slate-500 dark:text-slate-600 mt-1 tracking-widest uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
