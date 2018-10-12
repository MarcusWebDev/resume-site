import React from 'react';
import './NavBar.css';

const NavBar = ({routeChange}) => {
	return (
		<div>
			<nav className="phoneNav">
				<ul>
					<li onClick={routeChange.bind('','aboutMe')} className="phoneAboutMe">About Me</li>
					<li onClick={routeChange.bind('', 'portfolio')} className="phonePortfolio">Portfolio</li>
					<li onClick={routeChange.bind('', 'resume')} className="phoneResume">Resume</li>
					<li onClick={routeChange.bind('', 'contactMe')} className="phoneContactMe">Contact Me</li>
				</ul>
			</nav>
			<nav className="desktopNav">
				<img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"/>
				<ul>
					<li onClick={routeChange.bind('','aboutMe')} className="desktopAboutMe">About Me</li>
					<li onClick={routeChange.bind('', 'portfolio')} className="desktopPortfolio">Portfolio</li>
					<li onClick={routeChange.bind('', 'resume')} className="desktopResume">Resume</li>
					<li onClick={routeChange.bind('', 'contactMe')} className="desktopContactMe">Contact Me</li>
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;