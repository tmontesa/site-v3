import { IContact } from "../interfaces/IContact";
import { ILink } from "../interfaces/ILink";

export function mapContact(data: any): IContact {
    let dataContact = data.contact.data;
    
    let contact = {
        about: dataContact.attributes.about,
        email: dataContact.attributes.email,
        links: []
    } as IContact;

    let dataLinks = dataContact.attributes.links.data;
    for (const l of dataLinks) {
        let link = {
            title: l.attributes.title,
            url: l.attributes.url
        } as ILink;
        
        contact.links?.push(link);
    }

    return contact;
}