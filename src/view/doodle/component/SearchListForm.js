import React from "react";

import DeleteForm from './DeleteForm';

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from '@material-ui/core/styles';

import styles from '../../styles/Content';

const columns = [
  { id: "id", label: "번호", minWidth: 100, align: "right" },
  { id: "image", label: "이미지", minWidth: 100, align: "right" },
  { id: "name", label: "이름", minWidth: 100, align: "right" },
  { id: "birthday", label: "생년월일", minWidth: 100, align: "right" },
  { id: "gender", label: "성별", minWidth: 100, align: "right" },
  { id: "job", label: "직업", minWidth: 100, align: "right" },
  { id: "settings", label: "설정", minWidth: 100, align: "right" },
];

function SearchListForm(props) {
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

  return (
    <Paper className={classes.paper}>
      <TableContainer maxHeight="440">
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
              {/* 이미지 없을때 array 출력 */}
                        {/* {
                        props.list.map((list) => {
                            return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={list.id}>
                                {columns.map(column => {
                                const value = list[column.id];
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                );
                                })}
                            </TableRow>
                            );
                        })
                        } */}

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

export default withStyles(styles)(SearchListForm);