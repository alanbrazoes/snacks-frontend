import { ISnacks } from '@types';
import React from 'react';

const Snack: React.FC<ISnacks> = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default Snack;
