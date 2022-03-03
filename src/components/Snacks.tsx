import React from 'react';

import Link from 'next/link';

import { Card } from '@style/componentsStyle/BurguerCard';
import { ButtonsContainer } from '@style/snacksCardStyle';
import { ISnack } from '@types';

const Snack: React.FC<ISnack> = ({ name, preparationTime, _id, price }) => {
  return (
    <Link href={`/burguer/${_id}`} passHref>
      <Card>
        <h2>{name}</h2>
        <p>Tempo de preparo: {preparationTime} minutos.</p>
        <ButtonsContainer>
          <h3>R$ {price}</h3>
        </ButtonsContainer>
      </Card>
    </Link>
  );
};

export default Snack;
