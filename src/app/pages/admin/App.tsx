'use clien'

import Header from './Header'
import Sidebar from './Sidebar'
import Breadcrumb from './Breadcrumb'
import { useState } from 'react'
import Table from './Table'
import { SelectType } from './types'
import Bot from './Bot'

export default () => {
  const [select, setSelect] = useState<SelectType>('default')
  return (
    <>
      <Header></Header>
      <Breadcrumb></Breadcrumb>
      <Sidebar onClickMenu={val => setSelect(val)}></Sidebar>
      <main className="w-full lg:ps-64">
        <div className="flex p-4 sm:p-6 space-y-4 sm:space-y-6">
          {select == 'user.manage' && <Table />}
          {select == 'default' && <Bot />}
        </div>
      </main>
    </>
  )
}
