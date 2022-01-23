import api from '@services/index';

export const apiSnacks = () =>
  api
    .get('/')
    .then((res) => {
      return res.data[0].hamburguers;
    })
    .catch((error) => {
      return error;
    });
