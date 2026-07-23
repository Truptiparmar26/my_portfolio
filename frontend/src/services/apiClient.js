import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.PROD ? 'https://my-portfolio-9j74.onrender.com/api' : '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
