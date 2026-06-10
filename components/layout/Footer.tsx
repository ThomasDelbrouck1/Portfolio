export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-[11px] text-slate-500 dark:text-slate-600">
          © {new Date().getFullYear()} Thomas Delbrouck
        </span>
        <span className="font-mono text-[11px] text-slate-400 dark:text-slate-600">
          Next.js · Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
