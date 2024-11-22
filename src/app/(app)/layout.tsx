import React from 'react'
import { NextUIProvider } from '@nextui-org/react'

export const metadata = {
  title: {
    default: 'Felicio Orlandini / Portfolio',
    template: '%s / Felicio Orlandini',
  },
  description: 'Personal portfolio of Felicio Orlandini.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    </NextUIProvider>
  )
}
