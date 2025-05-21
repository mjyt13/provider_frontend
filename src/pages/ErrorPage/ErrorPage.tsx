import { useRouteError } from "react-router-dom";
import Header from "../../widgets/Header/Header.tsx";
import headerData from "../../mockData/main/header.ts";
import "./ErrorPage.css"

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return(
        <>
            <Header {...headerData}/>
            <div id="error-page">
                <h1 className="error_message">Ошибка</h1>
            </div>
        </>
    )
}

export default ErrorPage;