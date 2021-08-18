import { memberConstants } from '../../constants';
import { memberService } from '../../services';

export const memberActions = {
    register,
    getAllMember,
    getMemberById,
};

function register(member) {
    return dispatch => {
        dispatch(request(member));

        memberService.register(member)
            .then(
                member => { 
                    dispatch(success());
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(member) { return { type: memberConstants.REGISTER_REQUEST, member } }
    function success(member) { return { type: memberConstants.REGISTER_SUCCESS, member } }
    function failure(error) { return { type: memberConstants.REGISTER_FAILURE, error } }
}

function getAllMember() {
    return dispatch => {
        dispatch(request());

        memberService.getAllMember()
            .then(
                members => dispatch(success(members)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: memberConstants.GETALL_REQUEST } }
    function success(members) { return { type: memberConstants.GETALL_SUCCESS, members } }
    function failure(error) { return { type: memberConstants.GETALL_FAILURE, error } }
}

function getMemberById(id) {
    return dispatch => {
        dispatch(request());

        memberService.getMemberById(id)
            .then(
                member => dispatch(success(member)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: memberConstants.GET_REQUEST } }
    function success(member) { return { type: memberConstants.GET_SUCCESS, member } }
    function failure(error) { return { type: memberConstants.GET_FAILURE, error } }
}
