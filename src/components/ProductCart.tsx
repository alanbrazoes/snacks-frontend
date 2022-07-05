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

  const subQuantity = (id: string) =>
    setCart(
      cart.map((product) => {
        if (product._id === id && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      })
    );

  const removeProduct = (id: string) => setCart(cart.filter(({ _id }) => id !== _id));

  return (
    <section
      className="w-full flex flex-col justify-between items-center flex-1 sm:w-3/4 md:w-2/4"
      data-testid="products"
    >
      <div>
        {cart.map(({ name, quantity, _id, price }) => (
          <div key={name} className="flex border-2 w-fit m-2">
            <div className="p-2">
              <h4 className="text-primary text-xl font-semibold" data-testid="name">
                {name}
              </h4>
              <p>R$ {price},00</p>
              <button
                className="inline border rounded-full w-6"
                onClick={() => subQuantity(_id)}
                data-testid="subQuantity"
              >
                -
              </button>
              <p className="inline" data-testid="quantity">
                Quantidade: {quantity}
              </p>
              <button
                className="inline border rounded-full w-6"
                onClick={() => addQuantity(_id)}
                data-testid="addQuantity"
              >
                +
              </button>
              <button className="block" onClick={() => removeProduct(_id)} data-testid="removeBtn">
                Remover
              </button>
            </div>
            <Image src="/img/burguer.jpg" width="100" height="100" />
          </div>
        ))}
      </div>

      <div className="bottom-0 w-full flex justify-center items-center py-6 sm:w-3/4 md:w-2/4 h-8 bg-primary">
        <p className="text-background font-semibold text-3xl" data-testid="total">
          Total: R$ {total}
        </p>
      </div>
    </section>
  );
};

export { ProductCart };
