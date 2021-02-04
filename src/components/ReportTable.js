import React from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Report from './Report'
import { TableSortLabel } from '@material-ui/core';
import useStyles from './style'


const ReportTable = (props) => {
  const classes = useStyles();
  let reports = props.reports

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}><TableSortLabel
                active={true}
                direction={props.direction === 'asc' ? 'asc' : 'desc'}
                onClick={() => props.sortHandler()}>Date</TableSortLabel></TableCell>
              <TableCell className={classes.tableCell} align="left">User ID</TableCell>
              <TableCell className={classes.tableCell} align="left">Old value</TableCell>
              <TableCell className={classes.tableCell} align="left">New value</TableCell>
            </TableRow>
          </TableHead>
          {reports.map((report) => (<Report key={report.id} report={report} />))}
        </Table>
      </TableContainer>
    </div>
  );
};

export default ReportTable 