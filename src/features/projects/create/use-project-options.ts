import { projectCreationOptions, ProjectOptions } from './mock'

export const useProjectOptions = (projectCount: number) => {
  return projectCreationOptions.filter((option: ProjectOptions) =>
    option.showIf(projectCount),
  )
}
