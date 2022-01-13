import React from 'react';

interface IUser {
  name: string;
}

const User: React.FC<IUser> = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default User;
