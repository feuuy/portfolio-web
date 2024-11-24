import { create } from 'zustand'

interface MobileMenuState {
  isOpen: boolean
  toggle: () => void
}

export const useMobileMenuState = create<MobileMenuState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))
