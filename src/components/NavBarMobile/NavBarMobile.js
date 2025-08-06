import React, { useState } from "react";
import "./NavBarMobile.css";
import { Link } from "react-router-dom";
import resume from "../../assets/resume.pdf";

const NavBarMobile = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div>
            <div className={`hamburger ${isVisible ? "active" : ""}`} onClick={()=> setIsVisible(!isVisible)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div id="navBarMobileContainer" className={`${isVisible ? "navBarWidth" : "noWidth"}`}>
                <div id="mobileLinksContainer">
                    <Link to="/" className={`${props.location.pathname === "/" ? "mobileLinkActive" : ""} navBarLink`} >Home</Link>
                    <Link to="/projects" className={`${props.location.pathname === "/projects" ? "mobileLinkActive" : ""} navBarLink`} >Projects</Link>
                    <a href={resume} className="navBarLink">Resume</a>
                </div>
            </div>
        </div>
    );
}


export default NavBarMobile;