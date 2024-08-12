import type { Metadata } from 'next'
import PrelineScript from '@/app/components/PrelineScript'
import '@/app/components/app.css'

export const metadata: Metadata = {
  title: 'Yunzai GUI',
  description: 'Yunzai Next'
}

/**
 *
 * @param param0
 * @returns
 */
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <PrelineScript></PrelineScript>
    </html>
  )
}
