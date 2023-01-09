import React from "react";
import { Link } from "react-router-dom";
import resume from "../../Assets/Resume - Personal Project.pdf";
import "./NavBar.css";

class NavBar extends React.Component {
    render() {
        return (
            <div id="navBarContainer">
                <div id="linksContainer">
                    <Link to="/" className={`${ this.props.location.pathname == "/" ? "active" : ""} navBarLink`} >Home</Link>
                    <Link to="/projects" className={`${ this.props.location.pathname == "/projects" ? "active" : ""} navBarLink`} >Projects</Link>
                    <a href={resume} className="navBarLink">Resume</a>
                </div>
            </div>
        );
    }
}

export default NavBar;