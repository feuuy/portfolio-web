'use client'

import { useStore } from '@/app/hooks/useIsMenuOpen'
import Button from './Button'
import Social from './Social'

export default function Menu() {
  const { isOpen } = useStore()

  return (
    <div
      className={`bg-black flex flex-col justify-between gap-4 fixed w-full h-full top-0 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} p-4 pt-24`}
    >
      <div className="flex flex-col gap-4">
        <Button color="text-black" backgroundColor="bg-white">
          Download CV
        </Button>
      </div>
      <div className="flex justify-around items-center gap-2">
        <Social
          src={require('public/icons/instagram.svg')}
          alt="Instagram"
          href="https://www.instagram.com/feuyyyy/"
        />
        <Social
          src={require('public/icons/github.svg')}
          alt="Github"
          href="https://github.com/feuuy"
        />
        <Social
          src={require('public/icons/linkedin.svg')}
          alt="LinkedIn"
          href="https://www.linkedin.com/in/forlandini/"
        />
      </div>
    </div>
  )
}
