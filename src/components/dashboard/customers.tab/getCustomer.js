import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";

export default function Customer(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const customers = props.customerList ? props.customerList : [];

  console.log(customers);
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>IDTT</TableCell>
            <TableCell>MAKH</TableCell>
            <TableCell>TENKH</TableCell>
            <TableCell>MATUYEN</TableCell>
            <TableCell>MAKYHD</TableCell>
            <TableCell>CSCU</TableCell>
            <TableCell>CSMOI</TableCell>
            <TableCell>X</TableCell>
            <TableCell>Y</TableCell>
            <TableCell>TTGHI</TableCell>
            <TableCell>DANHAP</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((customer) => (
              <TableRow key={customer.MAKH}>
                <TableCell id="idtt">{customer.IDTT}</TableCell>
                <TableCell id="makh">{customer.MAKH}</TableCell>
                <TableCell id="tenkh">{customer.TENKH}</TableCell>
                <TableCell id="matuyen">{customer.MATUYEN}</TableCell>
                <TableCell id="makyhd">{customer.MAKYHD}</TableCell>
                <TableCell id="cscu">{customer.CSCU}</TableCell>
                <TableCell id="csmoi">{customer.CSMOI}</TableCell>
                <TableCell id="x">{customer.X}</TableCell>
                <TableCell id="y">{customer.Y}</TableCell>
                <TableCell id="ttghi">{customer.TTGHI}</TableCell>
                <TableCell id="danhap">{customer.DANHAP}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={customers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
}
