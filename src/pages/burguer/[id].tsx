import React, { useEffect, useState } from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

import api from '@services/index';
import { ISnack } from '@types';

const BurguerDetails: NextPage = () => {
  const {
    query: { id },
  } = useRouter();
  const [snack, setSnack] = useState<ISnack>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const { data } = await api.get(`/burguer/${id}`);
        setSnack(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    getDetails();
  }, []);

  if (error) return <p>Error</p>;

  return (
    <>
      <header>
        <h1>CB | Lanches</h1>
      </header>

      {loading ? (
        <h2>carregando...</h2>
      ) : (
        <>
          <h1>{snack?.name}</h1>
          <p>Ingredientes: {snack?.ingredients?.join(', ')}.</p>
          <button> Adicionar ao carrinho </button>
        </>
      )}
    </>
  );
};

export default BurguerDetails;
