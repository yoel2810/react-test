# Lock Screen Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show only the countdown timer until May 26 2026; on zero, fire a confetti burst and fade the full site in.

**Architecture:** `App.tsx` conditionally renders a new `LockScreen` component (which wraps the existing `CountdownTimer`) when `birthdayReached` is false. When the timer callback fires, `App.tsx` sets `birthdayReached(true)`, triggers `canvas-confetti`, and reveals the full site inside a Framer Motion fade-in.

**Tech Stack:** React 19, TypeScript, MUI, Framer Motion (already installed), `canvas-confetti` (new)

---

## File Map

| Action | Path | Responsibility |
|--------|------|---------------|
| Create | `src/components/LockScreen/LockScreen.types.ts` | `LockScreenProps` interface |
| Create | `src/components/LockScreen/LockScreen.styles.ts` | Full-screen wrapper sx |
| Create | `src/components/LockScreen/LockScreen.tsx` | Full-screen centered CountdownTimer |
| Modify | `src/App.tsx` | Conditional render, confetti effect, fade-in |
| Modify | `.gitignore` | Ignore `.superpowers/` brainstorm files |

---

### Task 1: Add `.superpowers/` to `.gitignore`

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Add the entry**

Open `.gitignore` and append at the end:

```
# Superpowers brainstorm artifacts
.superpowers/
```

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: ignore .superpowers brainstorm artifacts"
```

---

### Task 2: Install `canvas-confetti`

**Files:**
- Modify: `package.json` (via npm)

- [ ] **Step 1: Install runtime + types**

```bash
npm install canvas-confetti
npm install -D @types/canvas-confetti
```

- [ ] **Step 2: Verify**

Open `package.json`. You should see `"canvas-confetti"` under `dependencies` and `"@types/canvas-confetti"` under `devDependencies`.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: add canvas-confetti dependency"
```

---

### Task 3: Create `LockScreen` types and styles

**Files:**
- Create: `src/components/LockScreen/LockScreen.types.ts`
- Create: `src/components/LockScreen/LockScreen.styles.ts`

- [ ] **Step 1: Create types file**

Create `src/components/LockScreen/LockScreen.types.ts`:

```ts
export interface LockScreenProps {
  date: string;
  onUnlock: () => void;
}
```

- [ ] **Step 2: Create styles file**

Create `src/components/LockScreen/LockScreen.styles.ts`:

```ts
import type { SxProps, Theme } from '@mui/material';

// CountdownTimer's sectionSx already handles full-screen layout and background.
// This wrapper is intentionally minimal — just a block container.
export const wrapperSx: SxProps<Theme> = {
  display: 'block',
};
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npm run build
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/LockScreen/LockScreen.types.ts src/components/LockScreen/LockScreen.styles.ts
git commit -m "feat: add LockScreen types and styles"
```

---

### Task 4: Create `LockScreen` component

**Files:**
- Create: `src/components/LockScreen/LockScreen.tsx`

- [ ] **Step 1: Create the component**

Create `src/components/LockScreen/LockScreen.tsx`:

```tsx
import { Box } from '@mui/material';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import type { LockScreenProps } from './LockScreen.types';
import { wrapperSx } from './LockScreen.styles';

export default function LockScreen({ date, onUnlock }: LockScreenProps) {
  return (
    <Box sx={wrapperSx}>
      <CountdownTimer date={date} onBirthdayReached={onUnlock} />
    </Box>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npm run build
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/LockScreen/LockScreen.tsx
git commit -m "feat: add LockScreen component"
```

---

### Task 5: Wire up `App.tsx`

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Replace `App.tsx` with the new version**

Open `src/App.tsx` and replace the entire file contents with:

```tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import Hero from "./components/Hero/Hero";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import Gallery from "./components/Gallery/Gallery";
import Letters from "./components/Letters/Letters";
import Surprise from "./components/Surprise/Surprise";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import LockScreen from "./components/LockScreen/LockScreen";
import { photos } from "./data/photos";
import { letters } from "./data/letters";

const BIRTHDAY = "2026-05-26T00:00:00";
const MUSIC_SRC = `${import.meta.env.BASE_URL}music/song.mp3`;

const scrollReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={scrollReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [birthdayReached, setBirthdayReached] = useState(
    () => new Date(BIRTHDAY) <= new Date(),
  );

  useEffect(() => {
    if (!birthdayReached) return;
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.4 },
      colors: ["#003366", "#c9a96e", "#4d6fa3", "#e8d0a3", "#ffffff"],
    });
  }, [birthdayReached]);

  if (!birthdayReached) {
    return (
      <LockScreen
        date={BIRTHDAY}
        onUnlock={() => setBirthdayReached(true)}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AnimatedSection>
        <Hero name="גלי" targetSectionId="countdown" />
      </AnimatedSection>

      <AnimatedSection>
        <CountdownTimer
          date={BIRTHDAY}
          onBirthdayReached={() => setBirthdayReached(true)}
        />
      </AnimatedSection>

      <AnimatedSection>
        <Gallery photos={photos} />
      </AnimatedSection>

      <AnimatedSection>
        <Letters letters={letters} />
      </AnimatedSection>

      <AnimatedSection>
        <Surprise />
      </AnimatedSection>

      <MusicPlayer src={MUSIC_SRC} autoPlay={birthdayReached} />
    </motion.div>
  );
}

export default App;
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npm run build
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/App.tsx
git commit -m "feat: gate full site behind lock screen until birthday"
```

---

### Task 6: Manual Verification

**Files:** none

- [ ] **Step 1: Start the dev server**

```bash
npm run dev
```

Open the URL printed (usually `http://localhost:5173`). You should see **only the countdown timer** — no Hero, no Gallery, no other sections.

- [ ] **Step 2: Test the unlock flow**

In `src/App.tsx`, temporarily change:

```ts
const BIRTHDAY = "2026-05-26T00:00:00";
```

to a past date:

```ts
const BIRTHDAY = "2020-01-01T00:00:00";
```

Refresh the page. You should see:
- Confetti burst immediately
- Full site fading in over ~1 second (Hero, Gallery, Letters, Surprise all visible)

- [ ] **Step 3: Restore the real date**

Change `BIRTHDAY` back to `"2026-05-26T00:00:00"`.

Refresh — countdown-only screen should return.

- [ ] **Step 4: Final build check**

```bash
npm run build
```

Expected: no TypeScript errors, build succeeds.
