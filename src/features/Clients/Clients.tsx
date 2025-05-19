import { type JSX } from "react";
import tariffe1Data from "../../mockData/clients/clients";
import Button from "../../widgets/Button/Button";
import type {tariffe_header, client} from "../../mockData/clients/clients"

function Header(header: tariffe_header):JSX.Element{
    return(
        <div className="tariffe_header">
            <h2 className="tariffe_name">{header.tariffe_name}</h2>
            <h3 className="tariffe_description">{header.tariffe_desc}</h3>
            <Button textname={"добавить клиента"}/>
        </div>
    )
}

function ClientsList({clients}:{clients: client[]}):JSX.Element{
    return(
    <ul className="clients_list">
        <li>
            <h3 className="client_details">имя клиента</h3>
            <h3 className="client_details">дата окончания услуги</h3>
            <h3 className="client_details">задолженность</h3>
        </li>
        {clients.map((client,index)=>(
                <li 
                    key={index}
                    itemID={`tariffes-${index}`}
                    className="client">

                    <h3 className="client_details">{client.name}</h3>
                    <h3 className="client_details">{client.expiration.toLocaleDateString()}</h3>
                    <h3 className="client_details">{client.debt}</h3>
                    <button className="client_detaails">подробнее</button>
                </li>
        ))}
    </ul>
    )
}

function Clients():JSX.Element{
    const headerData = tariffe1Data.header
    const clientsData = tariffe1Data.clients
    return(
        <>
        <div className="tariffe_clients">
            <Header {...headerData}/>
            <ClientsList clients={clientsData} />
        </div>
        </>
    )
}

export default Clients