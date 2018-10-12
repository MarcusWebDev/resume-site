import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
	return (
		<div className="contactMe">
			<h1>Contact Me At</h1>
			<div className="contactInfo">
				<h2>Phone Number:</h2>
				<p>304-433-2552</p>
			</div>
			<div className="contactInfo">
				<h2>Email Address:</h2>
				<p>MarcusBrooksWebDev@gmail.com</p>
			</div>
			<div className="contactInfo">
				<h2>Github:</h2>
				<p>https://github.com/MarcusWebDev</p>
			</div>
		</div>
	);
}

export default ContactMe;