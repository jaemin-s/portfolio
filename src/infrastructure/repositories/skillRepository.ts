import { SkillCategory } from "@/data/types/skill.entity";
import { SKILL_DATA } from "../data/skillData";
import { ISkillRepository } from "@/data/repositories/ISkillRepository";

export class SkillRepository implements ISkillRepository {
  getList(): SkillCategory[] {
    return SKILL_DATA;
  }
}
