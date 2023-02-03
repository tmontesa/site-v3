
import { ICategory } from "../interfaces/ICategory";
import { IEntry } from "../interfaces/IEntry";
import { ILink } from "../interfaces/ILink";
import { IProject } from "../interfaces/IProject";
import { mapTags } from "./mapTags";

export function mapProject(data: any): IProject {
    let dataProject = data.project.data;
    let project = {
        projectCategories: []
    } as IProject;

    let dataProjectCategories = dataProject.attributes.project_categories.data;
    for (let c of dataProjectCategories) {
        let category = {
            title: c.attributes.title,
            entries: []
        } as ICategory;

        let dataProjectEntries = c.attributes.entries.data;
        for (let e of dataProjectEntries) {
            let entry = {
                title: e.attributes.title,
                subtitle: e.attributes.subtitle,
                description: e.attributes.description,
                links: [
                    {title: "Link to Demo",   url: e.attributes.demo_link} as ILink,
                    {title: "Link to Source", url: e.attributes.source_link} as ILink
                ],
                tags: []
            } as IEntry;

            let dataTags = e.attributes.tags.data;
            entry.tags = mapTags(dataTags);

            category.entries?.push(entry);
        }

        project.projectCategories?.push(category);
    }

    return project;

}