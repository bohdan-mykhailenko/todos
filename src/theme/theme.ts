import createTheme from '@mui/material/styles/createTheme';

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: '40px',
          width: '80px',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Nunito',
    fontWeightBold: 700,

    h1: {
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: '150%',
    },
    h2: {
      fontSize: '24px',
      fontWeight: 800,
      lineHeight: '150%',
    },
    h3: {
      fontSize: '22px',
      fontWeight: 500,
      lineHeight: '150%',
    },
    h4: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '150%',
    },
    body1: {
      margin: '2px 0',
      fontSize: '12px',
      fontWeight: 700,
      whiteSpace: 'pre-line',
    },
    body2: {
      margin: '2px 0',
      fontSize: '10px',

      lineHeight: '150%',
      whiteSpace: 'pre-line',
    },
  },

  palette: {
    accent: {
      main: '#be8a52',
      light: 'rgb(245, 232, 219)',
    },
    primary: {
      main: '#03121b',
      light: '#aaa',
    },
    secondary: {
      main: '#F9F9F9',
    },
    blue: {
      main: '#D8E1ED',
    },
    black: {
      main: '#000A10',
    },
    gray: {
      main: '#ACADAD',
      dark: '#686868',
    },
    white: {
      main: '#ffffff',
    },
    priority: {
      main: '#7d39a7',
      dark: '#4e0d76',
      light: '#9c73b8',
    },
  },
});
