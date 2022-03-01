import api from '@services/index';
import { ICreateDishes } from '@types';

export default {
  async getAllDishes() {
    try {
      const { data, status } = await api.get('/dishes');
      return { data, status };
    } catch (error) {
      return false;
    }
  },

  async createDishe({ name, price, preparationTime, ingredientList, type }: ICreateDishes) {
    try {
      const response = await api.post('/create/dishes', {
        name,
        price,
        preparationTime,
        ingredientList,
        type,
      });
      return response.status;
    } catch (error) {
      return false;
    }
  },
};
