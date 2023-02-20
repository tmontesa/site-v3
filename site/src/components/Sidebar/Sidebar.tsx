import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../style/Sidebar/Sidebar.scss";

type Props = {}

export function Sidebar(props: Props) {
    useEffect(() => {
        if (window.innerWidth > 700) return;

        var toggle = document.getElementById("sidebar-toggle");
        var panel = document.getElementById("sidebar-links");
        if (!toggle || !panel) return;
        
        
        var links = panel.getElementsByClassName("link");
        panel.style.display = "none";
        toggle.style.display = "initial";

        console.log(links);

        toggle.addEventListener("click", togglePanel);
        for (let link of links) {
            link.addEventListener("click", hidePanel);
        }

        function togglePanel() {
            if (!panel) return;
            if (panel.style.display == "none") {
                panel.style.display = "flex";
            } else {
                panel.style.display = "none";
            }
        }

        function hidePanel() {
            if (!panel) return;
            panel.style.display = "none";
        }

    }, []);

    return(
        <div id="sidebar">
            <div id="sidebar-content">
                <div id="sidebar-title">
                    Timothy Montesa
                    <div id="sidebar-toggle">≡</div>
                </div>
                <div id="sidebar-subtitle">Full-Stack Engineer<br />&& Web Dev</div>
                
                <div id="sidebar-links">
                    <Link className="link" to="/">Contact</Link>
                    <Link className="link" to="/experience">Experience</Link>
                    <Link className="link" to="/project">Projects</Link>
                    <Link className="link" to="/education">Education</Link>
                </div>
            </div>
        </div>
    )
}