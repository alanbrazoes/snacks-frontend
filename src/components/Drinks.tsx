import * as React from 'react';

import Link from 'next/link';

import { Card } from '@style/componentsStyle/BurguerCard';
import { IDrink } from '@types';

const Drinks: React.FC<IDrink> = ({ name, price, _id }) => {
  return (
    <Link href={`/drink/${_id}`} passHref>
      <Card>
        <h2>{name}</h2>
        <h3>R$ {price},00</h3>
      </Card>
    </Link>
  );
};

export default Drinks;
