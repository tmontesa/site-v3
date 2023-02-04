import { Outlet } from "react-router-dom";
import "../style/root.scss";

export default function Root() {   
    return (
        <div id="root">
            <div id="content">
                <Outlet />
            </div>
        </div>
    )
}

