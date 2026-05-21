import type { SxProps, Theme } from '@mui/material';

export const fabSx: SxProps<Theme> = {
  position: 'fixed',
  bottom: { xs: 20, md: 32 },
  right: { xs: 20, md: 32 },
  zIndex: 1200,
  width: 56,
  height: 56,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #003366 0%, #1a4d80 100%)',
  color: '#c9a96e',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 20px rgba(0,51,102,0.35)',
  cursor: 'pointer',
  border: '2px solid rgba(201,169,110,0.4)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 8px 28px rgba(0,51,102,0.45)',
  },
  '&:active': {
    transform: 'scale(0.96)',
  },
};
