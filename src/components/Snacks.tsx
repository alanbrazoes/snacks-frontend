import { ISnack } from '@types';
import React from 'react';
import Link from 'next/link';

const Snack: React.FC<ISnack> = ({ name, preparationTime, _id, price }) => {
  return (
    <section>
      <h2>{name}</h2>
      <p>Tempo de preparo: {preparationTime} minutos.</p>
      <h3>{price}</h3>
      <button>Comprar</button>
      <Link href={`/burguer/${_id}`}>
        <button>Detalhes</button>
      </Link>
    </section>
  );
};

export default Snack;
