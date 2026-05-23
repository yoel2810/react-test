# Gallery Lightbox Design

**Date:** 2026-05-23  
**Status:** Approved

## Overview

When a user clicks a photo in the Gallery grid, a fullscreen lightbox opens displaying the image at large size with its caption. Left/right arrows allow navigation between photos. Esc or backdrop click closes the lightbox.

## Architecture

Gallery owns all lightbox state (`selectedIndex: number | null`). When `selectedIndex` is not null, the lightbox is open. Gallery passes the full photos array and selected index down to Lightbox as props — no global state required.

```
Gallery
├── state: selectedIndex (number | null)
├── renders: photo grid (each card clickable → sets selectedIndex)
└── renders: <Lightbox photos selectedIndex onClose onNext onPrev />
```

## Components

### `src/components/Gallery/Lightbox/`

Three co-located files per project convention:

**`Lightbox.tsx`**
- MUI `Dialog` with `fullWidth`, `maxWidth="xl"`, dark backdrop
- Image rendered with `objectFit: contain` to fit the viewport without cropping
- Caption displayed below the image in italic
- `IconButton` with `ArrowBackIos` on the left, `ArrowForwardIos` on the right
- Arrows are hidden (not just disabled) when at the first/last photo respectively
- Keyboard listener on `keydown`: `ArrowLeft` → `onPrev`, `ArrowRight` → `onNext`, `Escape` → `onClose`
- Clicking the backdrop calls `onClose`

**`Lightbox.styles.ts`**  
Styles for: dialog paper (dark background, minimal padding), image (max height ~80vh, auto width), arrow buttons (positioned absolute on left/right edges, white icon color), caption (centered, italic, white text).

**`Lightbox.types.ts`**
```ts
export interface LightboxProps {
  photos: PhotoCard[];
  selectedIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}
```

### `Gallery.tsx` changes

- Add `useState<number | null>(null)` for `selectedIndex`
- Add `onClick` to each card `Box` that calls `setSelectedIndex(index)`
- Add `cursor: 'pointer'` to `cardSx`
- Render `<Lightbox>` after the grid when `selectedIndex !== null`

## Interactions

| Trigger | Result |
|---|---|
| Click photo card | Open lightbox at that index |
| Click backdrop | Close lightbox |
| Press Esc | Close lightbox |
| Click left arrow | Go to previous photo |
| Click right arrow | Go to next photo |
| Press ← | Go to previous photo |
| Press → | Go to next photo |
| At first photo | Left arrow hidden |
| At last photo | Right arrow hidden |

## Files Touched

| File | Change |
|---|---|
| `src/components/Gallery/Gallery.tsx` | Add state, onClick handlers, render Lightbox |
| `src/components/Gallery/Gallery.styles.ts` | Add `cursor: pointer` to cardSx |
| `src/components/Gallery/Lightbox/Lightbox.tsx` | New file |
| `src/components/Gallery/Lightbox/Lightbox.styles.ts` | New file |
| `src/components/Gallery/Lightbox/Lightbox.types.ts` | New file |
