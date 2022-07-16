import {
  Box,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import ImageField from "./ImageField";
import InputField from "./InputField";
import SelectField from "./SelectField";
import SwitchField from "./SwitchField";
import TextEditor from "./TextEditor";

ProductForm.propTypes = {};

// #1b1b38 #323259

const theme = createTheme({
  palette: {
    primary: {
      main: "#323259",
      contrastText: "#fff",
    },
  },
});

function ProductForm(props) {
  return (
    <Box sx={{ backgroundColor: "#1b1b38", color: "#fff" }}>
      <Typography variant="h6" gutterBottom textAlign="center" component="h3">
        Add Product
      </Typography>

      <ThemeProvider theme={theme}>
        <Box component="form" sx={{ margin: "0 auto", width: "600px" }}>
          <Grid container spacing={3}>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="vendor">Vendor</label>
            </Grid>
            <Grid item xs={9}>
              <InputField />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="productTitle">Product Title</label>
            </Grid>
            <Grid item xs={9}>
              <InputField />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="brand">Brand</label>
            </Grid>
            <Grid item xs={9}>
              <SelectField />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="condition">Condition</label>
            </Grid>
            <Grid item xs={9}>
              <SelectField />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="sku">SKU</label>
            </Grid>
            <Grid item xs={9}>
              <InputField />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="images">Images</label>
            </Grid>
            <Grid item xs={9}>
              <ImageField />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="category">Category</label>
            </Grid>
            <Grid item xs={9}>
              <SelectField />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="description">Description</label>
            </Grid>
            <Grid item xs={9}>
              <TextEditor />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="available">Available For Sale</label>
            </Grid>
            <Grid item xs={8}>
              <SwitchField />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default ProductForm;
