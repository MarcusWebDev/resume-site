import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (

		<div className="navBarContainer">
			<nav className="phoneNav">
				<ul>
					<li>
						<Link to="/">About Me</Link>
					</li>
					<li>
						<Link to="/portfolio/">Portfolio</Link>
					</li>
					<li className="phoneResume"><a href={require("../../images/Resume.pdf")}>Resume</a></li>
					<li>
						<Link to="/contact/">Contact Me</Link>
					</li>
				</ul>
			</nav>
			<nav className="desktopNav">
				<ul>
					<li>
						<Link to="/">About Me</Link>
					</li>
					<li>
						<Link to="/portfolio/">Portfolio</Link>
					</li>
					<img className="logo" src={require("../../images/Logo.png")}/>
					<li><a href={require("../../images/Resume.pdf")}>Resume</a></li>
					<li>
						<Link to="/contact/">Contact Me</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;