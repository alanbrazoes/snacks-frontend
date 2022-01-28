import { IInput } from '@types';
import * as React from 'react';

const Input = ({ name, onChange, value, label, type }: IInput) => {
  return (
    <>
      <label>{label}</label>
      <input name={name} onChange={onChange} value={value} type={type}></input>
    </>
  );
};

export default Input;
