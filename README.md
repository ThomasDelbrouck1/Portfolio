# thomasdelbrouck.dev

Personal portfolio — built with Next.js, TypeScript, and Tailwind CSS.

[![Live](https://img.shields.io/badge/live-thomasdelbrouck.dev-7c3aed?style=flat-square)](https://thomasdelbrouck.dev)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![Deployed on Vercel](https://img.shields.io/badge/deployed-Vercel-000?style=flat-square&logo=vercel)](https://vercel.com)

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + glassmorphism |
| Deployment | Vercel (auto-deploy on push) |

## Sections

- **Hero** — intro, live status, now-building pills, animated stats
- **Activity** — recent GitHub-style activity feed
- **Projects** — cards with tech tags, status badges, and GitHub links
- **Stack** — interactive tech grid — click any pill to see how I use it
- **Timeline** — journey from 2022 to expected 2027 graduation
- **Contact** — direct email + copy button

## Running locally

**Standard setup**

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

**Dev Container (recommended if you use VS Code)**

1. Make sure you have [Docker](https://www.docker.com) and the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension installed
2. Open the repo in VS Code
3. Click **Reopen in Container** when prompted — it sets up the full environment automatically

**Production build**

```bash
npm run build
npm start
```

## Deployment

Connect the GitHub repo to [Vercel](https://vercel.com) — it auto-detects Next.js and deploys on every push to `main`. No config needed.

## Customisation

All personal content lives in [`data/content.ts`](data/content.ts):

- `personal` — name, tagline, email, GitHub, status
- `nowBuilding` — the "now building" pills on the hero
- `projects` — project cards (name, description, tech, status, repo)
- `stackItems` — tech stack pills and their categories
- `timeline` — journey entries
- `stackDetails` — the detail panel that appears when you click a stack pill (in [`components/sections/Stack.tsx`](components/sections/Stack.tsx))

No component code needs to change for content updates.
