# PROJECT MEMORIES — Critical Knowledge from the Build Thread

> Durable record of decisions, rules, and gotchas accumulated while building this
> site (captured 2026-11-21). Complements `AGENTS.md`. Read before editing.

## 1. Identity & naming

- **Owner:** William Su (EN) / 苏睿闻 (zh-CN) / 蘇睿聞 (zh-TW). Name lives in
  `src/data/site.ts` (`site.name`) and must stay trilingual everywhere.
- Nav brand renders the name in **楷书 (LXGW WenKai)**: SC subset on zh-CN,
  TC subset on zh-TW (`public/fonts/kai-name-{sc,tc}.woff2`, ~2 kB each,
  SIL OFL — subsetting allowed). English brand uses Fraunces serif.
- Seal-script (篆书) fonts were tried and **abandoned** after trials:
  - CNS11643 說文解字 (allowed subsetting, style rejected)
  - ChongXi 崇羲篆體 (style liked, but **CC-BY-ND forbids subsetting**; 21.8 MB as-is)
  - JF 中山王篆 (OFL, different school of script)
  - Do not revisit without a font that is both liked AND modifiable.

## 2. Translation workflow (standing rules)

1. **Edit English only by default.** Never auto-sync zh-CN/zh-TW.
2. **Translate only on explicit request.** New EN-only content intentionally
   renders blank in Chinese views until a translation pass.
3. **User-dictated SiCN mode:** the user often supplies exact Simplified wording
   and flags whether each change is syncable to TrCN. Sync only what is flagged.
4. **TrCN vocabulary = Hong Kong, not Taiwan** (網誌 not 部落格, 軟件 not 軟體,
   人工智能 not 人工智慧, 投資者 not 投資人, 私隱 not 隱私, 主頁, 返回頂部…)
   — **unless the user explicitly asks for character-for-character conversion**
   with no wording changes (happened for the About rewrite 2026-11-19).
5. **Real-estate broker = 代理 in BOTH variants, never 经纪人/經紀人**
   (standing rule; note the About paragraph currently keeps the user's dictated
   經紀人 — user's own text overrides).
6. CJK typography rules: no synthetic italic for Chinese accents (color only);
  punctuation-adjacent `T.astro` segments must stay on one line (markup
   newlines inject stray spaces in Chinese); use 、/。/以及, never spaced commas.

## 3. Content conventions

- List separators in facts-style entries: middle dot `·` (never commas/backticks).
- Home sections: `01 About` (bio + facts + Hobbies subsec) → `02 Experience`
  (Tech + Others subsecs, serif ~22px labels, no count badge) → `03 Writings`.
- Experience rows: role `· Company` + upright company notes（脸书/微软/惠普）
  via `companyNote`; tag ovals stay English in all languages; logos (Meta/
  Microsoft/HP) on the right column (top-right pinned on mobile).
- Page title/meta (same in all languages): home `William Su | 苏睿闻 | 蘇睿聞`;
  blog `The Little Blog | 小小网志 | 小小網誌`. Meta description is a per-page
  `Base` prop defaulting to the home string.
- Blogs will be **Chinese-only** content per the Writings blurb; blog page is an
  intentional empty state ("No entries yet…", 尚未提笔……).
- LinkedIn footer pill is **hidden on zh-CN** (`hideOn: 'zh-CN'` on the social
  entry) — mainland has no LinkedIn. Get-in-touch pill removed (no email on site).
- Footer GitHub → github.com/minuswhale; LinkedIn →
  linkedin.com/in/william-su-204b4a135.

## 4. Fonts & styling facts

- Big Chinese statements (hero h1, About h3, footer CTA, blog h1) use
  **Noto Sans SC/TC** (`@fontsource-variable/noto-sans-{sc,tc}`), upright accents.
- English display stays Fraunces (serif) + Inter (sans) + JetBrains Mono (meta).
- Nav banner was deliberately enlarged (~66px bar, ~21px name, 38px icon buttons).
- `--measure` is a fixed `54rem` (NOT `ch` units — different font sizes caused a
  14px header/body misalignment on the blog).
- Regenerate name-font subsets: `node scripts/subset-font.mjs <src.ttf> <chars> <out.woff2>`.

## 5. Hosting & deployment

- **Live at https://williamsu.hk** via Tencent EdgeOne Pages, region
  "Outside Chinese mainland", connected to GitHub `minuswhale/personal-website`
  (main). Every push to `main` auto-deploys (~1–2 min). `.hk` TLD ⇒ **no ICP
  possible**, outside-mainland region is permanent.
- Build: `npm run build` → `dist/`; EdgeOne env var `NODE_VERSION=22` is set.
- Domain DNS on **Alibaba Cloud** (williamsu.hk bought there). `www` subdomain
  is NOT configured (intentionally unconfigured so far).
- **`edgeone.json` (repo root) carries per-route rewrites** that fix the edge's
  trailing-slash/directory-index 404s. **Every new blog post needs 2 new rules**
  (`/blog/<slug>` and `/blog/<slug>/` → `/blog/<slug>/index.html`).
- Push **only when the user asks** (their standing rule).

## 6. Toolchain (this PC)

- Node is NOT system-installed. Portable Node v22.23.5 at
  `A:\Coding\tools\node22\node-v22.23.5-win-x64\` — prepend to PATH in every
  shell: `export PATH="/a/Coding/tools/node22/node-v22.23.5-win-x64:$PATH"`.
- Git at `B:/Gitpourri/Git/Git` with wincred credential helper (PAT stored in
  Windows Credential Manager); `gh` CLI absent; pushes work non-interactively.
- Dev server: `npx astro dev --host 0.0.0.0 --port 4321`. Binds `localhost`
  (IPv6-capable); `127.0.0.1` also works. **Mobile preview via LAN — the PC's
  IP changes between networks** (was 10.0.0.140, later 192.168.86.39; check
  `ipconfig` when mobile access breaks).

## 7. Known gotchas

- **Stale-module watcher (recurring!):** Astro dev sometimes serves old
  components/CSS after edits. Fix: kill node, delete `node_modules/.vite` +
  `.astro`, restart. If a change "didn't apply", suspect this first.
- The ZCode in-app browser's webview **suppresses smooth scrolling** — the nav
  click handler falls back to `instant` scroll after 350ms if the page didn't
  move. Real browsers are unaffected.
- Dev server dies across long gaps/sleeps — restart via background task
  (`run_in_background`), not `&` inside a foreground call.
- Three placeholder posts still exist in `src/content/blog/` (unlisted anywhere;
  delete when real Chinese posts arrive). Their `edgeone.json` rules remain.
- Background `git pull` with rebase config fails when the tree is dirty —
  `git fetch` + `git rev-list --left-right --count main...origin/main` is the
  safe pre-sync check (0 0 = in sync).

## 8. Status snapshot (2026-11-21)

- `main` @ `d87700e`, tree clean, live site deploying it.
- Everything trilingual and in sync; blog empty state; no pending translations.
