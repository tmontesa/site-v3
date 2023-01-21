export interface Education {
    educationCategories: EducationCategory[] | null;
}

export interface EducationCategory {
    title: string;
    entries: EducationEntry[] | null;
}

export interface EducationEntry {
    title: string;
    description: string[] | null;
    topics: string[] | null;
}