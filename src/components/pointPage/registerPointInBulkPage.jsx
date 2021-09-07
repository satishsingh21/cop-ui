import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { memberActions } from '../../state/actions';

function AddPointInBulkPage() {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        dispatch(memberActions.registerInBulk(data));
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Add Points in bulk</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="file" {...register('file')} name="file"  required/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export { AddPointInBulkPage };
