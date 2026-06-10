import { stackCategories } from "@/data/content";

const colorMap: Record<string, { bar: string; label: string; pill: string }> = {
  violet:  {
    bar:   "from-violet-500/60 to-violet-700/20",
    label: "text-violet-400/70",
    pill:  "hover:border-violet-400/25 hover:text-violet-300",
  },
  indigo:  {
    bar:   "from-indigo-500/60 to-indigo-700/20",
    label: "text-indigo-400/70",
    pill:  "hover:border-indigo-400/25 hover:text-indigo-300",
  },
  blue:    {
    bar:   "from-blue-500/60 to-blue-700/20",
    label: "text-blue-400/70",
    pill:  "hover:border-blue-400/25 hover:text-blue-300",
  },
  cyan:    {
    bar:   "from-cyan-500/60 to-cyan-700/20",
    label: "text-cyan-400/70",
    pill:  "hover:border-cyan-400/25 hover:text-cyan-300",
  },
  emerald: {
    bar:   "from-emerald-500/60 to-emerald-700/20",
    label: "text-emerald-400/70",
    pill:  "hover:border-emerald-400/25 hover:text-emerald-300",
  },
};

export default function Stack() {
  return (
    <section id="stack" className="py-28 relative">
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionLabel />
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
          What I Work With
        </h2>
        <p className="text-slate-500 text-sm mb-14">
          The tools I reach for when building software — and still growing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stackCategories.map((cat) => {
            const c = colorMap[cat.color] ?? colorMap.violet;
            return (
              <div key={cat.label} className="glass rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <span className={`w-1 h-4 rounded-full bg-gradient-to-b ${c.bar}`} />
                  <span className={`font-mono text-[10px] tracking-[0.18em] uppercase ${c.label}`}>
                    {cat.label}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className={`text-xs px-3 py-1.5 rounded-lg glass text-slate-400 border-white/[0.07] cursor-default transition-all duration-200 ${c.pill}`}
                    >
                      {item}
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
      <span className="font-mono text-[10px] text-cyan-400">▸</span>
      <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase">
        02 · My Toolkit
      </span>
    </div>
  );
}
