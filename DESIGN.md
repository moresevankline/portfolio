---
name: Evan Kline Mores
description: A staff ID badge on a lanyard. Web developer who knows how HR runs on SAP SuccessFactors.
colors:
  ground: "#121416"
  pvc: "#1d2024"
  ink: "#ecedee"
  ink-2: "#a7adb4"
  strap: "#2a2f35"
  accent: "#6fd3c3"
  hair: "#33383e"
  placeholder: "#8b9198"
  ec: "#17786d"
  to: "#c9a640"
  rep: "#55667a"
  on-zone: "#ffffff"
  ok: "#7ad7a3"
  err: "#ff9a90"
typography:
  name:
    fontFamily: "'Sofia Sans Condensed Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(3rem, 2rem + 3.4vw, 5.25rem)"
    fontWeight: 850
    lineHeight: 0.86
    letterSpacing: "-0.02em"
  name-compact:
    fontFamily: "'Sofia Sans Condensed Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.75rem, 1.5rem + 2.6vw, 3.75rem)"
    fontWeight: 850
    lineHeight: 0.86
    letterSpacing: "-0.02em"
  display:
    fontFamily: "'Sofia Sans Condensed Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.75rem, 1.6rem + 3.6vw, 5.25rem)"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "'Sofia Sans Condensed Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.75rem, 1.6rem + 3.6vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.015em"
  label:
    fontFamily: "'Sofia Sans Condensed Variable', 'Arial Narrow', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "0.14em"
  body:
    fontFamily: "'Sofia Sans Condensed Variable', 'Arial Narrow', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 450
    lineHeight: 1.45
    letterSpacing: "0em"
  body-strong:
    fontFamily: "'Sofia Sans Condensed Variable', 'Arial Narrow', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.45
rounded:
  tag: "0.3rem"
  control: "0.35rem"
  card: "1.4rem"
  slot: "999px"
spacing:
  xs: "0.3rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "2rem"
  xl: "3rem"
  gutter: "clamp(1rem, 4vw, 4rem)"
  section: "clamp(3rem, 8vw, 6rem)"
components:
  strap:
    backgroundColor: "{colors.strap}"
    textColor: "{colors.accent}"
    typography: "{typography.label}"
    height: "3rem"
    padding: "0 clamp(1rem, 4vw, 4rem)"
  strap-link-current:
    textColor: "{colors.ink}"
  badge:
    backgroundColor: "{colors.pvc}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "1.25rem 1.75rem 1.5rem"
    width: "30rem"
  zone-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.pvc}"
    typography: "{typography.label}"
    padding: "0.6rem 0.75rem"
    height: "4.5rem"
  zone-ec:
    backgroundColor: "{colors.ec}"
    textColor: "#ffffff"
  zone-to:
    backgroundColor: "{colors.to}"
    textColor: "{colors.ground}"
  zone-rep:
    backgroundColor: "{colors.rep}"
    textColor: "#ffffff"
  tag:
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "0.4rem 0.75rem"
  button-send:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.pvc}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.75rem"
  button-send-hover:
    backgroundColor: "{colors.pvc}"
    textColor: "{colors.ink}"
  button-copy:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ground}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.75rem"
  button-copy-hover:
    backgroundColor: "{colors.pvc}"
    textColor: "{colors.ink}"
  input-field:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.control}"
    padding: "0.6rem 0.75rem"
  link-rule:
    typography: "{typography.label}"
    padding: "0.35rem 0"
---

# Design System: Evan Kline Mores

## Overview

**Creative North Star: "The Staff ID Badge"**

The whole site is one staff badge hanging from a lanyard. The page is a graphite ground; a single dark printed-PVC card, one step lighter than the ground, hangs from a steel clip on a slate woven strap printed in teal, and the back of the site is the reverse of that card, a second sheet of the same PVC rising from the bottom with rounded top corners. Four access-zone bands (light ink, teal, muted gold, slate) are the only spot colours; everything else is light ink on graphite or light ink on PVC. The mood is calm and enterprise: dark, low-chroma, with one teal voice.

Hierarchy comes from one condensed face pushed through weight and tracking: tight, heavy, near-solid display lines against wide-tracked uppercase labels, the way a badge printer sets a name over a job title. States are drawn in line, not hue: a double rule on hover, a dashed punch outline on focus and disabled, a solid rule when current. Motion is physical and rare: the badge swings once from its clip and settles, and the foil strip catches light under the pointer. Behind the front, faint ink particles (0.6–2px, 12–52% alpha, about one per 12,000px², max 140) drift slowly upward on a canvas and shift a little with the pointer, bigger dots more, for depth. The loop pauses off screen and in hidden tabs; reduced motion draws them once and holds them still.

**Key Characteristics:**
- Dark graphite ground (color-scheme: dark); light ink and dark PVC carry everything else, teal is the one accent.
- One printed card object with real material cues: punched slot, steel clip, soft hanging shadow, foil strip, barcode.
- One condensed variable face, two size families (display, text), ranked by weight 450 to 850 and tracking -0.02em to 0.3em.
- Line-form states only; colour never signals state alone.
- Exactly one reflective accent.

