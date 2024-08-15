'use clien'

import Header from './Header'
import Sidebar from './Sidebar'
import Breadcrumb from './Breadcrumb'
import { useState } from 'react'
import Table from './Table'
import { SelectType } from './types'

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
          {select == 'default' && (
            <div className="shadow-md w-full sm:w-1/2 p-6 rounded-md">
              <div>柠檬冲水 ｜ /Users/xiejihuang/Desktop/yunzai-org/next</div>
              <div>实例状态 ｜ 运行中</div>
              <div>地域和可用区: 北京</div>
              <button>刷新</button>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
