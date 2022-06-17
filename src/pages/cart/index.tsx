import React from 'react';

import type { NextPage } from 'next';

import ProductCart from '@components/ProductCart';

const Cart: NextPage = () => {
  return (
    <>
      <h1>Carrinho</h1>
      <ProductCart />
    </>
  );
};

export default Cart;
