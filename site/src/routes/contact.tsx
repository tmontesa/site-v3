import "../style/Page/Page.scss";
import "../style/Page/ContactPage.scss";
import { useQuery } from "@apollo/client";
import { QUERY_CONTACT } from "../queries/contact.gql";
import { mapContact } from "../mappers/mapContact";
import { IContact } from "../interfaces/IContact";
import { CategoryHeader } from "../components/Category/CategoryHeader";
import { Entry } from "../components/Entry/Entry";

type Props = {

}

export function ContactPage(props: Props) {
    const { loading, error, data } = useQuery(QUERY_CONTACT);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    
    var contact: IContact = (data != null) ? mapContact(data) : {} as IContact;

    return(
        <div className="page" id="contact-page">
            <CategoryHeader text="Information" />
            <Entry
                title="About"
                subtitle={null}
                description={contact.about}
                links={null}
                tags={null}
                />
            <Entry
                title="Contact"
                subtitle={null}
                description={null}
                links={null}
                tags={null}
                />
            <ul id="contact-links">
                {contact.links &&
                    contact.links.map((link) =>
                        <li>
                            {link.title} - <a href={link.url}>{link.url}</a>
                        </li>
                    )
                }
            </ul>   
        </div>
    )
}