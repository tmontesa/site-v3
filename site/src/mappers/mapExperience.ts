import { IExperience, IExperienceEntry } from "../interfaces/IExperience";
import { mapTags } from "./mapTags";

export function mapExperience(data: any): IExperience {
    let dataExperience = data.experience.data;
    let experience = {
        industryExperience: [],
        otherExperience: []
    } as IExperience;

    let dataIndustryExperience = dataExperience.attributes.industry_experience.data;
    for (let e of dataIndustryExperience) {
        let experienceEntry = {
            title: e.attributes.title,
            subtitle: e.attributes.subtitle,
            description: e.attributes.description,
            tags: []
        } as IExperienceEntry;

        let dataTags = e.attributes.tags.data;
        experienceEntry.tags = mapTags(dataTags);

        experience.industryExperience?.push(experienceEntry);
    }

    let dataOtherExperience = dataExperience.attributes.other_experience.data;
    for (let e of dataOtherExperience) {
        let experienceEntry = {
            title: e.attributes.title,
            subtitle: e.attributes.subtitle,
            description: e.attributes.description,
            tags: []
        } as IExperienceEntry;

        let dataTags = e.attributes.tags.data;
        experienceEntry.tags = mapTags(dataTags);

        experience.otherExperience?.push(experienceEntry);
    }

    return experience;
}