import type { header_logo, header_name, header } from "../../widgets/Header/header"

// sugubo mockData
const h_logo: header_logo = {
    curves:  {
        src:"/src/assets/logo.svg",
        alt:"curves",
    },
    questionmark:{
        src:"/src/assets/_.svg",
        alt:"questionmark"
    },
    href:"/"
}

const h_name: header_name = {
    textname: "клиенты тарифа 1"
}

const headerData: header = {
    logo: h_logo,
    name: h_name
}

export default headerData