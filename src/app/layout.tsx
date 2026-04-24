import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'

const inter   = Inter({ subsets: ['latin'], variable: '--font-inter' })
const nunito  = Nunito({ subsets: ['latin'], variable: '--font-nunito', weight: ['400','700','800','900'] })

export const metadata: Metadata = {
  title: 'KELO Literacy Program — Phonics-Based Literacy',
  description: 'Knowledge Empowers, Literacy Opens Doors — structured phonics-based literacy program for K–3 readers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable}`}>
      <body className="font-body bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
