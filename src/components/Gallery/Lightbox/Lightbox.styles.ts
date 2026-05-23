import type { SxProps, Theme } from "@mui/material";

export const dialogPaperSx: SxProps<Theme> = {
  background: "rgba(0, 0, 0, 0.95)",
  boxShadow: "none",
  m: 2,
  overflow: "hidden",
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
};

export const imageLoadingSx: SxProps<Theme> = {
  ...imageSx,
  display: "none",
};

export const loaderSx: SxProps<Theme> = {
  color: "rgba(255,255,255,0.7)",
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
