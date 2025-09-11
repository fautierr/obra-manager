'use client'
import { Button } from '@heroui/button'
import { StepTransition } from '@/features/common/step-transition'
import { useProjectStore } from '@/features/projects/use-project-store'
import StepsHeader from '@/features/common/steps-header'
import { SelectCategories } from '@/features/categories/select-categories'
import { useProjectCategoriesStore } from '@/features/categories/use-categories-store'
import { useProjectMaterialsStore } from '@/features/materials/use-materials-store'
import { MaterialsStep } from '@/features/materials/materials-step'
import { CompleteProjectForm } from './complete-project-form'
import { useProjectGeneralDataStore } from '../use-project-general-data-store'

const CreateProjectFromScratch = () => {
  const { step, setStep, setShowOptions } = useProjectStore()
  const {
    name: projectName,
    description: projectDescription,
    setName: setProjectName,
    setDescription: setProjectDescription,
  } = useProjectGeneralDataStore()

  const {
    categoriesValues: categoriesProjectValues,
    setCategoriesValues: setCategoriesProjectValues,
  } = useProjectCategoriesStore()
  // console.log(step)
  const {
    setMaterialValue: setMaterialProjectValue,
    getValue: getMaterialProjectValue,
    getSelectedCategories,
  } = useProjectMaterialsStore()

  const selectedCategories = getSelectedCategories(categoriesProjectValues)
  return (
    <div>
      {step === 'project-data' && (
        <StepTransition stepKey='project-data'>
          <StepsHeader
            title='Crear un proyecto desde cero'
            subtitle='Elegi un nombre y la descripción para tu proyecto.'
          />
          <CompleteProjectForm
            projectName={projectName}
            projectDescription={projectDescription}
            setProjectName={setProjectName}
            setProjectDescription={setProjectDescription}
          >
            <Button
              color='secondary'
              variant='flat'
              onPress={() => {
                setShowOptions(true)
              }}
            >
              Volver a opciones
            </Button>
            <Button
              color='primary'
              onPress={() => {
                setStep('categories')
              }}
            >
              Cargar categorías
            </Button>
          </CompleteProjectForm>
        </StepTransition>
      )}
      {step === 'categories' && (
        <StepTransition stepKey='categories'>
          <StepsHeader
            title='Categorias de tu proyecto'
            subtitle='Selecciona todas las que aplican a tu proyecto.'
          />

          <SelectCategories
            selected={categoriesProjectValues}
            setSelected={setCategoriesProjectValues}
          >
            <Button
              color='secondary'
              variant='flat'
              onPress={() => {
                return setStep('project-data')
              }}
            >
              Volver a los datos
            </Button>
            <Button
              color='primary'
              onPress={() => {
                setStep('materials')
              }}
            >
              Cargar materiales
            </Button>
          </SelectCategories>
        </StepTransition>
      )}

      {step === 'materials' && (
        <StepTransition stepKey='materials'>
          <StepsHeader
            title='Nos queda un solo paso'
            subtitle='Carga los materiales, con eso podrás crear un nuevo proyecto.'
          />
          <MaterialsStep
            selectedCategories={selectedCategories}
            setMaterialValue={setMaterialProjectValue}
            getValue={getMaterialProjectValue}
          >
            <Button
              color='secondary'
              variant='flat'
              onPress={() => setStep('categories')}
            >
              Volver a categorías
            </Button>
            <Button
              color='primary'
              onPress={() => {
                console.log('Crear proyecto')
              }}
            >
              Crear proyecto
            </Button>
          </MaterialsStep>
        </StepTransition>
      )}
    </div>
  )
}

export default CreateProjectFromScratch
