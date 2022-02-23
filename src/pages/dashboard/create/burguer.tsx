import React, { useState } from 'react';

import { useForm } from '@hooks/useForm';
import burguerApi from '@services/burguerApi';
import styled from 'styled-components';

const CreateBurguer = () => {
  const [ingredients, setIngredientsList] = useState<string[]>([]);
  const [ingredient, setIngredient] = useState<string>('');
  const [sucess, setSucess] = useState<boolean>(false);

  const [form, onChange] = useForm({
    name: '',
    preparationTime: 0,
    price: 0,
  });

  const { name, preparationTime, price } = form;

  const submit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await burguerApi.createBurguer({ name, preparationTime, ingredients, price });
      setSucess(true);
    } catch (error) {
      console.log(error);
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

  const P = styled.p`
    display: inline;
    border: 1px solid black;
    margin: 8px 4px;
    padding: 4px;
  `;

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

      {ingredients.map((ingredient, index) => {
        return (
          <P key={index}>
            {ingredient}
            <button onClick={() => removeIngredient(ingredient)}>X</button>
          </P>
        );
      })}
      {sucess && <p>Criado com sucesso!!</p>}
    </>
  );
};

export default CreateBurguer;
