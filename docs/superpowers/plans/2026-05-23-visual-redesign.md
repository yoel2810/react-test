# Visual Redesign — Dark Luxury Rose Gold Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle all visible components to a Dark Luxury aesthetic with a Rose Gold accent palette.

**Architecture:** Each component's styles live in its own `*.styles.ts` file (MUI `sx` objects). This plan rewrites those style files and makes minimal structural changes to `.tsx` files (new divider element in Hero, icon colours in Letters). No logic or props change.

**Tech Stack:** React 18, TypeScript, MUI v6, Framer Motion, Vite

---

## Design Tokens (reference for every task)

```
base bg:        #0d0a12
surface bg:     #160f1e
raised bg:      #1e1428
rose-gold grad: linear-gradient(135deg, #f4b8c1 0%, #e8929e 45%, #c9a96e 100%)
glass bg:       rgba(255,255,255,0.05)
glass border:   rgba(244,184,193,0.18)
body text:      rgba(255,255,255,0.55)
muted text:     rgba(255,255,255,0.35)
```

---

## Task 1: Font Setup + Global Background

**Files:**
- Modify: `index.html`
- Modify: `src/index.css`

- [ ] **Step 1: Replace font link in `index.html`**

Replace the existing Google Fonts `<link>` tag (Frank Ruhl Libre + Heebo) with:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
```

Full updated `<head>` section:
```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>יום הולדת שמח גלי 🎂</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
</head>
```

- [ ] **Step 2: Update body background in `src/index.css`**

Change `background-color: #faf8f5;` to `background-color: #0d0a12;` so there are no white flashes between dark sections:

```css
body {
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #0d0a12;
}
```

- [ ] **Step 3: Type-check**

```bash
npm run build
```

Expected: exits 0 with no TypeScript errors.

- [ ] **Step 4: Commit**

```bash
git add index.html src/index.css
git commit -m "style: switch fonts to Playfair Display + Inter, set dark body bg"
```

---

## Task 2: Hero

**Files:**
- Modify: `src/components/Hero/Hero.styles.ts`
- Modify: `src/components/Hero/Hero.tsx`

- [ ] **Step 1: Rewrite `Hero.styles.ts`**

Replace the entire file with:

```ts
import type { SxProps, Theme } from '@mui/material';

export const heroSectionSx: SxProps<Theme> = {
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(160deg, #0d0a12 0%, #160f1e 40%, #0f1428 100%)',
  overflow: 'hidden',
  px: { xs: 3, md: 6 },
  textAlign: 'center',
};

export const heroNameSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 700,
  fontSize: { xs: '4rem', sm: '5.5rem', md: '7rem' },
  background: 'linear-gradient(135deg, #f4b8c1 0%, #e8929e 45%, #c9a96e 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '0.05em',
  lineHeight: 1,
  mb: 1.5,
  filter: 'drop-shadow(0 0 20px rgba(232,146,158,0.3))',
};

export const heroHeadlineSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: { xs: '1.1rem', sm: '1.5rem', md: '1.85rem' },
  color: 'rgba(255,255,255,0.85)',
  mb: 2,
};

export const heroDividerSx: SxProps<Theme> = {
  width: 80,
  height: '1px',
  background: 'linear-gradient(90deg, transparent, rgba(244,184,193,0.5), transparent)',
  mx: 'auto',
  mb: 3,
};

export const heroSubtextSx: SxProps<Theme> = {
  fontFamily: '"Inter", sans-serif',
  fontWeight: 300,
  fontSize: { xs: '0.9rem', sm: '1rem' },
  color: 'rgba(255,255,255,0.45)',
  mb: { xs: 5, md: 6 },
  maxWidth: 480,
  lineHeight: 1.8,
};

export const scrollCtaSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 1.5,
  cursor: 'pointer',
};

export const scrollTextSx: SxProps<Theme> = {
  fontSize: '0.6rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.3)',
};

export const scrollArrowSx: SxProps<Theme> = {
  width: 36,
  height: 36,
  borderRadius: '50%',
  border: '1px solid rgba(244,184,193,0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgba(244,184,193,0.6)',
  transition: 'border-color 0.3s, color 0.3s',
  '&:hover': {
    borderColor: 'rgba(244,184,193,0.7)',
    color: 'rgba(244,184,193,1)',
  },
};

export const floatingOrb1Sx: SxProps<Theme> = {
  position: 'absolute',
  width: { xs: 250, md: 420 },
  height: { xs: 250, md: 420 },
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(244,184,193,0.13) 0%, transparent 70%)',
  top: '-10%',
  right: '-5%',
  pointerEvents: 'none',
};

export const floatingOrb2Sx: SxProps<Theme> = {
  position: 'absolute',
  width: { xs: 180, md: 300 },
  height: { xs: 180, md: 300 },
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%)',
  bottom: '10%',
  left: '-5%',
  pointerEvents: 'none',
};
```

