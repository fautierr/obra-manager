'use client'
import LayoutContainer from '@/features/common/layout-container'
import FlowToCreateProject from '@/features/projects/create/flow-to-create-project'
import StepsHeader from '@/features/common/steps-header'
import { useOnboardingStore } from '@/features/projects/use-project-store'
import { useOnboardingCategoriesStore } from '@/features/categories/use-categories-store'
import { useOnboardingMaterialsStore } from '@/features/materials/use-materials-store'
import { useOnboardingGeneralDataStore } from '@/features/projects/use-project-general-data-store'
import { onboardingIntro } from './onboarding-flow.config'

const StartOnboarding = () => {
  const projectStore = useOnboardingStore()
  const projectDataStore = useOnboardingGeneralDataStore()
  const categoriesStore = useOnboardingCategoriesStore()
  const materialsStore = useOnboardingMaterialsStore()

  const resetAll = () => {
    projectStore.reset()
    categoriesStore.resetCategories()
    materialsStore.resetMaterials()
    projectDataStore.reset()
  }

  return (
    <LayoutContainer>
      <FlowToCreateProject
        optionsTitle={
          <StepsHeader
            title={onboardingIntro.title}
            subtitle={onboardingIntro.subtitle}
          />
        }
        store={projectStore}
        resetAll={resetAll}
      />
    </LayoutContainer>
  )
}
export default StartOnboarding
