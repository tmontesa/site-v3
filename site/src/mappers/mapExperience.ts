
import { IEntry } from "../interfaces/IEntry";
import { IExperience } from "../interfaces/IExperience";
import { mapTags } from "./mapTags";

export function mapExperience(data: any): IExperience {
    let dataExperience = data.experience.data;
    let experience = {
        industryExperience: [],
        otherExperience: []
    } as IExperience;

    let dataIndustryExperience = dataExperience.attributes.industry_experience.data;
    for (let e of dataIndustryExperience) {
        let entry = {
            title: e.attributes.title,
            subtitle: e.attributes.subtitle,
            description: e.attributes.description,
            links: null,
            tags: []
        } as IEntry;

        let dataTags = e.attributes.tags.data;
        entry.tags = mapTags(dataTags);

        experience.industryExperience?.push(entry);
    }

    let dataOtherExperience = dataExperience.attributes.other_experience.data;
    for (let e of dataOtherExperience) {
        let entry = {
            title: e.attributes.title,
            subtitle: e.attributes.subtitle,
            description: e.attributes.description,
            links: null,
            tags: []
        } as IEntry;

        let dataTags = e.attributes.tags.data;
        entry.tags = mapTags(dataTags);

        experience.otherExperience?.push(entry);
    }

    return experience;
}