import { useStore } from '@/app/hooks/useIsMenuOpen'

export default function Hamburger() {
  const { isOpen, toggleOpen } = useStore()

  return (
    <div onClick={toggleOpen} className={`flex flex-col gap-2 z-10 hover:cursor-pointer`}>
      <span
        className={`h-0.5 w-8 bg-black block transition-transfrom duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5 bg-white' : 'rotate-0'}`}
      ></span>
      <span
        className={`h-0.5 w-8 bg-black block transition-transfrom duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1 bg-white' : 'rotate-0'}`}
      ></span>
    </div>
  )
}
