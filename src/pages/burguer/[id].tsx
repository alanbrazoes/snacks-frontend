import React, { useEffect, useState } from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

import api from '@services/index';
import { ISnack } from '@types';

const BurguerDetails: NextPage = () => {
  const { query } = useRouter();
  const [snack, setSnack] = useState<ISnack>();

  useEffect(() => {
    const tes = async () => {
      try {
        const res = await api.get(`/burguer/${query.id}`);
        setSnack(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    tes();
  }, []);

  return (
    <>
      <header>
        <h1>CB | Lanches</h1>
      </header>

      <h1>{snack?.name}</h1>
      <p>Ingredientes: {snack?.ingredients?.join(', ')}.</p>
      <button> Adicionar ao carrinho </button>
    </>
  );
};

export default BurguerDetails;
