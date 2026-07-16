---
name: elementor-global-templates
description: "Build the site-wide Miller First Aid Header and Footer as Elementor Pro Theme Builder templates (and set the global Montserrat/brand kit) so every page inherits them, replicating components/site-header.tsx and site-footer.tsx. Use when the user wants a global/site-wide header or footer, a Theme Builder template, or asks to make the nav/footer apply across all pages instead of per-page."
compatibility: claude-code-only
---

# Elementor global templates (Header / Footer / Kit) — Miller First Aid

Recreate the Next.js `components/site-header.tsx` and `components/site-footer.tsx` as
**Elementor Pro Theme Builder** documents displayed site-wide, so each page body contains only
its own content — matching the Next.js `app/layout.tsx`, where `<SiteHeader />` and
`<SiteFooter />` wrap every page (with the body offset by `pt-20` for the fixed header).

**The Next.js source is the single source of truth.** Build natively with Elementor containers,
native widgets, Global Styles and Theme Builder — reproduce the header/footer token-for-token,
pixel-for-pixel, across desktop/tablet/mobile. Avoid HTML widgets unless a behaviour has no
native equivalent, and keep the structure clean and editable by non-technical users.

Pairs with the `nextjs-to-elementor` skill (page bodies). Live target, credentials and the
`emcp-proxy.mjs` path are in `.mcp.json`
(`WP_URL=https://syn01ce.syd7.hostyourservices.net/~millerfi/`; Elementor 4.1.5 / Pro 4.1.0,
atomic). Production origin for logo/image sideloading: `https://www.millerfirstaid.com.au`.

## Sources of truth

| Template | Source | Data |
|----------|--------|------|
| Header | `components/site-header.tsx` | inline `courseLinks`, `industryLinks` (from `lib/industries.ts` → `/first-aid-training-for-<slug>`), `MillerLogo`, phone `1300 807 669` |
| Footer | `components/site-footer.tsx` | inline `courseLinks` (10), `navLinks` (Company), contact + social, `MillerLogo` |
| Logo | `components/miller-logo.tsx` | **inline SVG** wordmark "Miller First Aid", emblem `#DE3A3A`, wordmark `currentColor` (ink on white header, white on dark footer) |

Read the actual files — do not rely on memory.

## Global kit (do first)

Set brand tokens on the active Elementor kit so header/footer and every page inherit them:
- `elementor-mcp-update-global-colors`: **Primary → `#DE3A3A`** (red), **Secondary →
  `#151F2F`** (navy/ink), **Text → `#0A0A0B`** (ink), **Accent → `#71717A`** (muted); register
  `#FFFFFF`, `#ECECEE` (`--muted`), `#E4E4E7` (`--border`) as custom colors.
- `elementor-mcp-update-global-typography`: Primary / Secondary / Text / Accent font families
  all **Montserrat**; heading sizes/weights per the scale (h1 36/60, h2 30/48, h3 20/24, all
  weight 700, tracking-tight). See the `nextjs-to-elementor` skill's `references/design-tokens.md`.
- **Enqueue the Montserrat Google Font** on WordPress so nothing falls back to Hello theme's
  Roboto. Confirm the current kit with `get-global-settings` first (fresh installs are still
  the Elementor default `#6EC1E4` / Roboto — replace it).

## The logo

`MillerLogo` is an **inline SVG** (viewBox `0 0 226 60`): a red emblem (`#DE3A3A`) + the
wordmark "Miller First Aid" in `currentColor`. Reproduce it as an **uploaded SVG** via
`elementor-mcp-upload-svg-icon` / sideload, used in an image/SVG widget — one **ink/near-black**
version for the white header, one **white** version for the dark footer. Header logo height
`h-13` (**52px**) / `md:h-15` (**60px**), links to `/`.

## Header spec (from `site-header.tsx`)

- **Fixed** full-width bar, `position:fixed; top:0; z-index:50`, **white** background,
  `border-bottom: 1px #E4E4E7`, height **80px** (`h-20`). Inner nav uses `.site-container`
  (max **1400px**, gutters 16/24px), `flex items-center justify-between`.
