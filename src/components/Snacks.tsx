import React from 'react';

import Link from 'next/link';

import { Card } from '@style/componentsStyle/BurguerCard';
import { ISnack, IDrink, IDishes } from '@types';

const Snack: React.FC<ISnack | IDishes | IDrink> = ({ name, _id, price }): JSX.Element => (
  <Link href={`/burguer/${_id}`} passHref>
    <Card>
      <h2>{name}</h2>
      <h3>R$ {price},00</h3>
    </Card>
  </Link>
);

export default Snack;
