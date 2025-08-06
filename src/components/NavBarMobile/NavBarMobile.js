import React from "react";
import "./NavBarMobile.css";
import { Link } from "react-router-dom";
import resume from "../../assets/resume.pdf";

const NavBarMobile = ({ location }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    return (
        <div className="NavBarMobile">
            <div className={`hamburger ${isVisible ? "active" : ""}`} onClick={()=> setIsVisible(!isVisible)}>
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
            </div>
            <div className={`nav-bar-mobile-container ${isVisible ? "nav-bar-width" : "no-width"}`}>
                <div className="mobile-links-container">
                    <Link to="/" className={`${location.pathname === "/" ? "mobile-link-active" : ""} nav-bar-link`}>Home</Link>
                    <Link to="/projects" className={`${location.pathname === "/projects" ? "mobile-link-active" : ""} nav-bar-link`}>Projects</Link>
                    <a href={resume} className="nav-bar-link">Resume</a>
                </div>
            </div>
        </div>
    );
}


export default NavBarMobile;