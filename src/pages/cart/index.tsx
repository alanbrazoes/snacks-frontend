import React from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';

import { Header } from '@components/Header';
import { ProductCart } from '@components/ProductCart';

const Cart: NextPage = () => {
  return (
    <div className="flex flex-col h-full">
      <Header>
        <Link href="/">
          <p className="text-2xl opacity-90 p-2 hover:bg-background rounded">Home</p>
        </Link>
      </Header>
      <main className="flex items-center flex-col flex-1">
        <ProductCart />
        <button className="font-semibold text-3xl" data-testid="finish">
          <Link href="/checkout" aria-label="redirect to checkout">
            Finalizar pedido
          </Link>
        </button>
      </main>
    </div>
  );
};

export default Cart;
