import React, { useEffect, useState } from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';

import Snack from '@components/Snacks';
import { getAllBurguers } from '@services/burguerApi';
import { getAllDishes } from '@services/dishesApi';
import { ISnacks } from '@types';
import styled from 'styled-components';

const Home: NextPage = () => {
  const [snacks, setSnacks] = useState<ISnacks>({
    burguers: [],
    dishes: [],
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    try {
      const [getBurguers, getDishes] = await Promise.all([getAllBurguers(), getAllDishes()]);

      if (getBurguers && getDishes) {
        setSnacks({ burguers: getBurguers, dishes: getDishes.data });
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const { burguers, dishes } = snacks;

  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;

    h1 {
      font-size: 2em;
    }

    button {
      font-size: 1.1em;
    }
  `;

  const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  `;

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
        {loading && <h3>Carregando</h3>}
        {error ? (
          <p>Algo deu errado</p>
        ) : (
          <Main>
            {burguers?.map(({ name, preparationTime, _id, ingredients, price }) => (
              <Snack
                name={name}
                preparationTime={preparationTime}
                _id={_id}
                ingredients={ingredients}
                key={_id}
                price={price}
              />
            ))}

            {dishes?.map(({ name, preparationTime, _id, ingredientList, price }) => (
              <Snack
                key={name}
                name={name}
                preparationTime={preparationTime}
                _id={_id}
                ingredients={ingredientList}
                price={price}
              />
            ))}
          </Main>
        )}
      </>
    </>
  );
};

export default Home;
