# Thomas Delbrouck — Portfolio

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a dark glassmorphism design with purple/indigo/cyan accents.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (glassmorphism design)
- **Deployment:** Vercel

## Sections

- **Hero** — Introduction, status, and contact CTAs
- **Projects** — 5 shipped projects with tech tags and status badges
- **Stack** — Categorised tech stack (Languages, Frameworks, Databases, DevOps, Tools)
- **Timeline** — Engineering journey from 2023 to expected 2026 graduation
- **Contact** — Email and GitHub links

## Getting Started

### Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Using Dev Container

Open the repo in VS Code and click **Reopen in Container** when prompted (requires Docker and the Dev Containers extension).

### Build

```bash
npm run build
npm start
```

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com). Connect the GitHub repo and it will auto-detect Next.js.

## Customisation

All personal content lives in [`data/content.ts`](data/content.ts) — update projects, stack, timeline, and contact info there without touching any component code.
