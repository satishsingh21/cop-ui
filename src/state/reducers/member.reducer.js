import { memberConstants } from '../../constants';

export function member(state = {}, action) {
    switch (action.type) {
        case memberConstants.GET_REQUEST:
            return {
                loading: true
            };
        case memberConstants.GET_SUCCESS:
            return {
                item: action.member
            };
        case memberConstants.GET_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}
