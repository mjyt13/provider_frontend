import type { JSX } from "react";
import mainData from "../../mockData/main/main";
import type { service } from "./main";
import "./Main.css"

function Service(item: service):JSX.Element{
    return(
        <>
            <a href={item.href} className="service_name">{item.name}</a>
            {/* <ul className="service_description">
                <li className="service_clients">клиентов: {item.description.clients}</li>
                <li className="service_tariffes">тарифов: {item.description.tariffes}</li>
                <li className="service_revenue">выручка? {item.description.revenue}</li>
            </ul> */}
        </>
    )
}

function Main():JSX.Element{
    return(
        <section className="services">
            <ul className="service_list">
                {
                    mainData.map((service, index)=>(
                    <li
                        key={index} 
                        itemID={`service ${index}`}
                        className="service_item">

                        <Service {...service}/>  
                    </li>              
                ))}
            </ul>
        </section>
    )
}

export default Main