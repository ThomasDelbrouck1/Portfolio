"use client";

import { useState, useMemo } from "react";
import { stackItems } from "@/data/content";
import AnimateIn from "@/components/ui/AnimateIn";

type Category = "Language" | "Framework" | "Database" | "DevOps" | "Tooling" | "ML / AI";

const catStyle: Record<Category, {
  bar: string; label: string; headerGrad: string; headerBorder: string;
  countBadge: string; pill: string; active: string; connected: string;
  detailBorder: string; badge: string;
}> = {
  "Language": {
    bar:          "from-violet-500 to-violet-400",
    label:        "text-violet-500 dark:text-violet-400",
    headerGrad:   "from-violet-500/[0.14] to-transparent",
    headerBorder: "border-violet-500/20 dark:border-violet-500/20",
    countBadge:   "bg-violet-500/20 text-violet-600 dark:text-violet-400",
    pill:         "bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 hover:bg-violet-500/[0.16] hover:text-violet-700 dark:hover:text-violet-300",
    active:       "bg-violet-500/40 dark:text-white text-violet-900 shadow-sm shadow-violet-500/30 ring-1 ring-violet-400/50",
    connected:    "bg-violet-500/20 text-violet-700 dark:text-violet-200",
    detailBorder: "border-t-[3px] border-violet-500/70",
    badge:        "bg-violet-500/25 border border-violet-400/60 text-violet-700 dark:text-violet-300",
  },
  "Framework": {
    bar:          "from-teal-500 to-teal-400",
    label:        "text-teal-500 dark:text-teal-400",
    headerGrad:   "from-teal-500/[0.14] to-transparent",
    headerBorder: "border-teal-500/20 dark:border-teal-500/20",
    countBadge:   "bg-teal-500/20 text-teal-600 dark:text-teal-400",
    pill:         "bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 hover:bg-teal-500/[0.16] hover:text-teal-700 dark:hover:text-teal-300",
    active:       "bg-teal-500/40 dark:text-white text-teal-900 shadow-sm shadow-teal-500/30 ring-1 ring-teal-400/50",
    connected:    "bg-teal-500/20 text-teal-700 dark:text-teal-200",
    detailBorder: "border-t-[3px] border-teal-500/70",
    badge:        "bg-teal-500/25 border border-teal-400/60 text-teal-700 dark:text-teal-300",
  },
  "Database": {
    bar:          "from-blue-500 to-blue-400",
    label:        "text-blue-500 dark:text-blue-400",
    headerGrad:   "from-blue-500/[0.14] to-transparent",
    headerBorder: "border-blue-500/20 dark:border-blue-500/20",
    countBadge:   "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    pill:         "bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 hover:bg-blue-500/[0.16] hover:text-blue-700 dark:hover:text-blue-300",
    active:       "bg-blue-500/40 dark:text-white text-blue-900 shadow-sm shadow-blue-500/30 ring-1 ring-blue-400/50",
    connected:    "bg-blue-500/20 text-blue-700 dark:text-blue-200",
    detailBorder: "border-t-[3px] border-blue-500/70",
    badge:        "bg-blue-500/25 border border-blue-400/60 text-blue-700 dark:text-blue-300",
  },
  "DevOps": {
    bar:          "from-cyan-500 to-cyan-400",
    label:        "text-cyan-500 dark:text-cyan-400",
    headerGrad:   "from-cyan-500/[0.14] to-transparent",
    headerBorder: "border-cyan-500/20 dark:border-cyan-500/20",
    countBadge:   "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
    pill:         "bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 hover:bg-cyan-500/[0.16] hover:text-cyan-700 dark:hover:text-cyan-300",
    active:       "bg-cyan-500/40 dark:text-white text-cyan-900 shadow-sm shadow-cyan-500/30 ring-1 ring-cyan-400/50",
    connected:    "bg-cyan-500/20 text-cyan-700 dark:text-cyan-200",
    detailBorder: "border-t-[3px] border-cyan-500/70",
    badge:        "bg-cyan-500/25 border border-cyan-400/60 text-cyan-700 dark:text-cyan-300",
  },
  "Tooling": {
    bar:          "from-emerald-500 to-emerald-400",
    label:        "text-emerald-500 dark:text-emerald-400",
    headerGrad:   "from-emerald-500/[0.14] to-transparent",
    headerBorder: "border-emerald-500/20 dark:border-emerald-500/20",
    countBadge:   "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
    pill:         "bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 hover:bg-emerald-500/[0.16] hover:text-emerald-700 dark:hover:text-emerald-300",
    active:       "bg-emerald-500/40 dark:text-white text-emerald-900 shadow-sm shadow-emerald-500/30 ring-1 ring-emerald-400/50",
    connected:    "bg-emerald-500/20 text-emerald-700 dark:text-emerald-200",
    detailBorder: "border-t-[3px] border-emerald-500/70",
    badge:        "bg-emerald-500/25 border border-emerald-400/60 text-emerald-700 dark:text-emerald-300",
  },
  "ML / AI": {
    bar:          "from-fuchsia-500 to-fuchsia-400",
    label:        "text-fuchsia-500 dark:text-fuchsia-400",
    headerGrad:   "from-fuchsia-500/[0.14] to-transparent",
    headerBorder: "border-fuchsia-500/20 dark:border-fuchsia-500/20",
    countBadge:   "bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400",
    pill:         "bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 hover:bg-fuchsia-500/[0.16] hover:text-fuchsia-700 dark:hover:text-fuchsia-300",
    active:       "bg-fuchsia-500/40 dark:text-white text-fuchsia-900 shadow-sm shadow-fuchsia-500/30 ring-1 ring-fuchsia-400/50",
    connected:    "bg-fuchsia-500/20 text-fuchsia-700 dark:text-fuchsia-200",
    detailBorder: "border-t-[3px] border-fuchsia-500/70",
    badge:        "bg-fuchsia-500/25 border border-fuchsia-400/60 text-fuchsia-700 dark:text-fuchsia-300",
  },
} as const;

