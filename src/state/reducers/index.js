import { combineReducers } from 'redux';

import { registration } from './registration.reducer';
import { members } from './members.reducer';
import { member } from './member.reducer';
import { point } from './point.reducer';

const rootReducer = combineReducers({
    registration,
    members,
    member,
    point
});

export default rootReducer;
