
import { createTheme } from '@mui/material/styles';


const colors = {
  
  earth: '#8B5A2B',
  grass: '#5C9E5E',
  sky: '#7EC8E0',
  wheat: '#F4C542',
  cream: '#FEF7E0',
  
  moss: '#5C7A5B',
  ghibliSky: '#A9D6E5',
  ghibliCream: '#FDF4DC',
  blossom: '#F7C6C6',
  
  paper: '#FFF8ED',
  textDark: '#2C3A2B',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.grass,
      light: '#7CB87E',
      dark: '#3F6E41',
    },
    secondary: {
      main: colors.wheat,
      light: '#F8D97A',
      dark: '#D6A83C',
    },
    background: {
      default: colors.cream,
      paper: colors.paper,
    },
    text: {
      primary: colors.textDark,
      secondary: '#5A6E55',
    },
  },
  typography: {
    fontFamily: '"Quicksand", "Inter", "Nunito", sans-serif',
    h1: {
      fontFamily: '"Press Start 2P", "Courier New", monospace',
      fontSize: '2rem',
      color: colors.earth,
    },
    h2: {
      fontFamily: '"Press Start 2P", monospace',
      fontSize: '1.5rem',
      color: colors.grass,
    },
    body1: {
      fontFamily: '"Quicksand", sans-serif',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: '"Press Start 2P", monospace',
      fontSize: '0.7rem',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 16, 
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '4px 6px 0 rgba(0,0,0,0.1)',
          border: `2px solid ${colors.earth}`,
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translate(-2px, -2px)',
            boxShadow: '6px 8px 0 rgba(0,0,0,0.15)',
          },
        },
      },
    },
  },
});