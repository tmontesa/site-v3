import { Link } from "react-router-dom";
import "../../style/Sidebar/Sidebar.scss";

type Props = {}

export function Sidebar(props: Props) {
    return(
        <div id="sidebar">
            <div id="sidebar-content">
                <div id="sidebar-title">Timothy James Montesa</div>
                <div id="sidebar-subtitle">Full-Stack Software Engineer & Web Dev</div>
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