# Gallery Lightbox Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a fullscreen lightbox to the Gallery so clicking any photo opens it large with its caption and left/right arrow navigation.

**Architecture:** Gallery owns `selectedIndex: number | null` state. When not null, it renders a `Lightbox` component (MUI `Dialog`) with the selected photo, caption, and prev/next arrows. Keyboard events (←/→/Esc) are handled inside `Lightbox` via a `useEffect` listener.

**Tech Stack:** React 19, TypeScript, MUI v9 (`Dialog`, `IconButton`), `@mui/icons-material` (`ArrowBackIosNew`, `ArrowForwardIos`)

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `src/components/Gallery/Lightbox/Lightbox.types.ts` | `LightboxProps` interface |
| Create | `src/components/Gallery/Lightbox/Lightbox.styles.ts` | All MUI sx styles for the lightbox |
| Create | `src/components/Gallery/Lightbox/Lightbox.tsx` | Dialog + image + caption + arrows + keyboard nav |
| Modify | `src/components/Gallery/Gallery.tsx` | Add state, onClick handlers, render Lightbox |
| Modify | `src/components/Gallery/Gallery.styles.ts` | Add `cursor: 'pointer'` to `cardSx` |

---

### Task 1: Lightbox types

**Files:**
- Create: `src/components/Gallery/Lightbox/Lightbox.types.ts`

- [ ] **Step 1: Create the types file**

```ts
import type { PhotoCard } from "../Gallery.types";

export interface LightboxProps {
  photos: PhotoCard[];
  selectedIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}
```

- [ ] **Step 2: Verify TypeScript is happy**

Run: `npm run build`
Expected: No errors (this file has no imports from external packages yet).

- [ ] **Step 3: Commit**

```bash
git add src/components/Gallery/Lightbox/Lightbox.types.ts
git commit -m "feat: add Lightbox types"
```

---

### Task 2: Lightbox styles

**Files:**
- Create: `src/components/Gallery/Lightbox/Lightbox.styles.ts`

- [ ] **Step 1: Create the styles file**

```ts
import type { SxProps, Theme } from "@mui/material";

export const dialogPaperSx: SxProps<Theme> = {
  background: "rgba(0, 0, 0, 0.95)",
  boxShadow: "none",
  m: 2,
};

export const contentBoxSx: SxProps<Theme> = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  p: { xs: 4, sm: 6 },
};

export const imageSx: SxProps<Theme> = {
  maxHeight: "80vh",
  maxWidth: "100%",
  objectFit: "contain",
  display: "block",
};

export const captionSx: SxProps<Theme> = {
  textAlign: "center",
  color: "rgba(255,255,255,0.85)",
  fontFamily: '"Lato", sans-serif',
  fontStyle: "italic",
  fontSize: "1rem",
  mt: 2,
  px: 2,
};

export const prevArrowSx: SxProps<Theme> = {
  position: "absolute",
  left: 8,
  top: "50%",
  transform: "translateY(-50%)",
  color: "#fff",
  background: "rgba(255,255,255,0.1)",
  "&:hover": { background: "rgba(255,255,255,0.2)" },
};

export const nextArrowSx: SxProps<Theme> = {
  position: "absolute",
  right: 8,
  top: "50%",
  transform: "translateY(-50%)",
  color: "#fff",
  background: "rgba(255,255,255,0.1)",
  "&:hover": { background: "rgba(255,255,255,0.2)" },
};
```

- [ ] **Step 2: Verify TypeScript is happy**

Run: `npm run build`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Gallery/Lightbox/Lightbox.styles.ts
git commit -m "feat: add Lightbox styles"
```

---

### Task 3: Lightbox component

**Files:**
- Create: `src/components/Gallery/Lightbox/Lightbox.tsx`

- [ ] **Step 1: Create the component**

```tsx
import { useEffect } from "react";
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import type { LightboxProps } from "./Lightbox.types";
import {
  dialogPaperSx,
  contentBoxSx,
  imageSx,
  captionSx,
  prevArrowSx,
  nextArrowSx,
} from "./Lightbox.styles";

