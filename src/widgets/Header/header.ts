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