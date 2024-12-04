import { SkillCategory } from "../types/skill.entity";

export interface ISkillRepository {
  getList(): SkillCategory[];
}