- [ ] **Step 2: Update `Hero.tsx`**

Replace the entire file with:

```tsx
import { Box, Typography } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { motion } from "framer-motion";
import type { HeroProps } from "./Hero.types";
import {
  heroSectionSx,
  heroNameSx,
  heroHeadlineSx,
  heroDividerSx,
  heroSubtextSx,
  scrollCtaSx,
  scrollTextSx,
  scrollArrowSx,
  floatingOrb1Sx,
  floatingOrb2Sx,
} from "./Hero.styles";

function fadeUpProps(delay: number) {
  return {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  };
}

export default function Hero({
  name = "Gali",
  targetSectionId = "countdown",
}: HeroProps) {
  const scrollToNext = () => {
    document
      .getElementById(targetSectionId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box component="section" id="hero" sx={heroSectionSx}>
      <Box sx={floatingOrb1Sx} />
      <Box sx={floatingOrb2Sx} />

      <motion.div {...fadeUpProps(0)}>
        <Typography sx={heroNameSx}>{name}</Typography>
      </motion.div>

      <motion.div {...fadeUpProps(0.2)}>
        <Typography sx={heroHeadlineSx}>יום הולדת שמח, מיי לאב ✨</Typography>
      </motion.div>

      <motion.div {...fadeUpProps(0.3)}>
        <Box sx={heroDividerSx} />
      </motion.div>

      <motion.div {...fadeUpProps(0.4)}>
        <Typography sx={heroSubtextSx}>
          אני כל כך שרוף עלייך, את לא מבינה אפילו כמה, לדבר איתך עושה לי את היום
          (ושלא נדבר על לראות אותך). מקווה שזה לא קיצ'י מדי. אני מאחל לך את הכל
          הטוב שבעולם ואני רוצה שרק תחייכי כל היום ותהי מאושרת.
        </Typography>
      </motion.div>

      <motion.div
        {...fadeUpProps(0.7)}
        style={{ cursor: "pointer" }}
        onClick={scrollToNext}
      >
        <Box sx={scrollCtaSx}>
          <Typography sx={scrollTextSx}>גלול לגלות</Typography>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
              ease: "easeInOut" as const,
            }}
          >
            <Box sx={scrollArrowSx}>
              <KeyboardArrowDown />
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
}
```

- [ ] **Step 3: Type-check**

```bash
npm run build
```

Expected: exits 0.

- [ ] **Step 4: Visual check**

```bash
npm run dev
```

Open http://localhost:5173. The Hero should show:
- Near-black gradient background
- Large rose-gold gradient name ("גלי")
- Italic white headline
- Thin glowing rose-pink divider line
- Faint body text
- Circular border scroll arrow at bottom

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero/Hero.styles.ts src/components/Hero/Hero.tsx
git commit -m "style: Hero — dark luxury rose gold redesign"
```

---

## Task 3: CountdownTimer (+ LockScreen)

**Files:**
- Modify: `src/components/CountdownTimer/CountdownTimer.styles.ts`

LockScreen is just a wrapper around CountdownTimer, so it gets the new look for free.

- [ ] **Step 1: Rewrite `CountdownTimer.styles.ts`**

Replace the entire file with:

```ts
import type { SxProps, Theme } from '@mui/material';

