import type { SxProps, Theme } from '@mui/material';

export const sectionSx: SxProps<Theme> = {
  minHeight: '100vh',
  px: { xs: 2, sm: 4, md: 8 },
  py: { xs: 8, md: 10 },
  background: 'linear-gradient(180deg, #1e1428 0%, #160f1e 100%)',
  position: 'relative',
  overflow: 'hidden',
};

export const headerSx: SxProps<Theme> = {
  textAlign: 'center',
  mb: { xs: 5, md: 7 },
  position: 'relative',
  zIndex: 1,
};

export const titleSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 700,
  fontSize: { xs: '2rem', md: '2.75rem' },
  background: 'linear-gradient(135deg, #f4b8c1 0%, #e8929e 45%, #c9a96e 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  mb: 1,
};

export const subtitleSx: SxProps<Theme> = {
  fontFamily: '"Inter", sans-serif',
  fontWeight: 300,
  color: 'rgba(255,255,255,0.4)',
  fontSize: { xs: '0.9rem', md: '1rem' },
};

export const listSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: { xs: 2, md: 2.5 },
  maxWidth: 760,
  mx: 'auto',
  position: 'relative',
  zIndex: 1,
};

export const cardSx: SxProps<Theme> = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(244,184,193,0.18)',
  borderRadius: '16px',
  overflow: 'hidden',
  backdropFilter: 'blur(12px)',
  boxShadow: '0 0 30px rgba(232,146,158,0.05)',
};

export const cardHeaderSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  px: { xs: 2.5, md: 3 },
  py: 2,
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'background 0.2s',
  '&:hover': {
    background: 'rgba(244,184,193,0.05)',
  },
};

export const cardTitleSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 600,
  fontSize: { xs: '1rem', md: '1.15rem' },
  color: 'rgba(255,255,255,0.88)',
};

export const cardBodySx: SxProps<Theme> = {
  px: { xs: 2.5, md: 3 },
  pb: { xs: 2.5, md: 3 },
  fontFamily: '"Inter", sans-serif',
  fontWeight: 300,
  lineHeight: 1.9,
  color: 'rgba(255,255,255,0.55)',
  fontSize: { xs: '0.9rem', md: '0.95rem' },
  whiteSpace: 'pre-wrap',
};
