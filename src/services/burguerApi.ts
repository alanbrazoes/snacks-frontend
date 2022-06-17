import api from '@services/index';

export const getAllBurguers = async () => {
  try {
    const response = await api.get('/burguers');
    return response.data;
  } catch (error) {
    return false;
  }
};

export const getBurguer = async (id: string) => {
  try {
    const response = await api.get(`/burguer/${id}`);
    return response.data;
  } catch (error) {
    return false;
  }
};
