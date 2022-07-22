import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box, Checkbox, createTheme, ThemeProvider } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";
import UserListRow from "./UserListRow";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#b18aff",
      contrastText: "#fff",
    },
  },
});

const TABLE_HEADER = [
  "Login/Email",
  "Name",
  "Acccess level",
  "Products",
  "Orders",
  "Wishlist",
  "Created",
  "Last Login",
];

function UserList(props) {
  const [userList, setUserList] = useState([
    {
      id: 1,
      login: "admin.training@powergatesoftware.com",
      name: "Josh Finamore",
      accessLevel: "Administrator",
      products: 1,
      orders: 1,
      wishlist: 1,
      created: "Jun 10, 2019, 09:50 PM",
      lastLogin: "Jul 17, 2022,02:53 PM",
    },
    {
      id: 2,
      login: "admin.training@powergatesoftware.com",
      name: "Josh",
      accessLevel: "Administrator",
      products: 1,
      orders: 0,
      wishlist: 0,
      created: "Jun 10, 2019, 09:50 PM",
      lastLogin: "Jul 17, 2022,02:53 PM",
    },
    {
      id: 3,
      login: "admin.training@powergatesoftware.com",
      name: "Finamore",
      accessLevel: "Administrator",
      products: 1,
      orders: 1,
      wishlist: 0,
      created: "Jun 10, 2019, 09:50 PM",
      lastLogin: "Jul 17, 2022,02:53 PM",
    },
    {
      id: 4,
      login: "admin.training@powergatesoftware.com",
      name: "Josh Finamore",
      accessLevel: "Administrator",
      products: 1,
      orders: 0,
      wishlist: 1,
      created: "Jun 10, 2019, 09:50 PM",
      lastLogin: "Jul 17, 2022,02:53 PM",
    },
    {
      id: 5,
      login: "admin.training@powergatesoftware.com",
      name: "Josh Finamore",
      accessLevel: "Administrator",
      products: 0,
      orders: 0,
      wishlist: 0,
      created: "Jun 10, 2019, 09:50 PM",
      lastLogin: "Jul 17, 2022,02:53 PM",
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <TableContainer component={Paper}>
          <Table
            sx={{
              minWidth: 650,
              backgroundColor: "#323259",
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow
                sx={{
                  "& tr": {
                    "& th": {
                      color: "#fff",
                    },
                  },
                }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    color="secondary"
                    sx={{
                      color: "#fff",
                    }}
                    // indeterminate={numSelected > 0 && numSelected < rowCount}
                    // checked={rowCount > 0 && numSelected === rowCount}
                    // onChange={onSelectAllClick}
                    inputProps={{
                      "aria-label": "select all desserts",
                    }}
                  />
                </TableCell>
                {TABLE_HEADER.map((x) => (
                  <TableCell key={x}>
                    <span
                      style={{
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {x === "Last Login" ? (
                        <>
                          {x}
                          <ArrowDownwardIcon />
                        </>
                      ) : (
                        x
                      )}
                    </span>
                  </TableCell>
                ))}
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {userList &&
                userList.map((user) => (
                  <UserListRow key={user.id} user={user} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ThemeProvider>
  );
}

export default UserList;
