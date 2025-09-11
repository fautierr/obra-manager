'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ProjectState = {
  // flujo general
  selectedOption: number | null
  showOptions: boolean
  setSelectedOption: (val: number | null) => void
  setShowOptions: (val: boolean) => void

  // create from scratch
  step: 'project-data' | 'categories' | 'materials'
  setStep: (step: 'project-data' | 'categories' | 'materials') => void

  // reset global
  reset: () => void
}

export const useProjectStore = create<ProjectState>()(
  persist(
    (set) => ({
      // flujo general
      selectedOption: null,
      showOptions: true,
      setSelectedOption: (val) => set({ selectedOption: val }),
      setShowOptions: (val) => set({ showOptions: val }),

      // create from scratch
      step: 'project-data',
      setStep: (step) => set({ step }),

      // reset general
      reset: () =>
        set({
          step: 'project-data',
        }),
    }),
    {
      name: 'project-store',
    },
  ),
)
