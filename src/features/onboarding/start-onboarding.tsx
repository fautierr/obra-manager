import React from 'react'
import LayoutContainer from '../common/layout-container'
// import { MainHeader } from '../common/main-header'
// import { Typography } from '../common/typography'
import CreateProjectFlow from '../projects/create/create-project-flow'
import StepsHeader from '../common/steps-header'

const StartOnboarding = () => {
  return (
    <LayoutContainer>
      {/* <MainHeader className='flex flex-col items-center pb-12'>
        <Typography variant='h1'>¡Comencemos!</Typography>
        <Typography variant='p'>
          Elegi un proyecto, luego podrás actualizar sus datos si asi lo deseas.
        </Typography>
      </MainHeader> */}
      <CreateProjectFlow
        optionsTitle={
          <StepsHeader
            title='¡Comencemos!'
            subtitle='Elegi una opción para crear tu proyecto, luego podrás actualizar sus datos si asi lo
              deseas.'
          />
        }
      />
    </LayoutContainer>
  )
}

export default StartOnboarding
