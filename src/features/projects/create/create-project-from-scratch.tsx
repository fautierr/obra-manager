'use client'

import Grid from '@/features/common/grid'
import { Checkbox, CheckboxGroup, cn } from '@heroui/react'

import { Input } from '@heroui/input'
import { Button } from '@heroui/button'
import { Divider } from '@heroui/divider'
import { Card, CardBody, CardHeader } from '@heroui/card'
import { StepTransition } from './step-transition'
import { useProjectStore } from '../use-project-store'
import StepsHeader from '@/features/common/steps-header'
const categories = [
  {
    id: 1,
    name: 'Cimientos',
    description: 'Cimientos',
    materials: [
      { id: 1, name: 'Piedra', description: 'Piedra' },
      { id: 2, name: 'Cemento', description: 'Cemento' },
      { id: 3, name: 'Arena', description: 'Arena' },
    ],
  },
  {
    id: 2,
    name: 'Techo',
    description: 'Techo',
    materials: [
      { id: 1, name: 'Teja', description: 'Teja de cerámica' },
      { id: 2, name: 'Chapa', description: 'Chapa galvanizada' },
    ],
  },
  {
    id: 3,
    name: 'Pisos',
    description: 'Pisos',
    materials: [
      { id: 1, name: 'Cerámica', description: 'Cerámica' },
      { id: 2, name: 'Madera', description: 'Madera flotante' },
    ],
  },
  {
    id: 4,
    name: 'Paredes',
    description: 'Paredes',
    materials: [
      { id: 1, name: 'Ladrillo', description: 'Ladrillo común' },
      { id: 2, name: 'Yeso', description: 'Yeso para terminación' },
    ],
  },
  {
    id: 5,
    name: 'Electricidad',
    description: 'Electricidad',
    materials: [
      { id: 1, name: 'Cable', description: 'Cable de 2,5mm' },
      { id: 2, name: 'Toma corriente', description: 'Toma corriente doble' },
    ],
  },
  {
    id: 6,
    name: 'Ventanas',
    description: 'Ventanas',
    materials: [
      { id: 1, name: 'Vidrio', description: 'Vidrio templado' },
      { id: 2, name: 'Marco', description: 'Marco de aluminio' },
    ],
  },
  {
    id: 7,
    name: 'Instalaciones',
    description: 'Instalaciones',
    materials: [
      { id: 1, name: 'Caño PVC', description: 'Caño PVC 40mm' },
      { id: 2, name: 'Grifería', description: 'Grifería de cocina' },
    ],
  },
  {
    id: 8,
    name: 'Otros',
    description: 'Otros',
    materials: [
      { id: 1, name: 'Pegamento', description: 'Pegamento universal' },
      { id: 2, name: 'Sellador', description: 'Sellador de juntas' },
    ],
  },
  {
    id: 9,
    name: 'Terminaciones',
    description: 'Terminaciones',
    materials: [
      { id: 1, name: 'Pintura', description: 'Pintura látex' },
      { id: 2, name: 'Barniz', description: 'Barniz para madera' },
    ],
  },
]

export const CompleteProjectForm = ({
  // selected,
  // setSelected,
  onNext,
}: {
  // selected: string[]
  // setSelected: (v: string[]) => void
  onNext: () => void
}) => {
  const {
    setShowOptions,
    projectName,
    projectDescription,
    setProjectName,
    setProjectDescription,
  } = useProjectStore()
  return (
    <div>
      <StepsHeader
        title='Crear un proyecto desde cero'
        subtitle='Elegi un nombre y la descripción para tu proyecto.'
      />
      <Grid container gap={4}>
        <Grid item xs={12} sm={6}>
          <Input
            label='Nombre del proyecto'
            type='text'
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            label='Descripción del proyecto'
            type='text'
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </Grid>
      </Grid>
      <div className='pt-4 flex flex-col sm:flex-row justify-end gap-4'>
        <Button
          color='secondary'
          variant='flat'
          onPress={() => {
            setShowOptions(true)
            // setSelectedOption(null)
          }}
        >
          Volver a opciones
        </Button>
        <Button color='primary' onPress={onNext}>
          Cargar categorías
        </Button>
      </div>
    </div>
  )
}

