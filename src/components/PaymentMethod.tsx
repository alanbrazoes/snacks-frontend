import React from 'react';

import { IMethod } from '@pages/checkout';

interface IPayment {
  payment: IMethod;
  setMethod: React.Dispatch<React.SetStateAction<IMethod>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaymentMethod: React.FC<IPayment> = ({ payment, setMethod, handleChange }) => {
  return (
    <section>
      <form className="flex justify-center">
        <fieldset className="forms">
          <legend>Método de pagamento</legend>
          <label>
            <input
              type="radio"
              value="card"
              checked={payment.method === 'card'}
              onChange={() => setMethod({ ...payment, method: 'card' })}
            ></input>
            Cartão
          </label>
          <label>
            <input
              type="radio"
              value="card"
              checked={payment.method === 'cash'}
              onChange={() => setMethod({ ...payment, method: 'cash' })}
            ></input>
            Dinheiro
          </label>
          {payment.method === 'cash' ? (
            <label>
              Troco para:
              <input type="number" value={payment.returnCash} onChange={handleChange}></input>
            </label>
          ) : null}
        </fieldset>
      </form>
    </section>
  );
};

export { PaymentMethod };
