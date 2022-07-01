import React from 'react';

import { NextPage } from 'next';

import { Address } from '@components/Address';

const Checkout: NextPage = () => {
  return (
    <>
      <header>CB | Lanches</header>
      <main>
        <Address />
      </main>
    </>
  );
};

export { Checkout };
