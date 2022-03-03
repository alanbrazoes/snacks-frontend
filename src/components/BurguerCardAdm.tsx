import React from 'react';

import { deleteBurguer } from '@services/burguerApi';
import { Card } from '@style/componentsStyle/BurguerCardStyle';

const BurguerCardAdm: React.FC<any> = ({ name, preparationTime, price, _id, isReload }) => {
  const deleteBurguers = (id: string) => {
    const del = async () => {
      await deleteBurguer(id);
      isReload();
    };

    del();
    return undefined;
  };

  return (
    <Card>
      <h2>{name}</h2>
      <p>Tempo de preparo: {preparationTime} minutos.</p>
      <h3>{price}</h3>
      <section>
        <button>Editar</button>
        <button onClick={() => deleteBurguers(_id)}>Deletar</button>
      </section>
    </Card>
  );
};

export default BurguerCardAdm;
