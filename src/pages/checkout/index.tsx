import React from 'react';

import { NextPage } from 'next';

import { Address } from '@components/Address';
import { Header } from '@components/Header';
import { PaymentMethod } from '@components/PaymentMethod';

const Checkout: NextPage = () => {
  return (
    <>
      <Header />
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

export default Checkout;
