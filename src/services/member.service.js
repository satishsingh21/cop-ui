const config = { apiUrl: 'http://localhost:3000' };

export const memberService = {
    register,
    getAllMember,
    getMemberById,
    updateMemberById,
    registerInBulk,
    registerPointInBulk,
    getMemberPointsById,
    postMemberPointById,
    updateMemberPointById
};

function getAllMember() {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`${config.apiUrl}/members`, requestOptions).then(handleResponse);
}

function getMemberById(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`${config.apiUrl}/members/${id}`, requestOptions).then(handleResponse);
}

function getMemberPointsById(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`${config.apiUrl}/members/${id}/points`, requestOptions).then(handleResponse);
}

function register(member) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(member)
    };

    return fetch(`${config.apiUrl}/members`, requestOptions).then(handleResponse);
}

function postMemberPointById(memberPoint, id) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(memberPoint)
    };

    return fetch(`${config.apiUrl}/members/${id}/points`, requestOptions).then(handleResponse);
}

function updateMemberPointById(member) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(member)
    };

    return fetch(`${config.apiUrl}/members/${member.id}/points`, requestOptions).then(handleResponse);
}

function registerInBulk(data) {
    const formData = new FormData();
    formData.append('file', data.file[0] );

    const requestOptions = {
        method: 'POST',
        body: formData
    };
    return fetch(`${config.apiUrl}/members/upload-csv`, requestOptions).then(handleResponse);
}

function registerPointInBulk(data) {
    const formData = new FormData();
    formData.append('file', data.file[0] );

    const requestOptions = {
        method: 'POST',
        body: formData
    };
    return fetch(`${config.apiUrl}/points/upload-csv`, requestOptions).then(handleResponse);
}

function updateMemberById(member) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(member)
    };
    return fetch(`${config.apiUrl}/members/${member._id}`, requestOptions).then(handleResponse);;
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                Location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
