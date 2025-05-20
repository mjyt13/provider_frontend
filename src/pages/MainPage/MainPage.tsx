import type { JSX } from "react";
import headerData from "../../mockData/main/header";
import Header from "../../widgets/Header/Header.tsx";
import Main from "../../features/Main/Main.tsx"


function MainPage():JSX.Element{
    return(
        <>
            <Header {...headerData}/>
            <Main />
        </>
    )
}

export default MainPage