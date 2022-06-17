import React, { useContext } from 'react';

import { context } from '@context/cart';

const ProductCart: React.FC = () => {
  const { cart } = useContext(context);
  return (
    <>
      {cart.map(({ name, quantity }) => (
        <div key={name}>
          <p>{name}</p>
          <p>Quantidade: {quantity}</p>
        </div>
      ))}
    </>
  );
};

export default ProductCart;
