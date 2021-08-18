import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { memberActions } from '../../state/actions';

function MemberDetailPage() {
    const member = useSelector(state => state.member);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(memberActions.getMemberById(id));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="col-lg-12">
            <h3>Member Detail:</h3>
           
        </div>
    );
}

export { MemberDetailPage };

