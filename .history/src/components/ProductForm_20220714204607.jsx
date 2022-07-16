import React, { useState } from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";

ProductForm.propTypes = {};

const TABLE_HEADER = [
  "SKU",
  "Name",
  "Category",
  "Price",
  "In stock",
  "Vendor",
  "Arrival Date",
];

function ProductForm(props) {
  const [productList, setProductList] = useState([
    {
      id: 1,
      sku: "ss-1426",
      name: "Product 1",
      category: "Memory Cards",
      price: "$29.00",
      inStock: 50,
      vendor: "hello@gmail.com",
      arrivalDate: "Jan 25, 2020",
    },
    {
      id: 2,
      sku: "ss-1426",
      name: "Product 2",
      category: "Memory Cards",
      price: "$29.00",
      inStock: 25,
      vendor: "hello@gmail.com",
      arrivalDate: "Jan 25, 2019",
    },
    {
      id: 3,
      sku: "ss-1426",
      name: "Product 3",
      category: "Memory Cards",
      price: "$29.00",
      inStock: 30,
      vendor: "hello@gmail.com",
      arrivalDate: "Jan 25, 2022",
    },
    {
      id: 4,
      sku: "ss-1426",
      name: "Product 4",
      category: "Memory Cards",
      price: "$29.00",
      inStock: 35,
      vendor: "hello@gmail.com",
      arrivalDate: "Jan 25, 2021",
    },
  ]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                // indeterminate={numSelected > 0 && numSelected < rowCount}
                // checked={rowCount > 0 && numSelected === rowCount}
                // onChange={onSelectAllClick}
                inputProps={{
                  "aria-label": "select all desserts",
                }}
              />
            </TableCell>
            {pro}
            <TableCell>Dessert (100g serving)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductForm;
