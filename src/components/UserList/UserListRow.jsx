import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Checkbox, TableCell, TableRow } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

UserListRow.propTypes = {
  user: PropTypes.object.isRequired,
};

function UserListRow({ user }) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell padding="checkbox">
        <Checkbox
          color="secondary"
          sx={{ color: "#fff" }}
          // indeterminate={numSelected > 0 && numSelected < rowCount}
          // checked={rowCount > 0 && numSelected === rowCount}
          // onChange={onSelectAllClick}
          inputProps={{
            "aria-label": "select all desserts",
          }}
        />
      </TableCell>
      <TableCell>
        <span style={{ color: "#fff" }}>{user.login}</span>
      </TableCell>
      <TableCell>
        <span style={{ color: "#fff" }}>{user.name}</span>
      </TableCell>
      <TableCell>
        <span style={{ color: "#fff" }}>{user.accessLevel}</span>
      </TableCell>
      <TableCell>
        <span style={{ color: "#fff" }}>{user.products}</span>
      </TableCell>
      <TableCell>
        <span style={{ color: "#fff" }}>{user.orders}</span>
      </TableCell>
      <TableCell>
        <span style={{ color: "#fff" }}>{user.wishlist}</span>
      </TableCell>
      <TableCell>
        <span style={{ color: "#fff" }}>{user.created}</span>
      </TableCell>
      <TableCell>
        <span style={{ color: "#fff" }}>{user.lastLogin}</span>
      </TableCell>
      <TableCell>
        <Button variant="contained" color="secondary">
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default UserListRow;
