import React from 'react';
// import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { memberActions } from '../../state/actions';

function RegisterInBulkPage() {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        dispatch(memberActions.registerInBulk(data));
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Upload file</label>
                    <input type="file" ref={register} name="file"  required/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export { RegisterInBulkPage };
