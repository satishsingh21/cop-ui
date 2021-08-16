import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { memberActions } from '../../state/actions';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

function HomePage() {
    const members = useSelector(state => state.members);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(memberActions.getAll());
    }, [dispatch]);

    const classes = useStyles();

    return (
        <div className="col-lg-12">
            <h3>All registered members:</h3>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="right">Id</TableCell>
                    <TableCell align="right">Name&nbsp;</TableCell>
                    <TableCell align="right">Email&nbsp;</TableCell>
                    <TableCell align="right">Designation&nbsp;</TableCell>
                    <TableCell align="right">TotalPoints</TableCell>
                    <TableCell align="right">COP Name&nbsp;</TableCell>
                    <TableCell align="right">CreatedBy&nbsp;</TableCell>
                    <TableCell align="right">UpdatedBy&nbsp;</TableCell>
                    <TableCell align="right">Total Experience&nbsp;</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {members.items && members.items.map((row) => (
                    <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                        {row._id}
                    </TableCell>
                    <TableCell align="right">{row._id}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.designation}</TableCell>
                    <TableCell align="right">{row.totalPoints}</TableCell>
                    <TableCell align="right">{row.copName}</TableCell>
                    <TableCell align="right">{row._createdBy}</TableCell>
                    <TableCell align="right">{row._updatedBy}</TableCell>
                    <TableCell align="right">{row.totalExperience}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            {/* {members.items &&
                <ul>
                    {members.items.map((member) =>
                        <li key={member._id}>
                            {member.name}
                        </li>
                    )}
                </ul>
            } */}
        </div>
    );
}

export { HomePage };