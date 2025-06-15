import React from "react";
import { Link } from "react-router-dom";
import resume from "../../Assets/resume.pdf";
import "./NavBar.css";

const NavBar = (props) => {
    return (
        <div id="navBarContainer">
            <div id="linksContainer">
                <Link to="/" className={`${props.location.pathname === "/" ? "linkActive" : ""} navBarLink`} >Home</Link>
                <Link to="/projects" className={`${props.location.pathname === "/projects" ? "linkActive" : ""} navBarLink`} >Projects</Link>
                <a href={resume} className="navBarLink">Resume</a>
            </div>
        </div>
    );
}

export default NavBar;