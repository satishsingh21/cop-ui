import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

import { memberActions } from '../../state/actions';
import { memberService } from '../../services';

function PointPage() {
    const { id } = useParams();
    const isAddMode = !id;
    const [member, setMember] = useState({
        _id: '',
        name: '',
        email: '',
        copName: '',
        designation: '',
        totalExperience: '',
        totalPoints: '',
        _updatedBy: '',
        _createdBy: ''
    });

    const [copNames] = React.useState([
        { label: "DBCOP", value: "DBCOP" },
        { label: "JSCOP", value: "JSCOP" },
    ]);

    const [designationNames] = React.useState([
        { label: "Senior Software Engineer", value: "Senior Software Engineer" },
        { label: "Software Engineer", value: "Software Engineer" },
    ]);

    const [submitted, setSubmitted] = useState(false);

    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();
    const { setValue } = useForm();

    function handleChange(e) {
        setMember(member => ({ ...member, [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (member && !isAddMode) {
            dispatch(memberActions.updateMemberById(member));
        } else {
            dispatch(memberActions.register(member));
        }
    }

    useEffect(() => {
        if (!isAddMode) {
            // get member and set form fields
            memberService.getMemberById(id).then(member => {
                const fields = ['_id', 'name', 'copName', 'email', 'designation', '_createdBy',
                                '_updatedBy', 'totalExperience', 'totalPoints'];
                fields.forEach(field => setValue(field, member[field]));
                setMember(member);
            });
        }
    }, [dispatch, id, isAddMode, setValue]);

    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Add Point:
                <span><Link to="/member/pointbulkregister" style={{float: "right"}}  className="btn btn-primary">Add Point in bulk</Link></span>
            </h2>
            {member.item && member.item._id}
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Employee Id</label>
                    <input type="text" name="_id" value={member._id} onChange={handleChange} className={'form-control' + (submitted && !member._id ? ' is-invalid' : '')} />
                    {submitted && !member._id &&
                        <div className="invalid-feedback">Id is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={member.name} onChange={handleChange} className={'form-control' + (submitted && !member.name ? ' is-invalid' : '')} />
                    {submitted && !member.name &&
                        <div className="invalid-feedback">Name is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" value={member.email} onChange={handleChange} className={'form-control' + (submitted && !member.email ? ' is-invalid' : '')} />
                    {submitted && !member.email &&
                        <div className="invalid-feedback">Email is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>COP Name</label>
                    <select value={member.copName} onChange={handleChange} name="copName"
                            className={'form-control' + (submitted && !member.copName ? ' is-invalid' : '')}>
                        {
                            copNames.map(item => (
                                <option key={item.value} value={item.value}> {item.label} </option>
                            ))
                        }
                    </select>
                    {submitted && !member.copName &&
                        <div className="invalid-feedback">COP Name is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Designation</label>
                    <select onChange={handleChange} value={member.designation} name="designation"
                            className={'form-control' + (submitted && !member.designation ? ' is-invalid' : '')}>
                    {
                        designationNames.map(item => (
                            <option key={item.value} value={item.value}> {item.label}</option>
                        ))
                    }
                    </select>
                    {submitted && !member.designation &&
                        <div className="invalid-feedback">Designation is required</div>
                    }
                </div>
                {member && isAddMode && <div className="form-group">
                    <label>Created by</label>
                    <input type="text" name="_createdBy" value={member._createdBy} onChange={handleChange} className={'form-control' + (submitted && !member._createdBy ? ' is-invalid' : '')} />
                    {submitted && !member._createdBy &&
                        <div className="invalid-feedback">Created by is required</div>
                    }
                </div>}
                {member && !isAddMode && <div className="form-group">
                    <label>Updated by</label>
                    <input type="text" name="_updatedBy" value={member._updatedBy} onChange={handleChange} className={'form-control' + (submitted && !member._updatedBy ? ' is-invalid' : '')} />
                    {submitted && !member._updatedBy &&
                        <div className="invalid-feedback">Updated by is required</div>
                    }
                </div> }
                <div className="form-group">
                    <label>Total Experience</label>
                    <input type="number" name="totalExperience" value={member.totalExperience} onChange={handleChange} className={'form-control' + (submitted && !member.totalExperience ? ' is-invalid' : '')} />
                    {submitted && !member.totalExperience &&
                        <div className="invalid-feedback">Total Experience is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Total Point</label>
                    <input type="number" name="totalPoints" value={member.totalPoints} onChange={handleChange} className={'form-control' + (submitted && !member.totalPoints ? ' is-invalid' : '')} />
                    {submitted && !member.totalPoints &&
                        <div className="invalid-feedback">Total Point is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export { PointPage };
