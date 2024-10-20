import React from 'react'

export default function Button({
  children,
  color,
  backgroundColor,
}: {
  children: React.ReactNode
  color?: string
  backgroundColor?: string
}) {
  return (
    <button
      className={`${color || 'text-white'} ${backgroundColor || 'bg-black'} p-4 rounded w-full`}
    >
      {children}
    </button>
  )
}
