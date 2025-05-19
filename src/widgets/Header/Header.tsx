import type { JSX } from "react";
import './Header.css'
import type { header, header_logo, header_name } from "./header";

function Header_logo(logo: header_logo): JSX.Element{
    return (
        <div className="header_logo">
                <img src={logo.curves.src} alt={logo.curves.alt}></img>
                <img src={logo.questionmark.src} alt={logo.questionmark.alt}></img>
        </div>
    )
}

function Header_name(name: header_name): JSX.Element{
    return(
        <div className="header_name">
            <h1>{name.textname}</h1>
        </div>
    )
}

function Header(headerData: header):JSX.Element {
    const header_logo: header_logo = headerData.logo;
    const header_name: header_name = headerData.name
    return (
        <section className="header">
            <Header_logo {...header_logo}/>
            <Header_name {...header_name}/>
        </section>
    );
}

export default Header