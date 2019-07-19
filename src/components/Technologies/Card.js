import React, { Component } from 'react';
import './Card.css';

class Card extends Component  {

	constructor(props){
		super(props);

		this.cardCoordinates = {};
	}

	render() {

		const { keyName, name, image, description, onClick, currentCard } = this.props;
		console.log(keyName);

		let cardFadeStatus = 'fadedIn';
		let cardExpandStatus = 'collapsed';
		let descriptionTextVisibility = 'textHidden';
		let cardPosition = 'defaultPosition';
		

		if (currentCard === 'none') {
			cardFadeStatus = 'fadedIn';
			cardExpandStatus = 'collpased';
			cardPosition = 'defaultPosition';
			descriptionTextVisibility = 'textHidden';
		} else {
			if (currentCard === name) {
				cardFadeStatus = 'fadedIn';
				cardExpandStatus = 'expanded';
				cardPosition = 'movedToCenter';
				descriptionTextVisibility = 'textShown';
			} else {
				cardFadeStatus = 'fadedOut';
				cardExpandStatus = 'collapsed';
				descriptionTextVisibility = 'textHidden';
				cardPosition = 'absolutePosition';
				document.getElementById(keyName).style.top = this.cardCoordinates.top;
				document.getElementById(keyName).style.left = this.cardCoordinates.left;
			}
		}
		
		return (
			<div 
				id={keyName}
				className={`card ${cardFadeStatus} ${cardExpandStatus} ${cardPosition}`} 
				onClick={onClick}
				onLoad={() => {
					this.cardCoordinates = document.getElementById(keyName).getBoundingClientRect();
					console.log(this.cardCoordinates);
				}}
			>
				<div className={`${cardFadeStatus}`}>
					<h2 className={`${cardFadeStatus}`}>{name}</h2>
				</div>
				<img className={`${cardFadeStatus}`} src={image} />
				<p id={`${name}`} className={`${descriptionTextVisibility} ${cardFadeStatus}`}>{description}</p>
			</div>
		);
	}

}

export default Card;