// utils/axiosConfig.ts
import axios from 'axios';

const API_URL = 'https://api.anvisa.gov.br/v1'; // URL da API da ANVISA

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

export default api;
