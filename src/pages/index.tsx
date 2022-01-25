import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';

import { apiSnacks } from '@services/api';
import Snack from '@components/Snacks';
import { ISnack } from '@types';
import GlobalContext from 'src/global/createGlobalContext';

const Home: NextPage = () => {
  const [snacks, setSnacks] = useState<ISnack[]>([]);

  const { snack } = useContext(GlobalContext);

  useEffect(() => {
    const teste = async () => {
      const response = await apiSnacks();
      setSnacks(response);
    };

    console.log(snack);
    teste();
  }, []);

  return (
    <>
      <head>
        <title> CB | Lanches </title>
      </head>

      <header>
        <h1>CB | Lanches</h1>
      </header>

      {snacks.map(({ name, preparationTime, _id }, i) => {
        return <Snack name={name} preparationTime={preparationTime} _id={_id} key={i} /> || <></>;
      })}
    </>
  );
};

export default Home;
