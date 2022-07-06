import React, { useState } from 'react';

import { NextPage } from 'next';

import { Address } from '@components/Address';
import { Header } from '@components/Header';
import { PaymentMethod } from '@components/PaymentMethod';

export interface IMethod {
  method: 'cash' | 'card';
  isReturnCash: boolean;
  returnCash: number;
}

const Checkout: NextPage = () => {
  const [method, setMethod] = useState<IMethod>({
    method: 'card',
    isReturnCash: false,
    returnCash: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMethod({ ...method, returnCash: Number(e.target.value) });
  };

  return (
    <>
      <Header />
      <main>
        <Address />
        <PaymentMethod payment={method} setMethod={setMethod} handleChange={handleChange} />
        <section>
          <p data-testid="total">Total: 0</p>
          <button data-testid="checkoutDone">Finalizar pedido</button>
        </section>
      </main>
    </>
  );
};

export default Checkout;
