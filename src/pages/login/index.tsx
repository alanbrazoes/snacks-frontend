import { apiLogin } from '@services/api';
import { NextPage } from 'next';
import { useForm } from '@hooks/useForm';
import { useRouter } from 'next/router';

const Login: NextPage = () => {
  const [form, onChange] = useForm({
    email: '',
    password: '',
  });
  const router = useRouter();

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // const { email, password } = form;
    // await apiLogin({ email, password });
    router.push('/createSnacks');
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
