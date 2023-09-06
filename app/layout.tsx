import Layout from '@/components/layout/Layout'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kansha',
  description: 'Kansha Lab Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}

export const dynamic = 'force-static';