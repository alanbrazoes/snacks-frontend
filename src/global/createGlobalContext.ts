import { createContext } from 'react';

interface IEx {
  snack: string;
}

const GlobalContext = createContext<IEx>({ snack: 'oi' });

export default GlobalContext;
