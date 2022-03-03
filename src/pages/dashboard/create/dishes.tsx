import React, { useEffect, useState } from 'react';

import { useForm } from '@hooks/useForm';
import { createDishe } from '@services/dishesApi';
import { Ingredient } from '@style/createStyle';

const CreateDishes = () => {
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(false);
  const [form, onChange, resetForm, removeIngredient] = useForm({
    name: '',
    price: 0,
    preparationTime: 0,
    ingredients: { ingredient: '', ingredientList: [] },
    type: 'dishes',
  });

  useEffect(() => {
    if (sucess)
      setTimeout(() => {
        setSucess(false);
      }, 5000);
  }, [sucess]);

  const {
    name,
    preparationTime,
    price,
    ingredients: { ingredient, ingredientList },
    type,
  } = form;

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await createDishe({ name, price, preparationTime, ingredientList, type });
      setSucess(true);
      resetForm({
        name: '',
        preparationTime: 0,
        ingredients: { ingredient: '', ingredientList: [] },
        price: 0,
        type: 'dishes',
      });
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <form onSubmit={submit}>
        <fieldset>
          <legend>Adicionar pratos</legend>
          <label>Nome</label>
          <input required name="name" onChange={onChange} value={name}></input>
          <label>Qual o tempo de preparo</label>
          <input
            required
            name="preparationTime"
            onChange={onChange}
            value={preparationTime}
          ></input>
          <label>Ingredientes</label>
          <input name="ingredients" onChange={onChange} value={ingredient}></input>
          <label>Preço</label>
          <input required name="price" onChange={onChange} value={price}></input>
          <button type="submit">Adicionar</button>
        </fieldset>
      </form>

      {ingredientList?.map((ingredient: string, index: number) => (
        <Ingredient key={index}>
          {ingredient}
          <button onClick={() => removeIngredient(ingredient)}>X</button>
        </Ingredient>
      ))}

      {error && <p>Ou Nou</p>}
      {sucess && <p>Prato adicionado ao cardápio.</p>}
    </>
  );
};

export default CreateDishes;
