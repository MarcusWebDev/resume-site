import { CHANGE_CARD_VIEW } from './constants';

export const changeCardView = (card) => ({ //parenthesis here allow us to avoid using 'return'. It's just shorthand.
	type: CHANGE_CARD_VIEW,
	payload: card
})
