import { Tag } from "./Tag";

export interface Project {
    projectCategories: ProjectCategory[] | null;
}

export interface ProjectCategory {
    title: string;
    entries: ProjectEntry[] | null;
}

export interface ProjectEntry {
    title: string;
    subtitle: string | null;
    description: string | null;
    sourceUrl: string | null;
    demoUrl: string | null;
    tags: Tag[] | null;
}