"use client";

import { useState } from "react";
import { personal } from "@/data/content";
import AnimateIn from "@/components/ui/AnimateIn";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(personal.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-16 md:py-28 relative">
      <div className="relative max-w-6xl mx-auto px-6">
        <AnimateIn className="max-w-lg">
          <SectionLabel />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Let&apos;s Connnect
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-10">
            Currently looking for an internship or junior role where I can do
            real work — data engineering, ML systems, developer tooling, or
            full-stack. If you&apos;re hiring or know someone who is, let&apos;s talk.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Email — opens mail client */}
            <div className="inline-flex items-stretch rounded-xl overflow-hidden border border-violet-500/25 bg-violet-600/10">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-3 px-5 py-3.5 text-violet-700 dark:text-violet-300 font-mono text-xs hover:bg-violet-600/10 transition-all duration-200 flex-1 min-w-0"
              >
                <MailIcon />
                <span className="truncate">{personal.email}</span>
              </a>
              <button
                onClick={handleEmailClick}
                aria-label="Copy email"
                className={`px-3.5 border-l border-violet-500/25 transition-all duration-200 shrink-0 ${
                  copied
                    ? "text-emerald-500 bg-emerald-500/10"
                    : "text-violet-500 hover:bg-violet-600/15 hover:text-violet-600 dark:hover:text-violet-300"
                }`}
              >
                {copied ? <CheckIcon /> : <ClipboardIcon />}
              </button>
            </div>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl glass glass-hover text-slate-700 dark:text-slate-400 font-mono text-xs"
            >
              <GitHubIcon />
              GitHub ↗
            </a>
          </div>

          {copied && (
            <p className="mt-4 font-mono text-[11px] text-emerald-500">
              Copied to clipboard!
            </p>
          )}
        </AnimateIn>
      </div>
    </section>
  );
}

function ClipboardIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
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

function CheckIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function SectionLabel({ index = "05", text = "Say Hello" }: { index?: string; text?: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className="font-mono text-[10px] text-violet-500">▸</span>
      <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 dark:text-slate-500 uppercase">
        {index} · {text}
      </span>
    </div>
  );
}
