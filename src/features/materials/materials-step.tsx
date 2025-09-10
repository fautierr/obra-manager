// import { Button } from '@heroui/button'
import Grid from '@/features/common/grid'
import { Card, CardBody, CardHeader } from '@heroui/card'
import { Divider } from '@heroui/divider'
// import { useProjectMaterialsStore } from './use-materials-store'
import { Input } from '@heroui/input'
import { MaterialValueItem } from './use-materials-store'
import { categories } from '../categories/mock'

interface MaterialsStepProps {
  selectedCategories: typeof categories
  setMaterialValue: (
    categoryId: string,
    materialId: string,
    quantity?: number,
    unitPrice?: number,
  ) => void
  getValue: (categoryId: string, materialId: string) => MaterialValueItem
  children?: React.ReactNode
}

export const MaterialsStep = ({
  selectedCategories,
  setMaterialValue,
  getValue,
  children,
}: MaterialsStepProps) => {
  // const {
  //   setMaterialValue,
  //   getValue,
  //   getSelectedCategories,
  // } = useProjectMaterialsStore()

  // const selectedCategories = getSelectedCategories(selected)

  return (
    <div className='flex flex-col gap-6'>
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
                          type='number'
                          value={String(material.quantity)}
                          onChange={(e) =>
                            setMaterialValue(
                              cat.id.toString(),
                              mat.id.toString(),
                              Number(e.target.value),
                              undefined,
                            )
                          }
                        />
                        <Input
                          fullWidth
                          label='Precio'
                          type='number'
                          value={String(material.unitPrice)}
                          onChange={(e) =>
                            setMaterialValue(
                              cat.id.toString(),
                              mat.id.toString(),
                              undefined,
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
      {/* <div className='flex flex-col sm:flex-row justify-end gap-4'>
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
      </div> */}
      {children && <div className='flex justify-end gap-4'>{children}</div>}
    </div>
  )
}
