import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { useForm } from '@hooks/useForm';

const Login: NextPage = () => {
  const [form, onChange] = useForm({
    email: '',
    password: '',
  });
  const router = useRouter();

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <form onSubmit={submit}>
      <fieldset>
        <legend>Login Administrativo</legend>
        <label>E-mail</label>
        <input onChange={onChange} name="email" value={form.email} />

        <label>Senha</label>
        <input value={form.password} name="password" onChange={onChange} type="password" />
        <button type="submit">Entrar</button>
      </fieldset>
    </form>
  );
};

export default Login;
