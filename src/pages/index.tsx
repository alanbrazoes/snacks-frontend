import type { NextPage } from 'next';
import { useContext } from 'react';
import Link from 'next/link';

import { Button } from '@shared/index';
import Snack from '@components/Snacks';
import GlobalContext from '@global/createGlobalContext';

const Home: NextPage = () => {
  const snack = useContext(GlobalContext);

  return (
    <>
      <Link href={'/login'}>
        <Button>Login</Button>
      </Link>
      {snack?.map(({ name, preparationTime, _id }, i) => {
        return <Snack name={name} preparationTime={preparationTime} _id={_id} key={i} /> || <></>;
      })}
    </>
  );
};

export default Home;
