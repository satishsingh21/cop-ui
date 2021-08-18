import React from 'react';
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { memberActions } from '../../state/actions';

function MemberDetailPage() {
    // const member = useSelector(state => state.member);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(memberActions.getMemberById());
    // }, [dispatch]);

    // const listItems = member.map((item) => <li key={item._id}>{item.name}</li>)
    return (
        <div className="col-lg-12">
            <h3>Member Detail:</h3>
            {/* <ul>
                {listItems}
            </ul> */}
        </div>
    );
}

export { MemberDetailPage };

