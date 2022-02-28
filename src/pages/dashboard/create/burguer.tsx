import React, { useEffect, useState } from 'react';

import { useForm } from '@hooks/useForm';
import burguerApi from '@services/burguerApi';
import { Ingredient } from '@style/createStyle';

const CreateBurguer = () => {
  const [ingredients, setIngredientsList] = useState<string[]>([]);
  const [ingredient, setIngredient] = useState<string>('');
  const [sucess, setSucess] = useState<boolean>(false);
  const [error, setError] = useState(false);

  const [form, onChange, resetForm] = useForm({
    name: '',
    preparationTime: 0,
    // ingredients: {ingredient: '', ingredientList: []},
    price: 0,
    type: 'burguer',
  });

  useEffect(() => {
    if (sucess)
      setTimeout(() => {
        setSucess(false);
      }, 5000);
  }, [sucess]);

  const { name, preparationTime, price, type } = form;

  const submit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await burguerApi.createBurguer({ name, preparationTime, ingredients, price, type });
      setSucess(true);
      setIngredientsList([]);
      resetForm({
        name: '',
        preparationTime: 0,
        // ingredients: {ingredient: '', ingredientList: []},
        price: 0,
        type: 'burguer',
      });
    } catch (error) {
      setError(true);
    }
  };

  const changeIngredients = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { value } = e.target;
    setIngredient(value);
    if (value.includes(',') && value.length > 1) {
      const newValue = value.replace(',', ' ');
      setIngredientsList([newValue, ...ingredients]);
      setIngredient('');
    }
  };

  const removeIngredient = (ingredientRemove: string): void => {
    const newIngredients = ingredients.filter((ingredient) => ingredient !== ingredientRemove);
    setIngredientsList(newIngredients);
  };

  return (
    <>
      <form onSubmit={submit}>
        <fieldset>
          <legend>Adicionar hamburguer</legend>
          <label>Nome do Hamburguer</label>
          <input name={'name'} onChange={onChange} value={name} />

          <label>Qual o tempo de preparo</label>
          <input
            name={'preparationTime'}
            onChange={onChange}
            value={preparationTime}
            type={'number'}
          />

          <label>Quais ingredientes são utilizados</label>
          <input name={'ingredients'} onChange={changeIngredients} value={ingredient} />

          <label>Preço</label>
          <input type={'number'} name={'price'} onChange={onChange} value={price} />

          <button type="submit">Adicionar</button>
        </fieldset>
      </form>

      {ingredients.map((ingredient, index) => (
        <Ingredient key={index}>
          {ingredient}
          <button onClick={() => removeIngredient(ingredient)}>X</button>
        </Ingredient>
      ))}
      {sucess && <p>Criado com sucesso!!</p>}
      {error && <p>Ops...</p>}
    </>
  );
};

export default CreateBurguer;
