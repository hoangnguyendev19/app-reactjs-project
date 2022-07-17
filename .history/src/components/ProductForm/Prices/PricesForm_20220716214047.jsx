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
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { makeStyles } from "@mui/styles";

PricesForm.propTypes = {};

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

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#252547",
      border: "1px solid #a16eff",
      color: "#fff",
    },
  },
}));

function PricesForm(props) {
  const classes = useStyles();
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

  const handleChange = () => {};

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
            <Grid item xs={4} sx={{ display: "flex" }}>
              <Button
                variant="outlined"
                disabled
                sx={{
                  backgroundColor: "rgba(180,180,219,.24)",
                  backgroundImage: "none",
                }}
              >
                <AttachMoneyIcon color="secondary" />
              </Button>
              <TextField
                variant="outlined"
                className={classes.root}
                placeholder="0.00"
              />
            </Grid>
            <Grid item xs={5} sx={{ display: "flex" }}>
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label="Sale"
              />
              <Box visibility="hidden">
                <SelectField name="sale" valueList={["$", "%"]} />
                <TextField
                  variant="outlined"
                  className={classes.root}
                  value="0"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default PricesForm;
