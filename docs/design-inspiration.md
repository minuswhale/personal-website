# Design Inspiration — Personal Website & Blog

> Researched 2026-11-14 from [Awwwards personal blog search](https://www.awwwards.com/inspiration_search/personal%20blog/) and [brianmwilcox.com](https://www.brianmwilcox.com/).
> Project decisions: **Portfolio + blog balanced**, **Astro** stack, visual direction TBD (iterate during build).

## 1. Brian Wilcox — brianmwilcox.com (user's reference)

**Style: dark editorial, typography-first**

- **Palette**: warm charcoal background (~#1a1613, not pure black) + single burnt-orange accent (~#e07a3f) used sparingly — one italic word in the hero headline, mono eyebrow labels, active tab indicator, list bullets.
- **Typography trio**:
  - Serif display for headlines (high-contrast editorial face), italic emphasis on one key word
  - Sans-serif for body copy
  - Monospace for eyebrows/tags/metadata (`AI SECURITY · ANTI-FRAUD · FINANCE` kicker in letterspaced caps)
- **Hero**: small mono kicker → huge serif headline → short paragraph → pill CTA row (LinkedIn / GitHub / llms.txt)
- **Signature element**: scrolling "terminal ticker" marquee of code commands below the hero (two rows, opposite directions)
- **Expertise section**: tabs-on-left / preview-on-right, styled as a **code file viewer** (header bar with `PREVIEW` label + filename like `adversarial_ai_security.md`); active card gets orange left border
- **Surfaces**: flat panels, hairline borders instead of shadows; faint generative node-and-curve line art behind hero; subtle grain
- **Nav**: About / Expertise / Experience / Patents / Guides / Projects + dark-mode toggle
- Sections follow: hero → ticker → expertise (tabs+preview) → experience → patents → guides → projects → contact CTA

## 2. The Boring Blog — theboringblog.ai (Awwwards HM, Oct 2026)

**Style: warm literary minimal, illustrated**

- **Palette**: cream/off-white (~#f2efe9), muted sage/olive greens, single terracotta/brick-red accent (tags, "Latest" dot, Subscribe button, index numbers)
- **Hero**: large serif title with typing-caret animation; gouache/watercolor illustration of a boy reading in a meadow, vignette edges that bleed into the background (no frame); "Drag to turn" interactive turntable
- **Posts page (the model for a blog index)**:
  - Flat editorial list, **no cards** — generous whitespace, dotted hairline separators
  - Serif titles + one-line muted excerpt + meta row: mono index numbers (`008 · November 6, 2026 · 7 min`)
  - Year groups in left margin column (`2026` / `7 entries`) acting as sticky table-of-contents
  - Small red `• Latest` marker on newest post
  - Eyebrow in mono caps: `EVERYTHING, OLDEST LAST`
- **Extras**: sound toggle, theme toggle, "Back to the field" button, subscribe CTA in nav
- Tags in the accent color; posts read as "issues" of a zine

## 3. Pedro Belleza — pedrobelleza.com (Awwwards HM, Jul 2026)

**Style: retro terminal / BBS concept, fully committed**

- Phosphor green on near-black, bitmap monospace font with CRT glow/scanlines
- Copywriting as personality: `PEDRO'S BBS // MODE 1 OF 1`, `1200 BAUD · 8-N-1 · ANSI`, `DIAL: 1-300-BELLEZA`, `▶ CONNECT` button, `[ PRESS TO DIAL IN ]`
- Sound toggle; awards badges integrated into layout
- Lesson: **one strong metaphor executed in every detail** beats ten half-applied ideas

## 4. Rozalia Boma — rozaliabomawrites.com (Awwwards HM, Sep 2026)

**Style: Y2K dreamcore maximalism, personality-forward** (romance author)

- **Palette**: psychedelic liquid-marble swirl of lavender/violet/pink/magenta + chrome; candy-pink and mustard-yellow accents
- **Hero**: giant 3D inflated "balloon chrome" lettering of her name — sculptural, **draggable** letters with a handwritten "Drag and drop" annotation
- **Identity stickers**: scattered glossy 3D icons tied to who she is — Polish + Nigerian flags embedded in the lettering, cassette, flip phone, hearts, books
- **Easter eggs**: Win95-style "Music Player" widget (track "Crush"), diagonal caution-tape banner, sound toggle, dotted scroll pagination
- **Preloader**: purple screen with 3D pearlescent star + progress bar ("ROZALIA BOMA WRITES IS LOADING")
- **Lesson**: chaotic hero + **clean, restrained utility UI** (cookie modal is plain and tidy) lets personality shine without hurting usability; identity markers (flags, objects) make decoration *meaningful*, not random

## 5. Ray Corral — raycorral.com (Awwwards HM, Oct 2026)

**Style: monochrome editorial luxury** (mosaic artist)

- **Palette**: paper-white + black, single red dot as the only color
- **Hero**: massive condensed sans name bleeding off both viewport edges — **the name IS the hero graphic**; italic script overlay ("The art of creating a legacy") slashes diagonally across it
- **Layering**: B&W portrait merged with a black ink-splash/mosaic shape that interlocks with the letterforms
- **Composition**: everything in one viewport — nav top, name center, portrait low-center, bio pushed to outer edges, corner metadata (`©2026` / `Miami FL`) framing the page
- **CTA**: single pill "BEGIN THE JOURNEY ↗" leading into the site
- **Lessons**: oversized cropped type = instant identity; two typefaces at maximum contrast (rigid sans + fluid script); monochrome discipline with one tiny accent beats color noise

## 6. Nahiyan Khan — nahiyan.codes (Awwwards HM, Oct 2026)

**Style: terminal minimalism meets editorial intimacy** (developer at Block)

- **Palette**: near-black + grain texture, off-white text, essentially monochrome with one blue link underline
- **Typography**: heavy lowercase sans name as the only hero; small monospace body ("terminal poem" feel); everything lowercase
- **Structure**: left-aligned single column hugging the left margin, right two-thirds empty; **hairline rules** between paragraphs instead of cards/boxes; sticky footer nav (`root / work / contact`)
- **Signature pattern**: a **`tldr` section** as the intro — conversational lowercase prose (synthwave, climbing, human-AI interfaces) that respects the reader's time
- **Details**: blinking terminal caret, noise grain, no images/icons/cards at all; personality lives entirely in the *writing*
- **Lesson**: monospace + lowercase + dark = instant developer identity; extreme negative space makes content deliberate

## 7. Mohamed Shehata — mohamedshehata.net (Awwwards HM, May 2026)

**Style: dark dramatic portfolio with glowing accents** (Head of UX)

- **Palette**: near-black with glowing red/orange; dramatic **flip to cream/off-white** in the About section (dark→light section rhythm)
- **Nav**: **floating pill nav** (dark translucent, rounded) — name left, links center, orange pill CTA "LET'S TALK" right
- **Hero texture**: 3D isometric render of glowing pegs on a dark grid
- **Signature pattern**: **numbered index list** — two columns of skills separated by hairline dividers, each row = bold label + right-aligned muted number (`Multi-Country Content Governance 09`) — reads like a catalog/archive
- **Micro-typography**: code-comment style section eyebrows (`// ABOUT`) in mono caps
- **About section**: B&W portrait left + oversized grotesque headline right ("23 years building UX organizations that outperform.") with mixed line lengths for rhythm
- **Lesson**: numbered rows with hairlines work for skills, projects, AND blog indexes; section-level color flips create pacing

## 8. Tejas Kumar — tej.as/story (Awwwards)

**Style: dark cinematic memoir** ("The thread.")

- **Palette**: warm charcoal + film grain; single coral-red accent used only as **periods** (wordmark `TEJAS KUMAR.`, headline `The thread.`) and active nav state
- **One metaphor everywhere**: title "The thread." ↔ a glowing golden thread literally woven through topographic contour-line background art ↔ narrative copy
- **Hero**: meta labels at top corners like book edge-markings (`1992 TO 2026` / `39 CHAPTERS`); enormous ultra-bold headline lower-left; raw, vulnerable tagline as the narrative hook
- **Typography**: massive tight-tracked sans headline vs. quiet light-gray body — extreme scale contrast
- **Nav**: uppercase letterspaced (SPEAKING / STORY / PODCAST / BLOG / MORE) with active state via brightness
- **Details**: vertical tick marks on right edge (timeline/ruler), grain texture, dark mode toggle
- **Lesson**: a personal site can read like a **book or film opening**; narrative metadata (year ranges, chapter counts) adds depth cheaply; one accent color used only for punctuation is unforgettable

## 9. Awwwards "personal blog" trend summary

- Serif typography revival for personal branding
- Warm cream minimalism OR deep warm-dark themes (both beat default white)
- Anti-design/brutalist collages, Y2K nostalgia, hand-drawn illustration
- Lowercase / punctuation wordmarks, circular logo badges, massive whitespace
- Personality via copywriting + micro-interactions, not heavy UI chrome

## Cross-cutting principles (apply regardless of direction chosen)

1. **One accent color**, used in exactly 3–4 recurring places — or as sparingly as punctuation (Tejas's red periods)
2. **Type trio**: serif display / sans body / mono metadata — each with exactly one job; OR maximum-contrast duo (condensed sans + script; heavy lowercase sans + mono)
3. **Blog as publication, not card grid**: index numbers, year groups, hairline rules, flat list
4. **One signature element** carries identity — illustration hero, terminal ticker, draggable chrome letters, golden thread, contour map, ink splash
5. Generous whitespace; flat surfaces; hierarchy via typography, not shadows
6. **Numbered/hairline rows** are the winning list pattern (skills, projects, posts all work this way — Shehata, Boring Blog, Nahiyan)
7. Micro-details signal craft: typing caret, sound toggle, drag interactions, grain texture, dark mode
8. **Personality lives in writing and meaningful symbols**, not decoration — flags, objects, and vulnerable copy say more than ornament
9. Let the **name be the hero** (oversized, cropped, or treated as sculpture)
10. Section-level **rhythm changes** (dark→light flips, chapter metadata) keep long pages cinematic
11. Keep utility UI clean and conventional (nav, modals, forms) so the expressive elements shine
