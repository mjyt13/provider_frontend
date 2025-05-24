import Header from "../../widgets/Header/Header.tsx"
import Tariffs from "../../features/Tariffs/Tariffs.tsx"
import { useTariffList } from "../../hooks/useTariffsList.ts"
import headerData from "../../mockData/main/header"

function TariffesPage() {
    const service = useTariffList();
    return (
        <>
        <Header {...headerData}/>
        <Tariffs {...service}/>
        </>
    )
}
 
export default TariffesPage