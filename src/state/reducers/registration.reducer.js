import { memberConstants } from '../../constants';

export function registration(state = {}, action) {
    switch (action.type) {
        case memberConstants.REGISTER_REQUEST:
            return { registering: true };
        case memberConstants.REGISTER_SUCCESS:
            return {};
        case memberConstants.REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}
