import { orange, red } from '@material-ui/core/colors';
import { createTheme } from '@shared';

const theme = createTheme({
  ligth: {
    primary: red[500],
  },
  status: {
    danger: orange[500],
  },
});

declare module '@material-ui/core/styles' {
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
