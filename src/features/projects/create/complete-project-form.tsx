import Grid from '@/features/common/grid'
import { Input } from '@heroui/input'

type GeneralProjectFormProps = {
  projectName: string
  projectDescription: string
  setProjectName: (name: string) => void
  setProjectDescription: (desc: string) => void
  children?: React.ReactNode
}

export const CompleteProjectForm = ({
  projectName,
  projectDescription,
  setProjectName,
  setProjectDescription,
  children,
}: GeneralProjectFormProps) => {
  return (
    <div>
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
      {children && (
        <div className='pt-4 flex flex-col sm:flex-row justify-end gap-4'>
          {children}
        </div>
      )}
    </div>
  )
}
