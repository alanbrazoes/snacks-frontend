import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useCart } from '@context/cart';
import { ISnack, IDrink, IDishes } from '@types';

const Snack: React.FC<ISnack | IDishes | IDrink> = ({ name, _id, price }): JSX.Element => {
  const { cart, setCart } = useCart();

  const addProductCart = () => {
    setCart([...cart, { name, _id, price, quantity: 1 }]);
  };

  return (
    <div className="border-2 border-background flex justify-between rounded">
      <div className="p-2">
        <h2 className="text-primary font-semibold text-xl">{name}</h2>
        <Link href={`/burguer/${_id}`}>{`R$ ${price},00`}</Link>
        <button onClick={addProductCart} className="block text-primary hover:underline">
          Adicionar ao carrinho
        </button>
      </div>
      <Link href={`/burguer/${_id}`}>
        <Image
          src="/img/burguer.jpg"
          width="100"
          height="100"
          className="rounded-tr-sm rounded-br-sm hover:cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Snack;
