import { CareerRepositoryImpl } from './CareerRepositoryImpl'
import { ProjectRepositoryImpl } from './ProjectRepositoryImpl'
import { SkillRepositoryImpl } from './SkillRepositoryImpl'

export const skillRepository = new SkillRepositoryImpl()
export const CareerRepository = new CareerRepositoryImpl()
export const ProjectRepository = new ProjectRepositoryImpl()
