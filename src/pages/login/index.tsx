import Input from '@components/Inputs';
import { NextPage } from 'next';
import { useForm } from 'src/hooks/useForm';

const Login: NextPage = () => {
  const [form, onChange] = useForm({
    email: '',
    password: '',
  });

  const submit = (e: { preventDefault: () => void }): void => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={submit}>
      <fieldset>
        <legend>Login Administrativo</legend>

        <label>Email</label>
        <Input onChange={onChange} name={'email'} value={form.email} />

        <label>Senha</label>
        <Input onChange={onChange} name={'password'} value={form.password} />

        <button type="submit">Entrar</button>
      </fieldset>
    </form>
  );
};

export default Login;
