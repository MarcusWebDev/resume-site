import React from 'react';
import './Card.css';

const Card = ({name, image, description, onClick, currentCard}) => {
	let expandCard = '';
	if (currentCard === name) {
		expandCard = 'expandedCard';
	} else {
		expandCard = '';
	}
	const workplease = () => {
		if (currentCard === name) {
			document.getElementById('cardDescription').style.color = '#2C2C2C';
			document.getElementById('cardDescription').style.transition = '0';
		} else {
			setTimeout(() => {
				document.getElementById('cardDescription').style.color = 'white';
				document.getElementById('cardDescription').style.transition = '0.3s ease';
			}, 700);
		}
	}

	return (
		<div 
			className={`card ${expandCard}`} 
			onClick={() => { 
				onClick();
				workplease();
			}} 
		>
			<div>
				<h2>{name}</h2>
			</div>
			<img src={image} />
			<p id="cardDescription">{description}</p>
		</div>
	);
}

export default Card;