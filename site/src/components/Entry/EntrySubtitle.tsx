import "../style/EntrySubtitle.scss";

type Props = {
    text: string | "";
}

export function EntrySubtitle(props: Props) {
    return(
        <p className="entrySubtitle">
            {props.text}
        </p>
    )
}