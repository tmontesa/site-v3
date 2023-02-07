import { ICategory } from "./ICategory";

export interface IEducation {
    schoolTitle: string | null;
    schoolSubtitle: string | null;
    schoolDescription: string | null;
    educationCategories: ICategory[] | null;
}