// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { memberActions } from '../../state/actions';

function RegisterPage() {
    const [member, setMember] = useState({
        _id: '',
        name: '',
        email: '',
        copName: '',
        designation: '',
        totalExperience: '',
        totalPoints: '',
        updatedBy: '',
        createdBy: '',
        caretedAt: '',
        updatedAt: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setMember(member => ({ ...member, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (member) {
            dispatch(memberActions.register(member));
        }
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Register</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="name" value={member.name} onChange={handleChange} className={'form-control' + (submitted && !member.name ? ' is-invalid' : '')} />
                    {submitted && !member.name &&
                        <div className="invalid-feedback">First Name is required</div>
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
                    <input type="text" name="copName" value={member.copName} onChange={handleChange} className={'form-control' + (submitted && !member.copName ? ' is-invalid' : '')} />
                    {submitted && !member.copName &&
                        <div className="invalid-feedback">COP Name is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Designation</label>
                    <input type="text" name="designation" value={member.designation} onChange={handleChange} className={'form-control' + (submitted && !member.designation ? ' is-invalid' : '')} />
                    {submitted && !member.designation &&
                        <div className="invalid-feedback">Designation is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Created by</label>
                    <input type="text" name="createdBy" value={member.createdBy} onChange={handleChange} className={'form-control' + (submitted && !member.createdBy ? ' is-invalid' : '')} />
                    {submitted && !member.createdBy &&
                        <div className="invalid-feedback">Created by is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Updated by</label>
                    <input type="text" name="UpdatedBy" value={member.UpdatedBy} onChange={handleChange} className={'form-control' + (submitted && !member.UpdatedBy ? ' is-invalid' : '')} />
                    {submitted && !member.UpdatedBy &&
                        <div className="invalid-feedback">Updated by is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Total Experience</label>
                    <input type="text" name="totalExperience" value={member.totalExperience} onChange={handleChange} className={'form-control' + (submitted && !member.totalExperience ? ' is-invalid' : '')} />
                    {submitted && !member.totalExperience &&
                        <div className="invalid-feedback">Total Experience is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Total Point</label>
                    <input type="text" name="totalPoints" value={member.totalPoints} onChange={handleChange} className={'form-control' + (submitted && !member.totalPoints ? ' is-invalid' : '')} />
                    {submitted && !member.totalPoints &&
                        <div className="invalid-feedback">Total Point is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

export { RegisterPage };