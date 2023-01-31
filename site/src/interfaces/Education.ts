import { Tag } from "./Tag";

export interface Education {
    educationCategories: EducationCategory[] | null;
    schoolTitle: string | null;
    schoolSubtitle: string | null;
    schoolDescription: string | null;
}

export interface EducationCategory {
    title: string;
    entries: EducationEntry[] | null;
}

export interface EducationEntry {
    title: string;
    description: string | null;
    tags: Tag[] | null;
}