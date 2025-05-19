export type img ={
    src: string,
    alt: string
}

export type header_logo = {
    curves: img,
    questionmark: img
}

export type header_name = {textname: string}

export type header = {
    logo: header_logo,
    name: header_name
}
// sugubo mockData
const h_logo: header_logo = {
    curves:  {
        src:"./src/assets/logo.svg",
        alt:"curves"
    },
    questionmark:{
        src:"./src/assets/_.svg",
        alt:"questionmark"
    }
}

const h_name: header_name = {
    textname: "клиенты тарифа 1"
}

const headerData: header = {
    logo: h_logo,
    name: h_name
}

export default headerData