import React from 'react'
import { NextUIProvider } from '@nextui-org/react'

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
    <html lang="en">
      <body>
        <main>
          <NextUIProvider>{children}</NextUIProvider>
        </main>
      </body>
    </html>
  )
}
