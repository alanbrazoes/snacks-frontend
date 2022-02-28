import React, { useState } from 'react';

interface IForm {
  name: string;
  preparationTime: number;
  ingredients?: { ingredient: string; ingredienList: string[] };
  price: number;
  type: string;
}

export const useForm = (initialState: any) => {
  const [form, setForm] = useState(initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'ingredients') {
      console.log(value);
    }
    const newValue = value;
    const fieldName = name;

    setForm({ ...form, [fieldName]: newValue });
  };

  const resetForm = (state: IForm) => {
    setForm(state);
  };

  return [form, onChange, resetForm];
};
