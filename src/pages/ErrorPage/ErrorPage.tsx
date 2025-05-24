import { useRouteError, type ErrorResponse } from "react-router-dom";
import Header from "../../widgets/Header/Header.tsx";
import headerData from "../../mockData/main/header.ts";
import "./ErrorPage.css"

const ErrorPage = () => {
    const error = useRouteError() as ErrorResponse;
    console.error(error);

    let status:string = 'Неизвестная ошибка';
    let message: string = 'что-то пошло не так';
    
    if (error.status === 404){
        status = '404 - страница не найдена';
        message = "Запрашиваемая страница не найдена";
    } else if(error.status === 500){
        status = '500 - внутренняя ошибка сервера';
        message = "Сервер вернул ошибку.";
    } else{
        status = `${error.status || 'Ошибка'} - ${error.statusText || ''}`;
        message = error.statusText || message;
    }
    console.log(error.status)
    return(
        <>
            <Header {...headerData}/>
            <div id="error-page">
                <h1 className="error_message">{status}</h1>
                <h2 className="error_message">{message}</h2>
            </div>
        </>
    )
}

export default ErrorPage;