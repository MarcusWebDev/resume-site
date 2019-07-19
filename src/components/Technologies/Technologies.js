import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Technologies.css';
import { changeCardView } from '../../containers/actions';
import technologiesList from './technologiesList';
import Card from './Card';

const mapStateToProps = (state) => {
	return {
		currentCard: state.currentCard
	}
}

const matchDispatchToProps = (dispatch) => {
	return {
		changeCardView: (card) => {dispatch(changeCardView(card))}
	}
}

class Technologies extends Component {
	constructor(props){
		super(props);

		this.cardCoordinates = {};
	}

	componentDidUpdate() {
		if (this.props.currentCard !== 'none') {
			document.getElementsByClassName('technologiesContainer')[0].style.height = this.containerCoordinates.height;
			document.getElementsByClassName('technologiesContainer')[0].style.width = this.containerCoordinates.width;
		} else {
			document.getElementsByClassName('technologiesContainer')[0].style.height = 'auto';
			document.getElementsByClassName('technologiesContainer')[0].style.width = '100%';
		}
	}

	render() {
		const { changeCardView, currentCard } = this.props;
		console.log(currentCard);
		let containerCoordinates = {};



		const filteredCards = technologiesList.map((technology, i) => {

			let cardView = '';
			if (currentCard === technologiesList[i].name) {
				cardView = 'none';
			} else {
				cardView = technologiesList[i].name;
			}

			return (
				<Card 
					keyName = {`card${i}`}
					name = { technologiesList[i].name }
					image = { technologiesList[i].image }
					description = { technologiesList[i].description }
					onClick = {() => changeCardView(cardView)}
					currentCard = { currentCard }
				/>
			);
		})
		return (
			<div 
				className="technologiesContainer"
				onload={() => {
					this.containerCoordinates = document.getElementsByClassName('technologiesContainer')[0].getBoundingClientRect();
					console.log(this.containerCoordinates);
					
				}}
			>
				<h1>BUILDING WITH:</h1>
				<div className="technologies">
					{ filteredCards }
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, matchDispatchToProps)(Technologies);