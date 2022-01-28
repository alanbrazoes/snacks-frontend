import Input from '@components/Inputs';
import { apiLogin } from '@services/api';
import { NextPage } from 'next';
import { useForm } from '@hooks/useForm';

const Login: NextPage = () => {
  const [form, onChange] = useForm({
    email: '',
    password: '',
  });

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { email, password } = form;
    await apiLogin({ email, password });
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
