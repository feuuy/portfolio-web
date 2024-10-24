'use client'

import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

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
      className={`flex group gap-4 items-center justify-center ${color || 'text-black'} ${backgroundColor || 'bg-white'} p-4  w-full outline outline-black outline-offset-2 hover:outline-white transition-color duration-300 ease-in-out`}
    >
      {children}
      {icon && (
        <RiArrowRightSLine className="group-hover:translate-x-2 duration-300 transition-transform ease-in-out" />
      )}
    </button>
  )
}
