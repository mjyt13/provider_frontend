// src/services/tariffService.ts
import { apiClient } from './apiClient';

export const fetchTariffClients = async (service: string | undefined, tariffLink: string | undefined) => {
  try {
    const response = await apiClient.get(`/${service}/${tariffLink}/clients`);
    return response.data;
  } catch (error) {
    console.log("А ЕЖИ БЛЯТЬ??");
    console.error('Ошибка загрузки клиентов:', error);
    throw error;
  }
};