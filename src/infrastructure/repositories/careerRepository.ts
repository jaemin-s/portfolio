import { ICareerRepository } from "@/data/repositories/ICareerRepository";
import { CareerEntity } from "@/data/types/career.entity";
import { CAREER_DATA } from "../data/careerData";

export class CareerRepository implements ICareerRepository {
  getList(): CareerEntity[] {
    return CAREER_DATA;
  }
}
