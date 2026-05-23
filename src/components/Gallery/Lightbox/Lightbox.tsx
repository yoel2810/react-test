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
      slotProps={{ paper: { sx: dialogPaperSx } }}
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
