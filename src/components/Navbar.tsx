'use client'

import React from 'react'

import Hamburger from './Hamburger'
import Logo from './Logo'

export default function Navbar() {
  return (
    <div className="flex fixed w-full z-10 p-4 justify-between items-center md:px-40">
      <Logo />
      <Hamburger />
    </div>
  )
}