export default function Lightbox({
  photos,
  selectedIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const open = selectedIndex !== null;
  const photo = selectedIndex !== null ? photos[selectedIndex] : null;
  const isFirst = selectedIndex === 0;
  const isLast = selectedIndex === photos.length - 1;

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onPrev, onNext]);

  if (!photo) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xl"
      fullWidth
      PaperProps={{ sx: dialogPaperSx }}
    >
      <Box sx={contentBoxSx}>
        {!isFirst && (
          <IconButton sx={prevArrowSx} onClick={onPrev} aria-label="previous photo">
            <ArrowBackIosNewIcon />
          </IconButton>
        )}
        <Box component="img" src={photo.image} alt={photo.alt} sx={imageSx} />
        {photo.caption && (
          <Typography sx={captionSx}>{photo.caption}</Typography>
        )}
        {!isLast && (
          <IconButton sx={nextArrowSx} onClick={onNext} aria-label="next photo">
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </Box>
    </Dialog>
  );
}
```

- [ ] **Step 2: Verify TypeScript build**

Run: `npm run build`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Gallery/Lightbox/Lightbox.tsx
git commit -m "feat: add Lightbox component"
```

---

### Task 4: Wire Lightbox into Gallery

**Files:**
- Modify: `src/components/Gallery/Gallery.tsx`
- Modify: `src/components/Gallery/Gallery.styles.ts`

- [ ] **Step 1: Add `cursor: 'pointer'` to `cardSx` in `Gallery.styles.ts`**

Find the `cardSx` export and add `cursor: "pointer"` to it:

```ts
export const cardSx: SxProps<Theme> = {
  borderRadius: 3,
  overflow: "hidden",
  background: "#fff",
  boxShadow: "0 4px 20px rgba(0,51,102,0.08)",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 12px 32px rgba(0,51,102,0.16)",
  },
};
```

- [ ] **Step 2: Update `Gallery.tsx` to add state and render Lightbox**

Replace the entire file with:

```tsx
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import type { GalleryProps } from "./Gallery.types";
import Lightbox from "./Lightbox/Lightbox";
import {
  sectionSx,
  headerSx,
  titleSx,
  subtitleSx,
  gridSx,
  cardSx,
  imageWrapSx,
  captionSx,
} from "./Gallery.styles";

export default function Gallery({ photos }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <Box component="section" id="gallery" sx={sectionSx}>
      <Box sx={headerSx}>
        <Typography sx={titleSx}>התמונות שלנו</Typography>
        <Typography sx={subtitleSx}>
          לגמרי אין לנו מספיק צריך להוסיף עוד :(
        </Typography>
      </Box>

      <Box sx={gridSx}>
        {photos.map((photo, index) => (
          <Box key={photo.id} sx={cardSx} onClick={() => setSelectedIndex(index)}>
            <Box sx={imageWrapSx}>
              <Box
                component="img"
                src={photo.image}
                alt={photo.alt}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            {photo.caption && (
              <Typography sx={captionSx}>{photo.caption}</Typography>
            )}
          </Box>
        ))}
      </Box>

      <Lightbox
        photos={photos}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onPrev={() => setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i))}
        onNext={() =>
          setSelectedIndex((i) =>
            i !== null && i < photos.length - 1 ? i + 1 : i
          )
        }
      />
    </Box>
  );
}
```

- [ ] **Step 3: Verify TypeScript build**

Run: `npm run build`
Expected: No errors. Output should show dist files generated.

- [ ] **Step 4: Smoke test in browser**

Run: `npm run dev`

Open the gallery section. Click a photo — lightbox should open with the image and caption. Press Esc — should close. With only 1 photo, both arrows should be hidden. Add a second entry to `src/data/photos.ts` temporarily to verify arrows and navigation work, then revert.

- [ ] **Step 5: Commit**

```bash
git add src/components/Gallery/Gallery.tsx src/components/Gallery/Gallery.styles.ts
git commit -m "feat: wire Lightbox into Gallery"
```
