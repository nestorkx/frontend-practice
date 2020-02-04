import axios from 'axios';

const url = 'http://localhost:3001';

const instance = axios.create({
  baseURL: url,
  withCredentials: true
});

delete instance.defaults.headers.common['X-Requested-With'];

export default instance;
