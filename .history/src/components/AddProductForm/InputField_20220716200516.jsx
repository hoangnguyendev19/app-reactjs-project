import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

InputField.propTypes = {
  name: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      background: "#323259",
      color: "#fff",
    },
  },
}));

function InputField({ name = "" }) {
  const classes = useStyles();
  return (
    <TextField
      required
      id={name}
      name={name}
      fullWidth
      size="small"
      autoComplete="given-name"
      variant="outlined"
      className={classes.root}
      placeholder={name ? `Type ${name} name to select` : ""}
    />
  );
}

export default InputField;
