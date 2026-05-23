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
