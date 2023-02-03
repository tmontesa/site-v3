import { IEducation, IEducationCategory, IEducationEntry } from "../interfaces/IEducation";
import { mapTags } from "./mapTags";

export function mapEducation(data: any): IEducation {
    let dataEducation = data.education.data;
    let education = {
        schoolTitle: dataEducation.attributes.school_title,
        schoolSubtitle: dataEducation.attributes.school_subtitle,
        schoolDescription: dataEducation.attributes.school_description,
        educationCategories: []
    } as IEducation;

    let dataEducationCategories = dataEducation.attributes.education_categories.data;
    for (let c of dataEducationCategories) {
        let educationCategory = {
            title: c.attributes.title,
            entries: []
        } as IEducationCategory;

        let dataEducationEntries = c.attributes.entries.data;
        for (let e of dataEducationEntries) {
            let educationEntry = {
                title: e.attributes.title,
                description: e.attributes.description,
                tags: []
            } as IEducationEntry

            let dataTags: any[] = e.attributes.tags.data;
            educationEntry.tags = mapTags(dataTags);

            educationCategory.entries?.push(educationEntry);
        }

        education.educationCategories?.push(educationCategory);
    }

    return education;
}