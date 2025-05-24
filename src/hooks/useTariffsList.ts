// src/hooks/useTariffList.ts
import { useLoaderData } from 'react-router-dom';
import type { content } from '../features/Tariffs/tariffs';

export function useTariffList(): content {
  const data = useLoaderData() as content;

  if (!data || !Array.isArray(data.tariffes)) {
    throw new Error('Ошибка загрузки тарифов');
  }

  return data;
}