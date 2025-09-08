import React from "react";

import "./NavBarMobile.scss";

import NavBar from "../NavBar";

const NavBarMobile = ({ location }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <div className="NavBarMobile">
      <div
        className={`hamburger ${isVisible ? "active" : ""}`}
        onClick={() => setIsVisible(!isVisible)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
      <NavBar
        className={`mobile-nav-bar ${isVisible ? "" : "no-width"}`}
        location={location}
      />
    </div>
  );
};

export default NavBarMobile;
