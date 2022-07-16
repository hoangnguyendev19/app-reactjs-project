import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, TextField, Typography } from "@mui/material";

ProductForm.propTypes = {};

function ProductForm(props) {
  return (
    <Box width="600px">
      <Typography variant="h6" gutterBottom>
        Add Product
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
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
            variant="standard"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductForm;
