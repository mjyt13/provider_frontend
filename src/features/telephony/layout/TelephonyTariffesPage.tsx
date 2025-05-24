import headerData from '../api/header.ts'
import Header from "../../../widgets/Header/Header.tsx"
import contentData from '../api/mockTariffs.ts'
import Tariffs from '../../Tariffs/Tariffs.tsx'

function TelephonyTariffesPage() {

  return (
    <>
      <Header {...headerData}/>
      <Tariffs {...contentData}/>
    </>
  )
}

export default TelephonyTariffesPage