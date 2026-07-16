---
name: nextjs-to-elementor
description: "Build a WordPress/Elementor page as a 1:1 replica of a Miller First Aid Next.js source route (app/**/page.tsx) using the elementor-mcp tools over the WP REST API. Use whenever the user wants to recreate, port, rebuild, or sync a page from this Next.js codebase onto the live Elementor site, or asks to build the home/about/courses/course-detail/industries/industry-landing/resources/blog/contact page in Elementor to match the code."
compatibility: claude-code-only
---

# Next.js → Elementor (1:1 page builds via elementor-mcp) — Miller First Aid

Recreate a page from the **Miller First Aid** Next.js codebase onto the live WordPress /
Elementor site so it matches the source **section-for-section, token-for-token, pixel-for-
pixel** across desktop, tablet and mobile. Uses the **elementor-mcp** MCP tools (REST-based),
NOT WP-CLI or browser automation.

**The original Next.js project in this repo is the single, canonical source of truth** — for
design, layout, spacing, typography, responsiveness, animations, interactions, copy, links
and functionality. The live WordPress build must reproduce it exactly; never invent content
or "improve" the design.

## Live target (from `.mcp.json`)

The proxy runs via `node ./emcp-proxy.mjs` against
`WP_URL=https://syn01ce.syd7.hostyourservices.net/~millerfi/` (user `admin_wagpsxys`, WP
Application Password). The shared LiteSpeed host needs the proxy's local patches (REST path
`/mcp/elementor-mcp-server`, a real `User-Agent`, `NODE_TLS_REJECT_UNAUTHORIZED=0`) — they
are already in `.mcp.json`/`emcp-proxy.mjs`. Live stack: **Elementor 4.1.5, Elementor Pro
4.1.0, atomic supported** (`recommended_mode: atomic`). Public production origin (for
sideloading images and cross-checking): `https://www.millerfirstaid.com.au`.

## Build philosophy — native Elementor, editable by non-technical users

1. **Build directly on the live WordPress site** via the WP REST API + elementor-mcp.
2. **Use native Elementor everywhere possible** — containers/flexbox, native widgets, Global
   Styles (the kit), and Elementor Pro **Theme Builder** for the global header/footer.
3. **Recreate layouts with Elementor containers**, not custom HTML structures.
4. **Do NOT use HTML widgets** (`add-html`) unless there is genuinely no native Elementor
   solution for a required behaviour; if forced to, keep it tiny and scoped (see
   `references/build-recipe.md` "Last resort").
5. **Minimise custom CSS/JS** — only when needed to faithfully reproduce something Elementor
   can't do natively.
6. **Keep structures clean, reusable and maintainable** so a non-technical client can edit
   text and swap images from the Elementor editor. Reuse saved templates/globals for repeated
   blocks (FooterCta, Allens card, header, footer).
7. **Pixel-perfect fidelity** — match every section, component, interaction, animation and
   responsive behaviour from the source, token-for-token (see `references/design-tokens.md`).

## Golden rule of 1:1 fidelity

**The Next.js source is the single source of truth. Never invent content.** For each page:

| Content | Source file |
|---------|-------------|
| Page body sections & copy | `app/<route>/page.tsx` (+ its section components in `components/`) |
| Home sections | `app/page.tsx` (+ `clients-marquee`, `course-offerings-section`, `home-testimonials`, `footer-cta`) |
| Course data (per course) | `lib/course-details.ts` (rendered via `components/course-detail-page.tsx`) |
| Industry landing data | `lib/industries.ts` (rendered via `components/industry-landing-page.tsx`) |
| Resources & downloads | `lib/resources.ts` |
| Blog posts | `content/blog-posts/*.mdx` (+ `content/blog.tsx`, `components/blog-post-*`) |
| Blog authors | `lib/blog-authors.ts` |
| Home FAQ | `lib/home-faq.ts` |
| Reusable enquiry form | `components/enquiry-form.tsx` (POSTs `/api/enquiry` → `/thank-you`) |
| Header nav / dropdowns | inline `courseLinks` / `industryLinks` in `components/site-header.tsx` |
| Footer nav / columns / contact | inline arrays in `components/site-footer.tsx` |
| Colors, font, spacing, radius, breakpoints | `app/globals.css` + `app/layout.tsx` (Montserrat) + `components/ui/button.tsx` |
| Header / Footer (global templates) | `site-header.tsx` / `site-footer.tsx` — see `elementor-global-templates` skill |
| SEO / metadata | per-page `export const metadata` + `lib/seo.ts` (`SITE`, `SITE_DEFAULT_OG_IMAGE`) |
| Images | referenced from the `public/` root (e.g. `/classroom.webp`, `/clients/...`, `/course-tabs/...`, `/industries/...`) |

