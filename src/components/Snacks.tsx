import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import burguer from '@img/burguer.png';
import { Card } from '@style/componentsStyle/BurguerCard';
import { ISnack } from '@types';

const Snack: React.FC<ISnack> = ({ name, _id, price }) => {
  return (
    <Link href={`/burguer/${_id}`} passHref>
      <Card>
        <Image alt="burguer" src={burguer} width="20px" height="20px" />
        <div>
          <h2>{name}</h2>
          <h3>R$ {price},00</h3>
        </div>
      </Card>
    </Link>
  );
};

export default Snack;
