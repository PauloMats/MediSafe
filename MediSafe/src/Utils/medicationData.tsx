// utils/medicationData.ts
import api from './axiosConfig';

export const getMedications = async () => {
  try {
    const response = await api.get('/medications'); // Substitua '/medications' pela rota correta da API
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar medicamentos:', error);
  }
};
