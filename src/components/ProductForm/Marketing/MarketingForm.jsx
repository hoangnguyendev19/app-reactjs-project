import {
  Box,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import InputField from "../AddProduct/InputField";
import SelectField from "../AddProduct/SelectField";
import SwitchField from "../AddProduct/SwitchField";

MarketingForm.propTypes = {};

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

function MarketingForm(props) {
  const values = ["Autogenerated", "Custom"];

  return (
    <Box
      sx={{
        backgroundColor: "#1b1b38",
        color: "#fff",
        padding: "30px",
        borderBottom: "20px solid #323259",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        textAlign="left"
        sx={{ marginBottom: "20px", fontSize: "26px" }}
      >
        Makerting
      </Typography>

      <ThemeProvider theme={theme}>
        <Box component="form" sx={{ margin: "0 auto", width: "600px" }}>
          <Grid container spacing={3}>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="open">Open Graph meta tags</label>
            </Grid>
            <Grid item xs={9} sx={{ display: "flex" }}>
              <SelectField
                name="open"
                valueList={values}
                defaultValue="Autogenerated"
              />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="meta">Meta description</label>
            </Grid>
            <Grid item xs={9} sx={{ display: "flex" }}>
              <SelectField
                name="meta"
                valueList={values}
                defaultValue="Autogenerated"
              />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="keyword">Meta keywords</label>
            </Grid>
            <Grid item xs={9} sx={{ display: "flex" }}>
              <InputField name="keyword" />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="product">Product page title</label>
            </Grid>
            <Grid item xs={9} sx={{ display: "flex" }}>
              <InputField
                name="product"
                text="Leave blank to use product name as Page Title."
              />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label>Add to Facebook product feed</label>
            </Grid>
            <Grid item xs={9} sx={{ display: "flex" }}>
              <SwitchField />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label>Add to Google product feed</label>
            </Grid>
            <Grid item xs={9} sx={{ display: "flex" }}>
              <SwitchField />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default MarketingForm;