Read the actual `page.tsx` (and every section component it imports) **every time** — do not
rely on memory. Decompose the page into ordered sections, then map each section to an
Elementor container.

## Brand facts (verify against source, don't hard-code from memory)

- **Font:** Montserrat only. No serif. **Colors:** red `#DE3A3A` (`--primary`), navy/ink
  `#151F2F` (`--secondary`), ink text `#0A0A0B`, muted text `#71717A`, borders `#E4E4E7`,
  white `#FFFFFF`. **Buttons are pills** (radius ≈36px). Full map in `references/design-tokens.md`.
- **Phone:** `1300 807 669` → `tel:1300807669`. **Email:** `info@millerfirstaid.com.au`.
- **Primary CTA:** **Enquire Now** → `/contact` (red pill). Forms redirect to `/thank-you`.
- **Accreditation partner:** Allens Training Pty Ltd **RTO 90909**
  (`https://www.allenstraining.com.au/`) — shown in an "Allens" badge card on home/CTA.
- **Social:** LinkedIn `https://www.linkedin.com/company/miller-first-aid/`,
  Instagram `https://www.instagram.com/millerfirstaid`.
- **Domain:** `https://www.millerfirstaid.com.au`. **Site name:** Miller First Aid.
- **Acknowledgement of Country** (Dharug people) appears in the footer — reproduce verbatim.

## Match every value EXACTLY — no eyeballing

Fidelity is content, section order **and** every numeric/stylistic value: font family
(`Montserrat`), font size (mobile + `md`), weight, line-height, letter-spacing
(`tracking-tight` ≈ -0.025em), padding/margin (section `py-14`→56px / `md:py-20`→80px, gutters
`px-4`→16 / `md:px-6`→24), container max **1400px**, column ratios, gaps, colors (exact hex),
and the **pill** button radius. Copy them verbatim; put mobile values in the widget's `_mobile`
controls. After building, spot-check with `get-element-settings` and diff against source.

## Effects, links & interactions must match too

- **Link targets** — every `href` (incl. `tel:`/`mailto:`, external `target="_blank"
  rel="noopener noreferrer"`), and which element is the click target (whole-card links via the
  container `link` setting).
- **Hover states** — button hover (red → 80% opacity), nav link hover (`bg-muted` `#ECECEE`),
  industry-card hover (`bg-muted/60`), footer link hover (white). Reproduce with native
  controls; scoped CSS only if unavoidable.
- **Animations** — the **clients marquee** (48s infinite scroll, reduced-motion aware), hero
  gradient scrims (`.hero-gradient-r`), nav dropdowns (hover-open), mobile slide-down overlay
  + burger morph, FAQ/course accordions, testimonials. See `references/build-recipe.md`.

## Editable images — collect and place as native widgets (never HTML)

The client must be able to swap images from the Elementor/WordPress editor.

1. **Identify every image the page uses.** As you decompose the source, note each real image
   reference and resolve it under `public/…`. Miller images live at the **public root** and in
   `public/clients/`, `public/course-tabs/`, `public/industries/`, `public/resources/` — e.g.
   `/zeb-with-class.webp` (site OG/hero), `/classroom.webp`, `/allens.avif`,
   `/heartbeat-separator.avif`, `/zeb-with-students.webp`, `/not-found-ambulance.webp`. Only
   handle images actually used — don't dump the whole `public/` tree.
2. **Place every image as a native, editable Elementor image widget** (`add-atomic-image` /
   `{ "elType":"widget", "widgetType":"image" }`). Sideload with
   `elementor-mcp-sideload-image` from the production origin
   (`https://www.millerfirstaid.com.au/<path>`), check `elementor-mcp-list-media` first to
   avoid dupes, then use the returned `{ url, id }`. Background images → container
   `background_image: { url, id }` (an editable control), **not** an `<img>` in HTML.
   Keep each image's `alt` text from the source. **Never** embed images as `<img src>` in an
   HTML widget, inline `background:url(...)`, or base64.

## Prerequisites (verify once per session)

1. elementor-mcp connected: `elementor-mcp-list-pages`. If it errors, the MCP didn't load —
   check `.mcp.json` `command`/`args` point at `emcp-proxy.mjs` and the `WP_URL`/creds are the
   millerfi host; restart.
2. Version: `elementor-mcp-detect-elementor-version` (expect 4.1.5 / Pro 4.1.0, atomic).
3. Kit: `elementor-mcp-get-global-settings`. If it's still the Elementor default
   (Roboto / `#6EC1E4`), set the Miller kit first (see `references/design-tokens.md`
   "Global kit") before building pages.

## First: present the page list so the user picks what to build next

