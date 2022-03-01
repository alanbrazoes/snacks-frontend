import React, { useState } from 'react';

import { IForm } from '@types';

export const useForm = (initialState: any) => {
  const [form, setForm] = useState(initialState);
  const {
    ingredients: { ingredient, ingredientList },
  } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue = value;
    const fieldName = name;

    if (name === 'ingredients') {
      if (value.includes(',')) {
        setForm({
          ...form,
          [fieldName]: { ingredient: '', ingredientList: [...ingredientList, ingredient] },
        });
      } else {
        setForm({
          ...form,
          [fieldName]: { ingredient: value, ingredientList: [...ingredientList] },
        });
      }
    } else {
      setForm({ ...form, [fieldName]: newValue });
    }
  };

  const removeIngredient = (ingre: string) => {
    if (ingredientList.length === 1) {
      setForm({ ...form, ingredients: { ingredient: '', ingredientList: [] } });
    } else {
      const newIngredientList = ingredientList.filter((ingredient: string) => ingredient !== ingre);
      setForm({ ...form, ingredients: { ingredient: '', ingredientList: [newIngredientList] } });
    }
  };

  const resetForm = (state: IForm) => {
    setForm(state);
  };

  return [form, onChange, resetForm, removeIngredient];
};
