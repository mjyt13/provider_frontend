export type tariffe_header ={
    tariffe_name: string,
    tariffe_desc: string,
    back_ref: string
}

export type client = {
    id?: number,
    name: string,
    expiration:Date,
    debt: number
}

export type tariffe_clients = {
    header: tariffe_header,
    clients: client[]
}