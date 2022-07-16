import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

InputFIeld.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      background: "#323259",
      color: "#fff",
    },
  },
}));

function InputFIeld(props) {
  return (
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
  );
}

export default InputFIeld;
