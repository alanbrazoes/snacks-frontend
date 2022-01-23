import { ISnacks } from '@types';
import React from 'react';

const Snack: React.FC<ISnacks> = ({ name, preparationTime }) => {
  return (
    <>
      <h2>{name}</h2>
      <p>Tempo de preparação: {preparationTime} minutos</p>
      <button> Comprar </button>
      <button> Detalhes </button>
    </>
  );
};

export default Snack;
