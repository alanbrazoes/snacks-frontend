import api from '@services/index';
import { ILogin } from '@types';

const loginRequest = async ({ email, password }: ILogin) => {
  try {
    const request = await api.post(`/login`, {
      password,
      email,
    });
    const {
      data: { token },
    } = request;
    if (token) {
      localStorage.setItem('token', token);
      return true;
    }
  } catch (error) {
    return false;
  }
};

export default loginRequest;
