import { ISnacks } from 'src/types/types';
import React from 'react';
import Link from 'next/link';

import { Button, Card } from '@shared';

const Snack: React.FC<ISnacks> = ({ name, preparationTime, _id }) => {
  return (
    <>
      <Card variant="outlined">
        <h2>{name}</h2>
        <p>Tempo de preparação: {preparationTime} minutos</p>

        <Button variant="contained" size="small">
          Comprar
        </Button>

        <Link href={`/burguer/${_id}`}>
          <Button variant="text" color="primary" size="small">
            Detalhes
          </Button>
        </Link>
      </Card>
    </>
  );
};

export default Snack;
