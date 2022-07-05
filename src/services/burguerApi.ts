import { api } from '@services/index';
import { IBurguer } from '@types';

const getBurguerById = async (id: string): Promise<IBurguer | false> => {
  try {
    const { data } = await api.get(`/burguer/${id}`);
    return data;
  } catch (error) {
    return false;
  }
};

export { getBurguerById };
