import React from 'react';

interface ISnacks {
  name: string;
}

const Snack: React.FC<ISnacks> = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
};

export default Snack;
