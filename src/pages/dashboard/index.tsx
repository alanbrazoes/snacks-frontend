import React from 'react';

import Link from 'next/link';

import { Header, FieldSet } from '@style/dashboardStyle';

const CreateSnacks = () => {
  return (
    <>
      <Header>
        <h1>CB | Lanches</h1>
        <button>Sair</button>
      </Header>
      <main>
        <FieldSet>
          <legend> Hamburguers </legend>
          <button>Ver</button>
          <Link href={'/dashboard/create/burguer'}>
            <button>Criar</button>
          </Link>
        </FieldSet>

        <FieldSet>
          <legend> Pratos </legend>
          <button>Ver</button>
          <Link href={'/dashboard/create/dishes'}>
            <button>Criar</button>
          </Link>
        </FieldSet>

        <FieldSet>
          <legend> Bebidas </legend>
          <button>Ver</button>
          <Link href={'/dashboard/create/drink'}>
            <button>Criar</button>
          </Link>
        </FieldSet>
      </main>
    </>
  );
};

export default CreateSnacks;
