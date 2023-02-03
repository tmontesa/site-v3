import { IProject, IProjectCategory, IProjectEntry } from "../interfaces/IProject";
import { mapTags } from "./mapTags";

 export function mapProject(data: any): IProject {
    let dataProject = data.project.data;
    let project = {
        projectCategories: []
    } as IProject;

    let dataProjectCategories = dataProject.attributes.project_categories.data;
    for (let c of dataProjectCategories) {
        let projectCategory = {
            title: c.attributes.title,
            entries: []
        } as IProjectCategory;

        let dataProjectEntries = c.attributes.entries.data;
        for (let e of dataProjectEntries) {
            let projectEntry = {
                title: e.attributes.title,
                subtitle: e.attributes.subtitle,
                description: e.attributes.description,
                sourceUrl: e.attributes.source_url,
                demoUrl: e.attributes.demo_url,
                tags: []
            } as IProjectEntry;

            let dataTags = e.attributes.tags.data;
            projectEntry.tags = mapTags(dataTags);

            projectCategory.entries?.push(projectEntry);
        }

        project.projectCategories?.push(projectCategory);
    }

    return project;

 }