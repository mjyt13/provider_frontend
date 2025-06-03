import type{ TariffOption } from '../types/options';
import type{ ClientOption } from '../types/options';

const API_URL = 'http://localhost:9090/api';

// Получить список тарифов по типу
export const fetchTariffsByType = async (serviceType: string): Promise<TariffOption[]> => {
    const res = await fetch(`${API_URL}/${serviceType}/tariffs`);
    if (!res.ok) throw new Error(`Не удалось загрузить тарифы ${serviceType}`);
    return res.json();
};

// Получить список всех клиентов
export const fetchAllClients = async (): Promise<ClientOption[]> => {
    const res = await fetch(`${API_URL}/clients`);
    if (!res.ok) throw new Error('Не удалось загрузить клиентов');
    return res.json();
};