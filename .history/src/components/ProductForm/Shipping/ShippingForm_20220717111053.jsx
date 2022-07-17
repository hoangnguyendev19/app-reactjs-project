import {
  Box,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import SelectField from "../AddProduct/SelectField";
import PriceField from "./PriceField";

ShippingForm.propTypes = {};

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

function ShippingForm(props) {
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
        textAlign="left"
        sx={{ marginBottom: "40px" }}
      >
        Shipping
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
              <SelectField name="location" valueList={values} />
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

export default ShippingForm;
