import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import "../style/root.scss";
import ScrollToTop from "../utilities/scrollToTop";


export default function Root() {   
    return (
        <div id="root">
            <ScrollToTop />
            <div id="content">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

