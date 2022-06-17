import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import { useCart } from '@context/cart';

const ProductCart: React.FC = () => {
  const { cart, setCart } = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const priceTotal = cart.reduce((acc, att) => {
      return acc + att.price * att.quantity;
    }, 0);

    setTotal(priceTotal);
  });

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

  const removeProduct = (id: string) => {
    setCart(cart.filter(({ _id }) => id !== _id));
  };

  return (
    <section className="w-2/4 border-x flex flex-col items-center h-full">
      {cart.map(({ name, quantity, _id }) => (
        <div key={name} className="flex border-2 w-fit m-2">
          <div className="p-2">
            <p>{name}</p>
            <button className="inline border rounded-full w-6" onClick={() => subQuantity(_id)}>
              -
            </button>
            <p className="inline"> Quantidade: {quantity} </p>
            <button className="inline border rounded-full w-6" onClick={() => addQuantity(_id)}>
              +
            </button>
            <button onClick={() => removeProduct(_id)}>Remover</button>
          </div>
          <Image src="/img/burguer.jpg" width="100" height="100" />
        </div>
      ))}

      <div className="fixed bottom-0 flex justify-evenly items-center w-2/4 h-8 bg-primary">
        <p>Total: {total}</p>
        <button>Finalizar pedido</button>
      </div>
    </section>
  );
};

export default ProductCart;
