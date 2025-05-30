import { type JSX } from "react";
import Button from "../../shared/components/Button/Button";
import Back from "../../shared/components/Back/Back";
import "./Clients.css"
import type {tariffe_header, client, tariffe_clients } from "./clients";
import { useTariffClients } from "../../hooks/useClients";

function TariffHeader({header}:{header: tariffe_header}):JSX.Element{
    console.log(header);
    return(
        <div className="tariffe_header">
            <h2 className="tariffe_name">{header.tariffe_name}</h2>
            <div className="tariffe_more">    
                <h3 className="tariffe_description">{header.tariffe_desc}</h3>
                <div className="tariffe_action">
                    <Back href={header.back_ref}/>
                    <Button textname={"добавить клиента"}/>
                </div>
            </div>
        </div>
    )
}

function ClientsList({clients}:{clients: client[]}):JSX.Element{
    return(
    <ul className="clients_list">
        <li className="clients_declaration">
            <h3 className="client_name">имя клиента</h3>
            <h3 className="client_expiration">дата окончания услуги</h3>
            <h3 className="client_debt">задолженность</h3>
            <div className="mock_button"></div>
        </li>
        {clients.map((client,index)=>(
                <li 
                    key={index}
                    itemID={`tariffes-${index}`}
                    className="client">
                    <h3 className="client_name">{client.name}</h3>
                    <h3 className="client_expiration">{client.expiration.toLocaleDateString()}</h3>
                    <h3 className="client_debt">{client.debt + " тугриков"}</h3>
                    <div className="client_more">
                        <Button textname="подробнее"/>
                    </div>
                </li>
        ))}
    </ul>
    )
}

function Clients():JSX.Element{
    const data = useTariffClients(); 
    console.log(data)
    const headerData = data.header;
    const clientsData = data.clients;

    return(
        <>
        <div className="tariffe_clients">
            <TariffHeader header={headerData}/>
            <ClientsList clients={clientsData} />
        </div>
        </>
    )
}

export default Clients