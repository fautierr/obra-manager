import { Card, CardBody, CardHeader } from '@heroui/card'
import Grid from '../../common/grid'
import { Image } from '@heroui/image'
import { onboardingFlow } from '@/features/onboarding/onboarding-flow.config'
import { ProjectStepKey } from '@/features/onboarding/onboarding-flow.config'

interface SelectProjectProps {
  selectedOption: number | null
  setSelectedOption: (val: number) => void
  setStep: (step: ProjectStepKey | null) => void
  setShowOptions: (val: boolean) => void
  reset: () => void
}

const SelectProject: React.FC<SelectProjectProps> = ({
  selectedOption,
  setSelectedOption,
  setStep,
  setShowOptions,
  reset,
}) => {
  // Filtramos solo las opciones visibles
  const projectCreationOptions = onboardingFlow.filter(
    (option) => option.showIf(0), // acá podrías pasar un contador real si tenés
  )

  return (
    <Grid container gap={4}>
      {projectCreationOptions.map((option) => (
        <Grid item xs={12} sm={4} key={option.id}>
          <Card
            isPressable
            className={`w-full cursor-pointer transition-transform duration-200
                hover:shadow-xl
                ${selectedOption === option.id ? 'bg-primary' : ''}`}
            onPress={() => {
              // Si cambiamos de opción, resetear store
              if (selectedOption !== option.id) {
                reset()
              }

              // Seteamos la opción seleccionada
              setSelectedOption(option.id)
              console.log(selectedOption, option.id, 'SON IGUALES?')

              // Pasamos al primer paso de esa opción
              if (option.steps.length > 0) {
                setStep(option.steps[0].key)
              }

              // Ocultamos las opciones
              setShowOptions(false)
            }}
          >
            <Image
              alt='Card background'
              className='w-full object-cover'
              src={option.image}
              radius='none'
            />
            <CardHeader className='flex flex-col font-bold'>
              {option.name}
            </CardHeader>
            <CardBody>
              <p>{option.description}</p>
            </CardBody>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default SelectProject
