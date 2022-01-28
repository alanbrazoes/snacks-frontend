import { ISnack } from '@types';
import React from 'react';
import Link from 'next/link';

const Snack: React.FC<ISnack> = ({ name, preparationTime, _id }) => {
  return (
    <>
      <h2>{name}</h2>
      <p>Tempo de preparação: {preparationTime} minutos</p>

      <button>Comprar</button>

      <Link href={`/burguer/${_id}`}>
        <button>Detalhes</button>
      </Link>
    </>
  );
};

export default Snack;
