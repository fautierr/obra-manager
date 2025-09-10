import { Card, CardBody, CardHeader } from '@heroui/card'
import Grid from '../../common/grid'

import { useProjectOptions } from './use-project-options'
import { Image } from '@heroui/image'

const SelectProject = ({
  selectedOption,
  setSelectedOption,
  setShowOptions,
  reset,
}: {
  selectedOption: number | null
  setSelectedOption: (val: number) => void
  setShowOptions: (val: boolean) => void
  reset: () => void
}) => {
  const projectCreationOptions = useProjectOptions(1)

  return (
    <Grid container gap={4}>
      {projectCreationOptions.map((p) => (
        <Grid item xs={12} sm={4} key={p.id}>
          <Card
            isPressable
            key={p.id}
            className={`w-full cursor-pointer transition-transform duration-200
                hover:shadow-xl
                ${selectedOption === p.id ? 'bg-primary' : ''}`}
            onPress={() => {
              if (selectedOption !== p.id) {
                reset()
              }
              setSelectedOption(p.id)
              setShowOptions(false)
            }}
          >
            <Image
              alt='Card background'
              className='w-full object-cover'
              src={p.img}
              radius='none'
            />
            <CardHeader className='flex flex-col font-bold'>
              {/* <Image
                alt='Card background'
                className='object-cover rounded-xl'
                src={p.img}
                width={409}
              /> */}
              {p.name}
            </CardHeader>
            <CardBody>
              <p>{p.description}</p>
            </CardBody>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default SelectProject
