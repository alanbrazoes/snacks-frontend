import React, { useEffect, useState } from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';

import Snack from '@components/Snacks';
import burguerApi from '@services/burguerApi';
import dishesApi from '@services/dishesApi';
import { Main } from '@style/indexStyle';
import { IDishes, ISnack } from '@types';

const Home: NextPage = () => {
  const [snacks, setSnacks] = useState<ISnack[]>();
  const [dishes, setDishes] = useState<IDishes[]>();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const burguer = await burguerApi.getAllBurguers();
        const dishesRequest = await dishesApi.getAllDishes();

        if (dishesRequest && burguer) {
          setSnacks(burguer);
          setDishes(dishesRequest.data);
        }
      } catch (error) {
        setError(true);
      }
    };
    fetch();
  }, []);

  console.log(dishes);

  return (
    <>
      <header>
        <h1>CB|Lanches</h1>
        <nav>
          <Link href={'/login'}>
            <button>Login</button>
          </Link>
          <Link href={'/cart'}>
            <button> Carrinho </button>
          </Link>
        </nav>
      </header>

      <Main>
        {error ? (
          <p>Algo deu errado</p>
        ) : (
          <>
            {snacks?.map(({ name, preparationTime, _id, ingredients, price }) => (
              <Snack
                name={name}
                preparationTime={preparationTime}
                _id={_id}
                ingredients={ingredients}
                key={_id}
                price={price}
              />
            ))}

            {dishes?.map(({ name, preparationTime, _id, ingredientList, price }) => (
              <Snack
                key={name}
                name={name}
                preparationTime={preparationTime}
                _id={_id}
                ingredients={ingredientList}
                price={price}
              />
            ))}
          </>
        )}
      </Main>
    </>
  );
};

export default Home;
