import React, { useEffect, useState } from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';

import Snack from '@components/Snacks';
import api from '@services/index';
import { Main } from '@style/indexStyle';
import { ISnack } from '@types';

const Home: NextPage = () => {
  const [snacks, setSnacks] = useState<ISnack[]>();
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .get('/burguers')
      .then((res) => {
        setSnacks(res.data);
      })
      .catch(() => setError(true));
  }, []);

  return (
    <>
      <header>
        <h1>CB|Lanches</h1>
        <nav>
          <Link href={'/login'}>
            <button>Login</button>
          </Link>
          <Link href={'/cart'}>
            <button> Carrinho </button>
          </Link>
        </nav>
      </header>

      <Main>
        {error ? (
          <p>Algo deu errado</p>
        ) : (
          snacks?.map(({ name, preparationTime, _id, ingredients, price }) => (
            <Snack
              name={name}
              preparationTime={preparationTime}
              _id={_id}
              ingredients={ingredients}
              key={_id}
              price={price}
            />
          ))
        )}
      </Main>
    </>
  );
};

export default Home;
