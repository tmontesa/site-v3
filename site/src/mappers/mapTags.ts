import { ITag } from "../interfaces/ITag";

export function mapTags(data: any[]): ITag[] {
    var tags: ITag[] = [];
    for (let t of data) {
        let tag = {
            name: t.attributes.name
        } as ITag

        tags.push(tag);
    }
    
    return tags;
}