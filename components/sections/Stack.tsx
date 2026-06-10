import { stackCategories } from "@/data/content";

export default function Stack() {
  return (
    <section id="stack" className="py-28 relative">
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionLabel index="02" text="My Toolkit" />
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
          What I Work With
        </h2>
        <p className="text-slate-500 text-sm mb-14">
          The tools I reach for when building software — and still growing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stackCategories.map((cat) => (
            <div key={cat.label} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1 h-4 rounded-full bg-gradient-to-b from-violet-500/60 to-indigo-500/30" />
                <span className="font-mono text-[10px] tracking-[0.18em] text-slate-600 uppercase">
                  {cat.label}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-lg glass glass-hover text-slate-400 cursor-default"
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
