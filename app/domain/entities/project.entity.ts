import { ProjectType } from '../enums/project.enum'

export interface ProjectItem {
  title: string
  description: string
  simpleStack: string
  detailStacks: StackDescriptions[]
  period: string
  image: string
  type: ProjectType
  features: string[]
  company: string
  links: ProjectLinks
}

export interface ProjectLinks {
  github: string
  demo: string
}

export interface StackDescriptions {
  title: string
  description: string
}
