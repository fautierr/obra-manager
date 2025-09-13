import React from 'react'
import { CompleteProjectForm } from '@/features/projects/create/complete-project-form'
import { useOnboardingGeneralDataStore } from '@/features/projects/use-project-general-data-store'
import { useOnboardingCategoriesStore } from '@/features/categories/use-categories-store'
import { useOnboardingMaterialsStore } from '@/features/materials/use-materials-store'
import { MaterialsStep } from '@/features/materials/materials-step'
import { SelectCategories } from '@/features/categories/select-categories'

export const ProjectDataModule: React.FC = () => {
  const { name, description, setName, setDescription } =
    useOnboardingGeneralDataStore()

  return (
    <CompleteProjectForm
      name={name}
      description={description}
      setName={setName}
      setDescription={setDescription}
    />
  )
}

export const CategoriesModule: React.FC = () => {
  const { categoriesValues, setCategoriesValues } =
    useOnboardingCategoriesStore()

  return (
    <SelectCategories
      selected={categoriesValues}
      setSelected={setCategoriesValues}
    />
  )
}
export const MaterialsModule: React.FC = () => {
  const { categoriesValues } = useOnboardingCategoriesStore()
  const {
    setMaterialValue,
    getValue: getMaterialValue,
    getSelectedCategories,
  } = useOnboardingMaterialsStore()
  const selectedCategories = getSelectedCategories(categoriesValues)
  return (
    <MaterialsStep
      selectedCategories={selectedCategories}
      setMaterialValue={setMaterialValue}
      getValue={getMaterialValue}
    />
  )
}
