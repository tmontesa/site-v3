import "../style/LinkButton.scss";

type Props = {
    text: string | "";
    url: string | "/";
}

export function LinkButton(props: Props) {
    return(
        <a className="linkButton" href={props.url}>
            {props.text}
        </a>
    )
}