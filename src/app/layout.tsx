import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/navigation/Footer'

import '../styles/globals.css'


const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'TaxFirm - Expert Tax Consulting Services',
  description:
    'Professional tax consulting services for individuals and businesses. Expert tax planning, preparation, and resolution.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans text-gray-900 antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
