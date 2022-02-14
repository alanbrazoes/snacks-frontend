import { useForm } from '@hooks/useForm';
import drinksApi from '@services/drinksApi';

const CreateDrinks = () => {
  const [form, onChange] = useForm({
    name: '',
    price: 0,
  });
  const { name, price } = form;

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    drinksApi.createDrink({ name, price });
  };

  return (
    <>
      <form onSubmit={submit}>
        <fieldset>
          <legend>Adicionar bebidas</legend>
          <label>Nome</label>
          <input name={'drink'} onChange={onChange} value={name} />

          <label>Preço</label>
          <input name={'price'} onChange={onChange} value={price} type="number" />
          <button type="submit">Adicionar</button>
        </fieldset>
      </form>
    </>
  );
};

export default CreateDrinks;
