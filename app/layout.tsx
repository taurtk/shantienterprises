import React from 'react'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Shanti Enterprises - Premium Metal Furniture',
  description: 'Leading manufacturer of premium metal furniture and storage solutions since 2010.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}