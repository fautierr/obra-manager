// Option2QuickProject.tsx
'use client'
import { Button } from '@heroui/button'
import { useProjectStore } from '../use-project-store'
import StepsHeader from '@/features/common/steps-header'

export const Option2QuickProject: React.FC = () => {
  const { step, setShowOptions } = useProjectStore()

  return (
    <div>
      {step === 'option2_quickProject_data' && (
        <div>
          <StepsHeader
            title='Crear proyecto rápido'
            subtitle='Definí solo nombre y descripción.'
          />
          {/* Aquí podrías poner tu CompleteProjectForm si quieres */}
          <Button
            color='primary'
            onPress={() => console.log('Crear proyecto rápido')}
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
      )}
    </div>
  )
}
