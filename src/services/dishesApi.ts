import { api } from '@services/index';
import { IDish } from '@types';

const getDishById = async (id: string): Promise<IDish | false> => {
  try {
    const { data } = await api.get(`/dishes/${id}`);
    return data;
  } catch (error) {
    return false;
  }
};

export { getDishById };
