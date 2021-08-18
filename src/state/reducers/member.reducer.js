import { memberConstants } from '../../constants';

export function member(state = {}, action) {
    switch (action.type) {
        case memberConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case memberConstants.GETALL_SUCCESS:
            return {
                items: action.member
            };
        case memberConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}