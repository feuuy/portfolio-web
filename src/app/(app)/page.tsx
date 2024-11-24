import Logo from '@/components/BottomNavBar/Logo'
import { ThemeSwitch } from '@/components/ThemeSwitch'

export const metadata = {
  title: 'Landing Page',
  description: "Landing Page for Felicio Orlandini's Portfolio",
}

export default async function LandingPage() {
  return (
    <div className="p-4 flex justify-between">
      <Logo />
      <ThemeSwitch />
    </div>
  )
}
