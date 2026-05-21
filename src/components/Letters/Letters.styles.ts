import type { SxProps, Theme } from '@mui/material';

export const sectionSx: SxProps<Theme> = {
  minHeight: '100vh',
  px: { xs: 2, sm: 4, md: 8 },
  py: { xs: 8, md: 10 },
  background: 'linear-gradient(180deg, #faf8f5 0%, #f0ebf8 100%)',
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

export const listSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: { xs: 2, md: 3 },
  maxWidth: 760,
  mx: 'auto',
};

export const cardSx: SxProps<Theme> = {
  background: '#fff',
  borderRadius: 3,
  boxShadow: '0 4px 20px rgba(0,51,102,0.07)',
  overflow: 'hidden',
  border: '1px solid rgba(0,51,102,0.08)',
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
    background: 'rgba(0,51,102,0.04)',
  },
};

export const cardTitleSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 600,
  fontSize: { xs: '1rem', md: '1.15rem' },
  color: '#003366',
};

export const cardBodySx: SxProps<Theme> = {
  px: { xs: 2.5, md: 3 },
  pb: { xs: 2.5, md: 3 },
  fontFamily: '"Lato", sans-serif',
  lineHeight: 1.8,
  color: '#2a2a4a',
  fontSize: { xs: '0.95rem', md: '1rem' },
  whiteSpace: 'pre-wrap',
};
