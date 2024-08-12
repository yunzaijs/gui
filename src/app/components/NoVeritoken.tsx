'use client'

import { ReactNode } from 'react'
import '@/app/components/App.css'
import PrelineScript from '@/app/components/PrelineScript'
export default ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <PrelineScript />
    </>
  )
}
