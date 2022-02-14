import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@services/index';

import Snack from '@components/Snacks';
import { GlobalContext } from '@global/globalState';
import styled from 'styled-components';

const Home: NextPage = () => {
  const { snacks, setSnacks } = useContext(GlobalContext);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    api
      .get('/burguers')
      .then((res) => setSnacks(res.data))
      .catch(() => setError(true));
  }, []);

  const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
      <header>
        <Link href={'/login'}>
          <button>Login</button>
        </Link>
      </header>

      <Main>
        {error ? (
          <p>Algo deu errado</p>
        ) : (
          snacks?.map(({ name, preparationTime, _id, ingredients }) => {
            return (
              <Snack
                name={name}
                preparationTime={preparationTime}
                _id={_id}
                ingredients={ingredients}
                key={_id}
              />
            );
          })
        )}
      </Main>
    </>
  );
};

export default Home;
