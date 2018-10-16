import React from 'react';
import './Portfolio.css';

const Portfolio =() => {
	return (
		<div className="portfolio">
			<h1>Portfolio</h1>
			<h2>Github links to the following projects:</h2>
			<div className="projectsContainer">
				<div className="phoneSummaryContainer">
					<a href="https://github.com/MarcusWebDev/robofriends">
						<div className="projects">
							<div className="robofriends"></div>
							<div className="shadowBox">
								<p>A React.js + Redux.js app that fetches robots and filters them based off of text input.</p>
							</div>		
						</div>
					</a>
					<p className="phoneSummary">A React.js + Redux.js app that fetches robots and filters them based off of text input.</p>
				</div>
				<div className="phoneSummaryContainer">
					<a href="https://github.com/MarcusWebDev/smartbrain">
						<div className="projects">
							<div className="smartBrain"></div>
							<div className="shadowBox">
								<p>The front end of a face recognition app that uses React.js. Has a functioning sign in and register page and keeps track of user data.</p>
							</div>	
						</div>
					</a>
					<p className="phoneSummary">The front end of a face recognition app that uses React.js. Has a functioning sign in and register page and keeps track of user data.</p>
				</div>
				<div className="phoneSummaryContainer">
					<a href="https://github.com/MarcusWebDev/resumeSite">
						<div className="projects">
							<div className="resumeSite"></div>
							<div className="shadowBox">
								<p>This is my portfolio website! It uses React.js + Redux.js (although the redux here was just practice).</p>
							</div>	
						</div>
					</a>
					<p className="phoneSummary">This is my portfolio website! It uses React.js + Redux.js (although the redux here was just practice).</p>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;