import CHANGE_ROUTE from './constants';

const changeRoute = (route) => ({ //parenthesis here allow us to avoid using 'return'. It's just shorthand.
	type: CHANGE_ROUTE,
	payload: route
})

export default changeRoute;