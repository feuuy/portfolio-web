import { useStore } from '@/app/hooks/useIsMenuOpen'

export default function Logo() {
  const { isOpen } = useStore()

  return (
    <div className={`text-2xl z-10 hover:cursor-pointer`}>
      <h1>Felicio</h1>
      <h1>
        Orlandini<span className="animate-ping">|</span>
      </h1>
    </div>
  )
}
