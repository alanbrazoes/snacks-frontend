import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URLSERVER,
  timeout: 100000,
});

export { api };
