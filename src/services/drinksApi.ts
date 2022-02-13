import api from '@services/index';

export default {
  async getAllDrinks() {
    try {
      const data = await api.get('/drinks');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },

  async getDrink(id: string) {
    try {
      const data = await api.get(`/drink/${id}`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },

  async createDrink({ name, price }: IDrink) {
    try {
      await api.post('/create/drink', { name, price });
      console.log('foi');
    } catch (error) {
      console.log(error);
    }
  },

  async updateDrink({ name, price, id }: IDrink) {
    try {
      await api.put(`/drink/update/${id}`, { name, price });
      console.log('foi');
    } catch (error) {
      console.log(error);
    }
  },

  async deleteDrink(id: string) {
    try {
      await api.delete(`/drink/delete/${id}`);
      console.log('foi');
    } catch (error) {
      console.log(error);
    }
  },
};

interface IDrink {
  name: string;
  price: number;
  id?: string;
}
