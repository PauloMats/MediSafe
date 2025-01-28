// utils/axiosConfig.ts
import axios from 'axios';

const API_URL = 'https://api.anvisa.gov.br/v1'; // Substitua pela URL correta da API da ANVISA

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY' // Substitua 'YOUR_API_KEY' pelo seu token de API, se necessário
  }
});

export default api;
