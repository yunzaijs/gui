import type { Metadata } from 'next'

//
import './globals.css'

import PrelineScript from './components/PrelineScript'

export const metadata: Metadata = {
  title: 'Yunzai GUI',
  description: 'Yunzai Next'
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
