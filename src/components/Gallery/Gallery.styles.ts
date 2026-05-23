import type { SxProps, Theme } from '@mui/material';

export const sectionSx: SxProps<Theme> = {
  minHeight: '100vh',
  px: { xs: 2, sm: 4, md: 8 },
  py: { xs: 8, md: 10 },
  background: 'linear-gradient(180deg, #160f1e 0%, #0d0a12 100%)',
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

export const gridSx: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: {
    xs: '1fr',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)',
  },
  gap: { xs: 2, sm: 3 },
  position: 'relative',
  zIndex: 1,
};

export const cardSx: SxProps<Theme> = {
  borderRadius: '20px',
  overflow: 'hidden',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(244,184,193,0.18)',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
  backdropFilter: 'blur(12px)',
  boxShadow: '0 0 30px rgba(232,146,158,0.05)',
  '&:hover': {
    transform: 'scale(1.02)',
    borderColor: 'rgba(244,184,193,0.4)',
    boxShadow: '0 8px 40px rgba(232,146,158,0.15)',
  },
};

export const imageWrapSx: SxProps<Theme> = {
  aspectRatio: '4/3',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #2a1535 0%, #1a0d28 50%, #0f1a2e 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const captionSx: SxProps<Theme> = {
  px: 2,
  py: 1.5,
  fontFamily: '"Inter", sans-serif',
  fontWeight: 300,
  fontSize: '0.8rem',
  color: 'rgba(255,255,255,0.5)',
  fontStyle: 'italic',
};
