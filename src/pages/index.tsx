import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import User from '@components/User';
import api from '@services/api';

interface IUser {
  name: string;
}

const Home: NextPage = () => {
  const [users, setUsers] = useState<IUser>({ name: 'Alan' });

  // useEffect(() => {
  //   api.get<IUser[]>('/snacks').then((res) => {
  //     setUsers(res.data);
  //   });
  // }, []);

  return (
    <>
      <User name={users.name} />
    </>
  );
};

export default Home;
