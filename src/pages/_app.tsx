import type { AppProps } from 'next/app';
import '@style/style.css';
import Global from 'src/global/globalState';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Global>
      <Component {...pageProps} />
    </Global>
  );
}

export default MyApp;
