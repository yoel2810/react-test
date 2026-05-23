import { useState, useEffect, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import type { SurpriseProps } from "./Surprise.types";
import {
  sectionSx,
  sectionTitleSx,
  sectionBodySx,
  triggerWordSx,
  overlayBackdropSx,
  overlayCardSx,
  overlayTitleSx,
  overlayBodySx,
  closeHintSx,
} from "./Surprise.styles";

export default function Surprise({
  triggerLabel = "תמיד (תלחצי עליי)",
}: SurpriseProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <Box component="section" id="surprise" sx={sectionSx}>
        <Typography sx={sectionTitleSx}>משהו קטן נוסף</Typography>
        <Typography sx={sectionBodySx}>
          את יודעת שיש דברים שהם פשוט מעבר למילים? זה בשבילך — סוד קטן שמסתתר
          ממש כאן, ממתין בסבלנות. יש דברים ששווה למצוא.
        </Typography>
        <Typography sx={sectionBodySx}>
          אני אוהב אותך{" "}
          <Box
            component="span"
            sx={triggerWordSx}
            onClick={() => setOpen(true)}
          >
            {triggerLabel}
          </Box>
          .
        </Typography>
      </Box>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ position: "fixed", inset: 0, zIndex: 1300 }}
          >
            <Box sx={overlayBackdropSx} onClick={close}>
              <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                <Box sx={overlayCardSx}>
                  <Typography sx={{ fontSize: "2.5rem", mb: 2 }}>💌</Typography>
                  <Typography sx={overlayTitleSx}>מצאת את זה</Typography>
                  <div
                    className="tenor-gif-embed"
                    data-aspect-ratio="1"
                    data-width="100%"
                  ></div>
                  <img
                    src="https://c.tenor.com/f8OTWcJHMd4AAAAd/tenor.gif"
                    alt="pee"
                  />
                  <Typography sx={overlayBodySx}>
                    פיפי כי אני יודע שאת אוהבת. את תמיד יכולה לסמן עליי
                    טריטוריה.
                  </Typography>
                  <Typography sx={closeHintSx}>
                    לחץ Esc או לחץ מחוץ לחלון לסגירה
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
