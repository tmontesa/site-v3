import "../style/EntryTitle.scss";

type Props = {
    text: string | "";
}

export function EntryTitle(props: Props) {
    return(
        <h3 className="entryTitle">
            {props.text}
        </h3>
    )
}