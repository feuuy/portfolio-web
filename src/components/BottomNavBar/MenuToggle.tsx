'use client'

import { Button } from '@nextui-org/react'

import { useMobileMenuState } from '@/hooks/useMobileMenuState'

export default function MenuToggle() {
  const { toggle } = useMobileMenuState()

  return (
    <Button isIconOnly variant="light" onClick={toggle}>
      <div className="flex flex-col gap-2">
        <span className="w-6 h-0.5 bg-foreground rounded-xl" />
        <span className="w-6 h-0.5 bg-foreground rounded-xl" />
      </div>
    </Button>
  )
}
