export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-[11px] text-slate-700">
          © {new Date().getFullYear()} Thomas Delbrouck
        </span>
        <span className="font-mono text-[11px] text-slate-800">
          Next.js · Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
