import { IEntry } from "./IEntry";

export interface ICategory {
    title: string | null;
    entries: IEntry[] | null;
}