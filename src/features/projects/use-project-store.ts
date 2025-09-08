'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface MaterialValueItem {
  categoryId: string
  materialId: string
  quantity: number
  unitPrice: number
}

type ProjectState = {
  // flujo general
  selectedOption: number | null
  showOptions: boolean
  setSelectedOption: (val: number | null) => void
  setShowOptions: (val: boolean) => void

  // create from scratch
  step: 'project-data' | 'categories' | 'materials'
  projectName: string
  projectDescription: string
  categoriesValues: string[]
  materialsValues: MaterialValueItem[]
  setStep: (step: 'project-data' | 'categories' | 'materials') => void
  setProjectName: (name: string) => void
  setProjectDescription: (desc: string) => void
  setCategoriesValues: (values: string[]) => void
  setMaterialValue: (
    categoryId: string,
    materialId: string,
    quantity?: number,
    unitPrice?: number,
  ) => void

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
      projectName: '',
      projectDescription: '',
      categoriesValues: [],
      materialsValues: [],
      setStep: (step) => set({ step }),
      setProjectName: (name) => set({ projectName: name }),
      setProjectDescription: (desc) => set({ projectDescription: desc }),
      setCategoriesValues: (values) => set({ categoriesValues: values }),

      setMaterialValue: (categoryId, materialId, quantity, unitPrice) =>
        set((state) => {
          const index = state.materialsValues.findIndex(
            (m) => m.categoryId === categoryId && m.materialId === materialId,
          )
          if (index >= 0) {
            // ya existe, actualizamos solo lo que viene
            const updated = [...state.materialsValues]
            if (quantity !== undefined) updated[index].quantity = quantity
            if (unitPrice !== undefined) updated[index].unitPrice = unitPrice
            return { materialsValues: updated }
          } else {
            // no existe, lo agregamos
            return {
              materialsValues: [
                ...state.materialsValues,
                {
                  categoryId,
                  materialId,
                  quantity: quantity ?? 0,
                  unitPrice: unitPrice ?? 0,
                },
              ],
            }
          }
        }),

      // reset general
      reset: () =>
        set({
          // selectedOption: null,
          // showOptions: true,
          step: 'project-data',
          categoriesValues: [],
          materialsValues: [],
        }),
    }),
    {
      name: 'project-store',
    },
  ),
)
