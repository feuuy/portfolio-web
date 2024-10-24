import React from 'react'
import 'public/globals.css'
import { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Menu from '@/components/Menu'

const spaceMono = Space_Mono({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Felicio Orlandini',
  description: "I'm a full stack developer, I like to code and solve problems.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <nav>
          <Navbar />
          <Menu />
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
