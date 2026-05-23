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
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  p: { xs: 4, sm: 6 },
};

export const imageWrapperSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 200,
  minWidth: 200,
};

export const imageSx: SxProps<Theme> = {
  maxHeight: "calc(100vh - 200px)",
  maxWidth: "100%",
  objectFit: "contain",
  display: "block",
  borderRadius: '8px',
};

export const imageLoadingSx: SxProps<Theme> = {
  ...imageSx,
  display: "none",
};

export const loaderSx: SxProps<Theme> = {
  color: 'rgba(244,184,193,0.7)',
};

export const captionSx: SxProps<Theme> = {
  textAlign: "center",
  color: 'rgba(255,255,255,0.6)',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 300,
  fontStyle: "italic",
  fontSize: "0.9rem",
  mt: 2,
  px: 2,
};

export const prevArrowSx: SxProps<Theme> = {
  position: "absolute",
  left: 8,
  top: "50%",
  transform: "translateY(-50%)",
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
  position: "absolute",
  right: 8,
  top: "50%",
  transform: "translateY(-50%)",
  color: 'rgba(244,184,193,0.7)',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(244,184,193,0.2)',
  borderRadius: '50%',
  '&:hover': {
    background: 'rgba(244,184,193,0.1)',
    borderColor: 'rgba(244,184,193,0.4)',
  },
};
