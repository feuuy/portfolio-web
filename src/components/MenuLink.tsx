import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useStore } from '@/app/hooks/useIsMenuOpen'

export default function MenuLink({ children, href }: { children: React.ReactNode; href: string }) {
  const { toggleOpen } = useStore()

  return (
    <Link
      className="text-white text-2xl flex justify-between items-center hover:opacity-80 hover:cursor-pointer"
      href={href}
      onClick={toggleOpen}
    >
      {children}
      <Image
        alt={'Chevron right'}
        src={require('public/icons/chevron-right.svg')}
        width={32}
        height={32}
      />
    </Link>
  )
}
