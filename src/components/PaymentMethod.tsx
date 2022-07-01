import * as React from 'react';

const PaymentMethod: React.FC = () => {
  return (
    <section>
      <h1>Método de pagamento</h1>
      <form>
        <label>
          Cartão
          <input type="radio"></input>
        </label>
        <label>
          Dinheiro
          <input type="radio"></input>
        </label>
      </form>
    </section>
  );
};

export { PaymentMethod };
