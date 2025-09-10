import { CheckboxGroup, Checkbox } from '@heroui/checkbox'
import { cn } from '@heroui/react'
import Grid from '@/features/common/grid'
import { categories } from './mock'

type SelectCategoriesProps = {
  selected: string[]
  setSelected: (v: string[]) => void
  children?: React.ReactNode
}

export const SelectCategories = ({
  selected,
  setSelected,
  children,
}: SelectCategoriesProps) => {
  return (
    <div className='flex flex-col gap-6'>
      <CheckboxGroup
        classNames={{ base: 'w-full' }}
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

      {/* Slot para acciones (botones, etc.) */}
      {children && <div className='flex justify-end gap-4'>{children}</div>}
    </div>
  )
}
