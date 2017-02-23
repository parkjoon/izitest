import { combineReducers } from 'redux';

import memorials from './memorials';

// Use of "combineReducers" is overkill here, but keeps future intentions clear.
export default combineReducers({
	memorials
});
