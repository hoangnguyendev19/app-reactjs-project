import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Checkbox,
  createTheme,
  FormControlLabel,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import SelectField from "../AddProduct/SelectField";

PricesForm.propTypes = {};

const theme = createTheme({
  palette: {
    primary: {
      main: "#323259",
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
              <label htmlFor="memberships">Memberships</label>
            </Grid>
            <Grid item xs={9}>
              <SelectField name="memberships" valueList={values} />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="memberships">Memberships</label>
            </Grid>
            <Grid item xs={5}>
              <Typography>Default</Typography>
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel control={<Checkbox />} label="Tax Exempt" />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="memberships">Memberships</label>
            </Grid>
            <Grid item xs={5}>
              <Button variant="outlined" disabled>
                Disabled
              </Button>
              <TextField variant="outlined" />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel control={<Checkbox />} label="Tax Exempt" />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default PricesForm;
