import { memberConstants } from '../../constants';
import { memberService } from '../../services';
// import { alertActions } from '.';
// import { history } from '../helpers';

export const memberActions = {
    register,
    getAll
};

// function login(membername, password, from) {
//     return dispatch => {
//         dispatch(request({ membername }));

//         memberService.login(membername, password)
//             .then(
//                 member => { 
//                     dispatch(success(member));
//                     // history.push(from);
//                 },
//                 error => {
//                     dispatch(failure(error.toString()));
//                     dispatch(alertActions.error(error.toString()));
//                 }
//             );
//     };

//     function request(member) { return { type: memberConstants.LOGIN_REQUEST, member } }
//     function success(member) { return { type: memberConstants.LOGIN_SUCCESS, member } }
//     function failure(error) { return { type: memberConstants.LOGIN_FAILURE, error } }
// }

// function logout() {
//     memberService.logout();
//     return { type: memberConstants.LOGOUT };
// }

function register(member) {
    return dispatch => {
        dispatch(request(member));

        memberService.register(member)
            .then(
                member => { 
                    dispatch(success());
                    // history.push('/login');
                    // dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(member) { return { type: memberConstants.REGISTER_REQUEST, member } }
    function success(member) { return { type: memberConstants.REGISTER_SUCCESS, member } }
    function failure(error) { return { type: memberConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        memberService.getAll()
            .then(
                members => dispatch(success(members)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: memberConstants.GETALL_REQUEST } }
    function success(members) { return { type: memberConstants.GETALL_SUCCESS, members } }
    function failure(error) { return { type: memberConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     return dispatch => {
//         dispatch(request(id));

//         memberService.delete(id)
//             .then(
//                 member => dispatch(success(id)),
//                 error => dispatch(failure(id, error.toString()))
//             );
//     };

//     function request(id) { return { type: memberConstants.DELETE_REQUEST, id } }
//     function success(id) { return { type: memberConstants.DELETE_SUCCESS, id } }
//     function failure(id, error) { return { type: memberConstants.DELETE_FAILURE, id, error } }
// }