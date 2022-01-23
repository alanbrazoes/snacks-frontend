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
      {snacks.map((value, i) => {
        return <Snack name={value.name} key={i} /> || <p>Oi</p>;
      })}
    </>
  );
};

export default Home;