const stackDetails: Record<string, { description: string; connects: string[] }> = {
  "TypeScript":     { description: "My primary language for everything web. Strict types, interfaces, and generics — I reach for it over plain JS on every project.", connects: ["Next.js", "React", "Express", "Node.js", "REST APIs"] },
  "Python":         { description: "Used for the IBM quantum ML case and now my main focus ahead of BASF — data processing, ML experiments, and scripting.", connects: ["Qiskit", "Quantum ML", "Testing", "CI/CD"] },
  "JavaScript":     { description: "The runtime everything lives on. I know its quirks well and write TypeScript over it now, but JS underpins every frontend and Node project.", connects: ["TypeScript", "Node.js", "Express", "React"] },
  "C#":             { description: "Used for object-oriented design — SchoolAdmin was built in C# with inheritance, interfaces, and a full MSTest test suite.", connects: [".NET", "Testing"] },
  "SQL":            { description: "Comfortable designing schemas, writing joins, and thinking in relational terms. Used with MySQL and as the query layer behind Supabase.", connects: ["MySQL", "Supabase"] },
  "Next.js":        { description: "My framework of choice for full-stack apps — App Router, server components, API routes, and edge-ready from day one.", connects: ["TypeScript", "React", "Supabase", "REST APIs"] },
  "React":          { description: "The component model I think in for UIs. Used inside Next.js — hooks, state, and composition are second nature.", connects: ["Next.js", "TypeScript", "JavaScript"] },
  "Express":        { description: "Built REST APIs and full web apps with Express — middleware, routing, session handling, and auth flows.", connects: ["Node.js", "TypeScript", "REST APIs", "Auth / JWT", "MongoDB"] },
  "Node.js":        { description: "The runtime behind all my backend work. Comfortable with the async model and the npm ecosystem.", connects: ["Express", "TypeScript", "JavaScript", "REST APIs"] },
  ".NET":           { description: "The build system and test runner for C# projects — class libraries, solution structure, and MSTest integration.", connects: ["C#", "Testing"] },
  "MongoDB":        { description: "Used for Pokémon Viewer and Beerster — modelling documents, querying with filters, and connecting via Mongoose.", connects: ["Express", "Node.js", "Docker"] },
  "MySQL":          { description: "Relational database used across school projects — schema design, normalisation, and SQL queries.", connects: ["SQL", "Docker"] },
  "Supabase":       { description: "Backend for the Internship Blog — auth, real-time rows, and the PostgreSQL layer all via the JS client.", connects: ["Next.js", "TypeScript", "SQL", "Auth / JWT"] },
  "Docker":         { description: "Containerise every project. Compose for multi-service stacks, used end-to-end in the Cloud Deployment Project.", connects: ["GitHub Actions", "CI/CD", "Linux", "Hetzner VPS"] },
  "GitHub Actions": { description: "Automated build, test, and deploy pipelines. Wired up to Hetzner VPS for zero-downtime deploys.", connects: ["Docker", "CI/CD", "Git", "Hetzner VPS"] },
  "Linux":          { description: "Comfortable on the command line — managing servers, writing shell scripts, and working with processes.", connects: ["Docker", "Hetzner VPS", "Git"] },
  "Hetzner VPS":    { description: "Provisioned and ran a production server here — DNS, Docker, Traefik reverse proxy with HTTPS, and automated deploys.", connects: ["Docker", "GitHub Actions", "Linux", "CI/CD"] },
  "Git":            { description: "Daily driver for version control. Feature branches, clean commit history, and pull requests via GitHub.", connects: ["GitHub Actions", "CI/CD"] },
  "REST APIs":      { description: "Designed and built RESTful APIs in Express and Next.js — proper status codes, JSON contracts, and auth middleware.", connects: ["Express", "Node.js", "Next.js", "Auth / JWT"] },
  "CI/CD":          { description: "Automated pipelines with GitHub Actions — lint, test, build, and deploy on every push to main.", connects: ["GitHub Actions", "Docker", "Git", "Testing"] },
  "Auth / JWT":     { description: "Implemented full auth flows — JWT tokens, bcrypt password hashing, session handling, and protected routes.", connects: ["Express", "REST APIs", "Supabase"] },
  "Testing":        { description: "Written unit and integration tests in MSTest (C#) and Jest (JS/TS). Testing is part of my workflow, not an afterthought.", connects: [".NET", "CI/CD", "JavaScript", "TypeScript"] },
  "Qiskit":         { description: "IBM's quantum SDK. Used to build circuits and quantum neural networks as part of the IBM quantum ML case.", connects: ["Python", "Quantum ML"] },
  "Quantum ML":     { description: "Explored quantum neural networks and hybrid quantum-classical models on real datasets — a deep rabbit hole that genuinely surprised me.", connects: ["Qiskit", "Python"] },
};

