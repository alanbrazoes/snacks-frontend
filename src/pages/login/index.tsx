import { apiLogin } from '@services/api';
import { NextPage } from 'next';
import { useForm } from '@hooks/useForm';
import Link from 'next/link';
import { Button, TextField } from '@shared/index';
import styled from 'styled-components';

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
      <legend>Login Administrativo</legend>

      <TextField onChange={onChange} name="email" value={form.email} label="Email" />

      <TextField
        value={form.password}
        name="password"
        onChange={onChange}
        id="outlined-password-input"
        label="Senha"
        type="password"
        autoComplete="current-password"
      />

      <Link href={'/createSnacks'}>
        <Button type="submit" variant="contained">
          Entrar
        </Button>
      </Link>
    </form>
  );
};

export default Login;
