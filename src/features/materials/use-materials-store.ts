'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { categories } from '../categories/mock'

export interface MaterialValueItem {
  categoryId: string
  materialId: string
  quantity: number
  unitPrice: number
}

type MaterialsState = {
  materialsValues: MaterialValueItem[]
  setMaterialValue: (
    categoryId: string,
    materialId: string,
    quantity?: number,
    unitPrice?: number,
  ) => void
  resetMaterials: () => void
  getValue: (categoryId: string, materialId: string) => MaterialValueItem
  getSelectedCategories: (selected: string[]) => typeof categories
}

export const createMaterialsStore = (key: string) =>
  create<MaterialsState>()(
    persist(
      (set, get) => ({
        materialsValues: [],
        setMaterialValue: (categoryId, materialId, quantity, unitPrice) =>
          set((state) => {
            const index = state.materialsValues.findIndex(
              (m) => m.categoryId === categoryId && m.materialId === materialId,
            )

            if (index >= 0) {
              const updated = [...state.materialsValues]
              if (quantity !== undefined) updated[index].quantity = quantity
              if (unitPrice !== undefined) updated[index].unitPrice = unitPrice
              return { materialsValues: updated }
            }

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
          }),
        resetMaterials: () => set({ materialsValues: [] }),

        getValue: (categoryId, materialId) => {
          const item = get().materialsValues.find(
            (m) => m.categoryId === categoryId && m.materialId === materialId,
          )
          return item ?? { categoryId, materialId, quantity: 0, unitPrice: 0 }
        },

        getSelectedCategories: (selected) =>
          categories.filter((c) => selected.includes(c.id.toString())),
      }),
      {
        name: `${key}-materials-store`,
      },
    ),
  )

// Para proyectos
export const useProjectMaterialsStore = createMaterialsStore('project')

// Para cálculos
export const useCalcMaterialsStore = createMaterialsStore('calc')

// Para onboarding
export const useOnboardingMaterialsStore = createMaterialsStore('onboarding')
