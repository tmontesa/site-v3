import { ITag } from "./ITag";

export interface IExperience {
    industryExperience: IExperienceEntry[] | null;
    otherExperience: IExperienceEntry[] | null;
}

export interface IExperienceEntry {
    title: string;
    subtitle: string | null;
    description: string | null;
    tags: ITag[] | null;
}