// import { useState } from 'react'
import headerData from '../../mockData/content/header.ts'
import Header from "../../widgets/Header/Header.tsx"
import contentData from '../../mockData/content/content.ts'
import Content from "../../features/Content/Content.tsx"

function Tariffes() {

  return (
    <>
      <Header {...headerData}/>
      <Content {...contentData}/>
    </>
  )
}

export default Tariffes