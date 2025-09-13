'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ProjectStepKey } from '../onboarding/onboarding-flow.config'

export type ProjectState = {
  selectedOption: number | null
  showOptions: boolean
  step: ProjectStepKey | null
  setSelectedOption: (val: number | null) => void
  setShowOptions: (val: boolean) => void
  setStep: (step: ProjectStepKey | null) => void
  reset: () => void // parcial
  resetAll: () => void // completo
}

const createProjectStore = (key: string) =>
  create<ProjectState>()(
    persist(
      (set) => ({
        selectedOption: null,
        showOptions: true,
        step: null,
        setSelectedOption: (val) => set({ selectedOption: val }),
        setShowOptions: (val) => set({ showOptions: val }),
        setStep: (step) => set({ step }),
        // reset parcial: mantiene selectedOption
        reset: () =>
          set({
            showOptions: true,
            step: null,
          }),
        // reset completo: resetea todo
        resetAll: () =>
          set({
            selectedOption: null,
            showOptions: true,
            step: null,
          }),
      }),
      {
        name: `${key}-project-store`,
      },
    ),
  )

export const useProjectStore = createProjectStore('project')
export const useOnboardingStore = createProjectStore('onboarding')
