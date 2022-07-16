import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, TextField, Typography } from "@mui/material";

ProductForm.propTypes = {};

// #1b1b38 #323259

function ProductForm(props) {
  return (
    <Box sx={{ backgroundColor: "#1b1b38" }}>
      <Typography variant="h6" gutterBottom>
        Add Product
      </Typography>
      <Box component="form" sx={{ margin: "0 auto", width: "600px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ProductForm;
