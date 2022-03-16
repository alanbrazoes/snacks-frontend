import api from '@services/index';

export const getAllSnacks = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    return false;
  }
};
