export interface TariffOption {
    id: number;
    type: string;
    name: string;
    cost: number;
    description: string;
    clientCount: number;
}

export interface ClientOption {
    id: number;
    name: string;
    address: string;
    signupDate: string; // ISO строка
}