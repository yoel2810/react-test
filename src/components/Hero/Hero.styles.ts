import type { SxProps, Theme } from '@mui/material';

export const heroSectionSx: SxProps<Theme> = {
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(160deg, #0d0a12 0%, #160f1e 40%, #0f1428 100%)',
  overflow: 'hidden',
  px: { xs: 3, md: 6 },
  textAlign: 'center',
};

export const heroNameSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 700,
  fontSize: { xs: '4rem', sm: '5.5rem', md: '7rem' },
  background: 'linear-gradient(135deg, #f4b8c1 0%, #e8929e 45%, #c9a96e 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '0.05em',
  lineHeight: 1,
  mb: 1.5,
  filter: 'drop-shadow(0 0 20px rgba(232,146,158,0.3))',
};

export const heroHeadlineSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: { xs: '1.1rem', sm: '1.5rem', md: '1.85rem' },
  color: 'rgba(255,255,255,0.85)',
  mb: 2,
  maxWidth: 600,
};

export const heroDividerSx: SxProps<Theme> = {
  width: 80,
  height: '1px',
  background: 'linear-gradient(90deg, transparent, rgba(244,184,193,0.5), transparent)',
  mx: 'auto',
  mb: 3,
};

export const heroSubtextSx: SxProps<Theme> = {
  fontFamily: '"Inter", sans-serif',
  fontWeight: 300,
  fontSize: { xs: '0.9rem', sm: '1rem' },
  color: 'rgba(255,255,255,0.45)',
  mb: { xs: 5, md: 6 },
  maxWidth: 480,
  lineHeight: 1.8,
};

export const scrollCtaSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 1.5,
  cursor: 'pointer',
};

export const scrollTextSx: SxProps<Theme> = {
  fontSize: '0.6rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.3)',
};

export const scrollArrowSx: SxProps<Theme> = {
  width: 36,
  height: 36,
  borderRadius: '50%',
  border: '1px solid rgba(244,184,193,0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgba(244,184,193,0.6)',
  transition: 'border-color 0.3s, color 0.3s',
  '&:hover': {
    borderColor: 'rgba(244,184,193,0.7)',
    color: 'rgba(244,184,193,1)',
  },
};

export const floatingOrb1Sx: SxProps<Theme> = {
  position: 'absolute',
  width: { xs: 250, md: 420 },
  height: { xs: 250, md: 420 },
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(244,184,193,0.13) 0%, transparent 70%)',
  top: '-10%',
  right: '-5%',
  pointerEvents: 'none',
};

export const floatingOrb2Sx: SxProps<Theme> = {
  position: 'absolute',
  width: { xs: 180, md: 300 },
  height: { xs: 180, md: 300 },
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%)',
  bottom: '10%',
  left: '-5%',
  pointerEvents: 'none',
};
