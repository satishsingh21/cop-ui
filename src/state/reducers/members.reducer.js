import { memberConstants } from '../../constants';

export function members(state = {}, action) {
    switch (action.type) {
        case memberConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case memberConstants.GETALL_SUCCESS:
            return {
                items: action.members
            };
        case memberConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}
