import type { tariffe_clients } from "../../Clients/clients";

export const tariffeCallData: tariffe_clients ={
    header: {
        tariffe_name: "Звонить",
        tariffe_desc: "Базовый тариф, походящий большинству нормальных людей",
        back_ref: "/telephony/tariffs"
    },
    clients : [
        {
            name:"Бабка Роза",
            expiration: new Date(2026,7,12),
            debt: 9000
        },
        {
            name:"Брол",
            expiration: new Date(2027,1,14),
            debt: 200
        },
        {
            name:"Жердий",
            expiration: new Date(2026,11,29),
            debt: 2000
        }
    ]
}
export const tariffePrankData: tariffe_clients ={
    header: {
        tariffe_name: "Пранки",
        tariffe_desc: "Пониженная стоимость звонков и долгое ожидание - меньгий приоритет",
        back_ref: "/telephony/tariffs"
    },
    clients : [
        {
            name:"Бабай",
            expiration: new Date(2026,11,11),
            debt: 0
        },
        {
            name:"Уваров",
            expiration: new Date(2025,2,15),
            debt: 100
        },
        {
            name:"Альпака",
            expiration: new Date(2026,10,20),
            debt: 250
        },
        {
            name:"Валына",
            expiration: new Date(2025,8,21),
            debt: 310
        },
        {
            name:"Смит",
            expiration: new Date(2028,4,21),
            debt: 150
}
    ]
}
export const tariffeVIPData: tariffe_clients ={
    header: {
        tariffe_name: "VIP тариф",
        tariffe_desc: "Отличный тариф, лучшее обслуживание, лучшие линии",
        back_ref: "/telephony/tariffs"
    },
    clients : [
        {
            name:"Франциск II",
            expiration: new Date(2035,0,0),
            debt: 0
        },
        {
            name:"Нориске",
            expiration: new Date(2030,0,0),
            debt: 0
        },
        {
            name:"Лариса",
            expiration: new Date(2027,0,0),
            debt: 0
        },
        {
            name:"Пикколо",
            expiration: new Date(2028,0,0),
            debt: 0
        },
        {
            name:"Каёсама",
            expiration: new Date(2028,4,21),
            debt: 0
        },
        {
            name:"ХАН БАТЫЙ",
            expiration: new Date(2029,0,0),
            debt: 0
        }
    ]
}