Enumerate the pages and show them as a checklist (built vs. pending). Build the list fresh
from `app/` each time — read the folder, expand dynamic routes. Current inventory:

**Core**
- Home — `app/page.tsx` (`/`)
- About — `app/about/page.tsx` (`/about`)
- Contact — `app/contact/page.tsx` (`/contact`)

**Courses** (`app/courses/…`)
- Courses hub — `courses/page.tsx` (`/courses`)
- CPR — `courses/cpr` · First Aid — `courses/first-aid`
- First Aid for Education & Care — `courses/first-aid-for-education-care`
- Advanced First Aid — `courses/advanced-first-aid`
- Asthma & Anaphylaxis — `courses/asthma-anaphylaxis`
- Provide Emergency Care for Suspected Spinal Injury — `courses/provide-emergency-care-for-suspected-spinal-injury`
- Basic Oxygen Administration for First Aid — `courses/basic-oxygen-administration-for-first-aid`
- In School Program — `courses/in-school-program`
- School Staff — `courses/school-staff`
- Infant & Child First Aid Workshop — `courses/infant-child-first-aid-workshop`
  (all course-detail pages render via `course-detail-page.tsx` from `lib/course-details.ts`)

**Industries**
- Industries hub — `app/industries/page.tsx` (`/industries`)
- 11 industry landings (dynamic, via `app/[slug]/page.tsx` + `lib/industries.ts`,
  rendered by `industry-landing-page.tsx`), at `/first-aid-training-for-<slug>`:
  schools, sports-clubs, childcare-centres, manufacturing, aged-care, healthcare,
  hospitality, government, retail, construction, transport.

**Resources / Blog**
- Resources — `app/resources/page.tsx` (`/resources`, data `lib/resources.ts`)
- Blog index — `app/blog/page.tsx` (`/blog`)
- Blog post — `app/blog/[slug]/page.tsx` (one per `content/blog-posts/*.mdx`)
- Blog author — `app/blog/author/[slug]/page.tsx` (per `lib/blog-authors.ts`)

**Utility / legal**
- Privacy Policy — `app/privacy-policy/page.tsx` (`/privacy-policy`)
- Thank You — `app/thank-you/page.tsx` (`/thank-you`, form redirect target)
- 404 — `app/not-found.tsx`

(Not routes: `app/api/enquiry/route.ts` is the form endpoint; `app/_templates/…` is internal
scaffolding, not a live page.)

Ask which page to build, then follow the workflow.

## Workflow

1. **Read the source page** `app/<route>/page.tsx` end to end (+ every imported section
   component). List its sections in order. For the **home page** the order is: dark hero
   (bg image + gradient + 5-star + stats + form card + Allens card) → trusted-clients +
   clients marquee → heartbeat separator → Why Choose (3 cards + image) → CourseOfferings →
   heartbeat separator → How It Works (ordered steps) → Industries grid + Enquire CTA →
   Testimonials → FAQ accordion → FooterCta (dark) + heartbeat separator.
2. **Identify or create the WP page**: `elementor-mcp-list-pages`; else
   `elementor-mcp-create-page`. Record the post ID.
3. **Sideload images** the page uses from `https://www.millerfirstaid.com.au/<path>`; reuse
   the returned `{ url, id }` in **native image widgets / container backgrounds** (check
   `list-media` first).
4. **Build the body** with the container model + tokens — see `references/build-recipe.md`
   and `references/design-tokens.md`. Chunk large pages: build the hero, verify, then append
   sections with `position:-1`.
5. **Verify**: `elementor-mcp-get-page-structure`. Compare section count/order vs source;
   spot-check colors/font/radius via `get-element-settings`.
6. **Publish** only when asked (`update-page-settings` status=publish). For the home page,
   also set it as the static front page via WP REST settings
   (`show_on_front=page`, `page_on_front=<id>`).

## Critical gotchas

- **A "Proxy error" / timeout can still mean the write SUCCEEDED.** Verify with
  `get-page-structure` before retrying — never blind-retry (it doubles content).
- **Chunk big imports** so each returns within the 30s proxy timeout.
- **Mobile matters.** Every row needs `flex_direction_mobile:"column"`; children
  `width_mobile:100`. Breakpoints: `md` 768px (typography / 2-col shifts), `lg` 1024px
  (header desktop nav ↔ mobile overlay).
- **Font:** everything is **Montserrat** — enqueue the Montserrat Google Font on WordPress and
  set it on the kit so text doesn't fall back to Hello theme's Roboto.
- **Buttons are pills** (~36px radius), not square/6px — a common miss.

See `references/design-tokens.md` for the exact token → Elementor settings map, and
`references/build-recipe.md` for the container JSON recipe, brand-specific section patterns,
and the enquiry-form recipe.
