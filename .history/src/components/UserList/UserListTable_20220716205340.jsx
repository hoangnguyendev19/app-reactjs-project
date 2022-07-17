import DeleteIcon from "@mui/icons-material/Delete";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import {
  Box,
  Button,
  Checkbox,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

ProductListTable.propTypes = {};

const theme = createTheme({
  palette: {
    secondary: {
      main: "#b18aff",
      contrastText: "#fff",
    },
  },
});

const TABLE_HEADER = [
  "SKU",
  "Name",
  "Category",
  "Price",
  "In stock",
  "Vendor",
  "Arrival Date",
];

function ProductListTable(props) {
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
    {
      id: 5,
      sku: "ss-1426",
      name: "Product 5",
      category: "Memory Cards",
      price: "$29.00",
      inStock: 35,
      vendor: "hello@gmail.com",
      arrivalDate: "Jan 25, 2021",
    },
    {
      id: 6,
      sku: "ss-1426",
      name: "Product 6",
      category: "Memory Cards",
      price: "$29.00",
      inStock: 35,
      vendor: "hello@gmail.com",
      arrivalDate: "Jan 25, 2021",
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
                <TableCell />
                {TABLE_HEADER.map((x) => (
                  <TableCell key={x}>
                    <span
                      style={{
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {x === "Name" ? (
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
              {productList &&
                productList.map((product) => (
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
                      <span style={{ color: "#fff" }}>
                        {product.arrivalDate}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="secondary">
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ThemeProvider>
  );
}

export default ProductListTable;
