# Divyansh Rawal — Portfolio

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion,
Lucide React, and shadcn/ui-style components.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/            # App Router: layout, global styles, page
components/     # Section components (hero, skills, projects, ...)
components/ui/  # shadcn/ui-style primitives (button, card, badge)
data/resume.ts  # All your content in one place — edit this to update the site
lib/utils.ts    # cn() class-merging helper used by shadcn components
```

To change any text (name, contact info, projects, experience), edit
`data/resume.ts` — nothing else needs to change.

## Add more shadcn/ui components

This project already includes a `components.json`, so you can pull in any
official shadcn component:

```bash
npx shadcn@latest add dialog
npx shadcn@latest add tabs
```

## Deploy to Vercel

**Option A — via GitHub (recommended)**
1. Push this project to a new GitHub repo.
2. Go to https://vercel.com/new, import the repo.
3. Vercel auto-detects Next.js — click **Deploy**. No config needed.

**Option B — via CLI**
```bash
npm install -g vercel
vercel
```
Follow the prompts; running `vercel --prod` deploys to production.

Every push to your GitHub repo's main branch will auto-redeploy.
