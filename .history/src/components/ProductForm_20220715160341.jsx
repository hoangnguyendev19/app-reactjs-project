import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

ProductForm.propTypes = {};

// #1b1b38 #323259

function ProductForm(props) {
  return (
    <Box sx={{ backgroundColor: "#1b1b38" }}>
      <Typography variant="h6" gutterBottom>
        Add Product
      </Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">Label placement</FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="start"
            control={
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            }
            label="Top"
            labelPlacement="top"
          />
          {/* <FormControlLabel
            value="start"
            control={
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            }
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            value="bottom"
            control={
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            }
            label="Bottom"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="end"
            control={
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            }
            label="End"
            labelPlacement="end"
          /> */}
        </FormGroup>
      </FormControl>
      {/* <Box component="form" sx={{ margin: "0 auto", width: "600px" }}>
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
      </Box> */}
    </Box>
  );
}

export default ProductForm;
