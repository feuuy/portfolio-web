import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useStore } from '@/app/hooks/useIsMenuOpen'

export default function MenuLink({ children, href }: { children: React.ReactNode; href: string }) {
  const { toggleOpen } = useStore()

  return (
    <Link
      className="flex justify-between text-white items-center py-4 border-b-white border-b-[0.5px]"
      href={href}
      onClick={toggleOpen}
    >
      <p>{children}</p>
      <Image
        alt={'Chevron right'}
        src={require('public/icons/chevron-right.svg')}
        width={24}
        height={24}
      />
    </Link>
  )
}
