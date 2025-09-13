import Grid from '@/features/common/grid'
import { Input } from '@heroui/input'

type CompleteProjectFormProps = {
  name: string
  description: string
  setName: (val: string) => void
  setDescription: (val: string) => void
}

export const CompleteProjectForm = ({
  name,
  description,
  setName,
  setDescription,
}: CompleteProjectFormProps) => {
  return (
    <Grid container gap={4}>
      <Grid item xs={12} sm={6}>
        <Input
          label='Nombre del proyecto'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Input
          label='Descripción del proyecto'
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Grid>
    </Grid>
  )
}
