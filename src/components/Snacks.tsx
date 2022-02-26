import React from 'react';

import Link from 'next/link';

import { ButtonsContainer } from '@style/snacksCardStyle';
import { ISnack } from '@types';

const Snack: React.FC<ISnack> = ({ name, preparationTime, _id, price }) => {
  return (
    <section>
      <h2>{name}</h2>
      <p>Tempo de preparo: {preparationTime} minutos.</p>
      <h3> R${price}</h3>
      <ButtonsContainer>
        <button>Comprar</button>
        <Link href={`/burguer/${_id}`}>
          <button>Detalhes</button>
        </Link>
      </ButtonsContainer>
    </section>
  );
};

export default Snack;
