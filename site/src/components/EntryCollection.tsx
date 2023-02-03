import { IEntry } from "../interfaces/IEntry";
import { Entry } from "./Entry";

type Props = {
    entries: IEntry[] | null;
}

export function EntryCollection(props: Props) {
    return(
        <div className="entryCollection">
            {props.entries && props.entries.length > 0 &&
                props.entries.map((entry) =>
                    <Entry 
                        title={entry.title}
                        subtitle={entry.subtitle}
                        description={entry.description}
                        links={entry.links}
                        tags={entry.tags}/>
                )
            }
        </div>
    )
}