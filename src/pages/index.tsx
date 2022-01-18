import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import Snack from '@components/Snacks';
import api from '@services/api';

interface ISnack {
  _id: string;
  name: string;
  preparationTime: number;
  ingredients: [string];
}

const Home: NextPage = () => {
  const [snacks, setSnacks] = useState<ISnack[]>([]);

  useEffect(() => {
    api.get('/').then((res) => {
      console.log(res.data[0].hamburguers);
      setSnacks(res.data[0].hamburguers);
    });
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
