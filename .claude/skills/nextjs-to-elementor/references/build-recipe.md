# Container-model build recipe (elementor-mcp) — Miller First Aid

Build with the Elementor **container / flexbox** model (the site runs Elementor **4.1.5 +
Pro 4.1.0**, `supports_atomic: true`, `recommended_mode: "atomic"`), because the Next.js
source is authored with Tailwind flex/grid. **Recreate every layout as native Elementor
containers — never as an HTML widget wrapping custom markup.** Reach for an HTML/`add-custom-js`
widget only when there is genuinely no native Elementor way to reproduce a behaviour (see the
"last resort" note at the end), and keep it as small and scoped as possible.

Confirm the mode first: `elementor-mcp-detect-elementor-version`. On this site prefer the
**atomic** tools (`add-flexbox`, `add-atomic-heading`, `add-atomic-paragraph`,
`add-atomic-button`, `add-atomic-image`, `add-div-block`) and fall back to legacy
(`add-container`, `add-heading`, …) only if a specific atomic widget is missing.

## Section = one top-level flexbox/container

Maps to a Next.js `<section>`. Full-bleed background, boxed inner content at `1400px`.

```jsonc
{
  "elType": "container",                    // or e-flexbox (atomic)
  "settings": {
    "content_width": "full",                // full-bleed section band
    "flex_direction": "column",
    "padding":        { "unit":"px", "top":80, "right":24, "bottom":80, "left":24, "isLinked":false }, // py-20 / md:px-6
    "padding_mobile": { "unit":"px", "top":56, "right":16, "bottom":56, "left":16 },                   // py-14 / px-4
    // light section: leave white (#FFFFFF).
    // dark section (hero / FooterCta / footer): 
    "background_background": "classic",
    "background_color": "#151F2F"            // --secondary
    // OR hero image band:
    // "background_image": { "url": "<sideloaded url>", "id": <id> },
    // "background_position": "center center", "background_size": "cover",
    //   then add a child overlay div for the `.hero-gradient-r` scrim (see below).
  },
  "elements": [ /* inner boxed row(s) + widgets */ ]
}
```

Put an inner **boxed** container (`content_width:"boxed"`, `width:1400px`) inside the
full-bleed band to reproduce `.site-container`.

## Row of columns

```jsonc
{
  "elType": "container",
  "settings": {
    "flex_direction": "row",
    "flex_direction_mobile": "column",      // ALWAYS stack on mobile (< md/lg per source)
    "flex_gap": { "unit":"px", "size":32 }, // match the source gap (gap-8 = 32px, etc.)
    "content_width": "boxed",
    "width": { "unit":"px", "size":1400 },
    "align_items": "flex-start"             // md:items-start in most 2-col rows
  },
  "elements": [
    { "elType":"container",
      "settings": { "width": {"unit":"%","size":55}, "width_mobile": {"unit":"%","size":100} },
      "elements": [ /* widgets */ ] }
  ]
}
```
Reproduce the source grid ratios as column widths — e.g. the home hero
`md:grid-cols-[1.3fr_0.75fr]` → ≈ 63% / 37%; Why-Choose `md:grid-cols-[1.05fr_0.95fr]` →
≈ 52% / 48%; footer `lg:grid-cols-[1.25fr_1.2fr_0.8fr]` → ≈ 38% / 37% / 25%.

## Widgets — native first

| Source element | Native Elementor widget |
|----------------|-------------------------|
| Heading (`<h1>`–`<h3>`) | `add-atomic-heading` (set `tag`) |
| Body copy (`<p>`) | `add-atomic-paragraph` / `add-text-editor` |
| CTA link/button | `add-atomic-button` — **pill radius 36px + red tokens** (see design-tokens.md) |
| Image | `add-atomic-image` with sideloaded `{ url, id }` — **never** an `<img>` in HTML |
| Stat / feature card | flexbox/`div-block` with `border`, `border-radius`, padding + heading + paragraph |
| Icon list ("How It Works" steps, offering bullets) | `add-icon-list` |
| FAQ accordion | `add-accordion` (matches `Accordion` in home/course pages) |
| Course offerings tabs | `add-tabs` (or accordion — matches `course-offerings-*`) |
| Testimonials | `add-testimonial` / carousel |
| Enquiry form | Elementor **Pro Form** widget (see Forms below) |
| Whole-card link | set the container's `link: { "url": "<path>" }` |
| Social icons (footer) | `add-social-icons` |

## Brand-specific patterns to reproduce exactly

