import type { content } from "../../Tariffs/tariffs" 

const contentData: content = {
    service: "telephony",
    tariffes : [
        {
            link:"call",
            name:"звонить",
            characteristics : [
                "10 человек",
                "1000 рублей",
                "гудки"
            ]
        },
        {
            link:"prank",
            name:"Пранки",
            characteristics : [
                "1020 человек",
                "101 рублей",
                "заводы стоят - одни пранкеры в стране"
            ]
        },
        {
            link:"VIP",
            name:"VIP",
            characteristics : [
                "21 человек",
                "80 рублей",
                "дело в том, что я не военный... гражданский. все мы гражданские"
            ]
        },
    ]
}

export default contentData