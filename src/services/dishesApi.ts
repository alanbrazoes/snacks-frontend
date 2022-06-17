import api from '@services/index';

export const getAllDishes = async () => {
  try {
    const { data, status } = await api.get('/dishes');
    return { data, status };
  } catch (error) {
    return false;
  }
};
