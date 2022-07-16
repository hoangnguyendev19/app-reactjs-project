import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";

ProductForm.propTypes = {};

// #1b1b38 #323259

function ProductForm(props) {
  return (
    <Box sx={{ backgroundColor: "#1b1b38", color: "#fff" }}>
      <Typography variant="h6" gutterBottom>
        Add Product
      </Typography>

      <Box component="form" sx={{ margin: "0 auto", width: "600px" }}>
        <Grid container spacing={3}>
          <Grid item xs={2} sx={{ margin: "auto 0" }}>
            <label htmlFor="firstName">First Name</label>
          </Grid>
          <Grid item xs={10}>
            <TextField
              required
              id="firstName"
              name="firstName"
              fullWidth
              size="small"
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          {/* <Grid item xs={12}>
            <label htmlFor="lastName">Last Name</label>
            <TextField
              required
              id="lastName"
              name="lastName"
              fullWidth
              autoComplete="family-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="address">Address</label>
            <TextField
              required
              id="address"
              name="address"
              label="Address line "
              fullWidth
              autoComplete="shipping address-line"
              variant="outlined"
            />
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
}

export default ProductForm;
