'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

import { themeLogo } from '@/utils/themeLogo'

export default function Logo() {
  const { theme } = useTheme()
  const [logo, setLogo] = React.useState(null)

  React.useEffect(() => {
    setLogo(themeLogo(theme ?? ''))
  }, [theme])

  return (
    <>
      {logo && (
        <Image
          className="text-red-500"
          src={logo}
          alt="Felicio Orlandini Logo"
          width={32}
          height={32}
        />
      )}
    </>
  )
}
