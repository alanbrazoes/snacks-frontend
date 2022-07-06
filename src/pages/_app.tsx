import type { AppProps } from 'next/app';

import '@style/main.css';
import { CartContext } from '@context/cart';
import { CheckoutContext } from '@context/checkout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CheckoutContext>
      <CartContext>
        <Component {...pageProps} />
      </CartContext>
    </CheckoutContext>
  );
}

export default MyApp;
