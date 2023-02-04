import "../style/Loading.scss";
import { CategoryHeader } from "./Category/CategoryHeader";
import LoadingSpinner from "../assets/loading-spinner.gif";

type Props = {

}

export function Loading(props: Props) {
    return (
        <div className="page" id="loading-page">
            <CategoryHeader text="Loading..."/>
            <div id="loading-spinner">
                <img src={LoadingSpinner} />
            </div>
        </div>
        
    )
}