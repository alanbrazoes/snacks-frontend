import Link from 'next/link';
import React from 'react';

const CreateSnacks = () => {
  return (
    <>
      <Link href={'/createSnacks/burguer'}>
        <button>Hamburguers</button>
      </Link>
      <Link href={'/createSnacks/dishes'}>
        <button>Pratos</button>
      </Link>
      <Link href={'/createSnacks/drinks'}>
        <button>Bebidas</button>
      </Link>
    </>
  );
};

export default CreateSnacks;
