import ReactMarkdown from "react-markdown";
import "../../style/Entry/EntryDescription.scss";

type Props = {
    text: string | "";
}

export function EntryDescription(props: Props) {
    return(
        <div className="entryDescription">
            <ReactMarkdown children={props.text} />
        </div>
    )
}