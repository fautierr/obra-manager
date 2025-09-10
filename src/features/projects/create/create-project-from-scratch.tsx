'use client'

import Grid from '@/features/common/grid'
// import { Checkbox, CheckboxGroup, cn } from '@heroui/react'

import { Input } from '@heroui/input'
import { Button } from '@heroui/button'
// import { Divider } from '@heroui/divider'
// import { Card, CardBody, CardHeader } from '@heroui/card'
import { StepTransition } from '@/features/common/step-transition'
import { useProjectStore } from '../use-project-store'
import StepsHeader from '@/features/common/steps-header'
// import { categories } from '@/features/categories/mock'
import { SelectCategories } from '@/features/categories/select-categories'
import { useProjectCategoriesStore } from '@/features/categories/use-categories-store'
import { useProjectMaterialsStore } from '@/features/materials/use-materials-store'
import { MaterialsStep } from '@/features/materials/materials-step'

export const CompleteProjectForm = ({ onNext }: { onNext: () => void }) => {
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

//   const { materialsValues, setMaterialValue } = useProjectMaterialsStore()

//   const selectedCategories = categories.filter((c) =>
//     selected.includes(c.id.toString()),
//   )

//   const getValue = (categoryId: string, materialId: string) => {
//     const item = materialsValues.find(
//       (m) => m.categoryId === categoryId && m.materialId === materialId,
//     )
//     return item ?? { quantity: 0, unitPrice: 0 }
//   }

//   return (
//     <div className='flex flex-col gap-6'>
//       <StepsHeader
//         title='Nos queda un solo paso'
//         subtitle='Carga los materiales, con eso podrás crear un nuevo proyecto.'
//       />
//       <Grid container gap={4}>
//         {selectedCategories.map((cat) => (
//           <Grid item xs={12} sm={3} key={cat.id}>
//             <Card className='w-full'>
//               <CardHeader className='flex flex-col items-center'>
//                 <p className='text-lg font-semibold'>{cat.name}</p>
//               </CardHeader>
//               <Divider />
//               <CardBody className='flex flex-col gap-4'>
//                 {cat.materials?.map((mat) => {
//                   const material = getValue(
//                     cat.id.toString(),
//                     mat.id.toString(),
//                   )

//                   return (
//                     <div key={mat.id} className='flex flex-col gap-2 p-3'>
//                       <p className='font-medium'>{mat.name}</p>
//                       <div className='flex gap-2'>
//                         <Input
//                           fullWidth
//                           label='Cant.'
//                           type='number'
//                           value={
//                             material.quantity !== undefined
//                               ? String(material.quantity)
//                               : ''
//                           }
//                           onChange={(e) =>
//                             setMaterialValue(
//                               cat.id.toString(),
//                               mat.id.toString(),
//                               Number(e.target.value), // quantity
//                               undefined, // no cambiamos unitPrice
//                             )
//                           }
//                         />
//                         <Input
//                           fullWidth
//                           label='Precio'
//                           type='number'
//                           value={
//                             material.unitPrice !== undefined
//                               ? String(material.unitPrice)
//                               : ''
//                           }
//                           onChange={(e) =>
//                             setMaterialValue(
//                               cat.id.toString(),
//                               mat.id.toString(),
//                               undefined, // no cambiamos quantity
//                               Number(e.target.value),
//                             )
//                           }
//                         />
//                       </div>
//                     </div>
//                   )
//                 })}
//               </CardBody>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <div className='flex flex-col sm:flex-row justify-end gap-4'>
//         <Button color='secondary' variant='flat' onPress={onBack}>
//           Volver a categorías
//         </Button>
//         <Button
//           color='primary'
//           onPress={() => {
//             console.log('Crear proyecto')
//           }}
//         >
//           Crear proyecto
//         </Button>
//       </div>
//     </div>
//   )
// }

// Flujo principal
const CreateProjectFromScratch = () => {
  const { step, setStep } = useProjectStore()

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
                // console.log('Volver a los datos')
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
