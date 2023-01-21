export interface Contact {
    about: string | null;
    email: string | null;
    links: ContactLink[] | null;
}

export interface ContactLink {
    title: string | null;
    url: string;
}