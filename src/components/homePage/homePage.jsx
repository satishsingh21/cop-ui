import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { memberActions } from '../../state/actions';

function HomePage() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(memberActions.getAll());
    }, []);

    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Hi Guest!</h1>
            <h3>All registered users:</h3>
            {users.loading && <em>Loading users...</em>}
            {users.error && <span className="text-danger">ERROR: {users.error}</span>}
            {users.items &&
                <ul>
                    {users.items.map((user, index) =>
                        <li key={user.id}>
                            {user.firstName + ' ' + user.lastName}
                        </li>
                    )}
                </ul>
            }
        </div>
    );
}

export { HomePage };