import React from 'react';

import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';

import { Header } from '@components/Header';
import { Snack } from '@components/Snacks';
import { useCart } from '@context/cart';
import { getAllSnacks } from '@services/getAllSnacksApi';
import { IAllSnacks } from '@types';

const Home: NextPage<IAllSnacks> = ({ hamburguers, dishes }) => {
  const { cart } = useCart();
  return (
    <>
      <Header>
        <Link href="/cart">
          <p className="text-2xl opacity-90 p-2 hover:bg-background rounded" data-testid="cartLink">
            Carrinho | {cart.reduce((acc, { quantity }) => quantity + acc, 0)}
          </p>
        </Link>
      </Header>

      <main>
        <section className="flex flex-col">
          <div className="flex justify-center flex-col">
            <h2 className="filter_buttons">Hamburguers</h2>
            <div className="products_section">
              {hamburguers?.map(({ name, _id, price }) => (
                <Snack name={name} _id={_id} key={_id} price={price} />
              ))}
            </div>
          </div>

          <div className="flex justify-center flex-col">
            <h2 className="filter_buttons">Pratos</h2>
            <div className="products_section">
              {dishes?.map(({ name, _id, price }) => (
                <Snack name={name} _id={_id} key={_id} price={price} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { hamburguers, dishes } = await getAllSnacks();

  return {
    props: {
      hamburguers: hamburguers || null,
      dishes: dishes || null,
    },
  };
};

export default Home;
