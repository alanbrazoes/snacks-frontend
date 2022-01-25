import { useState } from 'react';
import React from 'react';

import GlobalContext from './createGlobalContext';

const Global: React.FC = ({ children }) => {
  const [snack, setSnack] = useState({ snack: 'oi' });

  return <GlobalContext.Provider value={snack}>{children}</GlobalContext.Provider>;
};

export default Global;
