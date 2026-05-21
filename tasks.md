# tasks.md

All tasks are pure frontend — no backend, API, or database needed.
No test framework is configured; each task includes a **Verify** step for manual validation.

---

## Phase 1 — Foundation

### Task 1 — Install dependencies

Install MUI (`@mui/material`, `@emotion/react`, `@emotion/styled`), MUI icons (`@mui/icons-material`), and Framer Motion (`framer-motion`).

**Verify:** `npm run build` passes with no errors after install.

---

### Task 2 — MUI theme setup

Create `src/Theme/Theme.ts` that exports a custom MUI theme (color palette, typography, breakpoints matching the romantic/celebratory vibe of the site). Wire it into `src/main.tsx` via `ThemeProvider`.
The client favorite color is #003366 so this color must be in the theme.

**Verify:** App renders without console errors; MUI default font is replaced by the chosen theme font.

---

### Task 3 — App shell and section layout

Update `src/App.tsx` to render a full-page vertical scroll layout with placeholder `<section>` elements for each feature (Landing, Gallery, Letters, Music, Countdown, Surprise). Add a minimal global CSS reset in `src/index.css`.

**Verify:** Page scrolls through all placeholder sections; no layout overflow.

---

## Phase 2 — Core Sections

### Task 4 — Landing / Hero section

Create `src/components/Hero/Hero.tsx`, `Hero.styles.ts`, `Hero.types.ts`.  
The section should show Gali's name, a birthday greeting headline, and a call-to-action to scroll down. Use a full-viewport height layout.

_Depends on: Task 2, Task 3_

**Verify:** Hero fills the viewport; text is readable on both mobile and desktop widths.

---

### Task 5 — Framer Motion entrance animations on Hero

Add Framer Motion `motion` variants to the Hero headline and subtext so they fade and slide in on mount. Keep animation durations under 1 s.

_Depends on: Task 4_

**Verify:** Refreshing the page shows the entrance animation; no layout shift after animation completes.

---

### Task 6 — Countdown timer component

Create `src/components/CountdownTimer/CountdownTimer.tsx`, `CountdownTimer.styles.ts`, `CountdownTimer.types.ts`.  
Accept a target `date` prop (ISO string). Display days / hours / minutes / seconds, updating every second via `setInterval`. When the target date has passed, show a "Happy Birthday!" message instead.

_Depends on: Task 2_

**Verify:** Counter decrements in real time; switching the target date to the past immediately shows the birthday message.

---

### Task 7 — Photo gallery / memories section

Create `src/components/Gallery/Gallery.tsx`, `Gallery.styles.ts`, `Gallery.types.ts`.  
Render a responsive grid of photo cards. Each card accepts an `image` path (from `src/assets/`) and an optional `caption` string. Define the photo data as a typed array in `src/data/photos.ts`.

_Depends on: Task 2, Task 3_

**Verify:** Gallery renders at least one placeholder image card; grid reflows correctly at mobile width.

---

### Task 8 — Gallery photo data

Populate `src/data/photos.ts` with the real photos and captions. Add photo files to `src/assets/gallery/`. Keep file names lowercase-kebab-case.

_Depends on: Task 7_

**Verify:** All photos load without 404s; alt text is present on every `<img>`.

---

### Task 9 — Love letters / messages section

Create `src/components/Letters/Letters.tsx`, `Letters.styles.ts`, `Letters.types.ts`.  
Display a series of message cards that the user can flip or expand. Store message content as a typed array in `src/data/letters.ts` (title + body fields, no `any`).

_Depends on: Task 2, Task 3_

**Verify:** Each card shows its title collapsed and reveals full body text on interaction.

---

### Task 10 — Love letters data

Populate `src/data/letters.ts` with the real messages.

_Depends on: Task 9_

**Verify:** All messages render; no truncation issues on mobile.

---

## Phase 3 — Interactive Features

### Task 11 — Background music player

Create `src/components/MusicPlayer/MusicPlayer.tsx`, `MusicPlayer.styles.ts`, `MusicPlayer.types.ts`.  
Use the HTML5 `Audio` API (no external library). The component should be a fixed floating button that toggles play/pause. Accept a `src` prop pointing to an audio file in `public/music/`. Handle autoplay restrictions by requiring a user gesture first.

_Depends on: Task 2_

**Verify:** Clicking the button starts and stops audio; page refresh does not auto-play before interaction; button shows correct icon state.

---

### Task 12 — Hidden surprise interactions

Create `src/components/Surprise/Surprise.tsx`, `Surprise.styles.ts`, `Surprise.types.ts`.  
Add at least one hidden trigger (e.g. clicking a specific word or icon) that reveals a special message or animation overlay. The trigger element should not be obviously interactive (no underline, no pointer cursor by default).

_Depends on: Task 2, Task 5_

**Verify:** Surprise is hidden on normal viewing; activating the trigger reveals the special content; pressing Escape or clicking outside dismisses it.

---

## Phase 4 — Polish

### Task 13 — Framer Motion scroll-triggered animations

Wrap each section component in a Framer Motion `motion.div` with `whileInView` so content animates in as the user scrolls to it. Use `viewport={{ once: true }}` so animations only fire once.

_Depends on: Task 4, Task 7, Task 9_

**Verify:** Scrolling down triggers animations for each section; fast-scrolling does not cause broken animation states.

---

### Task 14 — Mobile responsiveness pass

Audit all components at 375 px, 768 px, and 1280 px widths. Fix any overflow, illegible text, or broken grid layouts using MUI `sx` breakpoint syntax or `useMediaQuery`.

_Depends on: Task 4–12_

**Verify:** No horizontal scroll on any section at 375 px; all interactive elements are reachable by touch.

---

### Task 15 — Page-level polish and final integration

Wire all section components into `src/App.tsx` in the correct order (Hero → Countdown → Gallery → Letters → Surprise). Ensure smooth anchor-scroll behavior, consistent spacing between sections, and a page title set via `document.title`.

_Depends on: Task 4–14_

**Verify:** The full page loads, all sections are visible in sequence, background music persists while scrolling, and there are no console errors.
