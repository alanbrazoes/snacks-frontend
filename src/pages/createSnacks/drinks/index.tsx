import { useForm } from '@hooks/useForm';
import Input from '@components/Inputs';
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
          <Input name={'drink'} onChange={onChange} label={'Nome'} value={name} />
          <Input name={'price'} onChange={onChange} label={'Preço'} value={price} type="number" />
          <button type="submit">Adicionar</button>
        </fieldset>
      </form>
    </>
  );
};

export default CreateDrinks;
