'use client'
import CustomButton from '@/features/common/custom-button'
// import { useEditProjectContext } from '@/features/common/edit-project-context'
import { useEditProjectContext } from '@/features/common/edit-project-context'
import { MainHeader } from '@/features/common/main-header'
import { Typography } from '@/features/common/typography'
import { Card, CardBody } from '@heroui/card'
import { Form } from '@heroui/form'
// import { Button } from '@heroui/button'
// import { Card, CardHeader } from '@heroui/card'

import React from 'react'

const SaveChanges = () => {
  const { handleSubmit, editedFields, errors } = useEditProjectContext()
  const isEdited = Object.values(editedFields).some(Boolean)
  const hasErrors = errors && Object.values(errors).some(Boolean)
  return (
    <Form onSubmit={handleSubmit}>
      <Card className='w-full bg-default/5 mb-8'>
        <CardBody>
          <div className='flex items-center justify-between'>
            <MainHeader>
              <Typography variant='h1'>Detalles del proyecto</Typography>
            </MainHeader>
            <CustomButton
              variant='solid'
              color='primary'
              type='submit'
              isDisabled={!isEdited || hasErrors}
            >
              Guardar cambios
            </CustomButton>
          </div>
        </CardBody>
      </Card>
    </Form>
  )
}

export default SaveChanges
