import React from "react";
import PropTypes from "prop-types";
import { Button, Checkbox, TableCell, TableRow } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import DeleteIcon from "@mui/icons-material/Delete";

ProductListRow.propTypes = {
  product: PropTypes.object.isRequired,
};

function ProductListRow({ product }) {
  return (
    <TableRow
      key={product.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
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
        <span
          style={{
            color: "#1b9d12",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PowerSettingsNewIcon />
        </span>
      </TableCell>
      <TableCell>
        <span style={{ color: "#fff" }}>{product.sku}</span>
      </TableCell>
      <TableCell>
        <span style={{ color: "#fff" }}>{product.name}</span>
      </TableCell>
      <TableCell>
        <span style={{ color: "#fff" }}>{product.category}</span>
      </TableCell>
      <TableCell>
        <span style={{ color: "#fff" }}>{product.price}</span>
      </TableCell>
      <TableCell>
        <span style={{ color: "#fff" }}>{product.inStock}</span>
      </TableCell>
      <TableCell>
        <span style={{ color: "#fff" }}>{product.vendor}</span>
      </TableCell>
      <TableCell>
        <span style={{ color: "#fff" }}>{product.arrivalDate}</span>
      </TableCell>
      <TableCell>
        <Button variant="contained" color="secondary">
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ProductListRow;
