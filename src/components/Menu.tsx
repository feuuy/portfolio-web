'use client'

import { useStore } from '@/app/hooks/useIsMenuOpen'
import Button from './Button'
import Social from './Social'
import MenuLink from './MenuLink'

export default function Menu() {
  const { isOpen } = useStore()

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 ease-in-out ${isOpen ? 'md:opacity-100' : 'opacity-0'}`}
      ></div>
      <div
        className={`bg-black flex flex-col justify-between gap-4 fixed w-full md:w-1/3 h-full top-0 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 md:translate-x-[66.7vw]' : 'translate-x-full md:translate-x-[100vw]'} p-4 pt-24`}
      >
        <div className="flex flex-col gap-16">
          <div>
            <MenuLink href="/">Contact me</MenuLink>
            <MenuLink href="/">Blog</MenuLink>
          </div>
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
    </>
  )
}
