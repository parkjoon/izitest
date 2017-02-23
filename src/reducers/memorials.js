import actions from '../utils/actions';

export default function memorials(state = [], action) {
	switch(action.type) {
		case actions.SET_MEMORIALS:
			return action.memorials;
		default:
			return state;
	}
}
