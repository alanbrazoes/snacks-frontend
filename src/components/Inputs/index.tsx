import { IInput } from '@types';
import * as React from 'react';

const Input = ({ name, onChange, value }: IInput) => {
  return <input name={name} onChange={onChange} value={value}></input>;
};

export default Input;
