import { ThemeSwitch } from '@/components/ThemeSwitch'

export const metadata = {
  title: 'Landing Page',
  description: "Landing Page for Felicio Orlandini's Portfolio",
}

export default async function LandingPage() {
  return (
    <>
      <ThemeSwitch />
    </>
  )
}
