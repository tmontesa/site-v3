import { ICategory } from "../interfaces/ICategory";
import { IEducation } from "../interfaces/IEducation";
import { IEntry } from "../interfaces/IEntry";
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
        let category = {
            title: c.attributes.title,
            entries: []
        } as ICategory;

        let dataEducationEntries = c.attributes.entries.data;
        for (let e of dataEducationEntries) {
            let entry = {
                title: e.attributes.title,
                subtitle: null,
                description: e.attributes.description,
                links: null,
                tags: []
            } as IEntry

            let dataTags: any[] = e.attributes.tags.data;
            entry.tags = mapTags(dataTags);

            category.entries?.push(entry);
        }

        education.educationCategories?.push(category);
    }

    return education;
}