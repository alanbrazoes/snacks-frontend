import type { AppProps } from 'next/app';
import Global from 'src/global/globalState';
import { CssBaseline, ThemeProvider } from '@shared/index';
import { theme } from '@style/style-material';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Global>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme={false} />
        <Component {...pageProps} />
      </ThemeProvider>
    </Global>
  );
}

export default MyApp;
