import React from 'react'

export default function Social({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-gray-500 hover:cursor-pointer transition-color duration-300 ease-in-out outline outline-offset-2 outline-black hover:outline-white"
    >
      {children}
    </a>
  )
}
