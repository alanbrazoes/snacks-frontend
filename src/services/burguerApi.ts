import api from '@services/index';
import { ICreateBurguer } from '@types';

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

export const createBurguer = async ({
  name,
  preparationTime,
  ingredientList,
  price,
  type,
}: ICreateBurguer) => {
  const body = { name, preparationTime, ingredientList, price, type };
  try {
    await api.post('/create/burguer', body, {
      headers: {
        auth: localStorage.getItem('token') as string,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const updateBurguer = async ({
  name,
  preparationTime,
  ingredientList,
  id,
}: ICreateBurguer) => {
  try {
    await api.put(`/burguer/update/${id}`, { name, preparationTime, ingredientList });
    return true;
  } catch (error) {
    return false;
  }
};

export const deleteBurguer = async (id: string) => {
  try {
    await api.delete(`/burguer/delete/${id}`);
    return true;
  } catch (error) {
    return false;
  }
};
