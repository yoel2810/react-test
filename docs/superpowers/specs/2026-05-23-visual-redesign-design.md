# Visual Redesign — Dark Luxury Rose Gold

**Date:** 2026-05-23  
**Status:** Approved

## Direction

Upgrade every visible component to a modern "Dark Luxury" aesthetic with a Rose Gold accent palette. The site already uses Framer Motion and MUI — we keep both but replace all colour and style tokens.

## Design System

### Colour Palette

| Token | Value | Use |
|-------|-------|-----|
| `base` | `#0d0a12` | Page background |
| `surface` | `#160f1e` | Elevated sections |
| `raised` | `#1e1428` | Cards, inputs |
| `rose-gold` | `linear-gradient(135deg, #f4b8c1, #e8929e, #c9a96e)` | Headings, key accents |
| `accent-muted` | `rgba(232,146,158,0.15)` | Subtle fills |
| `glass-bg` | `rgba(255,255,255,0.04–0.07)` | Glass-morphism cards |
| `glass-border` | `rgba(244,184,193,0.18–0.25)` | Card borders |
| `body-text` | `rgba(255,255,255,0.55–0.70)` | Paragraph text |
| `muted-text` | `rgba(255,255,255,0.30–0.40)` | Labels, hints |

### Typography

- **Display / headings:** Playfair Display, 700 weight — rose gold gradient fill via `-webkit-background-clip: text`
- **Subheadings:** Playfair Display, italic 400 — `rgba(255,255,255,0.85)`
- **Body:** Inter, 300 weight — `rgba(255,255,255,0.55)`
- **Labels / caps:** Inter, 400 — `rgba(255,255,255,0.35)`, `letter-spacing: 0.15–0.2em`, `text-transform: uppercase`

### Shared Card Style (glass morphism)

```
background: rgba(255,255,255,0.04–0.07)
border: 1px solid rgba(244,184,193,0.18)
border-radius: 16–20px
backdrop-filter: blur(12px)
box-shadow: 0 0 40px rgba(232,146,158,0.06), inset 0 1px 0 rgba(255,255,255,0.06)
```

### Ambient Orbs

Sections use 2–3 `position: absolute` radial-gradient orbs (rose-pink and warm-gold tones, 150–350px) for depth. `pointer-events: none`.

---

## Components — Redesign Scope

### 1. Hero
- Background: multi-layer `linear-gradient(160deg, #0d0a12, #160f1e, #0f1428)`
- Name ("גלי"): large Playfair Display 700, rose gold gradient, subtle `drop-shadow` glow
- Headline: Playfair italic, white 85%
- Thin rose gold divider line between headline and body text
- Body text: Inter 300, white 45%
- Scroll CTA: circular border button with rose gold tint, animated bounce
- Ambient orbs: top-right (rose pink), bottom-left (warm gold)

### 2. LockScreen / CountdownTimer
- Background: same dark base as Hero (full viewport)
- Section label: Inter caps, muted
- Timer units: glass morphism cards (72×88px, 14px radius) with rose gold value text and subtle outer glow
- Section title: Playfair Display, white 85%
- "Birthday reached" message: rose gold gradient text, larger Playfair

### 3. Gallery
- Section background: `surface` (#160f1e) with ambient orbs
- Section title + subtitle: same type system
- Grid cards: glass morphism, image fills card top, caption underneath in Inter 300
- Hover: subtle `scale(1.02)` + border brightens to `rgba(244,184,193,0.4)`
- Lightbox: full-screen dark overlay, image centred, nav arrows as circular glass buttons

### 4. Letters
- Section background: `raised` (#1e1428) variant
- Accordion rows: glass card, Playfair title, rose gold chevron icon
- Expanded body: Inter 300, white 55%, slight indent
- Hover row: border brightens

### 5. Surprise
- Section text same type system
- Trigger word: rose gold gradient underline, cursor pointer, subtle shimmer on hover
- Overlay modal: glass card on dark backdrop, rose gold emoji/title, Inter 300 body

### 6. MusicPlayer (no visible UI — no change needed)

---

## Implementation Approach

Go component by component in order: Hero → CountdownTimer/LockScreen → Gallery → Letters → Surprise.  
For each component:
1. Update `*.styles.ts` with new MUI `sx` tokens
2. Update component TSX only where structural changes are needed (new orbs, dividers, etc.)
3. Keep all existing logic and props untouched

## Font Loading

`index.html` currently loads Frank Ruhl Libre + Heebo. These must be replaced with:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
```

This is the first step of implementation (before touching any component).

## Out of Scope

- Adding new features or routes
- Changing Hebrew copy
- Modifying MusicPlayer (invisible)