## Colors

"Graphite & Teal": a flat, dark, low-chroma palette (cool greys at hue ~250) with one light ink, one teal accent, and four muted zone inks. Chosen by the user on 2026-11-07 to replace the original lanyard orange.

### Primary
- **Strap Teal** (accent): The strap's and lanyard's printed text, the Copy email fill, text selection, the page caret. The only saturated colour outside the zones; 7.6:1 on the strap, 10.4:1 under graphite text.

### Secondary
- **Zone Teal** (ec): EC Core zone band and tag, white text (5.3:1).
- **Zone Gold** (to): Time Off zone band and tag, graphite text (7.9:1).
- **Zone Slate** (rep): Reporting zone band and tag, white text (5.9:1).

### Neutral
- **Graphite** (ground): The page ground, the slot cut-out, field fills, text on teal and gold, the browser theme colour. It is the surface, not an accent.
- **Dark PVC** (pvc): The badge face and the back sheet, one lift above graphite; inverse text on light ink.
- **Badge Ink** (ink): All primary text (15.8:1 on graphite, 14:1 on PVC), the Web zone, 2px rules, the barcode (currentColor), focus outlines, field borders, Send fill.
- **Faded Ink** (ink-2): Secondary text: position line, intros, small print, disabled and warning states (7.2:1 on PVC).
- **Slate Strap** (strap): The sticky strap and the lanyard; scrollbar thumb.
- **Hairline** (hair): 1px row dividers and the small-print rule on PVC. Structural only, never text.
- **Placeholder Grey** (placeholder): Field placeholders only (5.8:1 on graphite).
- **Status Green / Status Red** (ok / err): Form status text only, never surfaces (9.4:1 / 8:1 on PVC).

### Named Rules
**The Four Zones Rule.** Light ink, teal, gold and slate belong to the four access zones and nothing else. Each zone keeps its colour wherever it appears (band on the badge, tag on the back).

**The Drenched Ground Rule.** Graphite is the field the badge hangs in, and dark PVC is the only lift above it. Text on graphite or PVC is light ink or faded ink; text on the light surfaces (teal accent, gold zone) is graphite.

**The One Teal Voice Rule.** Strap Teal marks the strap, the lanyard, Copy email, selection and caret. It never becomes running text or a content rule, and never signals state by hue; the strap's line-form states simply draw in its teal.

## Typography

**Display Font:** Sofia Sans Condensed Variable (with Arial Narrow, sans-serif), self-hosted via @fontsource-variable
**Body Font:** the same face

**Character:** A single condensed grotesque doing both jobs, like a badge printer with one font cartridge. Weight and tracking do the ranking.

### Hierarchy
- **Name** (850, clamp 3–5.25rem, 0.86, uppercase): The name on the badge; the largest type on the page. On short desktops (1101px+, height ≤ 820px) it compacts to clamp 2.75–3.75rem so the contact block stays in the first viewport; this is the only exception to the Two Sizes Rule.
- **Display** (850, the display clamp, 0.92, uppercase, balanced): Section heads on the back sheet.
- **Lede** (800, the display clamp, 0.95, sentence case, max 12ch): The one positioning line on graphite.
- **Label** (700–800, text size, 0.06–0.14em, uppercase): Strap links, position line, zones, tags, buttons, rule links, form title. The lanyard weave runs 700 at 0.3em.
- **Body** (450 base, 600 for running copy and field labels, 800 for cert titles; text size, 1.45, max 60–70ch).

### Named Rules
**The Two Sizes Rule.** Type lives at display scale or text scale (1.0625rem). There is no intermediate headline or title step; rank inside a size family is by weight and tracking.

**The Tight-Over-Wide Rule.** Display lines set tight (negative tracking, sub-1 line-height); labels set wide (0.06em and up, uppercase). Never mix the two on one line.

## Layout

Side gutters are fluid (clamp 1rem–4rem). The front is a two-column grid: the lede and proof on the left, the hanging badge in a column capped at 30rem on the right, spanning the full first viewport (min-height 100svh minus the 3rem strap). The back sheet is inset from the viewport edge (clamp 0.5–2rem) with content capped at 68rem; sections are spaced by clamp(3rem, 8vw, 6rem). Lists (access zones, certifications) are ruled tables: a 2px light-ink rule on top, 1px hairline rows, 1.25rem row padding; access rows are a 12rem term column plus description.

Below 1100px the front collapses to one column: the lede runs full width, the badge centres under it up to 30rem with a gap above it that grows with viewport width (1.5rem + 8vw) so the shallow 9° lanyard clears the proof line, the strap drops the name and spreads its links, and access rows stack. On short desktops (1101px+, height ≤ 820px) the badge compacts so its contact block stays in the first viewport. Below 420px the badge and its full-bleed strips tighten to 1.1rem insets. Below 390px the zone bands wrap to a 2×2 grid (four labels at text size no longer fit); below 360px the strap also tightens its tracking and gaps. Display headings never use non-breaking spaces, so they always wrap inside the viewport.

