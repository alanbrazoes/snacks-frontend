import api from '@services/index';
import { IDrink } from '@types';

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

  async createDrink({ name, price }: IDrink) {
    const body = {
      name,
      price,
    };

    try {
      await api.post('/create/drink', body);
      return true;
    } catch (error) {
      return false;
    }
  },

  async updateDrink({ name, price, _id }: IDrink) {
    try {
      await api.put(`/drink/update/${_id}`, { name, price });
      return true;
    } catch (error) {
      return false;
    }
  },

  async deleteDrink(id: string) {
    try {
      await api.delete(`/drink/delete/${id}`);
      return true;
    } catch (error) {
      return false;
    }
  },
};
