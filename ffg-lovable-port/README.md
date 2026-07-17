# FFG Venture Studio — Lovable Port Kit

This folder is a clean, self-contained copy of the approved FFG Venture Studio site,
ready to move into Lovable with **pixel-identical graphics, fonts, and animations**.

## What's in here

| Item | Purpose |
|---|---|
| `index.html`, `vision.html`, `model.html`, `platform.html`, `portfolio.html`, `team.html`, `founders.html` | The 7 live pages. Each one is fully self-contained (CSS + JS inlined), so they double-click open in any browser. |
| `assets/` | Every image/video the pages reference — nothing unused. |
| `assets/vs.css` / `assets/vs.js` | Clean standalone copies of the shared stylesheet and script (same code that's inlined in the pages) — easiest files for Lovable to read when porting. |
| `LOVABLE-PROMPT.md` | The exact prompts to paste into Lovable, in order. |

Draft files from the working folder (v2.html, v3.html, logo-compare.html, Draft.pptx,
the 16 MB uncompressed hero video, unused images) were deliberately left out.

## How to port (the path that gives an EXACT match)

Lovable builds React apps from prompts — you can't upload a folder of HTML directly.
The reliable way to get a 1:1 result is Lovable's **GitHub sync**:

1. **Create the project** — new Lovable project, paste **Prompt 1** from `LOVABLE-PROMPT.md`.
2. **Connect GitHub** — in Lovable: GitHub → Connect → Create repository. Clone that repo to your machine.
3. **Drop these files in** —
   - copy this folder's `assets/` into the repo at `public/assets/`
   - copy the 7 HTML files into a new repo folder called `reference/`
   - commit and push. Lovable syncs automatically.
4. **Port page by page** — paste **Prompt 2** from `LOVABLE-PROMPT.md` (once per page, starting with index). Lovable reads the real source from `reference/`, so nothing is reinvented from memory.
5. **Verify** — open Lovable's preview next to the local HTML file and compare. Anything off, tell Lovable: *"Compare against reference/<page>.html and match it exactly — do not redesign."*

## Why not just one big prompt?

The pages total ~470 KB of HTML — far past what a chat prompt holds. A prompt alone
makes Lovable *approximate* the design. The GitHub route hands it the literal source
code and assets, which is the only way "exact same graphics, fonts and animations"
actually happens.
