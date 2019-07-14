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

	render() {
		const { changeCardView, currentCard } = this.props;
		const filteredCards = technologiesList.map((technology, i) => {
			if (currentCard !== 'none') {
				if (currentCard === technologiesList[i].name) {
					return (
						<Card 
							name = { technologiesList[i].name }
							image = { technologiesList[i].image }
							description = { technologiesList[i].description }
							onClick = {() => changeCardView('none')}
							currentCard = { currentCard }
						/>
					);
				}
			} else {
				return (
					<Card 
						name = { technologiesList[i].name }
						image = { technologiesList[i].image }
						onClick = {() => changeCardView(technologiesList[i].name)}
						currentCard = { currentCard }
					/>
				);
			}
		})
		return (
			<div className="technologiesContainer">
				<h1>BUILDING WITH:</h1>
				<div className="technologies">
					{ filteredCards }
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, matchDispatchToProps)(Technologies);