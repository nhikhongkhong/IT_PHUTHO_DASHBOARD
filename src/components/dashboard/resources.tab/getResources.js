import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";


export default function Resources(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const resources = props.resources ? props.resources : [];

  console.log(resources);
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>MA TUYEN</TableCell>
            <TableCell>TEN TUYEN</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resources
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((resource) => (
              <TableRow key={resource.MATUYEN}>
                <TableCell id="matuyen">{resource.MATUYEN}</TableCell>
                <TableCell id="tentuyen">{resource.TENTUYEN}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={resources.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
}
