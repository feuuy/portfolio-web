'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'

import MyButton from './Button'

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <MyButton variant="faded" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <BsSun /> : <BsMoon />}
    </MyButton>
  )
}
