// import { useState } from 'react'
import headerData from '../api/header.ts'
import Header from "../../../widgets/Header/Header.tsx"
import contentData from '../api/content.ts'
import Tariffs from '../../Tariffs/Tariffs.tsx'

function InternetTariffesPage() {

  return (
    <>
      <Header {...headerData}/>
      <Tariffs {...contentData}/>
    </>
  )
}

export default InternetTariffesPage