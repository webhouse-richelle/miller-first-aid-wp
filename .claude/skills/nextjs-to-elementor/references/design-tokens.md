# Design tokens → Elementor settings map (Miller First Aid)

**Authoritative source:** `app/globals.css` (the `@theme inline` block + the `:root`
shadcn token block + the `@layer base` heading rules), `app/layout.tsx` (font), and
`components/ui/button.tsx` (button shape/variants). **Re-read those files before every
build** — if a value changed there, this snapshot is stale. Snapshot as of 2026-07-16.

Copy every value **verbatim** into the Elementor control. Never eyeball, round, or invent.

## Font — Montserrat only

Miller First Aid uses a **single typeface: Montserrat**, loaded in `app/layout.tsx` via
`next/font/google` and bound to `--font-sans` (and `--font-heading = --font-sans`), applied
globally on `<html class="font-sans">`. There is **no serif / secondary display font**.

- Set the Elementor **Global Fonts** (kit) Primary + Text + Accent + Secondary all to
  **Montserrat**, and enqueue the Montserrat Google Font on WordPress so nothing falls back.
- Set `typography_font_family: "Montserrat"` explicitly on every text widget — do not rely
  on inherited theme defaults (Hello theme ships Roboto).
- Base `html` font-size is `16px`.

## Colors

The palette is two brand hexes plus the shadcn **neutral/zinc** scale (authored in `oklch`).
Use these exact values; the `oklch` → hex conversions are noted so you can paste hex into
Elementor color controls.

| Token (globals.css) | Value | Hex to use | Used for |
|--------------------|-------|-----------|----------|
| `--primary` | `#de3a3a` | **`#DE3A3A`** | brand **red** — primary CTA buttons, links, active/accent, logo emblem |
| `--secondary` | `#151f2f` | **`#151F2F`** | dark **navy/ink** — footer bg, dark hero/CTA section backgrounds |
| `--background` | `oklch(1 0 0)` | **`#FFFFFF`** | page & card background |
| `--foreground` | `oklch(0.141 0.005 285.823)` | **`#0A0A0B`** (near-black) | headings & primary body text |
| `--muted` | `oklch(0.94 0.002 286.3)` | **`#ECECEE`** | subtle hover backgrounds, image placeholder bg, `bg-muted/40` section tints |
| `--muted-foreground` | `oklch(0.552 0.016 285.938)` | **`#71717A`** | secondary/supporting body copy, footer bottom-bar text |
| `--border` / `--input` | `oklch(0.92 0.004 286.32)` | **`#E4E4E7`** | card borders, rules, header/footer divider lines |
| `--primary-foreground` | `oklch(0.971 0.013 17.38)` | **`#FEECEC`** (≈ white) | text on red buttons — effectively white |
| `--secondary-foreground` | `oklch(0.985 0 0)` | **`#FAFAFA`** (≈ white) | text on the dark navy footer / CTA |
| `--card` | `oklch(1 0 0)` | **`#FFFFFF`** | form cards / raised cards |
| `--destructive` | `oklch(0.577 0.245 27.325)` | **`#DC2626`** | form validation error text |
| rating gold | literal `#FEC84B` | **`#FEC84B`** | hero 5-star rating icons |
| overlay on white | `bg-white/10`, `bg-white/90/95` | white at 10 / 90 / 95% | stat pills on hero, translucent cards |

On the dark navy footer/CTA, link and body text is white at reduced opacity
(`text-white/90`, `/95`, `/85`) — reproduce with rgba white, not a flat gray.

## Radius — everything is a multiple of 14px

`--radius: 0.875rem` = **14px**. The `@theme` scale derives the rest:

| Elementor radius | Formula | px |
|------------------|---------|----|
| `--radius-sm` | ×0.6 | **8.4px** |
| `--radius-md` | ×0.8 | **11.2px** |
| `--radius-lg` | ×1.0 | **14px** (cards: `rounded-xl`≈12px, `rounded-2xl`≈16px in Tailwind — match the class actually used) |
| `--radius-xl` | ×1.4 | **19.6px** |
| `--radius-2xl` | ×1.8 | **25.2px** |
| `--radius-4xl` | ×2.6 | **36.4px** (buttons — see below) |

Note: card corners in the source use Tailwind's own `rounded-lg`(8px) / `rounded-xl`(12px) /
`rounded-2xl`(16px). Read the exact class per card and match it.

## Buttons — PILL shaped (not a small radius)

`components/ui/button.tsx` base = `rounded-4xl` → **~36px radius**, which on a 36–40px-tall
button renders as a **full pill**. Weight `font-medium` (**500**), size `text-sm` (**14px**),
`transition-all`. This is the opposite of a square/6px button — get the pill right.

