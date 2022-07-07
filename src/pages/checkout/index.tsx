import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { NextPage } from 'next';

import { Address } from '@components/Address';
import { Header } from '@components/Header';
import { PaymentMethod } from '@components/PaymentMethod';

export interface IMethod {
  method: string;
  isReturnCash: boolean;
  returnCash: number;
}

export interface ICheckout {
  payment: {
    method: string;
    isReturnCash: boolean;
    returnCash: number;
  };
  address: {
    street: string;
    number: number;
    complement: number;
    district: string;
    city: string;
  };
}

const Checkout: NextPage = () => {
  const [payment, setPayment] = useState<IMethod>({} as IMethod);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ICheckout>();

  const submitAddress: SubmitHandler<ICheckout> = (data) => {
    console.log(data);
  };

  const chancgePayment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment({ ...payment, method: e.target.value });
  };

  return (
    <>
      <Header />
      <main>
        <form onSubmit={handleSubmit(submitAddress)} className="flex flex-col items-center">
          <Address register={register} errors={errors} />
          <PaymentMethod
            register={register}
            errors={errors}
            value={payment}
            chancgePayment={chancgePayment}
          />
          <section>
            <p data-testid="total">Total: 0</p>
            <button type="submit" data-testid="checkoutDone">
              Finalizar pedido
            </button>
          </section>
        </form>
      </main>
    </>
  );
};

export default Checkout;
