import React, { Component } from 'react';
import './Card.css';

class Card extends Component  {

	constructor(props){
		super(props);

	}

	render() {

		const { name, image, description, onClick} = this.props;
		
		return (
			<div className="card" onClick={onClick}>
				<div>
					<h2>{name}</h2>
				</div>
				<img src={image} />
			</div>
		);
	}

}

export default Card;