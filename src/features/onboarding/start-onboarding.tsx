import LayoutContainer from '@/features/common/layout-container'
import FlowToCreateProject from '@/features/projects/create/flow-to-create-project'
import StepsHeader from '@/features/common/steps-header'

const StartOnboarding = () => {
  return (
    <LayoutContainer>
      <FlowToCreateProject
        optionsTitle={
          <StepsHeader
            title='¡Comencemos!'
            subtitle='Elegi una opción para crear tu proyecto, luego podrás actualizar sus datos si asi lo
              deseas.'
          />
        }
        // useFlowStore={useOnboardingStore}
        // useCategoriesStore={useOnboardingCategoriesStore}
        // useMaterialsStore={useOnboardingMaterialsStore}
        // useGeneralDataStore={useOnboardingGeneralDataStore}
      />
    </LayoutContainer>
  )
}
// https://chatgpt.com/s/t_68c1fca4f02881919da85b5f50fe4094
export default StartOnboarding
