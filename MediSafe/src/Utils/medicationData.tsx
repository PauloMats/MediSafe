// src/utils/medicationData.ts
import api from './axiosConfig';
import { Medication } from './types';

export const getMedications = async (): Promise<Medication[]> => {
  try {
    const response = await api.get<Medication[]>('/medications'); // Substitua '/medications' pela rota correta da API
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar medicamentos:', error);
    return [];
  }
};
