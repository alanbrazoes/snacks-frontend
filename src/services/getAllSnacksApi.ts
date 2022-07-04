import { api } from '@services/index';
import { IAllSnacks } from '@types';

const getAllSnacks = async (): Promise<IAllSnacks> => {
  const { data } = await api.get('/');
  return data;
};

export { getAllSnacks };
