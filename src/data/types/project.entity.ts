import { ProjectType } from "./enums/project.enum";

export interface ProjectItem {
  title: string;
  description: string;
  period: string;
  image: string;
  links: ProjectLinks;
  stackBadges: string[];
  previewUrls: string[];
  type: ProjectType;
  stackCategories: StackCategory[];
  features: Feature[];
  functions: FunctionDecription[];
  company: string;
}

export interface ProjectLinks {
  github: string;
  demo: string;
}

export interface ProjectItemProps {
  item: ProjectItem;
  onClickDetailButton: (arg0: ProjectItem) => void;
}

export interface Feature {
  title: string;
  description: string;
  comment?: string;
}

export interface FunctionDecription {
  title: string;
  description: string[];
  comment?: string;
}

export interface StackCategory {
  title: string;
  stacks: string[];
}
