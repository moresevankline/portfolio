---
name: Evan Kline Mores
description: A laminated access pass. Web developer who knows how HR runs on SAP SuccessFactors.
colors:
  paper: "#f1efe9"
  card: "#ffffff"
  ink: "#111214"
  web: "#111214"
  ec: "#0f8f80"
  to: "#ffc93c"
  rep: "#4f6bed"
  err: "#b3261e"
  ok: "#0f6e5f"
typography:
  lede:
    fontFamily: "'Sofia Sans Condensed Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(3rem, 1.8rem + 4.4vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  name:
    fontFamily: "'Sofia Sans Condensed Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(3rem, 2rem + 3.4vw, 5rem)"
    fontWeight: 900
    lineHeight: 0.84
    letterSpacing: "-0.02em"
  display:
    fontFamily: "'Sofia Sans Condensed Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.75rem, 1.6rem + 3.6vw, 5rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Sofia Sans Condensed Variable', 'Arial Narrow', sans-serif"
    fontSize: "1.15rem"
    fontWeight: 800
    lineHeight: 1.3
  body:
    fontFamily: "'Sofia Sans Condensed Variable', 'Arial Narrow', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 450
    lineHeight: 1.45
    letterSpacing: "0em"
  label:
    fontFamily: "'Sofia Sans Condensed Variable', 'Arial Narrow', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "0.12em"
rounded:
  none: "0"
  slot: "999px"
spacing:
  xs: "0.3rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "2rem"
  xl: "3rem"
  gutter: "clamp(1rem, 4vw, 4rem)"
  section: "clamp(4rem, 9vw, 7rem)"
components:
  strap:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "3.5rem"
    padding: "0 clamp(1rem, 4vw, 4rem)"
  strap-link-hover:
    backgroundColor: "{colors.to}"
    textColor: "{colors.ink}"
    padding: "0.45rem 0.7rem"
  strap-link-current:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.to}"
    padding: "0.45rem 0.7rem"
  badge:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.5rem 1.5rem 1.25rem"
    width: "30rem"
  zone-web:
    backgroundColor: "{colors.web}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    padding: "0.55rem 0.7rem"
    height: "3.5rem"
  zone-ec:
    backgroundColor: "{colors.ec}"
    textColor: "#ffffff"
  zone-to:
    backgroundColor: "{colors.to}"
    textColor: "{colors.ink}"
  zone-rep:
    backgroundColor: "{colors.rep}"
    textColor: "#ffffff"
  button-primary:
    backgroundColor: "{colors.to}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.4rem"
  button-on-yellow:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.to}"
    padding: "0.75rem 1.4rem"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.25rem"
  section-heading:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.display}"
    padding: "0.15em 0.3em 0.05em"
  return-panel:
    backgroundColor: "{colors.to}"
    textColor: "{colors.ink}"
    padding: "clamp(1.5rem, 4vw, 3rem)"
  field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.6rem 0.75rem"
---

# Design System: Evan Kline Mores

## Overview

**Creative North Star: "The Laminated Access Pass"**

The page is a printed visitor pass for a building where web development and SAP SuccessFactors work side by side. Everything is ink on paper: a warm off-white ground, near-black type and borders, and four saturated zone colours that read like the access stripes on a real pass. The pass hangs from a black strap at a slight tilt. It holds Evan Kline Mores's name, the zones, and the way to make contact.

The feel is **loud, tactile, honest**. Every element is a boxed object with a hard edge and a physical, offset shadow, so it looks like something you could pick up and press. Nothing is soft, blurred or gradient-lit. Depth is cardboard depth: one object sitting on another. Type is set very large, condensed and uppercase, so a recruiter skimming for seconds still gets the name, the role and the SAP angle.

Hierarchy comes from scale, ink fills and colour blocks, not from greys. The layout is generous where it matters (the headline, the badge, the closing "If found" panel) and compact in the evidence (the zone cards and the certification rows).

