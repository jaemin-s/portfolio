import { CareerEntity } from '../entities/career.entity'

export interface CareerRepository {
  getCareerList(): Promise<CareerEntity[]>
}
