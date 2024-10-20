import { create } from 'zustand'

import { MenuState } from '../types/MenuState.types'

export const useStore = create<MenuState>((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}))
