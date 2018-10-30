import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
	return (
		<div className="aboutMe">
			<h1>Marcus Brooks</h1>
			<h2>Web Developer</h2>
			<div className="paragraphContainer">
				<p>Hello! My name is Marcus Brooks. I've taught myself web development alongside of what I've learned in college as a 
				Computer Science major. I currently have a 3.69 GPA in college, and I'm working towards a Bachelor's degree.</p>
				<div className="technologiesContainer">
					<h2>I currently know the following technologies:</h2>
					<div className="iconContainer">
						<img src={require("../../images/HTML.png")}/>
						<img src={require("../../images/CSS.png")}/>
						<img src={require("../../images/JS.svg")}/>
						<img src={require("../../images/React.png")}/>
						<img src={require("../../images/Redux.png")}/>	
						<img src={require("../../images/CommandLine.png")}/>
						<img src={require("../../images/NPM.png")}/>
						<img src={require("../../images/Git.png")}/>
						<img src={require("../../images/GitHub.svg")}/>
						<img src={require("../../images/Node.png")}/>
						<img src={require("../../images/Express.png")}/>
						<img src={require("../../images/PostgreSQL.png")}/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;

