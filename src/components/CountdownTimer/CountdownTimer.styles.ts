import type { SxProps, Theme } from '@mui/material';

export const sectionSx: SxProps<Theme> = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, #faf8f5 0%, #f0ebf8 100%)',
  px: { xs: 3, md: 6 },
  py: { xs: 8, md: 10 },
  textAlign: 'center',
};

export const sectionTitleSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 600,
  fontSize: { xs: '2rem', md: '2.75rem' },
  color: '#003366',
  mb: 1,
};

export const sectionSubtitleSx: SxProps<Theme> = {
  fontFamily: '"Lato", sans-serif',
  color: '#4a4a6a',
  mb: { xs: 5, md: 7 },
  fontSize: { xs: '1rem', md: '1.1rem' },
};

export const timerGridSx: SxProps<Theme> = {
  display: 'flex',
  gap: { xs: 2, sm: 3, md: 4 },
  flexWrap: 'wrap',
  justifyContent: 'center',
};

export const unitCardSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: { xs: 80, sm: 110, md: 140 },
  height: { xs: 90, sm: 120, md: 155 },
  background: 'rgba(0, 51, 102, 0.06)',
  border: '1.5px solid rgba(0, 51, 102, 0.15)',
  borderRadius: 3,
  backdropFilter: 'blur(8px)',
};

export const unitValueSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 700,
  fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
  color: '#003366',
  lineHeight: 1,
};

export const unitLabelSx: SxProps<Theme> = {
  fontFamily: '"Lato", sans-serif',
  fontWeight: 400,
  fontSize: { xs: '0.7rem', sm: '0.8rem' },
  color: '#4a4a6a',
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  mt: 0.5,
};

export const birthdayMessageSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontStyle: 'italic',
  fontWeight: 600,
  fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
  color: '#003366',
  textShadow: '0 2px 20px rgba(0,51,102,0.2)',
};
