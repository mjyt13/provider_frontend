import {type JSX } from "react";
import "./Button.css"

function Button({textname}:{textname: string}):JSX.Element{
    return(
        <button className="generic_button">{textname}</button>
    )
}

export default Button