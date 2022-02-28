import api from '@services/index';
import { ICreateBurguer } from '@types';

export default {
  async getAllBurguers() {
    try {
      const response = await api.get('/burguers');
      return response.data;
    } catch (error) {
      return false;
    }
  },

  async getBurguer(id: string) {
    try {
      const response = await api.get(`/burguer/${id}`);
      return response.data;
    } catch (error) {
      return false;
    }
  },

  async createBurguer({ name, preparationTime, ingredients, price, type }: ICreateBurguer) {
    try {
      await api.post('/create/burguer', { name, preparationTime, ingredients, price, type });
      return true;
    } catch (error) {
      return false;
    }
  },

  async updateBurguer({ name, preparationTime, ingredients, id }: ICreateBurguer) {
    try {
      await api.put(`/burguer/update/${id}`, { name, preparationTime, ingredients });
      return true;
    } catch (error) {
      return false;
    }
  },

  async deleteBurguer(id: string) {
    try {
      await api.delete(`/burguer/delete/${id}`);
      return true;
    } catch (error) {
      return false;
    }
  },
};