export const sectionSx: SxProps<Theme> = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(160deg, #0d0a12 0%, #160f1e 50%, #0f1428 100%)',
  px: { xs: 3, md: 6 },
  py: { xs: 8, md: 10 },
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
};

export const sectionTitleSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 600,
  fontSize: { xs: '2rem', md: '2.75rem' },
  color: 'rgba(255,255,255,0.85)',
  mb: 1,
};

export const sectionSubtitleSx: SxProps<Theme> = {
  fontFamily: '"Inter", sans-serif',
  fontWeight: 300,
  color: 'rgba(255,255,255,0.35)',
  mb: { xs: 5, md: 7 },
  fontSize: { xs: '0.85rem', md: '0.95rem' },
  letterSpacing: '0.1em',
};

export const timerGridSx: SxProps<Theme> = {
  display: 'flex',
  gap: { xs: 2, sm: 3, md: 4 },
  flexWrap: 'wrap',
  justifyContent: 'center',
};

export const unitCardSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: { xs: 80, sm: 110, md: 140 },
  height: { xs: 90, sm: 120, md: 155 },
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(244,184,193,0.2)',
  borderRadius: '14px',
  backdropFilter: 'blur(12px)',
  boxShadow: '0 0 24px rgba(232,146,158,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
};

export const unitValueSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 700,
  fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
  background: 'linear-gradient(135deg, #f4b8c1 0%, #e8929e 45%, #c9a96e 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  lineHeight: 1,
};

export const unitLabelSx: SxProps<Theme> = {
  fontFamily: '"Inter", sans-serif',
  fontWeight: 400,
  fontSize: { xs: '0.6rem', sm: '0.7rem' },
  color: 'rgba(255,255,255,0.35)',
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  mt: 0.5,
};

export const birthdayMessageSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontStyle: 'italic',
  fontWeight: 700,
  fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
  background: 'linear-gradient(135deg, #f4b8c1 0%, #e8929e 45%, #c9a96e 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  filter: 'drop-shadow(0 0 20px rgba(232,146,158,0.4))',
};
```

- [ ] **Step 2: Type-check**

```bash
npm run build
```

Expected: exits 0.

- [ ] **Step 3: Visual check**

In the dev server, temporarily set `BIRTHDAY` in `src/App.tsx` to a future date (e.g., `"2099-01-01T00:00:00"`) so the lock screen / countdown renders instead of the main site. Check that the countdown cards have the rose gold numbers on a dark background. Revert the date change immediately after.

- [ ] **Step 4: Commit**

```bash
git add src/components/CountdownTimer/CountdownTimer.styles.ts
git commit -m "style: CountdownTimer — dark glass cards with rose gold numbers"
```

---

## Task 4: Gallery + Lightbox

**Files:**
- Modify: `src/components/Gallery/Gallery.styles.ts`
- Modify: `src/components/Gallery/Lightbox/Lightbox.styles.ts`

- [ ] **Step 1: Rewrite `Gallery.styles.ts`**

Replace the entire file with:

```ts
import type { SxProps, Theme } from '@mui/material';

export const sectionSx: SxProps<Theme> = {
  minHeight: '100vh',
  px: { xs: 2, sm: 4, md: 8 },
  py: { xs: 8, md: 10 },
  background: 'linear-gradient(180deg, #160f1e 0%, #0d0a12 100%)',
  position: 'relative',
  overflow: 'hidden',
};

export const headerSx: SxProps<Theme> = {
  textAlign: 'center',
  mb: { xs: 5, md: 7 },
  position: 'relative',
  zIndex: 1,
};

export const titleSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 700,
  fontSize: { xs: '2rem', md: '2.75rem' },
  background: 'linear-gradient(135deg, #f4b8c1 0%, #e8929e 45%, #c9a96e 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  mb: 1,
};

