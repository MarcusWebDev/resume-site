import { Link } from "react-router-dom";

import "./NavBar.scss";

import resume from "../../assets/resume.pdf";

const NavBar = ({ location, className }) => {
  return (
    <div className={`NavBar ${className ?? ""}`}>
      <div className="links-container">
        <Link
          to="/"
          className={`${location.pathname === "/" ? "link-active" : ""} nav-bar-link`}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={`${location.pathname === "/projects" ? "link-active" : ""} nav-bar-link`}
        >
          Projects
        </Link>
        <a href={resume} className="nav-bar-link">
          Resume
        </a>
      </div>
    </div>
  );
};

export default NavBar;
