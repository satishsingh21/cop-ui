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
    }, [dispatch, id]);

    return (
        <div className="col-lg-12">
            <h3>Member Detail:</h3>
            <ul>
                <li>id : {member.item && member.item._id}</li>
                <li>name :  {member.item && member.item.name}</li>
                <li>email :  {member.item && member.item.email}</li>
                <li>copName : {member.item && member.item.copName}</li>
                <li>designation :  {member.item && member.item.designation}</li>
                <li>totalPoints : {member.item && member.item.totalPoints}</li>
                <li>totalExperience :  {member.item && member.item.totalExperience}</li>
                <li>_updatedBy : {member.item && member.item._updatedBy}</li>
                <li>_createdAt :  {member.item && member.item._createdAt}</li>
                <li>_updatedAt : {member.item && member.item._updatedAt}</li>
                <li>_createdBy :  {member.item && member.item._createdBy}</li>
            </ul>
        </div>
    );
}

export { MemberDetailPage };
