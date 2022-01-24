import { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/router';

const BurguerDetails: NextPage = () => {
  const { query } = useRouter();

  return (
    <>
      <h1>{query.id}</h1>
    </>
  );
};

export default BurguerDetails;
