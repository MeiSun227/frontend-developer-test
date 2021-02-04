import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'


const Report = (props) => {
  // format the ISO time and date
  let timeDate = new Date(props.report.timestamp).toISOString().substring(0, 10)

  return (
    <TableBody>
      <TableRow>
        <TableCell>{timeDate} </TableCell>
        <TableCell>{props.report.id}</TableCell>
        <TableCell>{props.report.diff[0].oldValue}</TableCell>
        <TableCell>{props.report.diff[0].newValue}</TableCell>
      </TableRow>
    </TableBody>
  )
}

export default Report
