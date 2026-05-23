import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003366',
      light: '#4d6fa3',
      dark: '#001a33',
    },
    secondary: {
      main: '#c9a96e',
      light: '#e8d0a3',
      dark: '#a07840',
    },
    background: {
      default: '#faf8f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a2e',
      secondary: '#4a4a6a',
    },
  },
  typography: {
    fontFamily: '"Frank Ruhl Libre", "David", serif',
    h1: {
      fontFamily: '"Frank Ruhl Libre", "David", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Frank Ruhl Libre", "David", serif',
      fontWeight: 500,
    },
    h3: {
      fontFamily: '"Frank Ruhl Libre", "David", serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Heebo", "Arial", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"Heebo", "Arial", sans-serif',
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
