import { ISnack } from '@types';
import React from 'react';
import Link from 'next/link';
import { Card, CardActions, Button, CardContent, Typography } from '@shared/index';

const Snack: React.FC<ISnack> = ({ name, preparationTime, _id }) => {
  return (
    <Card sx={{ maxWidth: 300 }} variant="outlined">
      <Typography variant="h4" component={'h4'}>
        {name}
      </Typography>

      <CardContent component={'section'}>Tempo de preparo: {preparationTime} minutos.</CardContent>

      <CardActions>
        <Button variant="contained">Comprar</Button>
        <Link href={`/burguer/${_id}`}>
          <Button variant="contained">Detalhes</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Snack;
