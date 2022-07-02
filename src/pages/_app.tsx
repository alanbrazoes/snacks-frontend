import type { AppProps } from 'next/app';

import { CartContext } from '@context/cart';

import '@style/main.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContext>
      <Component {...pageProps} />
    </CartContext>
  );
}

export default MyApp;
