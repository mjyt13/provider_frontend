// src/hooks/useTariffClients.ts
import { useLoaderData } from 'react-router-dom';
import type{ client, tariffe_clients, tariffe_header } from '../features/Clients/clients';

type ServerClient = {
  id: number;
  name: string;
  debt: number;
  expirationDate: string; // ISO строка
  signupDate: string;
};

type ServerResponse = {
  tariffName: string;
  tariffDescription: string;
  tariffType: string; // 'internet' | 'telephony'
  clients: ServerClient[];
  service: string;
  tariffLink: string;
};

export function useTariffClients(): tariffe_clients {
  const data = useLoaderData() as ServerResponse;

  const header: tariffe_header = {
    tariffe_name: data.tariffName,
    tariffe_desc: data.tariffDescription,
    back_ref: `/${data.tariffType}/tariffs`,
  };

  const clients: client[] = data.clients.map(c => ({
    id:c.id,
    name: c.name,
    debt: c.debt,
    expiration: new Date(c.expirationDate),
  }));

  return {
    header,
    clients,
  };
}