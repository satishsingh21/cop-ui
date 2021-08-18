import { combineReducers } from 'redux';

import { registration } from './registration.reducer';
import { members } from './members.reducer';
import { member } from './member.reducer';

const rootReducer = combineReducers({
    registration,
    members,
    member
});

export default rootReducer;