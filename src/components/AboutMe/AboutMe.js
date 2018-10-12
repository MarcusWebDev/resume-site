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
						<img src="https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png"/>
						<img src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png"/>
						<img src="https://jdwilson.ca/static/img/logos/js.svg"/>
						<img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/064fc70f-5df3-4333-b9d4-f6abe2f946de/react-wp-app8.png"/>
						<img className="node" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-white.png"/>	
						<img src="https://image.flaticon.com/icons/svg/25/25231.svg"/>
						<img src="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png"/>
						<img src="https://camo.githubusercontent.com/647e291a5fd52d50e01deb82f9392c462df148a6/687474703a2f2f617070732e6f63746f636f6e73756c74696e672e636f6d2f696d616765732f6578707265737349636f6e2e706e67"/>
						<img src="http://codedistrict.io/wp-content/uploads/2017/12/reduxLogo.png"/>
						<img src="https://png.icons8.com/color/1600/npm.png"/>
						<img src="https://safenet.gemalto.com/uploadedImages/images/Logos/postgresql-logo.png"/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;

