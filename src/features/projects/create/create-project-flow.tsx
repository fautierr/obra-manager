'use client'

// import { Button } from '@heroui/button'
import SelectProject from './select-project'
import { StepTransition } from './step-transition'
// import { useProjectFlow } from './use-project-flow'
import CreateProjectFromScratch from './create-project-from-scratch'
// import { usePersistedState } from './use-persisted-state'
// import { useState } from 'react'
import { useProjectStore } from '../use-project-store'
import { Button } from '@heroui/button'

// ----------------------
// Componentes finales
// ----------------------
const ProjectForm = () => <p>Formulario de proyecto (estructura básica)</p>
const ProjectPreview = () => (
  <p>Previsualización del proyecto (estructura básica)</p>
)
// const ProjectSummary = () => <p>Resumen del proyecto (estructura básica)</p>
const ProjectDuplicate = () => {
  const { setShowOptions } = useProjectStore()
  return (
    <>
      <p>Duplicar proyecto (estructura básica)</p>
      <Button
        color='secondary'
        variant='flat'
        onPress={() => {
          setShowOptions(true)
        }}
      >
        Volver a los datos
      </Button>
    </>
  )
}

const componentsMap: Record<number, React.FC> = {
  1: ProjectForm,
  2: ProjectPreview,
  3: CreateProjectFromScratch,
  4: ProjectDuplicate,
}

interface CreateProjectFlowProps {
  optionsTitle?: React.ReactNode
}
const CreateProjectFlow: React.FC<CreateProjectFlowProps> = ({
  optionsTitle,
}) => {
  // const [selectedOption, setSelectedOption] = useState<number | null>(null)
  // const [showOptions, setShowOptions] = useState(true)
  const {
    selectedOption,
    showOptions,
    setSelectedOption,
    setShowOptions,
    reset,
  } = useProjectStore()
  if (showOptions)
    return (
      <StepTransition stepKey='options'>
        {optionsTitle}
        <SelectProject
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          setShowOptions={setShowOptions}
          reset={reset}
        />
      </StepTransition>
    )

  // Renderizamos el componente correspondiente
  const SelectedComponent =
    selectedOption !== null ? componentsMap[selectedOption] : null
  return (
    <StepTransition stepKey={`detail-${selectedOption}`}>
      <div className='mt-4'>
        {SelectedComponent ? <SelectedComponent /> : <p>Elegí una opción</p>}
      </div>
    </StepTransition>
  )
}

export default CreateProjectFlow
