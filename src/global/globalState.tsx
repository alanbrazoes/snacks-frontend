import React, { useState, createContext } from 'react';
import { ISnack } from '@types';

interface IPropsSnacksContext {
  snacks: ISnack[];
  setSnacks: React.Dispatch<React.SetStateAction<ISnack[]>>;
}

const DEFAULT_VALUE = {
  snacks: [
    {
      _id: '',
      name: '',
      preparationTime: 0,
      ingredients: [''],
    },
  ],
  setSnacks: () => {
    return null;
  },
};

export const GlobalContext = createContext<IPropsSnacksContext>(DEFAULT_VALUE);

const Global: React.FC = ({ children }) => {
  const [snacks, setSnacks] = useState(DEFAULT_VALUE.snacks);

  return <GlobalContext.Provider value={{ snacks, setSnacks }}>{children}</GlobalContext.Provider>;
};

export default Global;
