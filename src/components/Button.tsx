'use client'

import React from 'react'
import Image from 'next/image'

export default function Button({
  children,
  color,
  backgroundColor,
  icon,
}: {
  children: React.ReactNode
  color?: string
  backgroundColor?: string
  icon?: boolean
}) {
  return (
    <button
      className={`flex group gap-4 items-center justify-center ${color || 'text-white'} ${backgroundColor || 'bg-black'} p-4 rounded-xl w-full hover:opacity-80 transition-opacity duration-300 ease-in-out`}
    >
      {children}
      {icon && (
        <Image
          className="transition-transform duration-300 ease-in-out group-hover:translate-x-2"
          src={require('public/icons/chevron-right.svg')}
          alt="Mouse click"
        />
      )}
    </button>
  )
}
