import React, { useState } from 'react';

import { NextPage } from 'next';

import { Address } from '@components/Address';
import { Header } from '@components/Header';
import { PaymentMethod } from '@components/PaymentMethod';
import { useCheckout } from '@context/checkout';

export interface IMethod {
  method: 'cash' | 'card';
  isReturnCash: boolean;
  returnCash: number;
}

const Checkout: NextPage = () => {
  const { setMethod: setPayment } = useCheckout();
  const [method, setMethod] = useState<IMethod>({
    method: 'card',
    isReturnCash: false,
    returnCash: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMethod({ ...method, returnCash: Number(e.target.value) });
  };

  const submitPayment = () => {
    setPayment(method);
  };

  return (
    <>
      <Header />
      <main>
        <Address />
        <PaymentMethod payment={method} setMethod={setMethod} handleChange={handleChange} />
        <section>
          <p data-testid="total">Total: 0</p>
          <button data-testid="checkoutDone" onClick={submitPayment}>
            Finalizar pedido
          </button>
        </section>
      </main>
    </>
  );
};

export default Checkout;