**Key Characteristics:**
- Paper ground (#f1efe9) with ink (#111214) borders, text and shadows
- 3–4px solid borders on every container and control; square corners everywhere except the badge's hole-punch slot
- Hard offset shadows with zero blur that grow on hover and collapse on press
- Four zone colours (Web, EC Core, Time Off, Reporting), used as solid blocks
- One typeface, Sofia Sans Condensed, from weight 450 to 900, with uppercase for anything that labels or shouts

## Colors

A paper-and-ink base with four solid zone colours; yellow is the voice of action.

### Primary
- **Pass Yellow** (#ffc93c): The action colour. Copy email and Send buttons, the highlight behind "SAP SuccessFactors." in the headline, the Time Off zone, nav hover, the strap clasp, and the closing "If found" panel. On a yellow ground the button inverts to ink with yellow text.

### Secondary
- **EC Teal** (#0f8f80): The EC Core zone and its tag, and the left edge of the SuccessFactors certification row. White on EC Teal is about 4:1, so text on it stays large and heavy (the 900-weight zone label at 1.15rem or more).
- **Reporting Blue** (#4f6bed): The Reporting zone, the left edge of the Generative AI certification row, the current nav item's offset shadow, and every focus outline.

### Neutral
- **Pass Paper** (#f1efe9): Page ground, the strap bar, form field fill, and the text on inked section headings.
- **Laminate White** (#ffffff): The badge, zone cards, certification rows and the proof box. Objects sit on paper as white cards.
- **Press Ink** (#111214): Text, every border, every block shadow, the Web zone, inked section headings, the current nav item and the position line on the badge.
- **Error Red** (#b3261e) and **Sent Green** (#0f6e5f): Form status text only.

### Named Rules
**The Ink-Only Shadow Rule.** Shadows are always solid ink (or Reporting Blue on the current nav item). Never use a coloured or translucent shadow.

**The Zone Colour Rule.** The four zone colours belong to the four zones. Use them for the zone blocks, their tags, and the certification edge that matches each certification. Never use them as decoration elsewhere.

**The No-Grey Rule.** There are no grey text tiers. Secondary information is smaller or lighter in weight, never lighter in colour.

## Typography

**Display Font:** Sofia Sans Condensed Variable (with Arial Narrow, sans-serif)
**Body Font:** Sofia Sans Condensed Variable
**Label Font:** Sofia Sans Condensed Variable

**Character:** One condensed grotesque doing every job, from a 450-weight body to 900-weight uppercase that looks stamped onto the pass. The condensed width lets huge sizes fit a narrow column without wrapping into a wall.

### Hierarchy
- **Lede** (900, clamp(3rem, 1.8rem + 4.4vw, 6rem), 0.9, uppercase): The opening statement only. Max 12ch, balanced. Its key phrase sits on a Pass Yellow highlight.
- **Name** (900, clamp(3rem, 2rem + 3.4vw, 5rem), 0.84, uppercase): The name on the badge, stacked EVAN KLINE / MORES.
- **Display** (900, clamp(2.75rem, 1.6rem + 3.6vw, 5rem), 0.9, uppercase): Section headings, set in Pass Paper inside an ink block.
- **Title** (800, 1.15rem): Certification titles and the proof box.
- **Body** (450–600, 1.0625rem–1.1rem, 1.45): Zone descriptions and small print. Max 46–70ch.
- **Label** (800–900, 1.0625rem, 0.04–0.12em tracking, uppercase): Nav links, buttons, zones, tags and rule links.

### Named Rules
**The Stamp Rule.** Anything that labels, navigates or acts is uppercase at 800–900 weight with positive tracking. Running sentences are never uppercase.

## Layout

A single page with a sticky strap (3.5rem) over one content column. The column uses one horizontal gutter, `clamp(1rem, 4vw, 4rem)`, from the strap to the footer, so the headline, section headings and cards share one left edge.

- **Front (≥1101px):** Two columns, `minmax(0, 1fr) minmax(0, 30rem)`, with a `clamp(2rem, 6vw, 6rem)` gap and a minimum height of `calc(100svh - 7rem)`. The lede and proof box sit on the left, centred vertically; the hanging badge sits on the right.
- **Front (≤1100px):** One column, with the badge below the lede. The strap hides the name and spreads its four links across the width.
- **Sections:** `clamp(4rem, 9vw, 7rem)` apart. Access is a 2-up grid of cards from 760px up (1rem gap below, 1.25rem above). Certifications are a stack of full-width rows. The page closes with the yellow "If found" panel.
- **Phone (≤480px):** Nav links tighten to 0.4rem padding and 0.04em tracking. The main area clips horizontal overflow, so the tilted badge never widens the page.

## Elevation & Depth

Depth is physical and flat: white or coloured objects on paper, each with a solid ink shadow offset down and to the right with zero blur. Shadow size tells you how important or how pressable something is. It grows by 2px when you hover and drops to zero when you press.

### Shadow Vocabulary
- **Pass** (`box-shadow: 8px 8px 0 #111214`): The badge.
- **Panel** (`box-shadow: 10px 10px 0 #111214`): The closing "If found" panel.
- **Card** (`box-shadow: 6px 6px 0 #111214`): Access zone cards.
- **Proof** (`box-shadow: 5px 5px 0 #111214`): The proof box under the lede.
- **Control** (`box-shadow: 4px 4px 0 #111214`, hover `6px 6px 0`, press `0 0 0`): Buttons.
- **Chip** (`box-shadow: 3px 3px 0 #111214`, hover `5px 5px 0`): Zones on the badge and nav hover.
- **Current** (`box-shadow: 3px 3px 0 #4f6bed`): The current nav item.

### Named Rules
**The Press Rule.** Pressable objects lift 1–2px up and left on hover with a larger shadow, and move into their shadow on press (shadow goes to 0). Movement uses `translate`, 0.12s ease-out, and turns off under `prefers-reduced-motion`.

## Shapes

Square corners on everything: badge, cards, buttons, fields, tags and nav items. The only curve is the badge's hole-punch slot (999px). Borders are solid ink at 3px for controls and cards and 4px for the badge and the closing panel. Certification rows carry a 14px left edge in their zone colour. The badge is the one tilted object, rotated -2deg from its top edge.

## Components

### Buttons
Loud and pressable.
- **Shape:** Square (0), 3px ink border.
- **Primary:** Pass Yellow fill, ink label, 900 uppercase with 0.12em tracking, padding 0.75rem 1.4rem, Control shadow.
- **On yellow:** Inverted to an ink fill with a yellow label (inside the "If found" panel).
- **Hover / Active:** Follows the Press Rule. Disabled buttons drop to 0.6 opacity with no shadow.

### Rule links (LinkedIn, Verify on Credly, Send a message)
Uppercase 900 labels with a 4px currentColor underline drawn as a bottom border, and an inline arrow SVG for external links.

### Zones and tags
The zone blocks on the badge are 3.5rem tall, 2-up, with the label pinned bottom-left, a 3px border and a Chip shadow. The zone the reader is on gets a 3px ink outline. Tags in the Access cards are the same colours as small boxed labels.

### Cards / Containers
- **Corner Style:** Square.
- **Background:** Laminate White on paper; Pass Yellow for the closing panel.
- **Shadow Strategy:** See the Shadow Vocabulary.
- **Border:** 3px ink (4px for the badge and closing panel).
- **Internal Padding:** 1.25rem for cards, 1.1rem 1.25rem for certification rows.

### Inputs / Fields
3px ink border, Pass Paper fill, square corners, 0.6rem 0.75rem padding, labels above at 700 weight. Focus uses the global Reporting Blue outline.

### Navigation (the strap)
A sticky Pass Paper bar with a 3px ink bottom rule. On the left, the name is an ink block with yellow text; it's hidden at 1100px and below. Links are boxed labels with a transparent 3px border. On hover they get a yellow fill, an ink border and a Chip shadow. The current section is filled ink with a yellow label and a blue Current shadow, and it follows the scroll.

### Signature: the hanging pass
A 3.25rem black strap with a yellow clasp drops into a white pass tilted -2deg with the Pass shadow. The pass holds a hole-punch slot, the stacked name, an inked position line, the four zones, the contact block and a barcode drawn from the name's letters. It's the only tilted object on the page; don't tilt anything else.

## Do's and Don'ts

### Do:
- **Do** give every new container a solid ink border (3px) and a zero-blur ink offset shadow from the Shadow Vocabulary.
- **Do** keep the four zone colours tied to their zones and the matching certifications.
- **Do** set labels, buttons and navigation in uppercase 800–900 Sofia Sans Condensed with positive tracking.
- **Do** make pressable things follow the Press Rule, with a reduced-motion fallback.
- **Do** always show the full name, Evan Kline Mores, and keep the email assembled in the browser (never plain text).
- **Do** theme focus with the 3px Reporting Blue outline.

### Don't:
- **Don't** add rounded corners, gradients, blur, glass, or soft and coloured shadows.
- **Don't** use grey text tiers; use size and weight instead.
- **Don't** tilt anything other than the hanging pass.
- **Don't** invent client logos, metrics, testimonials, or a photo slot. PRODUCT.md forbids them.
- **Don't** bring back the dark Graphite & Teal palette; it was replaced by this system.
