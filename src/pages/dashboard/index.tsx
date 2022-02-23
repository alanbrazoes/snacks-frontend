import React from 'react';

import Link from 'next/link';

const CreateSnacks = () => {
  return (
    <>
      <fieldset>
        <legend> Hamburguers </legend>
        <button>Ver</button>
        <Link href={'/dashboard/create/burguer'}>
          <button>Criar</button>
        </Link>
      </fieldset>

      <fieldset>
        <legend> Pratos </legend>
        <button>Ver</button>
        <Link href={'/dashboard/create/dishes'}>
          <button>Criar</button>
        </Link>
      </fieldset>

      <fieldset>
        <legend> Bebidas </legend>
        <button>Ver</button>
        <Link href={'/dashboard/create/drink'}>
          <button>Criar</button>
        </Link>
      </fieldset>
    </>
  );
};

export default CreateSnacks;
