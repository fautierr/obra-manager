'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CalcMaterialsState = {
  // flujo general
  selectedOption: number | null
  showOptions: boolean
  setSelectedOption: (val: number | null) => void
  setShowOptions: (val: boolean) => void

  // create from scratch
  step: 'categories' | 'materials'
  setStep: (step: 'categories' | 'materials') => void

  // reset global
  reset: () => void
}

export const useCalculateFlowStore = create<CalcMaterialsState>()(
  persist(
    (set) => ({
      // flujo general
      selectedOption: null,
      showOptions: true,
      setSelectedOption: (val) => set({ selectedOption: val }),
      setShowOptions: (val) => set({ showOptions: val }),

      // create from scratch
      step: 'categories',
      setStep: (step) => set({ step }),

      // reset general
      reset: () =>
        set({
          step: 'categories',
        }),
    }),
    {
      name: 'calc-materials-store',
    },
  ),
)
