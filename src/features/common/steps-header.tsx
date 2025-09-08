import React from 'react'
import { MainHeader } from './main-header'
import { Typography } from './typography'

const StepsHeader = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) => {
  return (
    <MainHeader className='flex flex-col items-center pb-12'>
      <Typography variant='h1' className='font-semibold text-center'>
        {title}
      </Typography>
      <Typography variant='p' className='text-center'>
        {subtitle}
      </Typography>
    </MainHeader>
  )
}

export default StepsHeader
