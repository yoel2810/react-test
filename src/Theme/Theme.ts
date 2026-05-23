import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e8929e',
      light: '#f4b8c1',
      dark: '#c9a96e',
    },
    secondary: {
      main: '#c9a96e',
      light: '#f4b8c1',
      dark: '#a07840',
    },
    background: {
      default: '#0d0a12',
      paper: '#160f1e',
    },
    text: {
      primary: 'rgba(255,255,255,0.88)',
      secondary: 'rgba(255,255,255,0.55)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 300,
      lineHeight: 1.6,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
