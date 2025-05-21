import type { service } from "../../features/Main/main"

const mainData: service[] = [
    {
        name:"интернет",
        description:{
            clients:90,
            tariffes: 4,
            revenue: 9000
        },
        href:"/internet/tariffs"
    },
    {
        name:"телефония",
        description:{
            clients:17,
            tariffes:3,
            revenue:11292.4
        },
        href:"/telephony/tariffs"
    }
]

export default mainData