// import React, { useState } from "react"; // Removed useEffect as it's not used here
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import { Box, Container } from "@mui/material";

// // Removed Axios import as it's not used in this component

// const columns = [
//   { id: "user_id", label: "User ID", minWidth: 170 },
//   { id: "name", label: "Name", minWidth: 100 },
//   {
//     id: "is_active",
//     label: "Status",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "created_at",
//     label: "Created At",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },
// ];

// export default function StickyHeadTable({ data }) {
//   console.log("Received data:", data); // Add this line for debugging
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [rows, setRows] = useState(data); // Ensure data is correctly passed as a prop

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Container sx={{ display: "flex", justifyContent: "center" }}>
//       <Box
//         sx={{ width: "80%", justifyContent: "center", alignItems: "center" }}
//       >
//         <Paper>
//           <TableContainer sx={{ maxHeight: "100%", overflow: "auto" }}>
//             <Table stickyHeader aria-label="sticky table">
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column) => (
//                     <TableCell
//                       key={column.id}
//                       align={column.align}
//                       style={{ minWidth: column.minWidth }}
//                     >
//                       {column.label}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {setRows.length > 0 &&
//                   rows
//                     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                     .map((row) => (
//                       <TableRow
//                         hover
//                         role="checkbox"
//                         tabIndex={-1}
//                         key={row.userId}
//                       >
//                         {columns.map((column) => {
//                           const value = row[column.id];
//                           return (
//                             <TableCell key={column.id} align={column.align}>
//                               {column.format && typeof value === "number"
//                                 ? column.format(value)
//                                 : value}
//                             </TableCell>
//                           );
//                         })}
//                       </TableRow>
//                     ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           <TablePagination
//             rowsPerPageOptions={[10, 25, 100]}
//             component="div"
//             count={rows.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </Paper>
//       </Box>
//     </Container>
//   );
// }

// StickyHeadTable.js
// import React, { useState, useEffect } from "react";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import { Box, Container } from "@mui/material";

// const columns = [
//   { id: "user_id", label: "User ID", minWidth: 170 },
//   { id: "name", label: "Name", minWidth: 100 },
//   {
//     id: "is_active",
//     label: "Status",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "created_at",
//     label: "Created At",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },
// ];

// const StickyHeadTable = ({ data }) => {
//   const dataArray = Array.isArray(data) ? data : [];

//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   useEffect(() => {
//     // Ensure the effect is only called when data changes
//     setPage(0);
//   }, [data]); // Watch the 'data' prop for changes

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };


//   return (
//     <Container sx={{ display: "flex", justifyContent: "center" }}>
//       <Box
//         sx={{ width: "80%", justifyContent: "center", alignItems: "center" }}
//       >
//         <Paper>
//           <TableContainer sx={{ maxHeight: "100%", overflow: "auto" }}>
//             <Table stickyHeader aria-label="sticky table">
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column) => (
//                     <TableCell
//                       key={column.id}
//                       align={column.align}
//                       style={{ minWidth: column.minWidth }}
//                     >
//                       {column.label}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {dataArray
//                   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   .map((row) => (
//                     <TableRow
//                       hover
//                       role="checkbox"
//                       tabIndex={-1}
//                       key={row.user_id}
//                     >
//                       {columns.map((column) => {
//                         const value = row[column.id];
//                         return (
//                           <TableCell key={column.id} align={column.align}>
//                             {column.format && typeof value === "number"
//                               ? column.format(value)
//                               : value}
//                           </TableCell>
//                         );
//                       })}
//                     </TableRow>
//                   ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           <TablePagination
//             rowsPerPageOptions={[10, 25, 100]}
//             component="div"
//             count={dataArray.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </Paper>
//       </Box>
//     </Container>
//   );
// };

// export default StickyHeadTable;

import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Container } from "@mui/material";
import Loader from "../../admin/common/Loader";

const columns = [
  { id: "userId", label: "User ID", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "createdAt",
    label: "Created At",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

export default function StickyHeadTable({ data ,loading}) {
  console.log('data starting point',data);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]); 
  // if(data.length>0)
  //  setRows([...data]) ;
  // const rows = data;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{ width: "80%", justifyContent: "center", alignItems: "center", marginBottom: '50px' }}
      >
        <Paper>
          <TableContainer sx={{ maxHeight: "100%", overflow: "auto" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>

                { loading ? <Loader/>:
                rows.length > 0 &&
                  rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.userId}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          console.log(value);
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Container>
  );
}
