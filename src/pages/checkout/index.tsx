import React from 'react';

import { NextPage } from 'next';

import { Address } from '@components/Address';
import { PaymentMethod } from '@components/PaymentMethod';

const Checkout: NextPage = () => {
  return (
    <>
      <header>CB | Lanches</header>
      <main>
        <Address />
        <PaymentMethod />
      </main>
    </>
  );
};

export { Checkout };
