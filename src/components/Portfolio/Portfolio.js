import React from 'react';
import './Portfolio.css';

const Portfolio =() => {
	return (
		<div className="portfolio">
			<h1>Portfolio</h1>
			<h2>Click on a project to view it live or click on the github cat to view the source code:</h2>
			<div className="projectsContainer">
				<div className="projectBlockContainer">
					<a href="https://github.com/MarcusWebDev/rainbowAngles">
						<img className="githubLink" src={require("../../images/GitHub.svg")}/>
					</a>
					<div className="projects">
						<a href="https://rainbowangles.com">
							<div className="rainbowAngles"></div>
							<div className="shadowBox">
								<p>A React.js + Redux.js website that displays carousels of helpful images and text for every level of a video game.</p>
							</div>	
						</a>	
					</div>
					<p className="phoneSummary">A React.js + Redux.js website that displays carousels of helpful images and text for every level of a video game.</p>
				</div>
				<div className="projectBlockContainer">
					<a href="https://github.com/MarcusWebDev/robofriends">
						<img className="githubLink" src={require("../../images/GitHub.svg")}/>
					</a>
					<div className="projects">
						<a href="https://marcuswebdev.github.io/robofriends/">
							<div className="robofriends"></div>
							<div className="shadowBox">
								<p>A React.js + Redux.js app that fetches robots and filters them based off of text input.</p>
							</div>		
						</a>
					</div>
					<p className="phoneSummary">A React.js + Redux.js app that fetches robots and filters them based off of text input.</p>
				</div>
				<div className="projectBlockContainer">
					<a href="https://github.com/MarcusWebDev/smartbrain">
						<img className="githubLink" src={require("../../images/GitHub.svg")}/>
					</a>
					<div className="projects">
						<a href="https://face-recognition-smartbrain.herokuapp.com/">
							<div className="smartBrain"></div>
							<div className="shadowBox">
								<p>The front end of a face recognition app that uses React.js. Has a functioning sign in and register page and keeps track of user data.</p>
							</div>
						</a>	
					</div>
					<p className="phoneSummary">The front end of a face recognition app that uses React.js. Has a functioning sign in and register page and keeps track of user data.</p>
				</div>
				<div className="projectBlockContainer">
					<a href="https://github.com/MarcusWebDev/resumeSite">
						<img className="githubLink" src={require("../../images/GitHub.svg")}/>
					</a>
					<div className="projects">
						<a href="https://github.com/MarcusWebDev/resumeSite">
							<div className="resumeSite"></div>
							<div className="shadowBox">
								<p>This is my portfolio website! It uses React.js + Redux.js (although the redux here was just practice).</p>
							</div>	
						</a>
					</div>
					<p className="phoneSummary">This is my portfolio website! It uses React.js + Redux.js (although the redux here was just practice).</p>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;