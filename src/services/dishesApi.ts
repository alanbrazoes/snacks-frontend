import api from '@services/index';
import { IDishes } from '@types';

const getDishById = async (id: string): Promise<IDishes | false> => {
  try {
    const { data } = await api.get(`/dishes/${id}`);
    return data;
  } catch (error) {
    return false;
  }
};

export { getDishById };
