export interface Experience {
    industryExperience: ExperienceEntry[] | null;
    otherExperience: ExperienceEntry[] | null;
}

export interface ExperienceEntry {
    title: string;
    subtitle: string | null;
    description: string[] | null;
}