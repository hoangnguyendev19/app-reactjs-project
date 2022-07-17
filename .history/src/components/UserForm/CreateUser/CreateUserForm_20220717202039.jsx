import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import PasswordField from "./PasswordField";
import SelectField from "../../ProductForm/AddProduct/SelectField";
import InputField from "../../ProductForm/AddProduct/InputField";

CreateUserForm.propTypes = {};

const theme = createTheme({
  palette: {
    primary: {
      main: "#323259",
      contrastText: "#fff",
    },
  },
});

function CreateUserForm(props) {
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
        textAlign="left"
        sx={{ marginBottom: "40px" }}
      >
        Email & password
      </Typography>

      <ThemeProvider theme={theme}>
        <Box component="form" sx={{ margin: "0 auto", width: "600px" }}>
          <Grid container spacing={3}>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="firstName">First Name</label>
            </Grid>
            <Grid item xs={9}>
              <InputField name="firstName" />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="lastName">Last Name</label>
            </Grid>
            <Grid item xs={9}>
              <InputField name="lastName" />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="email">Email</label>
            </Grid>
            <Grid item xs={9}>
              <InputField name="email" />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="password">Password</label>
            </Grid>
            <Grid item xs={9}>
              <PasswordField name="password" />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="confirm">Confirm password</label>
            </Grid>
            <Grid item xs={9}>
              <PasswordField name="confirmPassword" />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="type">Type</label>
            </Grid>
            <Grid item xs={9}>
              <SelectField
                name="type"
                valueList={["Individual", "Business"]}
                defaultValue="Individual"
              />
            </Grid>
            <Grid item xs={3} sx={{ margin: "auto 0" }}>
              <label htmlFor="payment">PaymentRails ID</label>
            </Grid>
            <Grid item xs={9}></Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default CreateUserForm;
