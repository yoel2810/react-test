# Lock Screen Design

**Date:** 2026-05-23  
**Status:** Approved

## Summary

The birthday website is locked until the countdown timer reaches zero (May 26, 2026). Visitors see only the countdown. When the timer hits zero, a confetti burst fires and the full site fades in.

## Locked State

- Only the `CountdownTimer` component is rendered — centered on a full-screen dark background
- Hero, Gallery, Letters, Surprise, and MusicPlayer are not rendered (not in the DOM)
- No navigation, no hints of content behind — pure countdown

## Unlock Trigger

- The existing `birthdayReached` state in `App.tsx` controls the gate
- When `birthdayReached` is already `true` on load (i.e. past May 26), the site renders directly with no lock screen
- When the countdown reaches zero, `CountdownTimer` fires `onBirthdayReached` → `LockScreen` passes it up via `onUnlock` → `App.tsx` sets `birthdayReached(true)`

## Reveal Animation

1. `canvas-confetti` fires a burst the moment `onUnlock` is called
2. The full site simultaneously fades in via Framer Motion (`opacity: 0 → 1`, duration 1s)
3. Confetti and fade happen concurrently — color burst, then the site appears through it

## New Component: `LockScreen`

**Location:** `src/components/LockScreen/`  
**Files:** `LockScreen.tsx`, `LockScreen.styles.ts`, `LockScreen.types.ts`

**Responsibility:** Full-screen centered wrapper. Renders the existing `CountdownTimer` with the same `date` prop and `onBirthdayReached` wired to its own `onUnlock` prop. No new countdown logic.

**Props:**
```ts
interface LockScreenProps {
  date: string;
  onUnlock: () => void;
}
```

## Changes to `App.tsx`

- When `!birthdayReached`: render `<LockScreen date={BIRTHDAY} onUnlock={() => setBirthdayReached(true)} />`
- When `birthdayReached`: render full site wrapped in `<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>`
- `canvas-confetti` called once inside a `useEffect` that runs when `birthdayReached` flips to `true`

## Dependencies

- `canvas-confetti` + `@types/canvas-confetti` (npm install)

## Out of Scope

- No password/bypass mechanism
- No partial unlock (some sections visible, others not)
- No persistent unlock state (localStorage) — if page is refreshed after unlock but before actual birthday, lock screen returns
