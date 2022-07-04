import { api } from '@services/index';
import { ISnack } from '@types';

const getBurguerById = async (id: string): Promise<ISnack | false> => {
  try {
    const { data } = await api.get(`/burguer/${id}`);
    return data;
  } catch (error) {
    return false;
  }
};

export { getBurguerById };
