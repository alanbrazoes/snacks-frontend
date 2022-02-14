import type { AppProps } from 'next/app';
import Global from 'src/global/globalState';
import '@style/style.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Global>
      <Component {...pageProps} />
    </Global>
  );
}

export default MyApp;
