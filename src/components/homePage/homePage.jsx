import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { memberActions } from '../../state/actions';

function HomePage() {
    const members = useSelector(state => state.members);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(memberActions.getAll());
    }, [dispatch]);

    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Hi Guest!</h1>
            <h3>All registered members:</h3>
            {members.items &&
                <ul>
                    {members.items.map((member) =>
                        <li key={member._id}>
                            {member.name}
                        </li>
                    )}
                </ul>
            }
        </div>
    );
}

export { HomePage };