export const subtitleSx: SxProps<Theme> = {
  fontFamily: '"Inter", sans-serif',
  fontWeight: 300,
  color: 'rgba(255,255,255,0.4)',
  fontSize: { xs: '0.9rem', md: '1rem' },
};

export const gridSx: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: {
    xs: '1fr',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)',
  },
  gap: { xs: 2, sm: 3 },
  position: 'relative',
  zIndex: 1,
};

export const cardSx: SxProps<Theme> = {
  borderRadius: '20px',
  overflow: 'hidden',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(244,184,193,0.18)',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
  backdropFilter: 'blur(12px)',
  boxShadow: '0 0 30px rgba(232,146,158,0.05)',
  '&:hover': {
    transform: 'scale(1.02)',
    borderColor: 'rgba(244,184,193,0.4)',
    boxShadow: '0 8px 40px rgba(232,146,158,0.15)',
  },
};

export const imageWrapSx: SxProps<Theme> = {
  aspectRatio: '4/3',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #2a1535 0%, #1a0d28 50%, #0f1a2e 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const captionSx: SxProps<Theme> = {
  px: 2,
  py: 1.5,
  fontFamily: '"Inter", sans-serif',
  fontWeight: 300,
  fontSize: '0.8rem',
  color: 'rgba(255,255,255,0.5)',
  fontStyle: 'italic',
};
```

- [ ] **Step 2: Rewrite `Lightbox.styles.ts`**

Replace the entire file with:

```ts
import type { SxProps, Theme } from "@mui/material";

export const dialogPaperSx: SxProps<Theme> = {
  background: 'rgba(13,10,18,0.97)',
  border: '1px solid rgba(244,184,193,0.12)',
  boxShadow: '0 0 80px rgba(232,146,158,0.1)',
  m: 2,
  overflow: 'hidden',
  borderRadius: '20px',
};

export const contentBoxSx: SxProps<Theme> = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  p: { xs: 4, sm: 6 },
};

export const imageWrapperSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 200,
  minWidth: 200,
};

export const imageSx: SxProps<Theme> = {
  maxHeight: 'calc(100vh - 200px)',
  maxWidth: '100%',
  objectFit: 'contain',
  display: 'block',
  borderRadius: '8px',
};

export const imageLoadingSx: SxProps<Theme> = {
  ...imageSx,
  display: 'none',
};

export const loaderSx: SxProps<Theme> = {
  color: 'rgba(244,184,193,0.7)',
};

export const captionSx: SxProps<Theme> = {
  textAlign: 'center',
  color: 'rgba(255,255,255,0.6)',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 300,
  fontStyle: 'italic',
  fontSize: '0.9rem',
  mt: 2,
  px: 2,
};

export const prevArrowSx: SxProps<Theme> = {
  position: 'absolute',
  left: 8,
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'rgba(244,184,193,0.7)',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(244,184,193,0.2)',
  borderRadius: '50%',
  '&:hover': {
    background: 'rgba(244,184,193,0.1)',
    borderColor: 'rgba(244,184,193,0.4)',
  },
};

export const nextArrowSx: SxProps<Theme> = {
  position: 'absolute',
  right: 8,
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'rgba(244,184,193,0.7)',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(244,184,193,0.2)',
  borderRadius: '50%',
  '&:hover': {
    background: 'rgba(244,184,193,0.1)',
    borderColor: 'rgba(244,184,193,0.4)',
  },
};
```

- [ ] **Step 3: Type-check**

```bash
npm run build
```

Expected: exits 0.

- [ ] **Step 4: Visual check**

In the dev server, scroll to the Gallery section. Cards should have dark glass backgrounds with rose gold borders on hover. Open a photo — lightbox should be near-black with a subtle rose gold border and pink-tinted arrow buttons.

- [ ] **Step 5: Commit**

```bash
git add src/components/Gallery/Gallery.styles.ts src/components/Gallery/Lightbox/Lightbox.styles.ts
git commit -m "style: Gallery + Lightbox — dark glass cards, rose gold lightbox"
```

---

## Task 5: Letters

**Files:**
- Modify: `src/components/Letters/Letters.styles.ts`
- Modify: `src/components/Letters/Letters.tsx` (icon colour only)

- [ ] **Step 1: Rewrite `Letters.styles.ts`**

Replace the entire file with:

```ts
import type { SxProps, Theme } from '@mui/material';

