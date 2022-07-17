import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { makeStyles } from "@mui/styles";

PasswordField.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      background: "#323259",
      color: "#fff",
    },
  },
}));

function PasswordField(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <OutlinedInput
      id="outlined-adornment-password"
      type={values.showPassword ? "text" : "password"}
      value={values.password}
      onChange={handleChange("password")}
      endAdornment={
        <InputAdornment position="end" className={classes.root}>
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {values.showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
    />
  );
}

export default PasswordField;
