import {
  Box,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ImageField from "./ImageField";
import InputField from "./InputField";
import SelectField from "./SelectField";

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
  primary: {
    background: "#323259",
    color: "#fff",
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const listProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  },
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
              <InputField />
            </Grid>
            <Grid item xs={2} sx={{ margin: "auto 0" }}>
              <label htmlFor="productTitle">Product Title</label>
            </Grid>
            <Grid item xs={10}>
              {/* <TextField
                required
                id="productTitle"
                name="productTitle"
                fullWidth
                size="small"
                autoComplete="given-name"
                variant="outlined"
                className={classes.root}
              /> */}
              <InputField />
            </Grid>
            <Grid item xs={2} sx={{ margin: "auto 0" }}>
              <label htmlFor="brand">Brand</label>
            </Grid>
            <Grid item xs={10}>
              <SelectField />
            </Grid>
            <Grid item xs={2} sx={{ margin: "auto 0" }}>
              <label htmlFor="condition">Condition</label>
            </Grid>
            <Grid item xs={10}>
              <Select
                // value="Type brand name to select"
                //   onChange={handleChange}
                id="condition"
                name="condition"
                MenuProps={listProps}
                fullWidth
                displayEmpty
                size="small"
                className={classes.primary}
              >
                <MenuItem value="">
                  <em>Type brand name to select</em>
                </MenuItem>
                <MenuItem>Ten</MenuItem>
                <MenuItem>Twenty</MenuItem>
                <MenuItem>Thirty</MenuItem>
                <MenuItem>Fourty</MenuItem>
                <MenuItem>Fifty</MenuItem>
                <MenuItem>Fifty</MenuItem>
                <MenuItem>Fifty</MenuItem>
                <MenuItem>Fifty</MenuItem>
                <MenuItem>Fifty</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={2} sx={{ margin: "auto 0" }}>
              <label htmlFor="sku">SKU</label>
            </Grid>
            <Grid item xs={10}>
              <TextField
                required
                id="sku"
                name="sku"
                fullWidth
                size="small"
                autoComplete="given-name"
                variant="outlined"
                className={classes.root}
              />
            </Grid>
            <Grid item xs={2} sx={{ margin: "auto 0" }}>
              <label htmlFor="images">Images</label>
            </Grid>
            <Grid item xs={10}>
              <ImageField />
            </Grid>
            <Grid item xs={2} sx={{ margin: "auto 0" }}>
              <label htmlFor="category">Category</label>
            </Grid>
            <Grid item xs={10}>
              <TextField
                required
                id="category"
                name="category"
                fullWidth
                size="small"
                autoComplete="given-name"
                variant="outlined"
                className={classes.root}
              />
            </Grid>
            <Grid item xs={2} sx={{ margin: "auto 0" }}>
              <label htmlFor="description">Description</label>
            </Grid>
            <Grid item xs={10}>
              <TextField
                required
                id="description"
                name="description"
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
