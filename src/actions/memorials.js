import actions from '../utils/actions';

export function setMemorials(memorials) {
	return {
		type: actions.SET_MEMORIALS,
		memorials
	};
}
