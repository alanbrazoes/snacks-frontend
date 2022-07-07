import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { NextPage } from 'next';

import { Address } from '@components/Address';
import { Header } from '@components/Header';
import { PaymentMethod } from '@components/PaymentMethod';
import { IAddress, useCheckout } from '@context/checkout';

export interface IMethod {
  method: 'cash' | 'card';
  isReturnCash: boolean;
  returnCash: number;
}

const Checkout: NextPage = () => {
  const { setMethod: setPayment, setAddress } = useCheckout();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IAddress>();

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

  const submitAddress: SubmitHandler<IAddress> = (data) => {
    setAddress({ ...data, number: Number(data.number) });
  };

  return (
    <>
      <Header />
      <main>
        <Address
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          submitAddress={submitAddress}
        />
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
