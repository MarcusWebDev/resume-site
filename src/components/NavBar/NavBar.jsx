import { Link } from "react-router-dom";
import resume from "../../assets/resume.pdf";
import "./NavBar.scss";

const NavBar = ({ location }) => {
    return (
        <div className="NavBar">
            <div className="links-container">
                <Link to="/" className={`${location.pathname === "/" ? "link-active" : ""} nav-bar-link`} >Home</Link>
                <Link to="/projects" className={`${location.pathname === "/projects" ? "link-active" : ""} nav-bar-link`} >Projects</Link>
                <a href={resume} className="nav-bar-link">Resume</a>
            </div>
        </div>
    );
}

export default NavBar;