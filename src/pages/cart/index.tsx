import React from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';

import Header from '@components/Header';
import ProductCart from '@components/ProductCart';

const Cart: NextPage = () => {
  return (
    <>
      <Header>
        <Link href="/">
          <p className="text-2xl opacity-90 p-2 hover:bg-background rounded">Home</p>
        </Link>
      </Header>
      <main className="flex items-center flex-col h-full">
        <ProductCart />
      </main>
    </>
  );
};

export default Cart;
