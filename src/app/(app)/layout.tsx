import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

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
      <body>
        <main>
          <NextUIProvider className="dark dark:bg-stone-800">
            <NextThemesProvider attribute="class" defaultTheme="light">
              {children}
            </NextThemesProvider>
          </NextUIProvider>
        </main>
      </body>
    </html>
  )
}
