import { useLoaderData } from 'react-router-dom';
import type { ClientDetailsDto } from '../types/client';

export function useClientDetails(): ClientDetailsDto {
    const data = useLoaderData() as ClientDetailsDto;

    if (!data) {
        throw new Error('Данные о клиенте не загружены');
    }

    return data;
}