import React, { useState } from 'react';

export const useForm = (initialState: any) => {
  const [form, setForm] = useState(initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue = value;
    const fieldName = name;

    setForm({ ...form, [fieldName]: newValue });
  };

  return [form, onChange];
};
