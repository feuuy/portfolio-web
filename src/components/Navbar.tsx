'use client'

import React from 'react'

import Hamburger from './Hamburger'
import Logo from './Logo'

export default function Navbar() {
  return (
    <div className="flex p-4 justify-between items-center">
      <Logo />
      <Hamburger />
    </div>
  )
}