export const sectionSx: SxProps<Theme> = {
  minHeight: '100vh',
  px: { xs: 2, sm: 4, md: 8 },
  py: { xs: 8, md: 10 },
  background: 'linear-gradient(180deg, #1e1428 0%, #160f1e 100%)',
  position: 'relative',
  overflow: 'hidden',
};

export const headerSx: SxProps<Theme> = {
  textAlign: 'center',
  mb: { xs: 5, md: 7 },
  position: 'relative',
  zIndex: 1,
};

export const titleSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 700,
  fontSize: { xs: '2rem', md: '2.75rem' },
  background: 'linear-gradient(135deg, #f4b8c1 0%, #e8929e 45%, #c9a96e 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  mb: 1,
};

export const subtitleSx: SxProps<Theme> = {
  fontFamily: '"Inter", sans-serif',
  fontWeight: 300,
  color: 'rgba(255,255,255,0.4)',
  fontSize: { xs: '0.9rem', md: '1rem' },
};

export const listSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: { xs: 2, md: 2.5 },
  maxWidth: 760,
  mx: 'auto',
  position: 'relative',
  zIndex: 1,
};

export const cardSx: SxProps<Theme> = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(244,184,193,0.18)',
  borderRadius: '16px',
  overflow: 'hidden',
  backdropFilter: 'blur(12px)',
  boxShadow: '0 0 30px rgba(232,146,158,0.05)',
};

export const cardHeaderSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  px: { xs: 2.5, md: 3 },
  py: 2,
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'background 0.2s',
  '&:hover': {
    background: 'rgba(244,184,193,0.05)',
  },
};

export const cardTitleSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 600,
  fontSize: { xs: '1rem', md: '1.15rem' },
  color: 'rgba(255,255,255,0.88)',
};

export const cardBodySx: SxProps<Theme> = {
  px: { xs: 2.5, md: 3 },
  pb: { xs: 2.5, md: 3 },
  fontFamily: '"Inter", sans-serif',
  fontWeight: 300,
  lineHeight: 1.9,
  color: 'rgba(255,255,255,0.55)',
  fontSize: { xs: '0.9rem', md: '0.95rem' },
  whiteSpace: 'pre-wrap',
};
```

- [ ] **Step 2: Update icon colours in `Letters.tsx`**

The expand/collapse icons have a hardcoded navy colour. Change both to rose pink.

Find lines 39 and 41 in `Letters.tsx`:
```tsx
<ExpandLess sx={{ color: "#003366" }} />
...
<ExpandMore sx={{ color: "#003366" }} />
```

Replace both with:
```tsx
<ExpandLess sx={{ color: "rgba(244,184,193,0.7)" }} />
...
<ExpandMore sx={{ color: "rgba(244,184,193,0.7)" }} />
```

- [ ] **Step 3: Type-check**

```bash
npm run build
```

Expected: exits 0.

- [ ] **Step 4: Visual check**

Scroll to the Letters section. The accordion rows should sit on a dark purple background with subtle glass borders. Expand a letter — body text should be soft white on dark. The chevron icon should be rose pink.

- [ ] **Step 5: Commit**

```bash
git add src/components/Letters/Letters.styles.ts src/components/Letters/Letters.tsx
git commit -m "style: Letters — dark glass accordion with rose gold accents"
```

---

## Task 6: Surprise

**Files:**
- Modify: `src/components/Surprise/Surprise.styles.ts`

- [ ] **Step 1: Rewrite `Surprise.styles.ts`**

Replace the entire file with:

```ts
import type { SxProps, Theme } from '@mui/material';

export const sectionSx: SxProps<Theme> = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, #0f1428 0%, #0d0a12 100%)',
  px: { xs: 3, md: 6 },
  py: { xs: 8, md: 10 },
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
};

