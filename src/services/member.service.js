
// import { authHeader } from '../_helpers';
const config = { apiUrl: 'http://localhost:3000/' };

export const memberService = {
    register,
    getAll,
    getById,
    update
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        // headers: authHeader()
    };

    return fetch(`${config.apiUrl}/members`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        // headers: authHeader()
    };

    return fetch(`${config.apiUrl}/members/${id}`, requestOptions).then(handleResponse);
}

function register(member) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(member)
    };

    return fetch(`${config.apiUrl}/members/register`, requestOptions).then(handleResponse);
}

function update(member) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(member)
    };

    return fetch(`${config.apiUrl}/members/${member.id}`, requestOptions).then(handleResponse);;
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                Location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}