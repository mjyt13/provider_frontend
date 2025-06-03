import type { JSX } from "react";
import headerData from "../../mockData/main/header";
import Header from "../../widgets/Header/Header.tsx";
import Main from "../../features/Main/Main.tsx";
import AddClientForm from "../../features/Main/AddClientForm.tsx";

function MainPage():JSX.Element{
    console.log("а мы здесь")
    return(
        <>
            <Header {...headerData}/>
            <AddClientForm />
            <Main />
        </>
    )
}

export default MainPage