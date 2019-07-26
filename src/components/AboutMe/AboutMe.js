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
					<p>Hello! My name is Marcus Brooks. I've taught myself web development alongside of what I've learned in college as a 
					Computer Science major. I currently have a 3.76 GPA in college, and I'm working towards earning a Bachelor's degree. In my spare time I have been taking Udemy courses and working on projects to further develop my skills and understanding of web development.</p>
				</div>
				<img src={require("../../images/selfStencil.png")}/>
			</div>
			<Technologies />
		</div>
	);
}

export default AboutMe;
