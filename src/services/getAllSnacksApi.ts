import api from '@services/index';
import { IAllSnacks } from '@types';

export const getAllSnacks = async (): Promise<IAllSnacks | false> => {
  try {
    const { data } = await api.get('/');
    return data;
  } catch (error) {
    return false;
  }
};
