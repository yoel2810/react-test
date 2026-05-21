import type { SxProps, Theme } from '@mui/material';

export const heroSectionSx: SxProps<Theme> = {
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #001a33 0%, #003366 50%, #1a4d80 100%)',
  overflow: 'hidden',
  px: { xs: 3, md: 6 },
  textAlign: 'center',
};

export const heroNameSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 700,
  fontSize: { xs: '3rem', sm: '4.5rem', md: '6rem' },
  color: '#c9a96e',
  letterSpacing: '0.05em',
  textShadow: '0 2px 20px rgba(201, 169, 110, 0.3)',
  mb: 2,
};

export const heroHeadlineSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2.25rem' },
  color: 'rgba(255,255,255,0.92)',
  mb: { xs: 3, md: 4 },
  maxWidth: 600,
};

export const heroSubtextSx: SxProps<Theme> = {
  fontFamily: '"Lato", sans-serif',
  fontWeight: 300,
  fontSize: { xs: '0.95rem', sm: '1.1rem' },
  color: 'rgba(255,255,255,0.7)',
  mb: { xs: 5, md: 6 },
  maxWidth: 480,
};

export const scrollCtaSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 1,
  cursor: 'pointer',
  color: 'rgba(255,255,255,0.6)',
  transition: 'color 0.3s',
  '&:hover': {
    color: '#c9a96e',
  },
};

export const floatingOrb1Sx: SxProps<Theme> = {
  position: 'absolute',
  width: { xs: 200, md: 350 },
  height: { xs: 200, md: 350 },
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)',
  top: '-10%',
  right: '-5%',
  pointerEvents: 'none',
};

export const floatingOrb2Sx: SxProps<Theme> = {
  position: 'absolute',
  width: { xs: 150, md: 250 },
  height: { xs: 150, md: 250 },
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(77,111,163,0.2) 0%, transparent 70%)',
  bottom: '10%',
  left: '-5%',
  pointerEvents: 'none',
};
