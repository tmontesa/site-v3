import { ITag } from "./ITag";

export interface IProject {
    projectCategories: IProjectCategory[] | null;
}

export interface IProjectCategory {
    title: string;
    entries: IProjectEntry[] | null;
}

export interface IProjectEntry {
    title: string;
    subtitle: string | null;
    description: string | null;
    sourceUrl: string | null;
    demoUrl: string | null;
    tags: ITag[] | null;
}