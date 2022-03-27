import React from 'react';

import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';

import Snack from '@components/Snacks';
import { getAllSnacks } from '@services/getAllSnacksApi';
import { Main, Header } from '@style/indexStyle';
import { IAllSnacks } from '@types';

const Home: NextPage<IAllSnacks> = ({ hamburguers, dishes, drink }) => {
  return (
    <>
      <Header>
        <h1>CB|Lanches</h1>
        <nav>
          <Link href={'/login'} passHref>
            <button>Login</button>
          </Link>
          <Link href={'/cart'} passHref>
            <button> Carrinho </button>
          </Link>
        </nav>
      </Header>

      <>
        <Main>
          {hamburguers?.map(({ name, _id, ingredients, price }) => (
            <Snack name={name} _id={_id} ingredients={ingredients} key={_id} price={price} />
          ))}

          {dishes?.map(({ name, _id, ingredientList, price }) => (
            <Snack key={name} name={name} _id={_id} ingredients={ingredientList} price={price} />
          ))}

          {drink?.map(({ name, _id, price }) => (
            <Snack key={_id} name={name} price={price} _id={''} />
          ))}
        </Main>
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
