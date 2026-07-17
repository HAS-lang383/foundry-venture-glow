# Lovable Prompts — FFG Venture Studio

Paste **Prompt 1** when creating the project. After connecting GitHub and pushing
this folder's files (see README.md), paste **Prompt 2** once per page.

---

## Prompt 1 — project kickoff (paste at project creation)

```
Build a multi-page marketing site for "FFG Venture Studio" — a venture studio by
Foundry for Good that builds software companies serving nonprofits and associations.

IMPORTANT CONTEXT: This is a faithful port of an existing, approved static HTML site.
The original source files will be pushed to this repo shortly in a /reference folder,
with all images and video in public/assets. Until then, scaffold the app exactly as
specified below. Do NOT invent your own design, copy, colors, or layout — everything
must match the original source when it arrives. The copy was approved by leadership
and must be kept verbatim.

PAGES (react-router, 7 routes):
/ (Overview), /vision, /model, /platform, /portfolio, /team, /founders

DESIGN TOKENS — define as CSS custom properties on :root in index.css, exactly:
--bg:#f2ede5; --bg-soft:#f7f3ec; --surface:#fff;
--navy:#1f3553; --navy-deep:#162538; --ink:#0e1b2e;
--orange:#f37b4e; --orange-deep:#e0633a; --orange-soft:#fcd9c8;
--text:#1f3553; --text-body:#475669; --text-mute:#7f8b98;
--cream-line:#1f35531a; --ink-line:rgba(242,237,229,.14);
--r-md:14px; --r-lg:20px; --r-xl:28px;

FONTS — load from Google Fonts with exactly these families and weights:
- Zilla Slab: 400,500,600,700 + italic 400,500,600 (display serif, --font-display)
- Source Sans 3: 300,400,500,600,700 (body, --font)
- Geist Mono: 400,500 (eyebrows/labels, --mono)
- Archivo: 500,600,700,800 (uppercase display, --font-caps)
- Lora: 600 + italic 600 (italic accent words in the hero)
Body: Source Sans 3, 16.5px, line-height 1.65, color #1f3553, background #f2ede5.
Text selection color: orange background, white text.

GLOBAL CHROME on every page:
1. A slim dark top bar (--navy-deep) with "Return to Foundry for Good" pill buttons.
2. A sticky navy nav (84px tall): starburst logo mark + "Foundry for Good" wordmark
   with a small orange mono "VENTURE STUDIO" sub-label; tabs for the 7 pages with an
   orange underline on the active tab; an orange pill CTA "Become a Venture Lead"
   linking to /founders. On scroll (>10px) the nav gains backdrop blur and a
   translucent #16253aeb background. Below 1040px, collapse to a hamburger menu.
3. A navy footer.

ANIMATION SYSTEM (implement globally, exactly these behaviors):
- Scroll reveal: elements with .reveal / .reveal-left / .reveal-right start at
  opacity 0 and translateY(30px) / translateX(-34px) / translateX(34px), and animate
  to opacity 1 transform none over 0.7s cubic-bezier(.22,1,.36,1) when they enter
  the viewport (IntersectionObserver, threshold 0.12, rootMargin '0px 0px -40px 0px',
  animate once). Stagger classes .d1–.d4 add 0.1s–0.4s transition-delay.
  Fallback: if nothing has revealed after 3s, reveal everything.
- Stat counters: numbers count from 0 to data-target over 1200ms with cubic
  ease-out when the stat row first scrolls into view (once).
- Scroll color morph: sections carry a data-bg attribute; whichever section covers
  the vertical midpoint of the viewport sets document.body's background-color
  (body has transition: background-color .9s ease). Dark sections are opaque and
  simply cover the body.
- Hero: full-bleed looping muted autoplay background video
  (/assets/ffg-hero-bg.mp4) behind a navy gradient overlay, min-height 92vh.
- Buttons: pill radius 999px; arrow glyph slides 3px right on hover; orange button
  lifts translateY(-1px) with a soft orange glow shadow.
- Logo/brand carousel: continuous auto-drift at 0.6px/frame (requestAnimationFrame),
  cards duplicated for a seamless infinite loop, pauses on hover, prev/next arrows
  nudge exactly one card width with eased catch-up, draggable, and respects
  prefers-reduced-motion.
- 3D starburst: the logo mark extruded by stacking 48 progressively darker cloned
  layers translateZ'd back 44px total, inside a slowly rotating perspective scene.
- Parallax ghost starburst: a huge faint background starburst that rotates at
  scrollY * 0.02 degrees.
- Quote switcher (tabs swap testimonial text) and FAQ accordion (click to expand).

Set the site title to "FFG Venture Studio — Foundry for Good" and use
/assets/ffg-mark.png as the favicon. Keep all styling in plain CSS with the exact
class names from the original (wrap, eyebrow, caps, slab-i, btn, hero, page-hero,
reveal, etc.) rather than Tailwind utilities, so the reference CSS ports verbatim.
Start by building the app shell (top bar, nav, footer, routes, animation system)
with placeholder page bodies.
```

---

## Prompt 2 — per-page port (paste once per page, after the GitHub push)

Replace `<PAGE>` with: `index` (route `/`), then `vision`, `model`, `platform`,
`portfolio`, `team`, `founders`.

```
The original source for this site is now in the repo. Port reference/<PAGE>.html
to its route as an EXACT 1:1 reproduction.

Rules:
- reference/<PAGE>.html is fully self-contained — its <style> block and <script>
  block are the ground truth. assets/vs.css and assets/vs.js (inside public/assets)
  are clean copies of the shared styles/behaviors for easier reading.
- Copy the CSS verbatim into the stylesheet (dedupe rules already ported from
  previous pages). Do not rename classes, change values, "modernize", or substitute
  Tailwind utilities.
- Keep ALL copy word-for-word — headlines, body text, stats, names, titles, quotes,
  button labels. The copy is executive-approved and must not be rewritten.
- Keep every image/video pointing at /assets/<same filename>.
- Reproduce all section structure, data-bg background-morph values, reveal/stagger
  classes, and any page-specific script behavior from the inline <script>.
- When done, list anything you could not reproduce exactly instead of silently
  approximating it.
```
