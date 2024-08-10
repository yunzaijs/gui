import type { Metadata } from 'next'
import './globals.css'

import PrelineScript from './components/PrelineScript'

export const metadata: Metadata = {
  title: 'Yunzai Admin Web',
  description: '云崽Next管理'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
      <PrelineScript></PrelineScript>
    </html>
  )
}
