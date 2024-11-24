'use client'

import { usePathname, useRouter } from 'next/navigation'
import {
  BsGear,
  BsHouse,
  BsEnvelope,
  BsBox2,
  BsFillGearFill,
  BsFillHouseFill,
  BsFillEnvelopeFill,
  BsFillBox2Fill,
} from 'react-icons/bs'

import MyButton from '../Button'

export default function Routes() {
  const pathname = usePathname()
  const router = useRouter()

  const icons = {
    '/': { default: BsHouse, active: BsFillHouseFill },
    '/projects': { default: BsBox2, active: BsFillBox2Fill },
    '/contact': { default: BsEnvelope, active: BsFillEnvelopeFill },
    '/settings': { default: BsGear, active: BsFillGearFill },
  }

  return (
    <ul className="flex gap-4 items-center justify-between text-2xl">
      {Object.entries(icons).map(([path, { default: DefaultIcon, active: ActiveIcon }]) => (
        <li key={path}>
          <MyButton variant="light" onClick={() => router.replace(path)}>
            {pathname === path ? <ActiveIcon /> : <DefaultIcon />}
          </MyButton>
        </li>
      ))}
    </ul>
  )
}
