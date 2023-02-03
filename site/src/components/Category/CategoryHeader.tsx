import "../../style/Category/CategoryHeader.scss";

type Props = {
    text: string | "";
}

export function CategoryHeader(props: Props) {
    return(
        <div className="categoryHeader">
            <h2>{props.text}</h2>
        </div>
    )
}