import React from 'react';
import './NavBar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import ContactMe from '../ContactMe/ContactMe';

const NavBar = () => {
	return (
		<Router>
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
				    
		</Router>
	);
}

export default NavBar;