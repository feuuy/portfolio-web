import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import Navbar from '@/components/BottomNavBar/BottomNavBar'
import 'public/globals.css'

export const metadata = {
  title: {
    default: 'Felicio Orlandini / Portfolio',
    template: '%s / Felicio Orlandini',
  },
  description: 'Personal portfolio of Felicio Orlandini.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-300 ease-in-out">
        <main>
          <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="light">
              <Navbar />
              {children}
            </NextThemesProvider>
          </NextUIProvider>
        </main>
      </body>
    </html>
  )
}
