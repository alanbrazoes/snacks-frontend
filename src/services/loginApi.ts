import api from '@services/index';
import { ILogin } from '@types';

const loginRequest = async ({ email, password }: ILogin) => {
  try {
    const request = await api.get(`/login/${email}/${password}`);
    console.log(request.data);
  } catch (error) {
    console.log(error);
  }
};

export default loginRequest;
