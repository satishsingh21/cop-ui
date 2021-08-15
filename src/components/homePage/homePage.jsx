import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { memberActions } from '../../state/actions';

function HomePage() {
    const members = useSelector(state => state.members);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(memberActions.getAll());
    }, []);

    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Hi Guest!</h1>
            <h3>All registered members:</h3>
            {members.loading && <em>Loading members...</em>}
            {members.error && <span className="text-danger">ERROR: {members.error}</span>}
            {members.items &&
                <ul>
                    {members.items.map((member, index) =>
                        <li key={member.id}>
                            {member.firstName + ' ' + member.lastName}
                        </li>
                    )}
                </ul>
            }
        </div>
    );
}

export { HomePage };