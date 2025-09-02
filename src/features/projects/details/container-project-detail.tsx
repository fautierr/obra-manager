// ContainerProjectDetail.tsx (Server Component)
import LayoutContainer from '@/features/common/layout-container'

import { Suspense } from 'react'
import ProjectDetailContent from './project-detail-content'
import ProjectDetailSkeleton from './project-detail-skeleton'

const ContainerProjectDetail = () => {
  return (
    <LayoutContainer>
      <Suspense fallback={<ProjectDetailSkeleton />}>
        <ProjectDetailContent />
      </Suspense>
    </LayoutContainer>
  )
}

export default ContainerProjectDetail
