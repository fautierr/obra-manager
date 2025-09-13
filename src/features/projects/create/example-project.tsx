// Option1ExampleProject.tsx
'use client'
import { Button } from '@heroui/button'
import { useProjectStore } from '../use-project-store'
import StepsHeader from '@/features/common/steps-header'

export const Option1ExampleProject: React.FC = () => {
  const { setShowOptions } = useProjectStore()
  return (
    <div>
      <StepsHeader
        title='Proyecto de ejemplo'
        subtitle='Ves un proyecto cargado de ejemplo. Luego podés crear el tuyo.'
      />
      <Button
        color='primary'
        onPress={() => console.log('Crear proyecto de ejemplo')}
      >
        Crear proyecto
      </Button>
      <Button
        color='secondary'
        variant='flat'
        onPress={() => setShowOptions(true)}
      >
        Volver a opciones
      </Button>
    </div>
  )
}
