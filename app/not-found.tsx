import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-dot-grid" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)" }}
      />

      {/* Atom — 3 rings crossing at 60° intervals */}
      <div className="relative w-40 h-40 mb-12" style={{ perspective: "350px" }}>
        {/* Nucleus */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-3.5 h-3.5 rounded-full bg-violet-400 shadow-lg shadow-violet-500/70" />
        </div>
        {/* Ring 1 — 0° */}
        <div className="absolute inset-0" style={{ transform: "rotateZ(0deg) rotateX(70deg)" }}>
          <div className="absolute inset-0 rounded-full animate-spin" style={{ animationDuration: "4s", boxShadow: "0 0 0 1.5px rgba(167,139,250,0.5), 0 0 10px rgba(167,139,250,0.15)" }}>
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-violet-400" style={{ boxShadow: "0 0 8px 2px rgba(167,139,250,0.6)" }} />
          </div>
        </div>
        {/* Ring 2 — 60° */}
        <div className="absolute inset-0" style={{ transform: "rotateZ(60deg) rotateX(70deg)" }}>
          <div className="absolute inset-0 rounded-full animate-spin" style={{ animationDuration: "6s", animationDirection: "reverse", boxShadow: "0 0 0 1.5px rgba(34,211,238,0.5), 0 0 10px rgba(34,211,238,0.15)" }}>
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400" style={{ boxShadow: "0 0 8px 2px rgba(34,211,238,0.6)" }} />
          </div>
        </div>
        {/* Ring 3 — -60° */}
        <div className="absolute inset-0" style={{ transform: "rotateZ(-60deg) rotateX(70deg)" }}>
          <div className="absolute inset-0 rounded-full animate-spin" style={{ animationDuration: "9s", boxShadow: "0 0 0 1.5px rgba(99,102,241,0.5), 0 0 10px rgba(99,102,241,0.15)" }}>
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-400" style={{ boxShadow: "0 0 8px 2px rgba(99,102,241,0.6)" }} />
          </div>
        </div>
      </div>

      <h1 className="text-[7rem] md:text-[9rem] font-bold leading-none shimmer-text mb-5">404</h1>

      <p className="text-slate-700 dark:text-slate-300 font-semibold text-lg mb-2">
        Page not found
      </p>
      <p className="font-mono text-xs text-slate-400 dark:text-slate-500 mb-10 text-center max-w-xs leading-relaxed">
        This route collapsed into an undefined state —<br />
        even Schrödinger couldn&apos;t find it.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-violet-600/10 border border-violet-500/25 text-violet-700 dark:text-violet-300 font-mono text-sm hover:bg-violet-600/20 hover:border-violet-500/45 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-200"
      >
        ← Back to safety
      </Link>
    </div>
  );
}
