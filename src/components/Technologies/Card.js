import React, { Component } from 'react';
import './Card.css';

class Card extends Component  {

	constructor(props){
		super(props);

	}

	render() {

		const { keyName, name, image, description, onClick, currentCard } = this.props;

		let cardFadeStatus = 'fadedIn';
		let descriptionTextVisibility = 'textHidden';	

		if (currentCard === 'none') {
			cardFadeStatus = 'fadedIn';
			descriptionTextVisibility = 'textHidden';
		} else {
			if (currentCard === name) {
				cardFadeStatus = 'fadedIn';
				descriptionTextVisibility = 'textShown';
			} else {
				cardFadeStatus = 'fadedOut';
				descriptionTextVisibility = 'textHidden';
			}
		}
		
		return (
			<div 
				id={keyName}
				className={`card ${cardFadeStatus}`} 
				onClick={onClick}
			>
				<div className={`${cardFadeStatus}`}>
					<h2 className={`${cardFadeStatus}`}>{name}</h2>
				</div>
				<img className={`${cardFadeStatus}`} src={image} />
				<p className={`${descriptionTextVisibility} ${cardFadeStatus}`}>{description}</p>
			</div>
		);
	}

}

export default Card;