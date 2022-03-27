import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { useForm } from '@hooks/useForm';
import loginRequest from '@services/loginApi';

const Login: NextPage = () => {
  const [form, onChange] = useForm({
    email: '',
    password: '',
  });
  const router = useRouter();

  const submit = async (e: { preventDefault: () => void }) => {
    const { email, password } = form;
    e.preventDefault();
    loginRequest({ email, password });
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
