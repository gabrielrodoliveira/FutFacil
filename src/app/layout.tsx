import { NextAuthProvider } from '@/providers/auth'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '../components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'], weight: [
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]
})

export const metadata: Metadata = {
  title: 'FutFácil',
  description: 'Sistema de Locação de Quadras',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
        <Header/>
        {children}

        <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
