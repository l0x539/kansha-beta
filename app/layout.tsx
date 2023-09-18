import Layout from '@/components/layout/Layout'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Jost, Montserrat, Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const helvetica = localFont({
  src: [
    {
      path: './assets/fonts/Helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/fonts/Helvetica-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './assets/fonts/helvetica_medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './assets/fonts/helvetica-light-587ebe5a59211.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-helvetica'
})

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
    <html lang="en" className={`${montserrat.variable} ${spaceGrotesk.variable} ${jost.variable} ${helvetica.variable} ${inter.variable}`}>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}

export const dynamic = 'force-static';