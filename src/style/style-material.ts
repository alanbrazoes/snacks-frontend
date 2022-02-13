import { red } from '@mui/material/colors';
import { createTheme } from '@shared/index';

const theme = createTheme({
  ligth: {
    primary: red[500],
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-color: #f9fcfd;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          margin: `8px 0`,
        },
      },
    },
  },
});

declare module '@mui/material/styles' {
  interface Theme {
    ligth: {
      primary: string;
    };
  }

  interface ThemeOptions {
    ligth?: {
      primary?: string;
    };
  }
}

export { theme };
