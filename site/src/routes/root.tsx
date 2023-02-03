import { useQuery } from "@apollo/client";
import { Outlet } from "react-router-dom";

export default function Root() {   
    return (
        <div id="root">
            header
            <Outlet />
            footer
        </div>
    )
}

