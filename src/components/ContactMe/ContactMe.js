import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
	return (
		<div className="contactMe">
			<div className="contactContainer">
				<h1>Contact Me At</h1>
				<div className="contactInfo">
					<h2>Phone Number:</h2>
					<p>(304)433-2552</p>
				</div>
				<div className="contactInfo">
					<h2>Email Address:</h2>
					<a href="mailto:MarucsBrooksWebDev@gmail.com">MarcusBrooksWebDev@gmail.com</a>
				</div>
				<div className="contactInfo">
					<h2>Github:</h2>
					<a href="https://github.com/MarcusWebDev">https://github.com/MarcusWebDev</a>
				</div>
			</div>
		</div>
	);
}

export default ContactMe;