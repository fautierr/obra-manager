'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CategoriesState = {
  categoriesValues: string[]
  setCategoriesValues: (values: string[]) => void
  resetCategories: () => void
}

export const createCategoriesStore = (key: string) =>
  create<CategoriesState>()(
    persist(
      (set) => ({
        categoriesValues: [],
        setCategoriesValues: (values) => set({ categoriesValues: values }),
        resetCategories: () => set({ categoriesValues: [] }),
      }),
      {
        name: `${key}-categories-store`, // clave única por flujo
      },
    ),
  )

// Para proyectos
export const useProjectCategoriesStore = createCategoriesStore('project')

// Para cálculos
export const useCalcCategoriesStore = createCategoriesStore('calc')

// Para onboarding
export const useOnboardingCategoriesStore = createCategoriesStore('onboarding')
