export interface ContractFormValues {
    clientId: number;
    tariffId: number;
    debt: number;
    expirationDate: string; // формат YYYY-MM-DD
}

export interface ContractResponseDto {
    id: number;
    clientId: number;
    tariffId: number;
    debt: number;
    expirationDate: string;
    contractType: string;
}