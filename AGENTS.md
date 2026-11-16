# AGENTS.md — Personal website of William Su

Guidance for AI assistants (and humans) working on this repository.

## Project

Astro (v5) static site; production build outputs to `dist/`. Requires Node ≥ 18.17.1 (20.3+ or 22+ recommended).

- **Owner:** William Su / 苏睿闻 / 蘇睿聞 — the name must stay trilingual everywhere it appears.
- **Site languages:** trilingual — `en`, `zh-CN`, `zh-TW` (see `src/lib/i18n.ts`).
- **This GitHub repo is the single source of truth.** Edits happen here (web editor, browser VS Code via the `.` key, or a local clone); keep `main` buildable.

## Editing rules (important)

- Edit **English content only by default**. Never auto-sync or machine-translate `zh-CN` / `zh-TW` content.
- Translate into Chinese **only on explicit request**.
- Do not restructure the i18n setup or restyle the site unless explicitly asked.

## Where things live

- `src/data/site.ts` — site text and data (nav, hero, about, experience, projects, footer)
- `src/content/blog/` — blog posts (Markdown, English body)
- `src/components/` — UI components
- `src/layouts/Base.astro` — base layout; `src/pages/` — routes (`/`, `/blog/`, `/blog/[slug]`)
- `src/lib/i18n.ts` — language definitions and UI strings
- `src/styles/global.css` — global styling (dark editorial theme, light/dark support)

## Commands

```bash
npm install
npm run dev      # local dev server (localhost:4321)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deployment

- Host: Tencent EdgeOne Pages (setup pending) — build command `npm run build`, output directory `dist`, acceleration region "Outside Chinese mainland" (no ICP filing). Once connected, every push to `main` auto-deploys.
- Until EdgeOne is connected, pushes to `main` only update the repo — nothing is publicly served yet.
