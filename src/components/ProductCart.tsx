import React from 'react';

import { useCart } from '@context/cart';

const ProductCart: React.FC = () => {
  const { cart, setCart } = useCart();

  const addQuantity = (_id: string) => {
    setCart(
      cart.map((product) => {
        if (product._id === _id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      })
    );
  };

  const subQuantity = (_id: string) => {
    setCart(
      cart.map((product) => {
        if (product._id === _id && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      })
    );
  };

  return (
    <>
      {cart.map(({ name, quantity, _id }) => (
        <div key={name} className="border-2 w-fit p-2 m-2">
          <p>{name}</p>
          <button className="inline border rounded-full w-6" onClick={() => subQuantity(_id)}>
            -
          </button>
          <p className="inline"> Quantidade: {quantity} </p>
          <button className="inline border rounded-full w-6" onClick={() => addQuantity(_id)}>
            +
          </button>
        </div>
      ))}
    </>
  );
};

export default ProductCart;
