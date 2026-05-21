import type { SxProps, Theme } from '@mui/material';

export const sectionSx: SxProps<Theme> = {
  minHeight: '100vh',
  px: { xs: 2, sm: 4, md: 8 },
  py: { xs: 8, md: 10 },
  background: 'linear-gradient(180deg, #f0ebf8 0%, #faf8f5 100%)',
};

export const headerSx: SxProps<Theme> = {
  textAlign: 'center',
  mb: { xs: 5, md: 7 },
};

export const titleSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 600,
  fontSize: { xs: '2rem', md: '2.75rem' },
  color: '#003366',
  mb: 1,
};

export const subtitleSx: SxProps<Theme> = {
  fontFamily: '"Lato", sans-serif',
  color: '#4a4a6a',
  fontSize: { xs: '1rem', md: '1.1rem' },
};

export const gridSx: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: {
    xs: '1fr',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)',
  },
  gap: { xs: 2, sm: 3 },
};

export const cardSx: SxProps<Theme> = {
  borderRadius: 3,
  overflow: 'hidden',
  background: '#fff',
  boxShadow: '0 4px 20px rgba(0,51,102,0.08)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 12px 32px rgba(0,51,102,0.16)',
  },
};

export const imageWrapSx: SxProps<Theme> = {
  aspectRatio: '4/3',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #e8d0a3 0%, #c9a96e 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const captionSx: SxProps<Theme> = {
  px: 2,
  py: 1.5,
  fontFamily: '"Lato", sans-serif',
  fontSize: '0.875rem',
  color: '#4a4a6a',
  fontStyle: 'italic',
};
