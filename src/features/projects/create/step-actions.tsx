import { Button } from '@heroui/button'

type StepActionsProps = {
  onBack: () => void
  onConfirm: () => void
  confirmLabel: string
}

export const StepActions = ({
  onBack,
  onConfirm,
  confirmLabel,
}: StepActionsProps) => (
  <div className='flex justify-between mt-4'>
    <Button onPress={onBack}>Atrás</Button>
    <Button onPress={onConfirm}>{confirmLabel}</Button>
  </div>
)
