import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { memberActions, pointActions } from '../../state/actions';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
    },
}));

function MemberDetailPage() {
    const member = useSelector(state => state.member);
    const point = useSelector(state => state.point);
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(memberActions.getMemberById(id));
        dispatch(pointActions.getMemberPointsById(id));
    }, [dispatch, id]);

    const classes = useStyles();

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

            <div> Point history:
                <span><Link to={`/member/${id}/point/add`} style={{float: "right"}}  className="btn btn-primary">Add points</Link></span>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="right">Id</TableCell>
                        <TableCell align="right">awardedBy&nbsp;</TableCell>
                        <TableCell align="right">description&nbsp;</TableCell>
                        <TableCell align="right">type&nbsp;</TableCell>
                        <TableCell align="right">value&nbsp;</TableCell>
                        <TableCell align="right">awardedOn&nbsp;</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {point.item && point.item.map((row) => (
                            <TableRow key={row._id}>
                                <TableCell align="right">{row.awardedOn}</TableCell>
                                <TableCell align="right">
                                    <Link to={`/member/${row._id}`}>{row._id}</Link>
                                </TableCell>
                                <TableCell align="right">{row.awardedBy}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">
                                    <div className={classes.root}>
                                        <Button variant="contained"><Link to={`/member/${row._id}/edit`}>Edit</Link></Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export { MemberDetailPage };
