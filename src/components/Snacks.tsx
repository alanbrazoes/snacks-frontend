import React, { useState } from 'react';

import Link from 'next/link';

import { useCart } from '@context/cart';

import { Modal } from './Modal';

interface ICom {
  name: string;
  _id: string;
  price: number;
}

const Snack: React.FC<ICom> = ({ name, _id, price }): JSX.Element => {
  const { cart, setCart } = useCart();
  const [show, setShow] = useState(false);

  const addProductCart = () => {
    setCart([...cart, { name, _id, price, quantity: 1 }]);
  };

  return (
    <div
      className="border-2 border-background flex justify-between rounded"
      data-testid="snackContainer"
    >
      <div className="p-2">
        <h2 className="text-primary font-semibold text-xl">{name}</h2>
        <button onClick={() => setShow(true)}>{`R$ ${price},00`}</button>
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
      <Modal show={show} onClose={() => setShow(false)} name={name} />
    </div>
  );
};

export { Snack };