## Elevation & Depth

Flat print everywhere except the hanging card. The front's graphite carries a particle canvas (`.particles`, z-index -1 inside an isolated `.front`): randomly scattered dots, never a grid or lines, since fine repeating stripes strained the owner's eyes. The badge is the only lifted object, separated from graphite by its one-step-lighter PVC and a soft neutral black hanging shadow; the punched slot (graphite showing through) is the only inset. Everything on the back sheet is flat and ruled.

### Shadow Vocabulary
- **Hanging card** (`box-shadow: 0 1.5rem 3rem -1rem rgb(0 0 0 / 0.55), 0 0.25rem 0.5rem rgb(0 0 0 / 0.3)`): The front badge only.
- **Punched slot** (`box-shadow: inset 0 2px 3px rgb(0 0 0 / 0.35)`): The slot cut-out on the badge and the back sheet.

### Named Rules
**The One Card Rule.** Only the badge casts a shadow. Content blocks are ruled, never carded.

## Shapes

Rounded-rectangle PVC (1.4rem corners) for the badge and the back sheet's top edge; a pill slot (999px); small, nearly square corners on controls (0.35rem) and tags (0.3rem). Zone bands and the foil strip are square and full-bleed to the card edge. Rules carry structure: 2px light ink above lists, 1px hairline between rows, 4px underline on action links, 6px rules on zone bands.

## Components

### Buttons
- **Shape:** Near-square corners (0.35rem), 2px border, uppercase label at 0.14em.
- **Send (primary):** Light ink fill and border, PVC text; hover inverts to PVC fill with ink text; active nudges down 1px.
- **Copy email:** Teal fill and border, graphite text; hover turns to PVC fill, ink text and ink border.
- **Disabled:** Transparent, faded-ink text, dashed border, not-allowed cursor.
- **Focus:** 3px dashed light-ink outline, 3px offset (global).

### Rule links (Verify on Credly, LinkedIn, Send a message)
- Uppercase 800 label at 0.1em with a 4px solid underline rule; hover turns it to a 6px double rule. External links carry a small inline SVG arrow and a screen-reader "opens in a new tab".

### Zone bands
- Four equal square cells full-bleed across the badge, min-height 4.5rem, label bottom-aligned. Hover: double rule on top. Current (while its access row is being read): a solid 4px rule under the label, inside the band (a bottom-edge rule in the Web band's dark ink merged into the card and read as a shorter band); cleared once the Access section leaves view. Focus: dashed outline inset 6px in the band's own text colour.

### Tags
- The zone colour (with its zone's text colour) as a small inline chip (0.3rem corners, uppercase 800 at 0.08em), used as the access-row term.

### Inputs / Fields
- **Style:** Graphite fill (a well cut into the PVC), 2px light-ink border, 0.35rem corners, inherited face, placeholder grey hints, light-ink caret; label above at 600.
- **Focus:** global dashed light-ink outline at 2px offset.
- **Disabled:** Transparent fill, dashed faded-ink border.
- **Status line:** 600 weight; soft red for error, soft green for success, faded ink for warning.

### Navigation (the strap)
- Sticky slate band, 3rem tall, teal uppercase labels at 700 / 0.14em. Hover: 4px double underline. Current section: solid 4px underline and light-ink text. Mobile: name hidden, links spread full width.

### Signature: the hanging badge
- Slot, steel clip, foil strip (the one reflective accent: a quiet teal-and-silver foil gradient (#8e9ba5, #c4cfd5, #6fd3c3, #3f8f85, #b7c3ca) plus a soft white glint at 60% driven by pointer position), name, position, zone bands, the contact block (the message form once PUBLIC_WEB3FORMS_KEY is set; until then a 'Get in touch' block with Copy email and LinkedIn, never a disabled form), and a light-ink barcode generated from the name. Enters with a single 1.6s swing (cubic-bezier(0.22, 1, 0.36, 1)) from a pivot above the card; reduced motion removes the swing and the foil tracking.

## Do's and Don'ts

### Do:
- **Do** signal link, strap and zone state with line form: double rule on hover, dashed outline on focus and disabled, solid rule when current. Filled buttons hover by inverting fill and text.
- **Do** keep text at display scale or 1.0625rem and rank by weight (450–850) and tracking.
- **Do** keep each zone colour bound to its zone, wherever the zone appears.
- **Do** give every motion a reduced-motion off switch.
- **Do** build lists as ruled rows (2px light-ink top rule, 1px hairlines).
- **Do** take every colour from the :root tokens; the theme is dark (color-scheme: dark, theme-color graphite).

### Don't:
- **Don't** add a second reflective or gradient surface; the foil strip is the only one.
- **Don't** add a second shadowed object; only the badge hangs.
- **Don't** signal hover, focus or current by a hue change alone.
- **Don't** introduce a second typeface or intermediate heading sizes.
- **Don't** use the zone colours for decoration, buttons or status.
- **Don't** spend Strap Teal beyond the strap, lanyard, Copy email, selection and caret.
