import {
  Box,
  Checkbox,
  createTheme,
  FormControlLabel,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import InputField from "../AddProduct/InputField";
import SelectField from "../AddProduct/SelectField";
import DateField from "./DateField";
import PriceField from "./PriceField";
import SaleField from "./SaleField";

PricesForm.propTypes = {};

const theme = createTheme({
  palette: {
    primary: {
      main: "#323259",
      contrastText: "#fff",
    },
    secondary: {
      main: "rgba(180,180,219,.48)",
      contrastText: "#fff",
    },
  },
});

function PricesForm(props) {
  const values = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#1b1b38",
        color: "#fff",
        padding: "30px 0",
        borderBottom: "20px solid #323259",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        textAlign="center"
        sx={{ marginBottom: "40px" }}
      >
        Prices & Inventory
      </Typography>

      <ThemeProvider theme={theme}>
        <Box component="form" sx={{ margin: "0 auto", width: "600px" }}>
          <Grid container spacing={3}>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="continental">Continental U.S</label>
            </Grid>
            <Grid item xs={9} sx={{ display: "flex" }}>
              <PriceField />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}></Grid>
            <Grid item xs={5}>
              <SelectField name="memberships" valueList={values} />
            </Grid>
            <Grid item xs={4}>
              <Typography>Add Shipping Location</Typography>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default PricesForm;
