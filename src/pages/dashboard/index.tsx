import Link from 'next/link';
import React from 'react';

const CreateSnacks = () => {
  return (
    <>
      <Link href={'/dashboard/create/burguer'}>
        <button>Hamburguers</button>
      </Link>
      <Link href={'/dashboard/create/dishes'}>
        <button>Pratos</button>
      </Link>
      <Link href={'/dashboard/create/drink'}>
        <button>Bebidas</button>
      </Link>
    </>
  );
};

export default CreateSnacks;
