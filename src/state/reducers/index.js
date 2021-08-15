import { combineReducers } from 'redux';

import { registration } from './registration.reducer';
import { members } from './members.reducer';

const rootReducer = combineReducers({
    registration,
    members
});

export default rootReducer;