Primary CTA (`variant="default"`, e.g. header **Enquire Now**, all form submit buttons):
```
button_text_color: "#FFFFFF"            // --primary-foreground ≈ white
background_color: "#DE3A3A"             // --primary
button_background_hover_color: "#DE3A3A" @ 80% opacity   // hover:bg-primary/80
border_radius: { unit:"px", top:36, right:36, bottom:36, left:36 }   // pill
typography_font_family:"Montserrat"; typography_font_weight:"500"; typography_font_size:{px:14}
```
Sizes (height / horizontal padding): `default` = 36px / 12px; `sm` = 32px / 12px;
`lg` = 40px / 16px. **Note:** site CTAs frequently override `lg` to a taller pill —
`h-12` (48px) / `md:h-13` (52px), `px-8` (32px), `text-base`→`lg:text-lg`, `font-semibold`
(600). Copy the override that the specific instance uses.

Other variants:
- `outline` — `border` = `#E4E4E7` (`--border`), bg white, text ink, hover bg `#ECECEE`.
  The header **phone** button overrides the border to **black** (`#000000`).
- `secondary` — bg `#151F2F`, text `#FAFAFA`, hover bg 80% opacity.
- `ghost` — transparent, hover bg `#ECECEE`.
- `link` — red text (`#DE3A3A`), underline on hover.

## Typography scale (from `@layer base`)

Set `typography_font_family: "Montserrat"` on every one. `tracking-tight` ≈ `-0.025em`
(≈ `-0.9px` at 36px; scale with size). Put the **mobile** (non-`md:`) size into the widget's
`_mobile` size control.

| Tag | Mobile | ≥`md` (768px) | Weight | Line-height | Tracking | Color |
|-----|--------|---------------|--------|-------------|----------|-------|
| h1 | `text-4xl` **36px** | `text-6xl` **60px** | 700 | `1.02` | tight | ink `#0A0A0B` (white in dark hero) |
| h2 | `text-3xl` **30px** | `text-5xl` **48px** | 700 | `1.05` | tight | ink `#0A0A0B` |
| h3 | `text-xl` **20px** | `text-2xl` **24px** | 700 | `1.1` | — | ink `#0A0A0B` |
| h4–h6 | inherit | — | 700 | — | — | ink |
| body | **16px** | up to **18px** (`md:text-lg`) in heroes/leads | 400 | `relaxed` ≈ 1.625 | — | `#71717A` for secondary copy, ink for lead sentences |
| eyebrow / stat label | `text-[11px]` | — | 600 | — | `0.12em` uppercase | contextual (e.g. `text-white/75`) |

Apply to heading widgets:
```
title_color: <hex>
typography_typography: "yes"
typography_font_family: "Montserrat"
typography_font_size: { unit:"px", size:<md size> }
typography_font_size_mobile: { unit:"px", size:<mobile size> }
typography_font_weight: "700"
typography_line_height: { unit:"em", size:1.02 }        // per tag
typography_letter_spacing: { unit:"px", size:-0.9 }     // tracking-tight; scale to size
```

## Layout constants

- `.site-container` = `max-width: 1400px`, `margin: 0 auto`, padding `16px` (`px-4`) /
  **`24px`** (`md:px-6`). This is the max width for **every** section's inner content,
  including header and footer.
- **Header**: fixed, full-width, white bg, `border-bottom: 1px #E4E4E7`, height **80px**
  (`h-20`). Page body is offset by `padding-top: 80px` (`pt-20` on the content wrapper).
- **Section rhythm**: the common vertical padding is `py-14` (**56px**) /
  `md:py-20` (**80px**). Some sections use `py-16` (64px) / `md:py-24` (96px). Read each
  section's own classes; put the mobile value in `padding_mobile`.
- **Breakpoints** (Tailwind): `md` **768px** (typography + most 1-col→2-col shifts),
  `lg` **1024px** (header desktop nav appears / mobile overlay hides). Elementor's default
  tablet (768) and mobile breakpoints line up with these — verify with
  `get-global-settings` (`active_breakpoints`).

## Global kit (do once, before building pages)

Set these on the active Elementor kit so widgets inherit them and per-widget overrides shrink:
- `elementor-mcp-update-global-colors`: **Primary → `#DE3A3A`** (red),
  **Secondary → `#151F2F`** (navy), **Text → `#0A0A0B`** (ink),
  **Accent → `#71717A`** (muted) — plus register `#FFFFFF`, `#ECECEE`, `#E4E4E7` as custom
  colors so section/border tints are reusable.
- `elementor-mcp-update-global-typography`: Primary, Secondary, Text and Accent font families
  all **Montserrat**; set the heading sizes/weights from the scale above so h1–h3 inherit.
- Confirm the site's current kit first with `get-global-settings` — on a fresh install it is
  still the Elementor default (Roboto / `#6EC1E4`), which must be replaced with the above.
