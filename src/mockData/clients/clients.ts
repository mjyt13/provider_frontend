export type tariffe_header ={
    tariffe_name: string,
    tariffe_desc: string
}

export type client = {
    name: string,
    expiration:Date,
    debt: number
}

export type tariffe_clients = {
    header: tariffe_header,
    clients: client[]
}

const tariffe1Data: tariffe_clients ={
    header: {
        tariffe_name: "1 тариф",
        tariffe_desc: "отличный тариф для нежелающих откинуться раньше времени"
    },
    clients : [
        {
            name:"свиригайлов стефан костюшко также известный как таборный батька метро пиздаболенко",
            expiration: new Date(2026,7,12),
            debt: 900
        },
        {
            name:"еблн сраный маняк",
            expiration: new Date(2027,1,14),
            debt: 200
        },
        {
            name:"дамо тамаки также известный как гном гномыч также известный как пидрила гнойная",
            expiration: new Date(2026,11,29),
            debt: 2000
        }
    ]
}

export default tariffe1Data