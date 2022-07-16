import {
  Box,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  Select,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

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

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      background: "#323259",
      color: "#fff",
    },
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const menuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  getContentAnchorEl: null,
};

function ProductForm(props) {
  const classes = useStyles();
  return (
    <Box sx={{ backgroundColor: "#1b1b38", color: "#fff" }}>
      <Typography variant="h6" gutterBottom>
        Add Product
      </Typography>

      <ThemeProvider theme={theme}>
        <Box component="form" sx={{ margin: "0 auto", width: "600px" }}>
          <Grid container spacing={3}>
            <Grid item xs={2} sx={{ margin: "auto 0" }}>
              <label htmlFor="vendor">Vendor</label>
            </Grid>
            <Grid item xs={10}>
              <TextField
                required
                id="vendor"
                name="vendor"
                fullWidth
                size="small"
                autoComplete="given-name"
                variant="outlined"
                className={classes.root}
                placeholder="Type Vendor name to select"
              />
            </Grid>
            <Grid item xs={2} sx={{ margin: "auto 0" }}>
              <label htmlFor="productTitle">Product Title</label>
            </Grid>
            <Grid item xs={10}>
              <TextField
                required
                id="productTitle"
                name="productTitle"
                fullWidth
                size="small"
                autoComplete="given-name"
                variant="outlined"
                className={classes.root}
              />
            </Grid>
            <Grid item xs={2} sx={{ margin: "auto 0" }}>
              <label htmlFor="brand">Brand</label>
            </Grid>
            <Grid item xs={10} sx={{ maxHeight: "100px" }}>
              <Select
                value="Type brand name to select"
                //   onChange={handleChange}
                MenuProps={menuProps}
                fullWidth
                // size="small"
                displayEmpty
                // className={classes.root}
              >
                <MenuItem value="">
                  <em>Type brand name to select</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                <MenuItem value={40}>Fourty</MenuItem>
                <MenuItem value={50}>Fifty</MenuItem>
                <MenuItem value={50}>Fifty</MenuItem>
                <MenuItem value={50}>Fifty</MenuItem>
                <MenuItem value={50}>Fifty</MenuItem>
                <MenuItem value={50}>Fifty</MenuItem>
              </Select>
            </Grid>
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
                className={classes.root}
              />
            </Grid>
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
                className={classes.root}
              />
            </Grid>
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
                className={classes.root}
              />
            </Grid>
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
                className={classes.root}
              />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default ProductForm;
