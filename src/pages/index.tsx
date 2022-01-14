import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import User from '@components/User';
import api from '@services/api';

interface IUser {
  name: string;
}

const Home: NextPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api.get<IUser[]>('/snacks').then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <>
      {users.map((value, i) => (
        <User name={value.name} key={i} />
      ))}
    </>
  );
};

export default Home;
