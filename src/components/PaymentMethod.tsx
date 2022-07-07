import React from 'react';
import { DeepRequired, FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

import { ICheckout, IMethod } from '@pages/checkout';

interface IPayment {
  register: UseFormRegister<ICheckout>;
  errors: FieldErrorsImpl<DeepRequired<ICheckout>>;
  value: IMethod;
  chancgePayment: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaymentMethod: React.FC<IPayment> = ({ register, errors, value, chancgePayment }) => {
  return (
    <fieldset className="forms">
      <legend data-testid="paymentMethod">Método de pagamento</legend>
      <label>
        <input
          type="radio"
          {...register('payment.method', {
            onChange: chancgePayment,
            required: value.method !== ('cash' || 'card'),
          })}
          value="cash"
          checked={value.method === 'cash'}
        />
        Dinheiro
      </label>
      <label>
        <input
          type="radio"
          {...register('payment.method', {
            onChange: chancgePayment,
            required: value.method !== ('cash' || 'card'),
          })}
          value="card"
          checked={value.method === 'card'}
        />
        Cartão
      </label>
      {value.method === 'cash' ? (
        <label>
          Troco para:
          <input
            {...register('payment.returnCash', {
              required: value.method === 'cash',
            })}
            value={value.returnCash}
          />
        </label>
      ) : null}
      {errors.payment?.method && <p className="input_error">Campo obrigatório</p>}
      {errors.payment?.returnCash && <p className="input_error">Campo obrigatório</p>}
    </fieldset>
  );
};

export { PaymentMethod };
