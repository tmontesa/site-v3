import { Link } from "./Link";

export interface Contact {
    about: string | null;
    email: string | null;
    links: Link[] | null;
}

