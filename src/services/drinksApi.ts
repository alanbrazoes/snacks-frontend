import api from '@services/index';
import { IDrink } from '@types';

const getDrinkById = async (id: string): Promise<IDrink | false> => {
  try {
    const { data } = await api.get(`/drink/${id}`);
    return data;
  } catch (error) {
    return false;
  }
};

export { getDrinkById };
