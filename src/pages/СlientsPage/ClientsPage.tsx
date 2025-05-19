import Header from "../../widgets/Header/Header.tsx"
import headerData from "../../mockData/clients/header"
import Clients from "../../features/Clients/Clients.tsx"


function ClientsPage() {
    return(
        <>
            <Header {...headerData}/>
            <Clients></Clients>            
        </>
    )
}

export default ClientsPage