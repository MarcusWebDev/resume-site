import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
	return (
		<div className="aboutMe">
			<h1>Marcus Brooks</h1>
			<h2>Web Developer</h2>
			<div className="paragraphContainer">
				<p>Hello! My name is Marcus Brooks. I've taught myself web development alongside of what I've learned in college as a 
				Computer Science major. I currently have a 3.73 GPA in college, and I'm working towards a Bachelor's degree.</p>
				<div className="technologiesContainer">
					<h2>I currently know the following technologies:</h2>
					<div className="iconContainer">
						<img alt="HTML5" src={require("../../images/HTML.png")}/>
						<img alt="CSS3" src={require("../../images/CSS.png")}/>
						<img alt="Javascript" src={require("../../images/JS.svg")}/>
						<img alt="React.js" src={require("../../images/React.png")}/>
						<img alt="Redux.js" src={require("../../images/Redux.png")}/>	
						<img alt="Command Line" src={require("../../images/CommandLine.png")}/>
						<img alt="Node Package Manager" src={require("../../images/NPM.png")}/>
						<img alt="Git" src={require("../../images/Git.png")}/>
						<img alt="Github" src={require("../../images/GitHub.svg")}/>
						<img alt="Node.js" src={require("../../images/Node.png")}/>
						<img alt="Express.js" src={require("../../images/Express.png")}/>
						<img alt="PostgreSQL" src={require("../../images/PostgreSQL.png")}/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;

