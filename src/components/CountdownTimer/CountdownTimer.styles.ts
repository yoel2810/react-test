import type { SxProps, Theme } from '@mui/material';

export const sectionSx: SxProps<Theme> = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(160deg, #0d0a12 0%, #160f1e 50%, #0f1428 100%)',
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
  color: 'rgba(255,255,255,0.85)',
  mb: 1,
};

export const sectionSubtitleSx: SxProps<Theme> = {
  fontFamily: '"Inter", sans-serif',
  fontWeight: 300,
  color: 'rgba(255,255,255,0.35)',
  mb: { xs: 5, md: 7 },
  fontSize: { xs: '0.85rem', md: '0.95rem' },
  letterSpacing: '0.1em',
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
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(244,184,193,0.2)',
  borderRadius: '14px',
  backdropFilter: 'blur(12px)',
  boxShadow: '0 0 24px rgba(232,146,158,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
};

export const unitValueSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 700,
  fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
  background: 'linear-gradient(135deg, #f4b8c1 0%, #e8929e 45%, #c9a96e 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  lineHeight: 1,
};

export const unitLabelSx: SxProps<Theme> = {
  fontFamily: '"Inter", sans-serif',
  fontWeight: 400,
  fontSize: { xs: '0.6rem', sm: '0.7rem' },
  color: 'rgba(255,255,255,0.35)',
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  mt: 0.5,
};

export const birthdayMessageSx: SxProps<Theme> = {
  fontFamily: '"Playfair Display", serif',
  fontStyle: 'italic',
  fontWeight: 700,
  fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
  background: 'linear-gradient(135deg, #f4b8c1 0%, #e8929e 45%, #c9a96e 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  filter: 'drop-shadow(0 0 20px rgba(232,146,158,0.4))',
};
