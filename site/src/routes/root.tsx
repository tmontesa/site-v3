import { Outlet } from "react-router-dom";
import "../style/main.scss";

export default function Root() {   
    return (
        <div id="root">
            header
            <Outlet />
            footer
        </div>
    )
}

