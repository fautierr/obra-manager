// project-detail-loader.tsx
import Grid from '@/features/common/grid'
import { Card, CardBody, CardHeader } from '@heroui/card'
import { Chip } from '@heroui/chip'
import { Divider } from '@heroui/divider'
import { Skeleton } from '@heroui/skeleton'

const ProjectDetailSkeleton = () => {
  return (
    <>
      <Card className='w-full bg-default/5 mb-8 py-4'>
        <CardBody>
          <div className='flex items-center justify-between'>
            {/* Simula el título: <Typography variant='h1'>Detalles del proyecto</Typography> */}
            <Skeleton className='h-8 w-1/3' />

            {/* Simula el botón: <CustomButton>Guardar cambios</CustomButton> */}
            <Skeleton className='h-10 w-36 rounded-md' />
          </div>
        </CardBody>
      </Card>
      <Card className='w-full bg-default/5'>
        <CardBody>
          <div className='flex items-center gap-4 py-4'>
            <Skeleton className='h-8 w-32 rounded-md' />
            <Skeleton className='h-8 w-32 rounded-md' />
            <Skeleton className='h-8 w-32 rounded-md' />
          </div>
          <Grid container gap={4}>
            {/* Tabs Skeleton */}
            <Grid item xs={12} sm={6} xxl={4}>
              <Card className='p-4 h-96'>
                <Skeleton className='h-8 w-1/2 mb-4' />
                <div className='flex gap-4 mb-2'>
                  <Skeleton className='h-4 w-24' />
                  <Skeleton className='h-4 w-24' />
                  <Skeleton className='h-4 w-24' />
                </div>
                <Skeleton className='h-[180px] w-full rounded-md' />
              </Card>
            </Grid>

            {/* Pie Chart Skeleton */}
            <Grid item xs={12} sm={6} xxl={4}>
              <Card className='p-4 h-96'>
                <CardBody className='flex flex-col gap-4 items-center justify-center h-full'>
                  <Skeleton className='rounded-full w-40 h-40' />
                  <Skeleton className='h-6 w-24' />
                </CardBody>
              </Card>
            </Grid>

            {/* Total + Materiales Skeleton */}
            <Grid item xs={12} xxl={4}>
              <Card className='p-4 h-96 flex flex-col justify-between'>
                <CardHeader className='flex items-start flex-col gap-4'>
                  <Skeleton className='h-6 w-1/2' />
                  <Chip color='default' size='sm' variant='flat'>
                    <Skeleton className='h-4 w-20' />
                  </Chip>
                </CardHeader>

                <CardBody className='flex flex-col gap-4 overflow-y-auto'>
                  <Divider />
                  <Skeleton className='h-5 w-2/3' />

                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className='flex items-center justify-between gap-2'
                    >
                      <Skeleton className='h-4 w-20' />
                      <Chip color='default' size='sm' variant='flat'>
                        <Skeleton className='h-4 w-16' />
                      </Chip>
                      <Chip color='default' size='sm' variant='flat'>
                        <Skeleton className='h-4 w-16' />
                      </Chip>
                    </div>
                  ))}

                  <Skeleton className='h-6 w-32 mt-2' />
                </CardBody>
              </Card>
            </Grid>
          </Grid>
        </CardBody>
      </Card>
    </>
  )
}

export default ProjectDetailSkeleton
