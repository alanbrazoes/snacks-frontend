import api from '@services/index';

export const apiSnacks = async () => {
  try {
    const response = await api.get('/');
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
};
