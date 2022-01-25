import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
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
      <h1>{query.id}</h1>
    </>
  );
};

export default BurguerDetails;
