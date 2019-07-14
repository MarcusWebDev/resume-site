import { CHANGE_CARD_VIEW } from './constants';

const initialState = {
	currentCard: 'none'
}

export const cardView = (state=initialState, action={}) => {
	switch (action.type) {
		case CHANGE_CARD_VIEW:
			return Object.assign({}, state, {
				currentCard: action.payload
			})
		default:
			return state;
	}
}
