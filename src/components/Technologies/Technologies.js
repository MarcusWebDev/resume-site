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
	}
	
	render() {
		const { changeCardView, currentCard } = this.props;

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
			<div id="technologiesContainer">
				<h1>BUILDING WITH:</h1>
				<div id="technologies">
					{ filteredCards }
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, matchDispatchToProps)(Technologies);