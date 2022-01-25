import { ISnack } from '@types';
import { createContext } from 'react';

const GlobalContext = createContext<ISnack[] | undefined>(undefined);

export default GlobalContext;
