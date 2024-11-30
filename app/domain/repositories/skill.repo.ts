import { SkillCategory } from '../entities/Skill.entity'

export interface SkillRepository {
  getSkillCategories(): Promise<SkillCategory[]>
}
