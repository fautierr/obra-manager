'use client'

import { StepTransition } from '@/features/common/step-transition'
import { Button } from '@heroui/button'
import SelectProject from './select-project'
import { ProjectState } from '@/features/projects/use-project-store'

import StepsHeader from '@/features/common/steps-header'
import {
  onboardingFlow,
  ProjectStepKey,
} from '@/features/onboarding/onboarding-flow.config'
import { buttonConfig } from '../button-ui.config'

interface CreateProjectFlowProps {
  optionsTitle?: React.ReactNode
  store: ProjectState
  resetAll: () => void
}

const FlowToCreateProject: React.FC<CreateProjectFlowProps> = ({
  optionsTitle,
  store,
  resetAll,
}) => {
  const {
    selectedOption,
    showOptions,
    step,
    setSelectedOption,
    setShowOptions,
    setStep,
    reset,
  } = store

  if (showOptions) {
    return (
      <StepTransition stepKey='options'>
        {optionsTitle}
        <SelectProject
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          setStep={setStep}
          setShowOptions={setShowOptions}
          reset={resetAll}
        />
      </StepTransition>
    )
  }

  // Obtenemos la opción seleccionada
  const option = onboardingFlow.find((o) => o.id === selectedOption)
  if (!option) return <p>No se encontró la opción</p>

  // Obtenemos el paso actual
  const currentStep = option.steps.find((s) => s.key === step)
  if (!currentStep) return <p>No se encontró el paso</p>

  return (
    <StepTransition stepKey={currentStep.key}>
      <StepsHeader title={currentStep.title} subtitle={currentStep.subtitle} />
      <div className='mt-4'>{currentStep.component}</div>

      <div className='pt-4 flex flex-col sm:flex-row justify-end gap-4'>
        {currentStep.buttons.map((btn) => {
          const { color, variant } = buttonConfig[btn.action] ?? {
            color: 'secondary',
            variant: 'solid',
          }
          return (
            <Button
              key={btn.label}
              color={color}
              variant={variant}
              onPress={() => {
                switch (btn.action) {
                  case 'next':
                  case 'prev':
                    if (btn.step) setStep(btn.step as ProjectStepKey)
                    break
                  case 'backToOptions':
                    reset()
                    break
                  case 'create':
                    console.log('🚀 Crear proyecto con datos del store')
                    reset()
                    break
                }
              }}
            >
              {btn.label}
            </Button>
          )
        })}
      </div>
    </StepTransition>
  )
}

export default FlowToCreateProject
