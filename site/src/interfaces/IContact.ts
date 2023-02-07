import { ILink } from "./ILink";

export interface IContact {
    about: string | null;
    email: string | null;
    links: ILink[] | null;
}

