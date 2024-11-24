'use client'

import React from 'react'
import { Button } from '@nextui-org/react'

import { toggleScroll } from '@/utils/toggleScroll'
import { useMobileMenuState } from '@/hooks/useMobileMenuState'

export default function MobileMenu() {
  const { isOpen, toggle } = useMobileMenuState()

  React.useEffect(() => {
    toggleScroll(isOpen)
  }, [isOpen])

  return (
    <div
      className={`${!isOpen && 'translate-x-[100vw]'} fixed inset-0 transition-transform duration-300 ease-in-out bg-foreground p-4 flex justify-between`}
    >
      <div></div>
      <Button isIconOnly variant="light" onClick={toggle}>
        <div className="flex flex-col gap-2">
          <span className="w-6 h-0.5 bg-background rounded-xl rotate-45 translate-y-1.5" />
          <span className="w-6 h-0.5 bg-background rounded-xl -rotate-45 -translate-y-1" />
        </div>
      </Button>
    </div>
  )
}
