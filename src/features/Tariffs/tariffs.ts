export type tariffe = {
    link: string,
    name: string,
    characteristics: string[]
}

export type content = {
    service: string
    tariffes: tariffe[]
}

//думаю, ясно, где я игрался с тайпскриптом, а где квен генерил
export type TariffFormValues ={
    name: string;
    cost: number;
    description: string;
}

export interface Tariff {
    name: string;
    link: string;
    characteristics: string[];
}

export interface TariffListResponse {
    service: string;
    tariffes: Tariff[];
}