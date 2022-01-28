import Input from '@components/Inputs';
import { apiLogin } from '@services/api';
import { NextPage } from 'next';
import { useForm } from '@hooks/useForm';
import Link from 'next/link';

const Login: NextPage = () => {
  const [form, onChange] = useForm({
    email: '',
    password: '',
  });

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // const { email, password } = form;
    // await apiLogin({ email, password });
  };

  return (
    <form onSubmit={submit}>
      <fieldset>
        <legend>Login Administrativo</legend>

        <Input onChange={onChange} name={'email'} value={form.email} label={'Digite seu email'} />

        <Input
          onChange={onChange}
          name={'password'}
          value={form.password}
          label={'Digite sua senha'}
        />

        <Link href={'/createSnacks'}>
          <button type="submit">Entrar</button>
        </Link>
      </fieldset>
    </form>
  );
};

export default Login;
