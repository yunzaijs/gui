'use client'

import Table from '@/app/pages/user/Table'
import '@/app/pages/user/App.css'
import Header from '@/app/pages/user/Header'
import Sidebar from '@/app/pages/user/Sidebar'
import Nav from '@/app/pages/user/Nav'

/**
 *
 * @returns
 */
export default () => {
  return (
    <>
      <Header></Header>

      <Sidebar></Sidebar>

      <Nav></Nav>

      <main className="w-full lg:ps-64 h-full">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* <Statistic /> */}
          <Table />
        </div>
      </main>
    </>
  )
}
