'use client'
import LayoutContainer from '@/features/common/layout-container'
import { StepTransition } from '@/features/common/step-transition'
import { SelectCategories } from '@/features/categories/select-categories'
import { Button } from '@heroui/button'
import StepsHeader from '@/features/common/steps-header'
import { useCalcCategoriesStore } from '@/features/categories/use-categories-store'
import { useCalculateFlowStore } from './use-calculate-materials-store'
import { MaterialsStep } from '@/features/materials/materials-step'
import { useCalcMaterialsStore } from '../materials/use-materials-store'

const FlowCalculations = () => {
  const { step, setStep } = useCalculateFlowStore()

  const { categoriesValues: calcValues, setCategoriesValues: setCalcValues } =
    useCalcCategoriesStore()

  const {
    setMaterialValue: setMaterialProjectValue,
    getValue: getMaterialProjectValue,
    getSelectedCategories,
  } = useCalcMaterialsStore()

  const selectedCategories = getSelectedCategories(calcValues)
  return (
    <LayoutContainer>
      {step === 'categories' && (
        <StepTransition stepKey='categories'>
          <div className='mt-4'>
            <StepsHeader
              title='Calculemos cuantos materiales necesitas'
              subtitle='Selecciona alguna categoria.'
            />
            <SelectCategories selected={calcValues} setSelected={setCalcValues}>
              <Button color='primary' onPress={() => setStep('materials')}>
                Continuar
              </Button>
            </SelectCategories>
          </div>
        </StepTransition>
      )}
      {step === 'materials' && (
        <StepTransition stepKey='materials'>
          <StepsHeader
            title='Estos son los materiales que calculaste'
            subtitle='Ahora podes agregar precios, sino dejalos asi.'
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
              Volver a categoríasaa
            </Button>
            <Button
              color='primary'
              onPress={() => {
                console.log('Continuar pruebas')
              }}
            >
              Continuar pruebas
            </Button>
          </MaterialsStep>
        </StepTransition>
      )}
    </LayoutContainer>
  )
}

export default FlowCalculations