- **Dark hero band** (`app/page.tsx`): `bg-secondary` `#151F2F` container, background image
  `/zeb-with-class.webp` (`SITE_DEFAULT_OG_IMAGE`) `cover`/`center`, plus a `.hero-gradient-r`
  overlay = an absolutely-positioned child div with a left→right black gradient
  (`from-black/95 via-black/74 to-black/54`, lighter above `md`). Left column: 5-star row
  (gold `#FEC84B`), white h1, white/85 lead, three stat pills (`bg-white/10`, `rounded-lg`,
  value `text-2xl font-bold`, label `text-[11px] font-semibold uppercase tracking-[0.12em]
  text-white/75`). Right column: white enquiry **form card** (`rounded-xl border bg-white
  shadow-xl`) + Allens badge card.
- **Clients marquee** (`components/clients-marquee.tsx` + `globals.css`
  `.clients-marquee-*`): an infinite horizontal logo scroll, **48s linear infinite**,
  `translateX(0 → -50%)`, two duplicated logo sets, `prefers-reduced-motion` disables it.
  No native Elementor widget reproduces this exactly → use a scoped HTML/CSS widget with the
  logos as real `<img>` **only if** the image-carousel widget can't match it; prefer the
  **Image Carousel** widget (autoplay, continuous, infinite) with the client logos as native
  media first.
- **Heartbeat separator**: `/heartbeat-separator.avif` full-width image between sections —
  a plain `add-atomic-image` (decorative, `aria-hidden`).
- **Allens badge card**: small bordered card, `/allens.avif` logo + text linking to
  `https://www.allenstraining.com.au/` ("Allens Training Pty Ltd RTO 90909").
- **Industries grid**: cards (bordered, `rounded-2xl`, `text-xl md:text-2xl font-bold`) each
  linking to `/first-aid-training-for-<slug>`, hover `bg-muted/60`.
- **FooterCta** (`components/footer-cta.tsx`): dark `#151F2F` section, left heading + Allens
  card, right white form card — reused on many pages. Build it once as a **saved
  template/global** and reuse.

## Forms (Elementor Pro) — the enquiry form

`components/enquiry-form.tsx` is the single reusable form (hero, contact, FooterCta). Fields,
in order, all **required**, floating-label style:

| Field | Type | Label |
|-------|------|-------|
| `fullName` | text | `Full Name *` |
| `email` | email | `Email Address *` |
| `phone` | tel | `Phone Number *` |
| `message` | textarea | `How can we help? *` |

Submit button label **"Send Message"** (red pill, `size:lg`, `font-semibold`, full-width).
On submit the source POSTs to `/api/enquiry` and redirects to **`/thank-you`**. In Elementor:
build a **Pro Form** widget with these four fields, **Redirect** action → `/thank-you`, and an
**Email** action → `info@millerfirstaid.com.au`. (The Next.js backend also emails via Resend
and creates a Pipedrive lead + attribution capture — replicate the **destination + redirect**,
not the backend integration.)

## Import + verify loop

```
elementor-mcp-delete-page-content(post_id)
elementor-mcp-add-flexbox(post_id, ...)                    # hero section band
  ...add children (heading, paragraph, button, image, form)...
elementor-mcp-get-page-structure(post_id)                 # confirm hero landed
  ...append remaining sections with position:-1...
elementor-mcp-get-page-structure(post_id)                 # confirm count/order vs source
```

- **Never blind-retry on a "Proxy error"/timeout — verify first** with
  `get-page-structure`. The write often succeeded server-side even when the HTTP response
  failed; retrying doubles the content.
- **Chunk big pages.** One giant tree times out the 30s proxy request. Build the hero,
  verify, then append each subsequent section.
- After building, spot-check with `elementor-mcp-get-element-settings` that font family
  (`Montserrat`), colors (`#DE3A3A`, `#151F2F`, `#0A0A0B`), and the **pill** button radius
  match the tokens.

## Responsive checklist (per section)

- Row containers: `flex_direction_mobile: "column"`.
- Column children: `width_mobile: { unit:"%", size:100 }`.
- Reduce section side padding on mobile (24→16px) and vertical (80→56px), and drop font sizes
  to the mobile scale (h1 60→36, h2 48→30, h3 24→20, lead 18→16). Breakpoints: `md` 768px,
  `lg` 1024px (header desktop nav ↔ mobile overlay).
- Header/footer: desktop nav shows at `lg` (1024px); below that the mobile burger + slide-down
  overlay applies (see the `elementor-global-templates` skill).

## Last resort — custom HTML / CSS / JS

Allowed **only** where Elementor + Pro has no native equivalent for a behaviour that fidelity
requires (e.g. the exact clients marquee timing, a hover micro-interaction a widget can't
express). When you must:
- Keep it a small, **scoped** block (`add-html` / `add-custom-js`), never a page-sized markup dump.
- **Do not** bake images into it — images stay native `add-atomic-image` widgets / container
  backgrounds so the client can swap them in the editor (see the SKILL editable-images rule).
- Prefer refactoring into native containers over adding markup. The default answer is native.
