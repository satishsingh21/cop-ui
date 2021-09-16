import { pointConstants } from '../../constants';

export function point(state = {}, action) {
    switch (action.type) {
        case pointConstants.GET_REQUEST:
            return {
                loading: true
            };
        case pointConstants.GET_SUCCESS:
            return {
                item: action.point
            };
        case pointConstants.GET_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}
