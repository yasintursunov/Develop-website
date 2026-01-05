import { PROJECTS } from "@/data/project";
import { NEWS } from "@/data/news";
import { News } from "@/types/news";
import { Project } from "@/types/project";

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getProjectById(id: number): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}

export function getAllNews(): News[] {
  return NEWS;
}

export function getNewsById(id: number): News | undefined {
  return NEWS.find((p) => p.id === id);
}
