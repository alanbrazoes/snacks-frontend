import { orange, red } from '@mui/material/colors';
import { createTheme } from '@shared/index';

const theme = createTheme({
  ligth: {
    primary: red[500],
  },
  status: {
    danger: orange[500],
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-color: #f9fcfd;
        }
      `,
    },
  },
});

declare module '@mui/material/styles' {
  interface Theme {
    ligth: {
      primary: string;
    };
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    ligth?: {
      primary?: string;
    };
    status?: {
      danger?: string;
    };
  }
}

export { theme };
