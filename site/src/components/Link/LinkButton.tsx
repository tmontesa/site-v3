import "../../style/Link/LinkButton.scss";

type Props = {
    text: string | null;
    url: string | "/";
}

export function LinkButton(props: Props) {
    return(
        <>
            {props && props.text && props.url && 
                <a className="linkButton" href={props.url}>
                    {props.text}
                </a>
            }
        </>
    )
}