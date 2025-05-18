export type tariffe = {
    link: string,
    name: string,
    characteristics: string[]
}

type content = {
    tariffes: tariffe[]
}

const contentData: content = {
    tariffes : [
        {
            link:"#",
            name:"тариф 1",
            characteristics : [
                "10 человек",
                "1000 рублей",
                "заебись идёт"
            ]
        },
        {
            link:"#",
            name:"тариф 2",
            characteristics : [
                "102 человек",
                "10 рублей",
                "tak sebe связь"
            ]
        },
        {
            link:"#",
            name:"тариф 3",
            characteristics : [
                "2 человек",
                "80 рублей",
                "дело в том, что я не военный... гражданский. все мы гражданские"
            ]
        },
        {
            link:"#",
            name:"тариф 4",
            characteristics : [
                "7 человек",
                "77 рублей",
                "славненький зйчик, вот пока ты это делал. чёчечки разбил,"
                +" ой я тебе камеру разбил.дай мне бутерброд. спасибо большое за предложение, но. ну чё раана рот погнали наверное аллеоп."
                +"всё выключай детское время уже закончилось"
            ]
        },
    ]
}

export default contentData