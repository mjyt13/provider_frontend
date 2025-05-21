import type { tariffe_clients } from "../../features/Clients/clients.ts";

export const tariffe2Data: tariffe_clients={
    header: {
        tariffe_name: "пранкерский тариф",
        tariffe_desc: "тариф для шутняр",
        back_ref: "/internet/tariffs"
    },
    clients : [
        {
            name:"еблн сраный маняк",
            expiration: new Date(2027,1,14),
            debt: 200
        },
        {
            name:"игорь гофман",
            expiration: new Date(2026,11,29),
            debt: 201
        }
    ]
}
