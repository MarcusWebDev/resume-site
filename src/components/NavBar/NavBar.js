import React from 'react';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import {Link as scrollLink, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';
import './NavBar.css';

const scrollTo = (target) => {
	scroller.scrollTo(target, {
		duration: 800,
		delay: 0,
		smooth: 'easeInOut',
		offset: -72
	})
}
const urlCheck = (location) => {
	if (window.location.href === 'https://marcuswebdev.com/#/') {
		scrollTo(location);
	} else {
		window.location.href = 'https://marcuswebdev.com/#/';
		scroller.scrollTo('aboutMe', {
			duration: 0,
			delay: 0,
			smooth: 'easeInOut',
			offset: -72
		})
		scrollTo(location);
	}
}

const NavBar = () => {
	return (
		<div className="navBarContainer">
			<nav className="desktopNav">
				<img className="logo" src={require("../../images/Logo.png")}/>
				<ul>
					<a onClick={() => urlCheck('paragraphContainer')}>About Me</a>
					<Link to="/portfolio/">Portfolio</Link>
					<li><a href={require("../../images/Resume.docx")}>Resume</a></li>
					<a onClick={() => scrollTo('contactMe')}>Contact Me</a>
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;