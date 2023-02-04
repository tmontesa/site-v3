import { ILink } from "../../interfaces/ILink";
import { ITag } from "../../interfaces/ITag";
import { EntryDescription } from "./EntryDescription";
import { EntrySubtitle } from "./EntrySubtitle";
import { EntryTitle } from "./EntryTitle";
import { LinkCollection } from "../Link/LinkCollection";
import "../../style/Entry/Entry.scss";

type Props = {
    title: string | null;
    subtitle: string | null;
    description: string | null;
    links: ILink[] | null;
    tags: ITag[] | null; // TODO
}

export function Entry(props: Props) {
    return(
        <div className="entry">
            {props.title && 
                <EntryTitle text={props.title}/>
            }

            {props.subtitle && 
                <EntrySubtitle text={props.subtitle}/>
            }

            {props.description && 
                <EntryDescription text={props.description}/>
            }

            {props.links &&
                <LinkCollection links={props.links} />
            }
            
        </div>
    )
}