import type { JSX } from 'react'
import './Content.css'
import type {content, tariffe} from "./content"

function TariffeCharacteristics({tariffe}:{tariffe: tariffe}):JSX.Element{
  return (
    <a href={tariffe.link} className="tariffe-link">
      <h2 className="tariffe_name">{tariffe.name}</h2>
      <ul className="tariffe_characteristics">
        {tariffe.characteristics.map(
          (char)=>(
            <li key={char} className="tariffe_characteristic">
            <h3 className="tariffe_characteristic_text">{char}</h3>
        </li>))}
      </ul>
    </a>
  )
}

function ContentTariffes({tariffes}:{tariffes: tariffe[]}):JSX.Element{
  return(
    <ul className="content_tariffes"> 
      {tariffes.map((tariffe,index)=>(
        <li
         key={index}
         itemID={`tariffes-${index}`} 
         className={`tariffe ${index+1}`}
         >
          <TariffeCharacteristics tariffe={tariffe} />
        </li>
    ))}
    </ul>
  )
}

function Content(contentData: content): JSX.Element {
    const tariffesData = contentData.tariffes
    return (
      <section className="content">
        <ContentTariffes tariffes ={tariffesData}/>      
      </section>
    )
}

export default Content;