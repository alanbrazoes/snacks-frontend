import type { NextPage } from 'next';
import { useContext, useEffect } from 'react';
import Link from 'next/link';
import api from '@services/index';

import { Button } from '@shared/index';
import Snack from '@components/Snacks';
import { GlobalContext } from '@global/globalState';

const Home: NextPage = () => {
  const { snacks, setSnacks } = useContext(GlobalContext);

  useEffect(() => {
    console.log('aqui');
    api
      .get('/burguers')
      .then((res) => setSnacks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Link href={'/login'}>
        <Button>Login</Button>
      </Link>

      {snacks?.map(({ name, preparationTime, _id, ingredients }) => {
        return (
          (
            <Snack
              name={name}
              preparationTime={preparationTime}
              _id={_id}
              ingredients={ingredients}
              key={_id}
            />
          ) || <></>
        );
      })}
    </>
  );
};

export default Home;
