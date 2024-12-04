import { CareerEntity } from "../types/career.entity";

export interface ICareerRepository {
  getList(): CareerEntity[];
}
