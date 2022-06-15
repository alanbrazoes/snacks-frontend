import React from 'react';

import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';

import Snack from '@components/Snacks';
import { getAllSnacks } from '@services/getAllSnacksApi';
import { IAllSnacks } from '@types';

const Home: NextPage<IAllSnacks> = ({ hamburguers, dishes, drink }) => {
  return (
    <>
      <header className="p-4 border-b-4 border-background flex justify-between items-center">
        <h1 className="text-3xl font-semibold">CB | Lanches</h1>
        <nav>
          <a href="/cart" className="text-2xl opacity-90 p-2 hover:bg-background rounded">
            Carrinho
          </a>
        </nav>
      </header>

      <>
        <main>
          <section className="p-4 grid grid-col-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {hamburguers?.map(({ name, _id, ingredients, price }) => (
              <Snack name={name} _id={_id} ingredients={ingredients} key={_id} price={price} />
            ))}

            {dishes?.map(({ name, _id, ingredientList, price }) => (
              <Snack key={name} name={name} _id={_id} ingredients={ingredientList} price={price} />
            ))}

            {drink?.map(({ name, _id, price }) => (
              <Snack key={_id} name={name} price={price} _id={''} />
            ))}
          </section>
        </main>
      </>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { hamburguers, dishes, drink } = await getAllSnacks();

  return {
    props: {
      hamburguers: hamburguers || null,
      dishes: dishes || null,
      drink: drink || null,
    },
  };
};

export default Home;
