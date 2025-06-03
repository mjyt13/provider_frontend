export interface ClientDetailsDto {
    id: number;
    name: string;
    address: string;
    details: string;
    signupDate: string; // или Date
    totalDebt: number;
}

export type ClientInfo = {
    id: number;
    name: string;
    expiration: Date;
    debt: number;
};

export type TariffClients = {
    header: TariffHeader;
    clients: ClientInfo[];
};

export type TariffHeader = {
    tariff_name: string;
    tariff_desc: string;
    back_ref: string;
};