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
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

ProductForm.propTypes = {};

const theme = createTheme({
  palette: {
    secondary: {
      main: "#b18aff",
      contrastText: "#fff",
    },
  },
});

const useStyles = makeStyles({
  third: {
    color: "#1b9d12",
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

function ProductForm(props) {
  const classes = useStyles();
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
    <Box className={classes.primary}>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, backgroundColor: "#323259" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow sx{{ color: '#fff'}}>
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
              <TableCell />
              {TABLE_HEADER.map((x) => (
                <TableCell key={x}>{x}</TableCell>
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
                      color="primary"
                      // indeterminate={numSelected > 0 && numSelected < rowCount}
                      // checked={rowCount > 0 && numSelected === rowCount}
                      // onChange={onSelectAllClick}
                      inputProps={{
                        "aria-label": "select all desserts",
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <PowerSettingsNewIcon className={classes.third} />
                  </TableCell>
                  <TableCell>{product.sku}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.inStock}</TableCell>
                  <TableCell>{product.vendor}</TableCell>
                  <TableCell>{product.arrivalDate}</TableCell>
                  <TableCell>
                    <ThemeProvider theme={theme}>
                      <Button variant="contained" color="secondary">
                        <DeleteIcon />
                      </Button>
                    </ThemeProvider>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ProductForm;
