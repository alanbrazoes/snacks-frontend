import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import BurguerCardAdm from '@components/BurguerCardAdm';
import api from '@services/index';
import { Header, FieldSet } from '@style/dashboardStyle';
import { ISnack } from '@types';

const CreateSnacks = () => {
  const [isSelect, setIsSelect] = useState<string>('default');
  const [type, setType] = useState<ISnack[] | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(false);

  useEffect(() => {
    if (isSelect === 'burguer') {
      api
        .get('/burguers')
        .then((res) => {
          setType(res.data);
        })
        .catch(() => setError(true));
    }
  }, [isSelect, reload]);

  const isReload = () => setReload(!reload);

  return (
    <>
      <Header>
        <h1>CB | Lanches</h1>
        <button>Sair</button>
      </Header>
      <main>
        <FieldSet>
          <legend> Hamburguers </legend>
          <button onClick={() => setIsSelect('burguer')}>Ver</button>
          <Link href={'/dashboard/create/burguer'}>
            <button>Criar</button>
          </Link>
        </FieldSet>

        <FieldSet>
          <legend> Pratos </legend>
          <button onClick={() => setIsSelect('dishes')}>Ver</button>
          <Link href={'/dashboard/create/dishes'}>
            <button>Criar</button>
          </Link>
        </FieldSet>

        <FieldSet>
          <legend> Bebidas </legend>
          <button onClick={() => setIsSelect('drinks')}>Ver</button>
          <Link href={'/dashboard/create/drink'}>
            <button>Criar</button>
          </Link>
        </FieldSet>

        {error && <h1>Ops...</h1>}

        {type?.map((snack) => (
          <BurguerCardAdm {...snack} isReload={isReload} />
        ))}
      </main>
    </>
  );
};

export default CreateSnacks;
