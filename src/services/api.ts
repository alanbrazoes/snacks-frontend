import api from '@services/index';
import { ILogin } from '@types';

export const apiSnacks = async () => {
  try {
    const response = await api.get('/');
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
};

export const apiLogin = async ({ email, password }: ILogin) => {
  try {
    const response = await api.post('/login', { email, password });
  } catch (error) {
    console.log(error);
  }
};
