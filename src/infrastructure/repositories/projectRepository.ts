import { IProjectRepository } from "@/data/repositories/IProjectRepository";
import { ProjectItem } from "@/data/types/project.entity";
import { PROJECT_DATA } from "../data/projectData";

export class ProjectRepository implements IProjectRepository {
  getList(): ProjectItem[] {
    return PROJECT_DATA;
  }
}
