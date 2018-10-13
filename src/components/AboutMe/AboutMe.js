import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
	return (
		<div className="aboutMe">
			<h1>Marcus Brooks</h1>
			<h2>Web Developer</h2>
			<div className="paragraphContainer">
				<p><span>Hello!</span> My name is Marcus Brooks. I am a self taught web developer who has spent the last 6 months studying web development from home. 
				I am also a Computer Science major in college with a 3.69 GPA, working towards a Bachelor's degree.</p>
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

