import { IEntry } from "../../interfaces/IEntry";
import { CategoryHeader } from "./CategoryHeader";
import { EntryCollection } from "../Entry/EntryCollection";

type Props = {
    title: string | null;
    entries: IEntry[] | null;
}

export function Category(props: Props) {
    return(
        <div className="category">
            {props.title &&
                <CategoryHeader text={props.title} /> 
            }

            {props.entries && props.entries.length > 0 &&
                <EntryCollection entries={props.entries} />
            }
        </div>
    )
}