export default function Stack() {
  const [selected, setSelected] = useState<string | null>(null);

  const detail       = selected ? stackDetails[selected] ?? null : null;
  const selectedItem = selected ? stackItems.find(i => i.name === selected) ?? null : null;
  const connectedSet = useMemo(() => new Set(detail?.connects ?? []), [detail]);
  const categories   = useMemo(() => [...new Set(stackItems.map(i => i.category))] as Category[], []);

  const toggle = (name: string) => setSelected(prev => prev === name ? null : name);

  return (
    <section id="stack" className="py-28 relative">
      <div className="relative max-w-6xl mx-auto px-6">

        <AnimateIn>
          <SectionLabel />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            What I Work With
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-14 flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-400" />
            </span>
            What I actually build with. Click anything to see how I use it.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => {
            const c        = catStyle[cat];
            const items    = stackItems.filter(item => item.category === cat);
            const hasFocus = items.some(item => item.name === selected || connectedSet.has(item.name));
            const dimCard  = !!selected && !hasFocus;

            return (
              <AnimateIn key={cat} delay={i * 70}>
                <div className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                  dimCard
                    ? "opacity-25 scale-[0.98]"
                    : "hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/25"
                }`}>

                  {/* Coloured header */}
                  <div className={`px-5 py-3.5 bg-gradient-to-r ${c.headerGrad} border-b ${c.headerBorder}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-[3px] h-4 rounded-full bg-gradient-to-b ${c.bar}`} />
                        <span className={`font-mono text-[10px] tracking-[0.2em] uppercase font-semibold ${c.label}`}>
                          {cat}
                        </span>
                      </div>
                      <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full ${c.countBadge}`}>
                        {items.length}
                      </span>
                    </div>
                  </div>

                  {/* Pills */}
                  <div className="px-5 py-4 flex flex-wrap gap-2">
                    {items.map(item => {
                      const isSel  = selected === item.name;
                      const isConn = connectedSet.has(item.name);
                      const isDim  = !!selected && !isSel && !isConn;

                      return (
                        <button
                          key={item.name}
                          onClick={() => toggle(item.name)}
                          className={`text-sm px-3 py-1.5 rounded-lg font-medium transition-all duration-150
                            hover:scale-[1.06] active:scale-95
                            ${isSel  ? `${c.active} animate-pill-selected` :
                              isConn ? c.connected :
                              isDim  ? `opacity-20 pointer-events-none ${c.pill}` :
                                       `${c.pill} cursor-pointer`
                            }`}
                        >
                          {item.name}
                        </button>
                      );
                    })}
                  </div>

                </div>
              </AnimateIn>
            );
          })}
        </div>

        {/* Detail panel */}
        {selected && detail && selectedItem && (
          <div key={selected} className="mt-5" style={{ animation: "fade-up 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards" }}>
            <div className={`glass rounded-2xl overflow-hidden ${catStyle[selectedItem.category as Category].detailBorder}`}>

              <div className={`px-6 py-4 bg-gradient-to-r ${catStyle[selectedItem.category as Category].headerGrad} border-b ${catStyle[selectedItem.category as Category].headerBorder}`}>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{selected}</h3>
                    <span className={`font-mono text-[10px] px-2 py-0.5 rounded-md border ${catStyle[selectedItem.category as Category].badge}`}>
                      {selectedItem.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    aria-label="Close"
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-white/[0.08] transition-all duration-150 text-lg leading-none"
                  >
                    ×
                  </button>
                </div>
              </div>

              <div className="px-6 py-4">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {detail.description}
                </p>

                {detail.connects.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest mr-1">
                      Works with
                    </span>
                    {detail.connects.map((name, chipIdx) => {
                      const connItem = stackItems.find(i => i.name === name);
                      if (!connItem) return null;
                      const cc = catStyle[connItem.category as Category];
                      return (
                        <button
                          key={name}
                          onClick={() => toggle(name)}
                          className={`font-mono text-[11px] px-2.5 py-1 rounded-lg border hover:scale-[1.06] active:scale-95 transition-transform ${cc.badge}`}
                          style={{ animation: `chip-pop 0.3s ease-out ${chipIdx * 55}ms both` }}
                        >
                          {name}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

function SectionLabel() {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className="font-mono text-[10px] text-cyan-500">▸</span>
      <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 dark:text-slate-500 uppercase">
        03 · My Toolkit
      </span>
    </div>
  );
}
