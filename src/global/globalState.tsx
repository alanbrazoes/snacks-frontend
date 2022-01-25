import { useEffect, useState } from 'react';
import React from 'react';

import GlobalContext from '@global/createGlobalContext';
import { ISnack } from '@types';
import api from '@services/index';

const Global: React.FC = ({ children }) => {
  const [snacks, setSnacks] = useState<ISnack[]>();

  useEffect(() => {
    api
      .get('/')
      .then((res) => setSnacks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <GlobalContext.Provider value={snacks}>{children}</GlobalContext.Provider>;
};

export default Global;
