import React from 'react';

import Link from 'next/link';

import { useCart } from '@context/cart';
import { IBurguer, IDrink, IDish } from '@types';

const Snack: React.FC<IBurguer | IDish | IDrink> = ({ name, _id, price }): JSX.Element => {
  const { cart, setCart } = useCart();

  const addProductCart = () => {
    const alreadyExist = cart.some(({ _id: id }) => id === _id);
    let newSnack = [...cart, { name, _id, price, quantity: 1 }];

    if (alreadyExist) {
      newSnack = cart.map((product) => {
        if (product._id === _id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    }

    setCart(newSnack);
  };

  return (
    <div
      className="border-2 border-background flex justify-between rounded"
      data-testid="snackContainer"
    >
      <div className="p-2">
        <h2 className="text-primary font-semibold text-xl">{name}</h2>
        <Link href={`/snack/${_id}`}>{`R$ ${price},00`}</Link>
        <button onClick={addProductCart} className="block text-primary hover:underline">
          Adicionar ao carrinho
        </button>
      </div>
      <Link href={`/burguer/${_id}`}>
        <img
          src="/img/burguer.jpg"
          className="rounded-tr-sm w-28 rounded-br-sm hover:cursor-pointer"
        />
      </Link>
    </div>
  );
};

export { Snack };
