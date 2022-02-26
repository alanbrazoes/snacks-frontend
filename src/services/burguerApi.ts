import api from '@services/index';
import { ICreateBurguer } from '@types';

export default {
  async getAllBurguers() {
    try {
      const data = await api.get('/burguers');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },

  async getBurguer(id: string) {
    try {
      const data = await api.get(`/burguer/${id}`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },

  async createBurguer({ name, preparationTime, ingredients, price }: ICreateBurguer) {
    try {
      await api.post('/create/burguer', { name, preparationTime, ingredients, price });
      console.log('foi');
    } catch (error) {
      console.log(error);
    }
  },

  async updateBurguer({ name, preparationTime, ingredients, id }: ICreateBurguer) {
    try {
      await api.put(`/burguer/update/${id}`, { name, preparationTime, ingredients });
      console.log('foi');
    } catch (error) {
      console.log(error);
    }
  },

  async deleteBurguer(id: string) {
    try {
      await api.delete(`/burguer/delete/${id}`);
      console.log('foi');
    } catch (error) {
      console.log(error);
    }
  },
};
