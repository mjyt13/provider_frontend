// src/services/tariffService.ts
import { apiClient } from './apiClient';
import type { tariffe, content,TariffListResponse,TariffFormValues } from '../features/Tariffs/tariffs';

interface ServerTariff {
  id: number;
  type: string;
  name: string;
  cost: number;
  description: string;
  clientCount: number;
}

export const fetchTariffList = async (service: string): Promise<content> => {
  const response = await apiClient.get<ServerTariff[]>(`/${service}/tariffs`);
  const tariffs = response.data;

  return {
    service: tariffs[0]?.type || service,
    tariffes: tariffs.map(t => ({
      link: t.name.toLowerCase(),
      name: t.name,
      characteristics: [
        `Стоимость: ${t.cost} тугриков`,
        `Клиентов: ${t.clientCount}`,
        t.description
      ],
    })),
  };
};

export const addTariff = async (
  service: string,
  tariffData: TariffFormValues
): Promise<void> => {
  const response = await apiClient.post<ServerTariff>(`/${service}/tariffs`, tariffData);
  
  if (response.status !== 201) {
    throw new Error('Не удалось создать тариф');
  }
};