import { useContext, useEffect, useState } from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';

import Snack from '@components/Snacks';
import { GlobalContext } from '@context/globalState';
import api from '@services/index';
import styled from 'styled-components';

const Home: NextPage = () => {
  const { snacks, setSnacks } = useContext(GlobalContext);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    api
      .get('/burguers')
      .then((res) => {
        setSnacks(res.data);
      })
      .catch(() => setError(true));
  }, []);

  const Main = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `;

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
          snacks?.map(({ name, preparationTime, _id, ingredients, price }) => {
            return (
              <Snack
                name={name}
                preparationTime={preparationTime}
                _id={_id}
                ingredients={ingredients}
                key={_id}
                price={price}
              />
            );
          })
        )}
      </Main>
    </>
  );
};

export default Home;
