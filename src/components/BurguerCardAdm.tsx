import React from 'react';

import burguerApi from '@services/burguerApi';

const BurguerCardAdm: React.FC<any> = ({ name, preparationTime, price, _id, isReload }) => {
  const deleteBurguer = (id: string) => {
    const del = async () => {
      await burguerApi.deleteBurguer(id);
      isReload();
    };

    del();
    return undefined;
  };

  return (
    <>
      <section>
        <h2>{name}</h2>
        <p>Tempo de preparo: {preparationTime} minutos.</p>
        <h3>{price}</h3>
        <section>
          <button>Editar</button>
          <button onClick={() => deleteBurguer(_id)}>Deletar</button>
        </section>
      </section>
    </>
  );
};

export default BurguerCardAdm;
