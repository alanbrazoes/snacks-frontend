import React from 'react';

import { NextPage } from 'next';

import { Address } from '@components/Address';
import { PaymentMethod } from '@components/PaymentMethod';

const Checkout: NextPage = () => {
  return (
    <>
      <header>CB | Lanches</header>
      <main>
        <Address />
        <PaymentMethod />
        <section>
          <p data-testid="total">Total: 0</p>
          <button data-testid="checkoutDone">Finalizar pedido</button>
        </section>
      </main>
    </>
  );
};

export { Checkout };
