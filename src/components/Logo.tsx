import { useStore } from '@/app/hooks/useIsMenuOpen'

export default function Logo() {
  const { isOpen } = useStore()

  return (
    <div
      className={`text-2xl font-bold z-10 transition-all duration-300 ease-in-out ${isOpen && 'text-white'} hover:cursor-pointer`}
    >
      <h1>Felicio</h1>
      <h1>
        Orlandini<span className="text-amber-500">.</span>
      </h1>
    </div>
  )
}
