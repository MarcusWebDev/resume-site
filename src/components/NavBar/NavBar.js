import React from 'react';
import './NavBar.css';

const NavBar = ({routeChange}) => {
	return (
		<div className="test">
			<nav className="phoneNav">
				<ul>
					<li onClick={routeChange.bind('','aboutMe')} className="phoneAboutMe">About Me</li>
					<li onClick={routeChange.bind('', 'portfolio')} className="phonePortfolio">Portfolio</li>
					<li className="phoneResume"><a href={require("../../images/Resume.pdf")}>Resume</a></li>
					<li onClick={routeChange.bind('', 'contactMe')} className="phoneContactMe">Contact Me</li>
				</ul>
			</nav>
			<nav className="desktopNav">
				<ul>
					<li onClick={routeChange.bind('', 'aboutMe')} className="desktopAboutMe">About Me</li>
					<li onClick={routeChange.bind('', 'portfolio')} className="desktopPortfolio">Portfolio</li>
					<img className="logo" src={require("../../images/Logo.png")}/>
					<li className="desktopResume"><a href={require("../../images/Resume.pdf")}>Resume</a></li>
					<li onClick={routeChange.bind('', 'contactMe')} className="desktopContactMe">Contact Me</li>
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;