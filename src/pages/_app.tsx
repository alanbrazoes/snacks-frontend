import type { AppProps } from 'next/app';
// import 'dotenv/config';

import Global from '@context/globalState';
import '@style/style.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Global>
      <Component {...pageProps} />
    </Global>
  );
}

export default MyApp;
