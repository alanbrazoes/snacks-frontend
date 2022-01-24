import { ThemeProvider } from '@shared';
import { theme } from '@style/style-material';

import type { AppProps } from 'next/app';
import '@style/style.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