- **Logo** left (link `/`).
- **Desktop nav (`lg` ≥1024px)**, right-aligned, all items Montserrat `font-semibold` (600),
  `text-base` (16px), `text-foreground/80`, pill hover (`rounded-full px-3 py-2`, hover
  `bg-muted` `#ECECEE` + `text-foreground`):
  1. **Courses** — trigger links to `/courses`; hover-opens a **dropdown** (`courseLinks`):
     CPR → `/courses/cpr`, First Aid → `/courses/first-aid`, First Aid for Education & Care →
     `/courses/first-aid-for-education-care`, Advanced First Aid → `/courses/advanced-first-aid`,
     Asthma & Anaphylaxis → `/courses/asthma-anaphylaxis`; divider; **View all courses** (red
     `text-primary`) → `/courses`.
  2. **Industries** — trigger links to `/industries`; dropdown (`industryLinks`, 11): Schools,
     Sports Clubs, Childcare Centres, Manufacturing, Aged Care, Healthcare, Hospitality,
     Government, Retail, Construction, Transport → each `/first-aid-training-for-<slug>`;
     divider; **View all industries** (red) → `/industries`.
  3. **About** → `/about` · **Blog** → `/blog` · **Resources** → `/resources` (plain pill links).
- **Right cluster:** phone **outline** button (`1300 807 669`, `tel:1300807669`) with a
  **black** border override + solid phone icon; then **Enquire Now** red **default (pill)**
  button → `/contact`.
- **Mobile (`< lg` 1024px):** hide desktop nav; show a phone-icon link + an animated **burger**
  (three bars morph to an X). Burger opens a **full-screen overlay** that **slides down from the
  top** (`translate-y-full → 0`, `bg-background` white, 500ms `cubic-bezier(0.16,1,0.3,1)`),
  body scroll locked. Overlay content: **Courses** and **Industries** as **accordions**
  (chevron rotates, grid-rows expand) listing the same links + "View all…", then **About /
  Blog / Resources** as large `text-2xl font-bold` rows; sticky footer of the overlay has a
  full-width **Enquire Now** red button + full-width phone outline button.

Prefer an Elementor Pro **Nav Menu** widget bound to a WP menu for the desktop nav +
dropdowns, and the Pro mobile-menu/off-canvas for the burger overlay. Use scoped CSS only for
micro-interactions (burger morph, slide-down easing) a native control can't express.

## Footer spec (from `site-footer.tsx`)

- Full-width, **dark navy** background `#151F2F` (`bg-secondary`), text white. Inner
  `.site-container` (max 1400px), `padding-top: 56px` (`pt-14`) / `md:pt-16` (64px),
  `padding-bottom: 32px` (`pb-8`).
- **3-column grid** `lg:grid-cols-[1.25fr_1.2fr_0.8fr]` (≈ 38% / 37% / 25%), `gap-12` /
  `lg:gap-16`; stacks to 1 column on mobile.
  - **Col 1 — Brand:** white `MillerLogo` (`h-13`/`md:h-15`); **Acknowledgement of Country**
    (two paragraphs, `text-white/90`, `leading-7`): *"Miller First Aid acknowledges the Dharug
    people, the Traditional Custodians of this land."* and *"We pay our respects to Elders past,
    present and emerging."*; then contact rows (phone `1300 807 669` → `tel:1300807669` with
    phone icon; email `info@millerfirstaid.com.au` → `mailto:` with mail icon); then two **social
    icons** — LinkedIn (`https://www.linkedin.com/company/miller-first-aid/`) and Instagram
    (`https://www.instagram.com/millerfirstaid`), each a **48px white circle** (`bg-white`,
    `rounded-full`) with the ink glyph, `target="_blank" rel="noopener noreferrer"`.
  - **Col 2 — Courses** (heading `font-semibold` white; links `font-medium` `text-white/95`
    hover white, `leading-[1.35]`): CPR (labelled "Cardiopulmonary Resuscitation (CPR)"),
    First Aid, First Aid for Education & Care, Advanced First Aid, Asthma & Anaphylaxis,
    Provide Emergency Care for Suspected Spinal Injury, Basic Oxygen Administration for First
    Aid, In School Program, School Staff, Infant & Child First Aid Workshop → their
    `/courses/<slug>` routes.
  - **Col 3 — Company:** About → `/about`, Industries → `/industries`, Blog → `/blog`,
    Resources → `/resources`, Contact → `/contact`.
