import React from 'react';

import Image from 'next/image';

import { ISnack, IDrink, IDishes } from '@types';

const Snack: React.FC<ISnack | IDishes | IDrink> = ({ name, _id, price }): JSX.Element => (
  <div className="border-2 border-background flex justify-between rounded">
    <div className="p-2">
      <h2 className="text-primary font-semibold text-xl">{name}</h2>
      <h3>R$ {price},00</h3>
    </div>
    <Image
      src="/img/burguer.jpg"
      width="100"
      height="100"
      className="rounded-tr-sm rounded-br-sm"
    />
  </div>
);

export default Snack;
