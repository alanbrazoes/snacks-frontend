import api from '@services/index';
import { ILogin, ICreateBurguer } from '@types';

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
    await api.post('/login', { email, password });
  } catch (error) {
    console.log(error);
  }
};

export const apiCreateBurguer = async ({ name, preparationTime, ingredients }: ICreateBurguer) => {
  try {
    await api.post('/createburguer', { name, preparationTime, ingredients });
  } catch (error) {
    console.log(error);
  }
};