- **Bottom bar:** `border-top: 1px rgba(255,255,255,0.15)`, `.site-container`,
  `text-muted-foreground`; left: `© {current year} Miller First Aid. All rights reserved.` +
  **Website by Webhouse** (`https://webhouse.com.au/?utm_source=millerfirstaid.com.au`,
  `target="_blank"`, underline on hover); right: **Privacy Policy** → `/privacy-policy`.
  Stacks vertically on mobile, row on `md`.

## Match every value EXACTLY — fonts, spacing, effects, links

Copy each value verbatim from `site-header.tsx` / `site-footer.tsx` + `globals.css` /
`button.tsx`, not an approximation:

- **Font:** everything Montserrat; set `font_family` explicitly (don't inherit Hello/Roboto).
- **Weights/sizes:** nav links `16px`/`600`; footer headings `font-semibold`; footer links
  `font-medium`/`leading-[1.35]`; overlay top-level rows `text-2xl font-bold tracking-tight`.
- **Colors:** header white `#FFFFFF` bar + `#E4E4E7` border; nav text `#0A0A0B` at 80%, hover
  bg `#ECECEE`; "View all…" links + red CTA `#DE3A3A` (hover 80%); phone button **black**
  border; footer bg `#151F2F`, white/opacity text, social circles white; bottom bar text
  `#71717A`, hover white.
- **Radius:** buttons are **pills** (~36px); social icons full circles; nav hover pills.
- **Effects/links:** fixed header; hover-open dropdowns; slide-down mobile overlay + burger
  morph + body-scroll-lock; `tel:1300807669`; **Enquire Now** → `/contact`; external social +
  Webhouse links `target="_blank" rel="noopener noreferrer"`. Scoped CSS only where native
  controls can't express the interaction.

After building, `get-element-settings` on key elements and diff against source; `get-page-
structure`; and re-fetch a live page (home + one interior) to confirm the templates render.

## How to build (REST + elementor-mcp)

Theme Builder header/footer are Elementor Pro **library documents** with
`_elementor_template_type` = `header` / `footer` and a display condition of `include/general`
(entire site).

1. **Set the global kit first** (colors, Montserrat, enqueue font) — above.
2. **Best path — Pro Nav Menu:** create a WP menu (Appearance → Menus, or REST `wp/v2/menus`
   + `menu-items`) mirroring the header nav (Courses + children, Industries + children, About,
   Blog, Resources) and the footer link groups, then point Nav Menu widgets at it — keeps nav
   data-driven and client-editable.
3. **Create the template document.** If an elementor-mcp tool exposes theme-builder/template
   creation (`list-templates`, `save-as-template`, `apply-template`), use it; otherwise POST an
   `elementor_library` post with meta `_elementor_template_type: header` (or `footer`),
   `_elementor_edit_mode: builder`, and display condition `_elementor_conditions:
   ["include/general"]`.
4. **Build the content** with the container model + tokens (see the `nextjs-to-elementor`
   `references/build-recipe.md` and `references/design-tokens.md`).
5. **Verify** the condition is site-wide and it renders on home + one interior page. Ensure the
   active theme is **Hello Elementor** so the theme's own header/footer don't double up. Confirm
   the fixed header's height (80px) matches the page-body top offset so content isn't hidden.

If a step genuinely cannot be done via REST/MCP (e.g. assigning display conditions in some
Elementor versions), say so and hand off the exact wp-admin click-path: Templates → Theme
Builder → Header/Footer → Add New → Display Conditions → Entire Site.
