import { CareerRepositoryImpl } from './careerRepositoryImpl'
import { SkillRepositoryImpl } from './SkillRepositoryImpl'

export const skillRepository = new SkillRepositoryImpl()
export const CareerRepository = new CareerRepositoryImpl()
