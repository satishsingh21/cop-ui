import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

import { pointActions } from '../../state/actions';
import { memberService } from '../../services';

function PointPage() {
    const { id, mode } = useParams();
    const isAddMode = mode === 'add';
    const [point, setPoint] = useState({
        // _id: '',
        awardedBy: '',
        awardedOn: '',
        ruleId: '',
        description: '',
        type: '',
        value: '',
        _updatedBy: '',
        _createdBy: ''
    });

    const [copNames] = React.useState([
        { label: "AWARD", value: "AWARD" },
        { label: "REDEEM", value: "REDEEM"} 
    ]);

    // const [designationNames] = React.useState([
    //     { label: "Senior Software Engineer", value: "Senior Software Engineer" },
    //     { label: "Software Engineer", value: "Software Engineer" },
    // ]);

    const [submitted, setSubmitted] = useState(false);

    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();
    const { setValue } = useForm();

    function handleChange(e) {
        setPoint(point => ({ ...point, [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (point && !isAddMode) {
            dispatch(pointActions.updatePointById(point));
        } else {
            dispatch(pointActions.postMemberPointById(point, id));
        }
    }

    useEffect(() => {
        if (!isAddMode) {
            // get point and set form fields
            memberService.getMemberPointsById(id).then(point => {
                const fields = ['_id', 'awardedBy', 'awardedOn', 'description', '_createdBy',
                                '_updatedBy', 'ruleId', 'type', 'value'];
                fields.forEach(field => setValue(field, point[field]));
                setPoint(point);
            });
        }
    }, [dispatch, id, isAddMode, setValue]);

    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Add Point:
                <span><Link to="/point/pointbulkregister" style={{float: "right"}}  className="btn btn-primary">Add Point in bulk</Link></span>
            </h2>
            {point.item && point.item.id}
            <form name="form" onSubmit={handleSubmit}>
                {/* <div className="form-group">
                    <label>Employee Id</label>
                    <input type="text" name="_id" value={point._id} onChange={handleChange} className={'form-control' + (submitted && !point._id ? ' is-invalid' : '')} />
                    {submitted && !point._id &&
                        <div className="invalid-feedback">Id is required</div>
                    }
                </div> */}
                <div className="form-group">
                    <label>Awarded By</label>
                    <input type="text" name="awardedBy" value={point.awardedBy} onChange={handleChange} className={'form-control' + (submitted && !point.awardedBy ? ' is-invalid' : '')} />
                    {submitted && !point.awardedBy &&
                        <div className="invalid-feedback">Awarded By is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Awarded On</label>
                    <input type="text" name="awardedOn" value={point.awardedOn} onChange={handleChange} className={'form-control' + (submitted && !point.awardedOn ? ' is-invalid' : '')} />
                    {submitted && !point.awardedOn &&
                        <div className="invalid-feedback">awardedOn is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="description" value={point.description} onChange={handleChange} className={'form-control' + (submitted && !point.description ? ' is-invalid' : '')} />
                    {submitted && !point.description &&
                        <div className="invalid-feedback">description is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Type</label>
                    <select value={point.type} onChange={handleChange} name="type"
                            className={'form-control' + (submitted && !point.type ? ' is-invalid' : '')}>
                        {
                            copNames.map(item => (
                                <option key={item.value} value={item.value}> {item.label} </option>
                            ))
                        }
                    </select>
                    {submitted && !point.type &&
                        <div className="invalid-feedback">ruleId is required</div>
                    }
                </div>
                {point && isAddMode && <div className="form-group">
                    <label>Created by</label>
                    <input type="text" name="_createdBy" value={point._createdBy} onChange={handleChange} className={'form-control' + (submitted && !point._createdBy ? ' is-invalid' : '')} />
                    {submitted && !point._createdBy &&
                        <div className="invalid-feedback">Created by is required</div>
                    }
                </div>}
                {point && !isAddMode && <div className="form-group">
                    <label>Updated by</label>
                    <input type="text" name="_updatedBy" value={point._updatedBy} onChange={handleChange} className={'form-control' + (submitted && !point._updatedBy ? ' is-invalid' : '')} />
                    {submitted && !point._updatedBy &&
                        <div className="invalid-feedback">Updated by is required</div>
                    }
                </div> }
                <div className="form-group">
                    <label>Rule Id</label>
                    <input type="text" name="ruleId" value={point.ruleId} onChange={handleChange} className={'form-control' + (submitted && !point.ruleId ? ' is-invalid' : '')} />
                    {submitted && !point.ruleId &&
                        <div className="invalid-feedback">ruleId is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Value</label>
                    <input type="number" name="value" value={point.value} onChange={handleChange} className={'form-control' + (submitted && !point.value ? ' is-invalid' : '')} />
                    {submitted && !point.value &&
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
