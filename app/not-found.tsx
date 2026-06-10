import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-dot-grid" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)" }}
      />

      {/* Atom-like orbit — 3D orbital planes */}
      <div className="relative w-36 h-36 mb-12" style={{ perspective: "400px" }}>
        {/* Nucleus */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-4 h-4 rounded-full bg-violet-400 shadow-lg shadow-violet-500/60" />
        </div>
        {/* Plane 1 */}
        <div style={{ position: "absolute", inset: 0, transform: "rotateX(72deg)" }}>
          <div className="absolute inset-0 rounded-full border border-violet-400/35 animate-spin" style={{ animationDuration: "4s" }}>
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-violet-400 shadow shadow-violet-400/70" />
          </div>
        </div>
        {/* Plane 2 */}
        <div style={{ position: "absolute", inset: "10px", transform: "rotateX(72deg) rotateZ(60deg)" }}>
          <div className="absolute inset-0 rounded-full border border-cyan-400/35 animate-spin" style={{ animationDuration: "6s", animationDirection: "reverse" }}>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow shadow-cyan-400/70" />
          </div>
        </div>
        {/* Plane 3 */}
        <div style={{ position: "absolute", inset: "20px", transform: "rotateX(72deg) rotateZ(120deg)" }}>
          <div className="absolute inset-0 rounded-full border border-indigo-400/35 animate-spin" style={{ animationDuration: "9s" }}>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-400 shadow shadow-indigo-400/70" />
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
