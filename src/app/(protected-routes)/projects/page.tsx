import { getServerClient } from '@/service/get-server-client'
import { gql } from 'graphql-request'

const query = gql`
  query findAllUsers {
    findAllUsers {
      id
      name
      email
      created_at
    }
  }
`
const Projects = async () => {
  const data = await getServerClient({ query })

  return (
    <div className='flex flex-col items-center   p-5 sm:p-0'>
      <div className='text-center flex justify-center'>
        {/* <Suspense fallback={<LoadingProjects />}>
          <ProjectCards />
        </Suspense> */}
        {JSON.stringify(data)}
        {/* <ContainerAllProjects vs_currency={vs_currency} /> */}
      </div>
    </div>
  )
}

export default Projects
