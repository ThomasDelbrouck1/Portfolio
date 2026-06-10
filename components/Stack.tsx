import { stackCategories } from "@/data/content";

export default function Stack() {
  return (
    <section id="stack" className="py-28 relative">
      {/* Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-800/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="section-label">sys/stack</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Technical Stack
          </h2>
          <p className="text-slate-500 mt-2 text-sm">
            Languages, frameworks, tools, and platforms I work with.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stackCategories.map((cat) => (
            <div key={cat.label} className="glass rounded-2xl p-6">
              {/* Category label */}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1 h-4 rounded-full bg-gradient-to-b from-violet-500 to-indigo-500" />
                <span className="font-mono text-[10px] tracking-widest text-violet-400/70 uppercase">
                  {cat.label}
                </span>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-lg glass glass-hover text-slate-300 cursor-default"
                  >
                    {item}
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
