import api from '@services/index';

export default {
  async getAllDrinks() {
    try {
      const response = await api.get('/drinks');
      return response.data;
    } catch (error) {
      return false;
    }
  },

  async getDrink(id: string) {
    try {
      const response = await api.get(`/drink/${id}`);
      return response.data;
    } catch (error) {
      return false;
    }
  },
};
