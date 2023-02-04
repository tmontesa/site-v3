import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import "../style/root.scss";

export default function Root() {   
    return (
        <div id="root">
            <div id="content">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

