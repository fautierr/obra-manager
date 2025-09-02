// project-detail-content.tsx
import { ProjectProvider } from '@/features/common/edit-project-context'
import AllDetails from './all-details'
import { Typography } from '@/features/common/typography'
import { MainHeader } from '@/features/common/main-header'
// import HistoryAndComments from './history-and-comments'
import { getProjectData } from './get-project-data'

const ProjectDetailContent = async () => {
  const projectData = await getProjectData()

  return (
    <ProjectProvider initialData={projectData}>
      <AllDetails />
      <MainHeader>
        <Typography variant='h2'>Actividad</Typography>
      </MainHeader>
      {/* <HistoryAndComments /> */}
    </ProjectProvider>
  )
}

export default ProjectDetailContent
