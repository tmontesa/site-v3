import "../../style/Entry/EntryDescription.scss";

type Props = {
    text: string | "";
}

export function EntryDescription(props: Props) {
    return(
        <p className="entryDescription">
            {props.text}
        </p>
    )
}