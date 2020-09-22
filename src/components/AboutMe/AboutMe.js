import React from 'react';
import Technologies from '../Technologies/Technologies';
import './AboutMe.css';

const AboutMe = () => {
	return (
		<div className="aboutMe">
			<div className="parallaxContainer">
				<span className="parallaxText underlined">MARCUS BROOKS</span>
				<span className="parallaxText">WEB DEVELOPER</span>
			</div>
			<div className="paragraphContainer">
				<div className="textContainer">
					<h1>About Me</h1>
					<p>Hello! My name is Marcus Brooks. I'm a developer interested in web development and game development. I've recently graduated with honors from Montgomery College with a GPA of 3.89.
					I'm pursuing a Bachelor's degree at University of Maryland College Park! Outside of college I've been taking Udemy courses to continue to learn more about web development and game development, 
					and I've recently begun participating in game jams!</p>
				</div>
				<img src={require("../../images/selfStencil.png")}/>
			</div>
			<Technologies />
		</div>
	);
}

export default AboutMe;
