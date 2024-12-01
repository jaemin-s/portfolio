import { ProjectItem } from '../entities/project.entity'

export interface ProjectRepository {
  getProjectList(): ProjectItem[]
}
