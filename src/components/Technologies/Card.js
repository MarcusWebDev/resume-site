import React, { Component } from 'react';
import './Card.css';

class Card extends Component  {

	render() {

		const { name, image, description, onClick, currentCard } = this.props;

		let expandCard = '';
		let cardFadeStatus = '';
		const changeDescriptionVisibility = () => {
			if (currentCard === name) {
				document.getElementById(name).classList.remove('cardActive');
			} else {
				setTimeout(()=> {
					document.getElementById(name).classList.add('cardActive');
				}, 1000)
			}
		}
		if (currentCard === name) {
			expandCard = 'expandedCard';
			cardFadeStatus = 'fadedIn';	
		} else {
			cardFadeStatus = 'fadedOut';
		}
		return (
			<div 
				className={`card ${expandCard} ${cardFadeStatus}`} 
				onClick={() => {
					onClick();
					document.getElementById(name).classList.toggle('textHidden');
					changeDescriptionVisibility();
				}}
			>
				<div>
					<h2>{name}</h2>
				</div>
				<img src={image} />
				<p id={`${name}`} className="textHidden cardInactive">{description}</p>
			</div>
		);
	}

}

export default Card;