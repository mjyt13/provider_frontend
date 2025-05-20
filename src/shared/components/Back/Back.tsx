import type { JSX } from "react";
import "./Back.css"

function Back({href}:{href:string}):JSX.Element{
    return(
        <a href={href} className="back_button">
            <img src="./src/assets/back.svg" alt="back image"/>
        </a>
    )
}

export default Back