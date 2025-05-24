
const API_URL = import.meta.env.VITE_API_URL;

export const fetchTariffClients = async (service: string, tariffLink: string) => {
  const response = await fetch(`${API_URL}/${service}/${tariffLink}/clients`);
  if (!response.ok) {
    throw new Error('Ошибка загрузки данных');
  }
  return await response.json();
};