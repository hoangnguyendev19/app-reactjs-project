import {
  Box,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

ProductForm.propTypes = {};

// #1b1b38 #323259

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#fff",
//       contrastText: "#fff",
//     },
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      background: "#323259",
      color: "#fff",
    },
  },
}));

function ProductForm(props) {
  const classes = useStyles();
  return (
    <Box sx={{ backgroundColor: "#1b1b38", color: "#fff" }}>
      <Typography variant="h6" gutterBottom>
        Add Product
      </Typography>

      {/* <ThemeProvider theme={theme}> */}
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
              // color="primary"
              className={classes.root}
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
      {/* </ThemeProvider> */}
    </Box>
  );
}

export default ProductForm;
