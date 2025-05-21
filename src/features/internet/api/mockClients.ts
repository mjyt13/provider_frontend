import type { tariffe_clients } from "../../Clients/clients";

export const tariffeFastData: tariffe_clients ={
    header: {
        tariffe_name: "летай вася",
        tariffe_desc: "отличный тариф для нежелающих мириться с медленными загрузками",
        back_ref: "/internet/tariffs"
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
export const tariffeCS2Data: tariffe_clients ={
    header: {
        tariffe_name: "cs2 тариф",
        tariffe_desc: "тариф для игроков контр страйк",
        back_ref: "/internet/tariffs"
    },
    clients : [
        {
            name:"греча",
            expiration: new Date(2025,4,11),
            debt: 0
        },
        {
            name:"Кузнечик",
            expiration: new Date(2025,2,15),
            debt: 100
        },
        {
            name:"Ольга",
            expiration: new Date(2026,10,20),
            debt: 250
        },
        {
            name:"Лопата",
            expiration: new Date(2025,8,21),
            debt: 310
        },
        {
            name:"Бояк",
            expiration: new Date(2028,4,21),
            debt: 150
}
    ]
}
export const tariffeSlowData: tariffe_clients ={
    header: {
        tariffe_name: "медленный тариф",
        tariffe_desc: "минимум благ за минимум средств",
        back_ref: "/internet/tariffs"
    },
    clients : [
        {
            name:"Локакака",
            expiration: new Date(2025,6,9),
            debt: 40
        },
        {
            name:"Фадеев",
            expiration: new Date(2027,3,16),
            debt: 0
        },
        {
            name:"Олег",
            expiration: new Date(2027,10,20),
            debt: 0
        },
        {
            name:"Родионов",
            expiration: new Date(2025,8,21),
            debt: 10
        },
        {
            name:"Бояк",
            expiration: new Date(2028,4,21),
            debt: 0
}
    ]
}
export const tariffeBestData: tariffe_clients ={
    header: {
        tariffe_name: "гойда пати",
        tariffe_desc: "самый лучший тариф",
        back_ref: "/internet/tariffs"
    },
    clients : [
        {
            name:"Тоха",
            expiration: new Date(2028,9,6),
            debt: 0
        },
        {
            name:"Гузеев",
            expiration: new Date(2027,10,16),
            debt: 0
        },
        {
            name:"Голем",
            expiration: new Date(2026,0,20),
            debt: 0
        },
        {
            name:"Кузя",
            expiration: new Date(2025,8,21),
            debt: 10
        },
        {
            name:"Зангья",
            expiration: new Date(2028,4,21),
            debt: 0
        },
        {
            name:"Живичка",
            expiration: new Date(2028,4,21),
            debt: 0
        }
    ]
}