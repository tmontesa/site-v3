import { ILink } from "../interfaces/ILink";
import { LinkButton } from "./LinkButton";

type Props = {
    links: ILink[] | null;
}

export function LinkCollection(props: Props) {
    return(
        <div className="linkCollection">
            {props.links && props.links.length > 0 &&
                props.links.map((link) =>
                    <LinkButton text={link.title} url={link.url} />
                )
            }
        </div>
    )
}