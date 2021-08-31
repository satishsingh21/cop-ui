import { pointConstants } from '../../constants';
import { memberService } from '../../services';

export const pointActions = {
    getMemberPointsById,
    postMemberPointById,
    updateMemberPointById
};

function postMemberPointById(member) {
    return dispatch => {
        dispatch(request(member));

        memberService.postMemberPointById(member)
            .then(
                () => { 
                    dispatch(success());
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(member) { return { type: pointConstants.REGISTER_REQUEST, member } }
    function success(member) { return { type: pointConstants.REGISTER_SUCCESS, member } }
    function failure(error) { return { type: pointConstants.REGISTER_FAILURE, error } }
}

// function registerInBulk(fileData) {
//     return dispatch => {
//         dispatch(request(fileData));

//         memberService.registerInBulk(fileData)
//             .then(
//                 () => { 
//                     dispatch(success());
//                 },
//                 error => {
//                     dispatch(failure(error.toString()));
//                 }
//             );
//     };

//     function request(fileData) { return { type: pointConstants.REGISTER_REQUEST, fileData } }
//     function success(member) { return { type: pointConstants.REGISTER_SUCCESS, member } }
//     function failure(error) { return { type: pointConstants.REGISTER_FAILURE, error } }
// }

function updateMemberPointById(member) {
    return dispatch => {
        dispatch(request(member));

        memberService.updateMemberPointById(member)
            .then(
                () => { 
                    dispatch(success());
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(member) { return { type: pointConstants.UPDATE_REQUEST, member } }
    function success(member) { return { type: pointConstants.UPDATE_SUCCESS, member } }
    function failure(error) { return { type: pointConstants.UPDATE_FAILURE, error } }
}

// function getAllMember() {
//     return dispatch => {
//         dispatch(request());

//         memberService.getAllMember()
//             .then(
//                 members => dispatch(success(members)),
//                 error => dispatch(failure(error.toString()))
//             );
//     };

//     function request() { return { type: pointConstants.GETALL_REQUEST } }
//     function success(members) { return { type: pointConstants.GETALL_SUCCESS, members } }
//     function failure(error) { return { type: pointConstants.GETALL_FAILURE, error } }
// }

function getMemberPointsById(id) {
    return dispatch => {
        dispatch(request());

        memberService.getMemberPointsById(id)
            .then(
                member => dispatch(success(member)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: pointConstants.GET_REQUEST } }
    function success(member) { return { type: pointConstants.GET_SUCCESS, member } }
    function failure(error) { return { type: pointConstants.GET_FAILURE, error } }
}