// Paso 1: Selección de categorías
export const SelectCategories = ({
  selected,
  setSelected,
  onBack,
  onNext,
}: {
  selected: string[]
  setSelected: (v: string[]) => void
  onBack: () => void
  onNext: () => void
}) => {
  return (
    <div className='flex flex-col gap-6'>
      <StepsHeader
        title='Categorias de tu proyecto'
        subtitle='Selecciona todas las que aplican a tu proyecto.'
      />
      <CheckboxGroup
        classNames={{ base: 'w-full' }}
        // label='Selecciona las categorías'
        value={selected}
        onChange={setSelected}
      >
        <Grid container gap={4}>
          {categories.map((cat) => (
            <Grid item xs={12} sm={3} key={cat.id}>
              <Checkbox
                value={cat.id.toString()}
                classNames={{
                  base: cn(
                    'w-full max-w-md flex bg-content1 m-0',
                    'hover:bg-content2 items-center justify-start',
                    'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                    'data-[selected=true]:border-primary',
                  ),
                  label: 'w-full',
                }}
              >
                {cat.name}
              </Checkbox>
            </Grid>
          ))}
        </Grid>
      </CheckboxGroup>
      {/* <p className='mt-2 text-default-500'>
        Seleccionadas: {selected.join(', ')}
      </p> */}
      <div className='pt-4 sm:pt-0 flex flex-col sm:flex-row justify-end gap-4'>
        <Button
          color='secondary'
          variant='flat'
          // onPress={() => {
          //   setShowOptions(true)
          //   // setSelectedOption(null)
          // }}
          onPress={onBack}
        >
          Volver a los datos
        </Button>
        <Button color='primary' onPress={onNext}>
          Cargar materiales
        </Button>
      </div>
    </div>
  )
}

// Paso 2: Carga de materiales
export interface MaterialValues {
  quantity: number
  unitPrice: number
}

interface MaterialsStepProps {
  selected: string[]
  onBack: () => void
}

export const MaterialsStep = ({ selected, onBack }: MaterialsStepProps) => {
  const { materialsValues, setMaterialValue } = useProjectStore()

  const selectedCategories = categories.filter((c) =>
    selected.includes(c.id.toString()),
  )

  const getValue = (categoryId: string, materialId: string) => {
    const item = materialsValues.find(
      (m) => m.categoryId === categoryId && m.materialId === materialId,
    )
    return item ?? { quantity: 0, unitPrice: 0 }
  }

  return (
    <div className='flex flex-col gap-6'>
      <StepsHeader
        title='Nos queda un solo paso'
        subtitle='Carga los materiales, con eso podrás crear un nuevo proyecto.'
      />
      <Grid container gap={4}>
        {selectedCategories.map((cat) => (
          <Grid item xs={12} sm={3} key={cat.id}>
            <Card className='w-full'>
              <CardHeader className='flex flex-col items-center'>
                <p className='text-lg font-semibold'>{cat.name}</p>
              </CardHeader>
              <Divider />
              <CardBody className='flex flex-col gap-4'>
                {cat.materials?.map((mat) => {
                  const material = getValue(
                    cat.id.toString(),
                    mat.id.toString(),
                  )

                  return (
                    <div key={mat.id} className='flex flex-col gap-2 p-3'>
                      <p className='font-medium'>{mat.name}</p>
                      <div className='flex gap-2'>
                        <Input
                          fullWidth
                          label='Cant.'
                          // labelPlacement='outside-top'
                          // className='text-xs'
                          // placeholder='Cantidad'
                          type='number'
                          value={
                            material.quantity !== undefined
                              ? String(material.quantity)
                              : ''
                          }
                          onChange={(e) =>
                            setMaterialValue(
                              cat.id.toString(),
                              mat.id.toString(),
                              Number(e.target.value), // quantity
                              undefined, // no cambiamos unitPrice
                            )
                          }
                        />
                        <Input
                          fullWidth
                          label='Precio'
                          type='number'
                          value={
                            material.unitPrice !== undefined
                              ? String(material.unitPrice)
                              : ''
                          }
                          onChange={(e) =>
                            setMaterialValue(
                              cat.id.toString(),
                              mat.id.toString(),
                              undefined, // no cambiamos quantity
                              Number(e.target.value),
                            )
                          }
                        />
                      </div>
                    </div>
                  )
                })}
              </CardBody>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className='flex flex-col sm:flex-row justify-end gap-4'>
        <Button color='secondary' variant='flat' onPress={onBack}>
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
      </div>
    </div>
  )
}

// Flujo principal
const CreateProjectFromScratch = () => {
  const {
    step,
    categoriesValues,

    setStep,
    setCategoriesValues,
  } = useProjectStore()

  return (
    <div>
      {/* <h1>Crear proyecto desde cero</h1> */}
      {step === 'project-data' && (
        <StepTransition stepKey='project-data'>
          <CompleteProjectForm
            onNext={() => {
              setStep('categories')
            }}
          />
        </StepTransition>
      )}
      {step === 'categories' && (
        <StepTransition stepKey='categories'>
          <SelectCategories
            selected={categoriesValues}
            setSelected={setCategoriesValues}
            onBack={() => setStep('project-data')}
            onNext={() => {
              setStep('materials')
            }}
          />
        </StepTransition>
      )}

      {step === 'materials' && (
        <StepTransition stepKey='materials'>
          <MaterialsStep
            selected={categoriesValues}
            onBack={() => setStep('categories')}
          />
        </StepTransition>
      )}
    </div>
  )
}

export default CreateProjectFromScratch
