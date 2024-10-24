'use client'

import { useStore } from '@/app/hooks/useIsMenuOpen'
import Button from './Button'
import Social from './Social'
import MenuLink from './MenuLink'
import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from 'react-icons/ri'

export default function Menu() {
  const { isOpen, toggleOpen } = useStore()

  return (
    <>
      <div
        onClick={() => isOpen && toggleOpen()}
        className={`fixed inset-0 bg-black/80 transition-opacity duration-300 ease-in-out ${isOpen ? 'md:opacity-100 md:visible' : 'opacity-0 invisible'}`}
      ></div>
      <div
        className={`bg-black flex flex-col justify-between gap-4 fixed w-full md:w-1/3 h-full top-0 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 md:translate-x-[66.7vw]' : 'translate-x-full md:translate-x-[100vw]'} p-4 pt-36`}
      >
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <MenuLink href="/">Contact me</MenuLink>
            <MenuLink href="/">Blog</MenuLink>
          </div>
          <Button color="text-black" backgroundColor="bg-white">
            Download Resume
          </Button>
        </div>
        <div className="flex justify-around items-center gap-2">
          <Social href="https://www.instagram.com/feuyyyy/">
            <RiInstagramLine size={40} />
          </Social>
          <Social href="https://github.com/feuuy">
            <RiGithubLine size={40} />
          </Social>
          <Social href="https://www.linkedin.com/in/forlandini/">
            <RiLinkedinLine size={40} />
          </Social>
        </div>
      </div>
    </>
  )
}
