import type { AppProps } from 'next/app';

import Global from '@context/globalState';
import GlobalStyle from '@style/global';
import theme from '@style/theme';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Global>
        <Component {...pageProps} />
      </Global>
    </ThemeProvider>
  );
}

export default MyApp;
