export type tariffe = {
    link: string,
    name: string,
    characteristics: string[]
}

export type content = {
    service: string
    tariffes: tariffe[]
}