export const sectionTitleSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 700,
  fontSize: { xs: '2rem', md: '2.75rem' },
  background: 'linear-gradient(135deg, #f4b8c1 0%, #e8929e 45%, #c9a96e 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  mb: 2,
};

export const sectionBodySx: SxProps<Theme> = {
  fontFamily: '"Inter", sans-serif',
  fontWeight: 300,
  color: 'rgba(255,255,255,0.5)',
  fontSize: { xs: '0.95rem', md: '1.05rem' },
  mb: 3,
  maxWidth: 480,
  lineHeight: 1.8,
};

export const triggerWordSx: SxProps<Theme> = {
  display: 'inline',
  fontFamily: '"Playfair Display", serif',
  fontStyle: 'italic',
  fontWeight: 700,
  fontSize: { xs: '1.1rem', md: '1.3rem' },
  background: 'linear-gradient(135deg, #f4b8c1 0%, #e8929e 45%, #c9a96e 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  cursor: 'pointer',
  userSelect: 'none',
  borderBottom: '1px solid rgba(232,146,158,0.4)',
  paddingBottom: '2px',
  transition: 'border-color 0.2s',
  '&:hover': {
    borderColor: 'rgba(232,146,158,0.8)',
  },
};

export const overlayBackdropSx: SxProps<Theme> = {
  position: 'fixed',
  inset: 0,
  zIndex: 1300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(13,10,18,0.92)',
  backdropFilter: 'blur(12px)',
  px: 3,
};

export const overlayCardSx: SxProps<Theme> = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(244,184,193,0.2)',
  borderRadius: '24px',
  maxWidth: 520,
  width: '100%',
  p: { xs: 4, md: 6 },
  textAlign: 'center',
  boxShadow: '0 24px 80px rgba(232,146,158,0.12), inset 0 1px 0 rgba(255,255,255,0.06)',
  backdropFilter: 'blur(16px)',
};

export const overlayTitleSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 700,
  fontSize: { xs: '1.75rem', md: '2.25rem' },
  background: 'linear-gradient(135deg, #f4b8c1 0%, #e8929e 45%, #c9a96e 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  mb: 3,
};

export const overlayBodySx: SxProps<Theme> = {
  fontFamily: '"Inter", sans-serif',
  fontWeight: 300,
  lineHeight: 1.9,
  color: 'rgba(255,255,255,0.6)',
  fontSize: { xs: '0.95rem', md: '1rem' },
  mb: 3,
};

export const closeHintSx: SxProps<Theme> = {
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.7rem',
  color: 'rgba(255,255,255,0.25)',
  letterSpacing: '0.1em',
};
```

- [ ] **Step 2: Type-check**

```bash
npm run build
```

Expected: exits 0.

- [ ] **Step 3: Visual check**

Scroll to the Surprise section. Text should be on a near-black background. The trigger word ("תמיד") should show a rose gold gradient with a subtle underline. Click it — the overlay modal should be a frosted dark glass card with rose gold title text.

- [ ] **Step 4: Commit**

```bash
git add src/components/Surprise/Surprise.styles.ts
git commit -m "style: Surprise — dark glass overlay, rose gold trigger word"
```

---

## Task 7: Final Review

- [ ] **Step 1: Full build check**

```bash
npm run build
```

Expected: exits 0, no TypeScript errors.

- [ ] **Step 2: Full visual walkthrough**

Run `npm run dev` and scroll through the entire page in order:

1. LockScreen — dark background, glass countdown cards, rose gold numbers
2. (unlock) Hero — dark gradient, large rose gold name, divider, scroll CTA
3. CountdownTimer — same dark base, glass cards, rose gold numbers
4. Gallery — dark surface, glass photo cards, hover scale + border brighten
5. Letters — dark raised background, glass accordion rows, rose pink chevrons
6. Surprise — dark base, rose gold trigger word, glass modal on click

- [ ] **Step 3: Commit if clean**

If no issues found, no extra commit needed. If tweaks were made, commit them:

```bash
git add -p
git commit -m "style: final polish pass"
```
