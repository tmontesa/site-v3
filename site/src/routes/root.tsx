import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import "../style/root.scss";
import "../style/fonts.scss";
import ScrollToTop from "../utilities/ScrollToTop";



export default function Root() {  
    useEffect(() => {
        document.title = "Timothy Montesa: Full-Stack Engineer & Web Developer"
    }, []);

     
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

