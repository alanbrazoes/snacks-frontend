import React, { useState } from 'react';

const CreateSnacks = () => {
  const [typeSnack, setTypeSnack] = useState<string>('default');

  return (
    <>
      <button>Drinks</button>
      <button>Pratos</button>
      <button>Hamburguers</button>
    </>
  );
};

export default CreateSnacks;
