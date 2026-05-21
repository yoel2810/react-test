import type { SxProps, Theme } from '@mui/material';

export const sectionSx: SxProps<Theme> = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, #f0ebf8 0%, #001a33 100%)',
  px: { xs: 3, md: 6 },
  py: { xs: 8, md: 10 },
  textAlign: 'center',
};

export const sectionTitleSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 600,
  fontSize: { xs: '2rem', md: '2.75rem' },
  color: '#003366',
  mb: 2,
};

export const sectionBodySx: SxProps<Theme> = {
  fontFamily: '"Lato", sans-serif',
  color: '#4a4a6a',
  fontSize: { xs: '1rem', md: '1.1rem' },
  mb: 4,
  maxWidth: 480,
};

export const triggerWordSx: SxProps<Theme> = {
  display: 'inline',
  fontFamily: '"Playfair Display", serif',
  fontStyle: 'italic',
  fontWeight: 600,
  fontSize: { xs: '1.1rem', md: '1.3rem' },
  color: '#4a4a6a',
  cursor: 'default',
  userSelect: 'none',
};

export const overlayBackdropSx: SxProps<Theme> = {
  position: 'fixed',
  inset: 0,
  zIndex: 1300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0, 26, 51, 0.88)',
  backdropFilter: 'blur(6px)',
  px: 3,
};

export const overlayCardSx: SxProps<Theme> = {
  background: 'linear-gradient(135deg, #fff 0%, #faf4e8 100%)',
  borderRadius: 4,
  maxWidth: 520,
  width: '100%',
  p: { xs: 4, md: 6 },
  textAlign: 'center',
  boxShadow: '0 24px 60px rgba(0,51,102,0.35)',
  position: 'relative',
};

export const overlayTitleSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 700,
  fontSize: { xs: '1.75rem', md: '2.25rem' },
  color: '#003366',
  mb: 3,
};

export const overlayBodySx: SxProps<Theme> = {
  fontFamily: '"Lato", sans-serif',
  lineHeight: 1.9,
  color: '#2a2a4a',
  fontSize: { xs: '0.95rem', md: '1rem' },
  mb: 3,
};

export const closeHintSx: SxProps<Theme> = {
  fontFamily: '"Lato", sans-serif',
  fontSize: '0.75rem',
  color: '#8a8aaa',
  letterSpacing: '0.1em',
};
