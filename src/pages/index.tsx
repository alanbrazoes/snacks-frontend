import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { apiSnacks } from '@services/api';

import Snack from '@components/Snacks';
import { ISnack } from '@types';

const Home: NextPage = () => {
  const [snacks, setSnacks] = useState<ISnack[]>([]);

  useEffect(() => {
    const teste = async () => {
      const response = await apiSnacks();
      setSnacks(response);
    };

    teste();
  }, []);

  return (
    <>
      <header>
        <h1>CB | Lanches</h1>
      </header>

      {snacks.map(({ name, preparationTime, _id }, i) => {
        return (
          <Snack name={name} preparationTime={preparationTime} _id={_id} key={i} /> || (
            <p> Carregando... </p>
          )
        );
      })}
    </>
  );
};

export default Home;
