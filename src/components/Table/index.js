import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { TableFooter } from '@material-ui/core';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import ActionField from '../ActionField';

import './index.css';
import InputForm from './inputForm';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BasicTable({data, insert, deleteData, editDatafunction}) {
  const classes = useStyles();

  return (
    <TableContainer className="table_container" component={Paper}>
      <h3 className="table_header">Projects / ENV1.5</h3>
      <h2 className="table_sub_header">Releases</h2>
      <hr className="horizontal_line"/>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Version</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Progress</TableCell>
            <TableCell align="center">Start date</TableCell>
            <TableCell align="center">Release date</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.sort((a, b) => {
                  return new Date(b["start date"]) - new Date(a["start date"]);
                }).map((index) => (
            <TableRow key={index.version}>
              <TableCell component="th" scope="row">
                <DragIndicatorIcon style={{verticalAlign:"bottom", color:"#d0d3d8"}}/>{index.version}
              </TableCell>
              <TableCell align="center">
                {index.progress === 0 ? <div className="inprogress">IN PROGRESS</div> : 
                index.progress < 100? <div className="unreleased">UNRELEASED</div> : 
                <div className="released">RELEASED</div>}
              </TableCell>
              <TableCell align="right">
                <div className="progress_bar">
                  <div className="progress" style={{width:`${index.progress}%` }}></div>
                </div>
              </TableCell>
              <TableCell align="center">{index["start date"]}</TableCell>
              <TableCell align="center">{index["release date"] || "..."}</TableCell>
              <TableCell align="center" className="description_section">{index.description.length > 12 ? index.description.slice(0, 9)+"...": index.description }</TableCell>
              <TableCell align="right">
                <ActionField editingValue={index} value={index.version} data={data} deleteData={deleteData} editDatafunction={editDatafunction}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <InputForm data={data} insert={insert}/>
    </TableContainer>
  );
}
