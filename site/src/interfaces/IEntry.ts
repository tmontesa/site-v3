import { ILink } from "./ILink";
import { ITag } from "./ITag";

export interface IEntry {
    title: string | null;
    subtitle: string | null;    
    description: string | null;
    links: ILink[] | null;
    tags: ITag[] | null;
}

