import { SkillCategory } from '../entities/skill.entity'

export interface SkillRepository {
  getSkillCategories(): Promise<SkillCategory[]>
}
