import type { NextPage } from 'next';
import { useContext } from 'react';

import Snack from '@components/Snacks';
import GlobalContext from '@global/createGlobalContext';

const Home: NextPage = () => {
  const snack = useContext(GlobalContext);

  return (
    <>
      {snack?.map(({ name, preparationTime, _id }, i) => {
        return <Snack name={name} preparationTime={preparationTime} _id={_id} key={i} /> || <></>;
      })}
    </>
  );
};

export default Home;
