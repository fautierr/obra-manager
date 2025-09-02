import { HistoryAndComments } from '@/features'
import React from 'react'

const ProjectDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <HistoryAndComments />
    </>
  )
}

export default ProjectDetailLayout
