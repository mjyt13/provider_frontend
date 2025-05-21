import Header from "../../widgets/Header/Header.tsx"
import headerData from "../../mockData/clients/header.ts"
import Clients from "../../features/Clients/Clients.tsx"

function ClientsPage() {
    return(
        <>
            <Header {...headerData}/>
            <Clients/>            
        </>
    )
}

export default ClientsPage