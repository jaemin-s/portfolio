import { ProjectItem } from "../types/project.entity";

export interface IProjectRepository {
  getList(): ProjectItem[];
}
