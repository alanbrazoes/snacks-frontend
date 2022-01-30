import { useForm } from '@hooks/useForm';
import { apiCreateBurguer } from '@services/api';
import React, { useState } from 'react';

const CreateBurguer = () => {
  const [ingredients, setIngredientList] = useState<string[]>([]);
  const [ingredient, setIngredients] = useState<string>('');
  const [form, onChange] = useForm({
    name: '',
    preparationTime: 0,
  });
  const { name, preparationTime } = form;

  const submit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    apiCreateBurguer({ name, preparationTime, ingredients });
  };

  const changeIngredients = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { value } = e.target;
    setIngredients(value);
    if (value.includes(',')) {
      setIngredientList([value, ...ingredients]);
      setIngredients('');
    }
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

          <button type="submit">Adicionar</button>
        </fieldset>
      </form>

      {ingredients.map((v, i) => {
        return <p key={i}>{v}</p>;
      })}
    </>
  );
};

export default CreateBurguer;
