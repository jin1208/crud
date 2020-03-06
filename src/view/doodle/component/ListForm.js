import React from 'react';
import styles from '../../styles/Content';
import {Table, Paper} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import {TableHead} from "@material-ui/core";
import {TableRow} from "@material-ui/core";
import {TableCell} from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import { withStyles } from '@material-ui/core/styles';

import DeleteForm from './DeleteForm';

function ListForm(props) {
  const { classes } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
    return(
      <Paper>
          <TableContainer maxHeight="440">
            <Table className={classes.table}>
              <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
                <TableCell>설정</TableCell>
              </TableRow>
              </TableHead>
              <TableBody>
              {
              props.list
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((list) => {
                      return (
                  <TableRow>
                      <TableCell>{list.id}</TableCell>
                      <TableCell><img src={list.image} alt="profile" width="70" height="70"/></TableCell>
                      <TableCell>{list.name}</TableCell>
                      <TableCell>{list.birthday}</TableCell>
                      <TableCell>{list.gender}</TableCell>
                      <TableCell>{list.job}</TableCell>
                      <TableCell>
                        <DeleteForm id={list.id} refresh={props.refresh} />
                      </TableCell>
                  </TableRow>
                          );
                  })
                }
              </TableBody>
            </Table>  
        </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50]}
            component="div"
            count={props.list.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
      </Paper>
    );
}
export default withStyles(styles)(ListForm);