import type { JSX } from 'react'
import './Tariffs.css'
import type {content, tariffe} from "./tariffs.ts"
import { Link } from 'react-router-dom'

function TariffCharacteristics({service, tariffe}:{service:string,tariffe: tariffe}):JSX.Element{
  return (
    <Link to={`/${service}/${tariffe.link}/clients`} className="tariffe-link">
      <h2 className="tariffe_name">{tariffe.name}</h2>
      <ul className="tariffe_characteristics">
        {tariffe.characteristics.map(
          (char)=>(
            <li key={char} className="tariffe_characteristic">
            <h3 className="tariffe_characteristic_text">{char}</h3>
        </li>))}
      </ul>
    </Link>
  )
}

function ContentTariffs({service,tariffes}:{service:string, tariffes: tariffe[]}):JSX.Element{
  return(
    <ul className="content_tariffes"> 
      {tariffes.map((tariffe,index)=>(
        <li
         key={index}
         itemID={`tariffes-${index}`} 
         className={`tariffe ${index+1}`}
         >
          <TariffCharacteristics service={service} tariffe={tariffe} />
        </li>
    ))}
    </ul>
  )
}

function Tariffs(contentData: content): JSX.Element {
    const serviceData = contentData.service
    const tariffesData = contentData.tariffes
    return (
      <section className="content">
        <ContentTariffs service={serviceData} tariffes={tariffesData}/>      
      </section>
    )
}

export default Tariffs;