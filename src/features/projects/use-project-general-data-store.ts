'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type GeneralDataState = {
  name: string
  description: string
  setName: (name: string) => void
  setDescription: (desc: string) => void
  reset: () => void
}

export const createProjectGeneralDataStore = (key: string) =>
  create<GeneralDataState>()(
    persist(
      (set) => ({
        name: '',
        description: '',
        setName: (name) => set({ name }),
        setDescription: (desc) => set({ description: desc }),
        reset: () => set({ name: '', description: '' }),
      }),
      {
        name: `${key}-general-data-store`,
      },
    ),
  )

export const useProjectGeneralDataStore =
  createProjectGeneralDataStore('project')

export const useOnboardingGeneralDataStore =
  createProjectGeneralDataStore('onboarding')
