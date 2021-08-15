import { combineReducers } from 'redux';

// import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { members } from './members.reducer';

// import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    // authentication,
    registration,
    members,
    alert
});

export default rootReducer;