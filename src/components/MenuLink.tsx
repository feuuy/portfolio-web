import { RiArrowRightSLine } from 'react-icons/ri'
import Link from 'next/link'
import React from 'react'
import { useStore } from '@/app/hooks/useIsMenuOpen'

export default function MenuLink({ children, href }: { children: React.ReactNode; href: string }) {
  const { toggleOpen } = useStore()

  return (
    <Link
      className="text-white group text-2xl p-2 flex justify-between items-center outline outline-black outline-offset-2 hover:outline-white hover:cursor-pointer transition-color duration-300 ease-in-out"
      href={href}
      onClick={toggleOpen}
    >
      {children}
      <RiArrowRightSLine className="group-hover:translate-x-2 duration-300 transition-transform ease-in-out" />
    </Link>
  )
}
