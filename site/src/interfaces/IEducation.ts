import { ITag } from "./ITag";

export interface IEducation {
    educationCategories: IEducationCategory[] | null;
    schoolTitle: string | null;
    schoolSubtitle: string | null;
    schoolDescription: string | null;
}

export interface IEducationCategory {
    title: string;
    entries: IEducationEntry[] | null;
}

export interface IEducationEntry {
    title: string;
    description: string | null;
    tags: ITag[] | null;
}