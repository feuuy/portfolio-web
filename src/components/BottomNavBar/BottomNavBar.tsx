import React from 'react'

import Routes from './Routes'

export default function Navbar() {
  return (
    <div className="fixed bottom-0 p-4 w-full border-t border-foreground/20 backdrop-blur">
      <Routes />
    </div>
  )
}
